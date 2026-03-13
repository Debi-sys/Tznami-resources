/* ============================================================
   Tznami Design 1 — Staff Portal JavaScript
   ============================================================ */

(function () {
  "use strict";

  /* ----- Constants ----- */
  var DEMO_PASSWORD = "tznami2024";
  var STORAGE_ORDERS = "tznami_orders";
  var STORAGE_STAFF_SESSION = "tznami_staff_session";
  var STORAGE_INVENTORY = "tznami_inventory";
  var STORAGE_DEMO_INIT = "tznami_demo_initialized";

  /* ----- Demo Data ----- */
  var DEMO_FIRST_NAMES = [
    "Jan", "Anna", "Piotr", "Katarzyna", "Marek",
    "Magdalena", "Tomasz", "Agnieszka", "Krzysztof", "Monika",
    "Paweł", "Joanna", "Michał", "Aleksandra", "Łukasz",
    "Hans", "Sophie", "Pierre", "Maria", "Erik",
    "Lukas", "Elena", "Marco", "Ingrid", "Klaus",
  ];

  var DEMO_LAST_NAMES = [
    "Nowak", "Kowalski", "Wiśniewski", "Wójcik", "Kamiński",
    "Lewandowski", "Zieliński", "Szymański", "Woźniak", "Dąbrowski",
    "Müller", "Schmidt", "Schneider", "Dupont", "Bernard",
    "Rossi", "Ferrari", "Johansson", "Lindberg", "Nielsen",
    "Andersson", "Larsen", "Petrov", "Horvat", "Novak",
  ];

  var DEMO_CITIES = [
    { city: "Warszawa", postal: "00-001", country: "Poland" },
    { city: "Kraków", postal: "30-001", country: "Poland" },
    { city: "Wrocław", postal: "50-001", country: "Poland" },
    { city: "Poznań", postal: "60-001", country: "Poland" },
    { city: "Gdańsk", postal: "80-001", country: "Poland" },
    { city: "Środa Wielkopolska", postal: "63-000", country: "Poland" },
    { city: "Łódź", postal: "90-001", country: "Poland" },
    { city: "Berlin", postal: "10115", country: "Germany" },
    { city: "München", postal: "80331", country: "Germany" },
    { city: "Paris", postal: "75001", country: "France" },
    { city: "Amsterdam", postal: "1011", country: "Netherlands" },
    { city: "Stockholm", postal: "111 20", country: "Sweden" },
    { city: "Praha", postal: "110 00", country: "Czech Republic" },
    { city: "Wien", postal: "1010", country: "Austria" },
    { city: "Roma", postal: "00100", country: "Italy" },
    { city: "Madrid", postal: "28001", country: "Spain" },
    { city: "London", postal: "EC1A 1BB", country: "United Kingdom" },
    { city: "Copenhagen", postal: "1050", country: "Denmark" },
    { city: "Helsinki", postal: "00100", country: "Finland" },
    { city: "Brussels", postal: "1000", country: "Belgium" },
  ];

  var DEMO_STREETS = [
    "ul. Marszałkowska 12", "ul. Piotrkowska 45", "ul. Floriańska 8",
    "ul. Długa 23", "ul. Szeroka 5", "Hauptstraße 17", "Rue de Rivoli 34",
    "Keizersgracht 120", "Drottninggatan 55", "Náměstí 10",
    "Ringstraße 8", "Via Roma 22", "Calle Mayor 15", "Baker Street 42",
    "Kongens Nytorv 6", "Aleksanterinkatu 11", "Rue Royale 9",
    "ul. Kościuszki 33", "ul. Piłsudskiego 7", "Prinsengracht 88",
  ];

  var COLORWAYS = ["Charcoal Night", "Dusk Blue", "Sakura Pink"];
  var SWITCHES = ["Gateron Pro Yellow", "Gateron Pro Red", "Gateron Pro Brown", "Gateron Pro Blue"];
  var STATUSES = ["pending", "processing", "shipped", "delivered"];

  var EU_COUNTRIES = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
    "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
    "Netherlands", "Poland", "Portugal", "Romania", "Slovakia", "Slovenia",
    "Spain", "Sweden",
  ];

  /* ----- State ----- */
  var allOrders = [];
  var filteredOrders = [];
  var inventory = {};

  /* ----- DOM Ready ----- */
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    /* Check existing session */
    if (localStorage.getItem(STORAGE_STAFF_SESSION) === "active") {
      showDashboard();
    }

    setupLogin();
  }

  /* ============================================================
     LOGIN
     ============================================================ */
  function setupLogin() {
    var loginBtn = document.getElementById("login-btn");
    var passwordInput = document.getElementById("login-password");
    var errorEl = document.getElementById("login-error");

    if (loginBtn) {
      loginBtn.addEventListener("click", function () {
        attemptLogin(passwordInput, errorEl);
      });
    }

    if (passwordInput) {
      passwordInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
          attemptLogin(passwordInput, errorEl);
        }
      });
    }
  }

  function attemptLogin(passwordInput, errorEl) {
    if (!passwordInput) return;
    var password = passwordInput.value;

    if (password === DEMO_PASSWORD) {
      localStorage.setItem(STORAGE_STAFF_SESSION, "active");
      if (errorEl) errorEl.classList.remove("show");
      showDashboard();
    } else {
      if (errorEl) {
        errorEl.textContent = "Invalid password. Try again.";
        errorEl.classList.add("show");
      }
      passwordInput.value = "";
      passwordInput.focus();
    }
  }

  function logout() {
    localStorage.removeItem(STORAGE_STAFF_SESSION);
    var loginPage = document.querySelector(".login-page");
    var dashboard = document.querySelector(".staff-dashboard");
    if (loginPage) loginPage.style.display = "flex";
    if (dashboard) dashboard.classList.remove("active");
  }

  /* ============================================================
     DASHBOARD
     ============================================================ */
  function showDashboard() {
    var loginPage = document.querySelector(".login-page");
    var dashboard = document.querySelector(".staff-dashboard");

    if (loginPage) loginPage.style.display = "none";
    if (dashboard) dashboard.classList.add("active");

    /* Initialize demo data if needed */
    initDemoData();

    /* Load orders */
    loadOrders();
    loadInventory();

    /* Render dashboard */
    renderStats();
    renderOrdersTable();
    renderInventory();
    setupDashboardControls();
  }

  /* ----- Demo Data Generation ----- */
  function initDemoData() {
    if (localStorage.getItem(STORAGE_DEMO_INIT) === "true") return;

    var orders = [];
    var now = Date.now();

    for (var i = 0; i < 24; i++) {
      var daysAgo = Math.floor(Math.random() * 30);
      var hoursAgo = Math.floor(Math.random() * 24);
      var orderDate = new Date(now - daysAgo * 86400000 - hoursAgo * 3600000);

      var cityInfo = DEMO_CITIES[Math.floor(Math.random() * DEMO_CITIES.length)];
      var colorway = COLORWAYS[Math.floor(Math.random() * COLORWAYS.length)];
      var switchType = SWITCHES[Math.floor(Math.random() * SWITCHES.length)];

      var basePrice = 199;
      var colorExtra = colorway === "Dusk Blue" ? 10 : colorway === "Sakura Pink" ? 15 : 0;
      var switchExtra = (switchType === "Gateron Pro Brown" || switchType === "Gateron Pro Blue") ? 5 : 0;
      var itemPrice = basePrice + colorExtra + switchExtra;
      var qty = Math.random() < 0.15 ? 2 : 1;

      var shipping = 0;
      if (cityInfo.country === "Poland") {
        shipping = 0;
      } else if (EU_COUNTRIES.indexOf(cityInfo.country) !== -1) {
        shipping = 15;
      } else {
        shipping = 25;
      }

      var statusIdx = Math.floor(Math.random() * STATUSES.length);
      if (daysAgo > 20) statusIdx = Math.min(statusIdx + 2, 3);
      else if (daysAgo > 10) statusIdx = Math.min(statusIdx + 1, 3);

      var firstName = DEMO_FIRST_NAMES[Math.floor(Math.random() * DEMO_FIRST_NAMES.length)];
      var lastName = DEMO_LAST_NAMES[Math.floor(Math.random() * DEMO_LAST_NAMES.length)];
      var street = DEMO_STREETS[Math.floor(Math.random() * DEMO_STREETS.length)];

      orders.push({
        id: "TZ-" + (1000 + i).toString(36).toUpperCase() + randomChars(3),
        date: orderDate.toISOString(),
        status: STATUSES[statusIdx],
        customer: {
          firstName: firstName,
          lastName: lastName,
          email: (firstName.toLowerCase() + "." + lastName.toLowerCase()).replace(/[ąćęłńóśżź]/g, function (c) {
            var map = { ą: "a", ć: "c", ę: "e", ł: "l", ń: "n", ó: "o", ś: "s", ż: "z", ź: "z" };
            return map[c] || c;
          }) + "@email.com",
          address: street,
          city: cityInfo.city,
          postalCode: cityInfo.postal,
          country: cityInfo.country,
        },
        items: [{
          name: "Tznami HS65",
          colorway: colorway,
          switchType: switchType,
          price: itemPrice,
          qty: qty,
        }],
        subtotal: itemPrice * qty,
        shipping: shipping,
        total: itemPrice * qty + shipping,
      });
    }

    /* Merge with any existing customer-placed orders */
    var existingOrders = [];
    try {
      var stored = localStorage.getItem(STORAGE_ORDERS);
      if (stored) existingOrders = JSON.parse(stored);
    } catch (e) {
      existingOrders = [];
    }

    var allOrdersToSave = orders.concat(existingOrders);
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify(allOrdersToSave));

    /* Initialize inventory */
    var inv = {};
    COLORWAYS.forEach(function (c) {
      SWITCHES.forEach(function (s) {
        var key = c + " / " + s;
        inv[key] = Math.floor(Math.random() * 15) + 2;
      });
    });
    localStorage.setItem(STORAGE_INVENTORY, JSON.stringify(inv));

    localStorage.setItem(STORAGE_DEMO_INIT, "true");
  }

  function randomChars(n) {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    var result = "";
    for (var i = 0; i < n; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  /* ----- Data Loading ----- */
  function loadOrders() {
    try {
      var stored = localStorage.getItem(STORAGE_ORDERS);
      allOrders = stored ? JSON.parse(stored) : [];
    } catch (e) {
      allOrders = [];
    }
    /* Sort by date descending */
    allOrders.sort(function (a, b) {
      return new Date(b.date) - new Date(a.date);
    });
    filteredOrders = allOrders.slice();
  }

  function loadInventory() {
    try {
      var stored = localStorage.getItem(STORAGE_INVENTORY);
      inventory = stored ? JSON.parse(stored) : {};
    } catch (e) {
      inventory = {};
    }
  }

  /* ----- Stats ----- */
  function renderStats() {
    var totalOrders = allOrders.length;
    var pendingOrders = allOrders.filter(function (o) { return o.status === "pending"; }).length;
    var shippedOrders = allOrders.filter(function (o) { return o.status === "shipped" || o.status === "delivered"; }).length;
    var totalRevenue = allOrders.reduce(function (s, o) { return s + o.total; }, 0);

    setTextById("stat-total-orders", totalOrders);
    setTextById("stat-pending", pendingOrders);
    setTextById("stat-shipped", shippedOrders);
    setTextById("stat-revenue", "€" + totalRevenue.toLocaleString());
  }

  /* ----- Orders Table ----- */
  function renderOrdersTable() {
    var tbody = document.getElementById("orders-tbody");
    if (!tbody) return;

    if (filteredOrders.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6" style="text-align:center;color:var(--text-muted);padding:40px;">No orders found</td></tr>';
      return;
    }

    var html = "";
    filteredOrders.forEach(function (order) {
      var date = new Date(order.date);
      var dateStr = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      });

      var itemSummary = order.items.map(function (item) {
        return escapeHtml(item.colorway) + " / " + escapeHtml(item.switchType);
      }).join(", ");

      html +=
        '<tr data-order-id="' + escapeHtml(order.id) + '">' +
        "<td>" + escapeHtml(order.id) + "</td>" +
        "<td>" + escapeHtml(order.customer.firstName + " " + order.customer.lastName) + "</td>" +
        "<td>" + dateStr + "</td>" +
        "<td>" + itemSummary + "</td>" +
        "<td>€" + order.total + "</td>" +
        '<td><span class="status-badge ' + order.status + '">' + order.status + "</span></td>" +
        "</tr>";
    });

    tbody.innerHTML = html;

    /* Click to view detail */
    tbody.querySelectorAll("tr").forEach(function (row) {
      row.addEventListener("click", function () {
        var orderId = row.dataset.orderId;
        showOrderDetail(orderId);
      });
    });
  }

  /* ----- Order Detail Modal ----- */
  function showOrderDetail(orderId) {
    var order = allOrders.find(function (o) { return o.id === orderId; });
    if (!order) return;

    var overlay = document.getElementById("order-detail-overlay");
    var body = document.getElementById("order-detail-body");
    if (!overlay || !body) return;

    var date = new Date(order.date);
    var dateStr = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    var html =
      '<div class="detail-section">' +
      "<h4>Order Info</h4>" +
      '<div class="detail-row"><span class="label">Order ID</span><span class="value" style="font-family:var(--font-mono);color:var(--accent)">' + escapeHtml(order.id) + "</span></div>" +
      '<div class="detail-row"><span class="label">Date</span><span class="value">' + dateStr + "</span></div>" +
      '<div class="detail-row"><span class="label">Status</span><span class="value"><span class="status-badge ' + order.status + '">' + order.status + "</span></span></div>" +
      "</div>" +

      '<div class="detail-section">' +
      "<h4>Customer</h4>" +
      '<div class="detail-row"><span class="label">Name</span><span class="value">' + escapeHtml(order.customer.firstName + " " + order.customer.lastName) + "</span></div>" +
      '<div class="detail-row"><span class="label">Email</span><span class="value">' + escapeHtml(order.customer.email) + "</span></div>" +
      '<div class="detail-row"><span class="label">Address</span><span class="value">' + escapeHtml(order.customer.address) + "</span></div>" +
      '<div class="detail-row"><span class="label">City</span><span class="value">' + escapeHtml(order.customer.city) + ", " + escapeHtml(order.customer.postalCode) + "</span></div>" +
      '<div class="detail-row"><span class="label">Country</span><span class="value">' + escapeHtml(order.customer.country) + "</span></div>" +
      "</div>" +

      '<div class="detail-section">' +
      "<h4>Items</h4>";

    order.items.forEach(function (item) {
      html +=
        '<div class="detail-row"><span class="label">' + escapeHtml(item.name) + " — " + escapeHtml(item.colorway) + " / " + escapeHtml(item.switchType) + " × " + item.qty + '</span><span class="value">€' + (item.price * item.qty) + "</span></div>";
    });

    html +=
      '<div class="detail-row" style="border-top:1px solid var(--border);padding-top:8px;margin-top:8px;"><span class="label">Shipping</span><span class="value">' + (order.shipping === 0 ? "Free" : "€" + order.shipping) + "</span></div>" +
      '<div class="detail-row" style="font-size:1.1rem;font-weight:700;"><span class="label">Total</span><span class="value" style="color:var(--accent)">€' + order.total + "</span></div>" +
      "</div>" +

      '<div class="detail-section">' +
      "<h4>Update Status</h4>" +
      '<div class="status-actions">' +
      '<button class="btn btn-small btn-secondary" data-set-status="pending" data-order="' + escapeHtml(order.id) + '">Pending</button>' +
      '<button class="btn btn-small btn-primary" data-set-status="processing" data-order="' + escapeHtml(order.id) + '">Processing</button>' +
      '<button class="btn btn-small btn-success" data-set-status="shipped" data-order="' + escapeHtml(order.id) + '">Shipped</button>' +
      '<button class="btn btn-small" style="background:var(--success);color:#000;opacity:0.7;" data-set-status="delivered" data-order="' + escapeHtml(order.id) + '">Delivered</button>' +
      "</div>" +
      "</div>";

    body.innerHTML = html;
    overlay.classList.add("open");

    /* Status update buttons */
    body.querySelectorAll("[data-set-status]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        updateOrderStatus(btn.dataset.order, btn.dataset.setStatus);
        overlay.classList.remove("open");
      });
    });

    /* Close button */
    var closeBtn = document.getElementById("order-detail-close");
    if (closeBtn) {
      closeBtn.onclick = function () {
        overlay.classList.remove("open");
      };
    }

    overlay.addEventListener("click", function handler(e) {
      if (e.target === overlay) {
        overlay.classList.remove("open");
        overlay.removeEventListener("click", handler);
      }
    });
  }

  function updateOrderStatus(orderId, newStatus) {
    var order = allOrders.find(function (o) { return o.id === orderId; });
    if (!order) return;

    order.status = newStatus;
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify(allOrders));

    renderStats();
    applyFilters();
  }

  /* ----- Inventory ----- */
  function renderInventory() {
    var container = document.getElementById("inventory-list");
    if (!container) return;

    var html = "";
    var hasLowStock = false;

    var keys = Object.keys(inventory).sort();
    keys.forEach(function (key) {
      var stock = inventory[key];
      var isLow = stock <= 3;
      if (isLow) hasLowStock = true;

      html +=
        '<div class="inventory-item">' +
        '<span class="item-name">' + escapeHtml(key) + "</span>" +
        '<span class="item-stock ' + (isLow ? "low" : "") + '">' + stock + " units</span>" +
        "</div>";
    });

    container.innerHTML = html;

    /* Low stock alert */
    var alertContainer = document.getElementById("low-stock-alerts");
    if (alertContainer) {
      if (hasLowStock) {
        var lowItems = keys.filter(function (k) { return inventory[k] <= 3; });
        alertContainer.innerHTML =
          '<div class="low-stock-alert">⚠️ Low stock: ' +
          lowItems.map(function (k) { return escapeHtml(k) + " (" + inventory[k] + ")"; }).join(", ") +
          "</div>";
      } else {
        alertContainer.innerHTML = "";
      }
    }
  }

  /* ----- Search & Filter ----- */
  function setupDashboardControls() {
    var searchInput = document.getElementById("order-search");
    var statusFilter = document.getElementById("order-status-filter");
    var exportBtn = document.getElementById("btn-export");
    var logoutBtn = document.getElementById("btn-logout");
    var refreshBtn = document.getElementById("btn-refresh");

    if (searchInput) {
      searchInput.addEventListener("input", applyFilters);
    }

    if (statusFilter) {
      statusFilter.addEventListener("change", applyFilters);
    }

    if (exportBtn) {
      exportBtn.addEventListener("click", exportCSV);
    }

    if (logoutBtn) {
      logoutBtn.addEventListener("click", logout);
    }

    if (refreshBtn) {
      refreshBtn.addEventListener("click", function () {
        loadOrders();
        loadInventory();
        renderStats();
        applyFilters();
        renderInventory();
      });
    }
  }

  function applyFilters() {
    var searchInput = document.getElementById("order-search");
    var statusFilter = document.getElementById("order-status-filter");

    var query = searchInput ? searchInput.value.toLowerCase().trim() : "";
    var status = statusFilter ? statusFilter.value : "all";

    filteredOrders = allOrders.filter(function (order) {
      /* Status filter */
      if (status !== "all" && order.status !== status) return false;

      /* Search filter */
      if (query) {
        var searchStr = (
          order.id + " " +
          order.customer.firstName + " " +
          order.customer.lastName + " " +
          order.customer.email + " " +
          order.customer.city + " " +
          order.customer.country
        ).toLowerCase();
        if (searchStr.indexOf(query) === -1) return false;
      }

      return true;
    });

    renderOrdersTable();
  }

  /* ----- CSV Export ----- */
  function exportCSV() {
    var headers = [
      "Order ID", "Date", "Status",
      "First Name", "Last Name", "Email",
      "Address", "City", "Postal Code", "Country",
      "Items", "Subtotal", "Shipping", "Total",
    ];

    var rows = [headers.join(",")];

    filteredOrders.forEach(function (order) {
      var items = order.items.map(function (i) {
        return i.name + " - " + i.colorway + "/" + i.switchType + " x" + i.qty;
      }).join("; ");

      var row = [
        order.id,
        new Date(order.date).toISOString().split("T")[0],
        order.status,
        '"' + order.customer.firstName + '"',
        '"' + order.customer.lastName + '"',
        order.customer.email,
        '"' + order.customer.address + '"',
        '"' + order.customer.city + '"',
        order.customer.postalCode,
        order.customer.country,
        '"' + items + '"',
        order.subtotal,
        order.shipping,
        order.total,
      ];

      rows.push(row.join(","));
    });

    var csv = rows.join("\n");
    var blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    var url = URL.createObjectURL(blob);

    var link = document.createElement("a");
    link.href = url;
    link.download = "tznami-orders-" + new Date().toISOString().split("T")[0] + ".csv";
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  /* ============================================================
     UTILITIES
     ============================================================ */
  function setTextById(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  function escapeHtml(str) {
    if (typeof str !== "string") return str;
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
})();
