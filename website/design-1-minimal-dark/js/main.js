/* ============================================================
   Tznami Design 1 — Main Site JavaScript
   ============================================================ */

(function () {
  "use strict";

  /* ----- Constants ----- */
  const STORAGE_CART = "tznami_cart";
  const STORAGE_ORDERS = "tznami_orders";

  const BASE_PRICE = 199;

  const COLORWAYS = {
    "Charcoal Night": { price: 0, css: "#2a2a35" },
    "Dusk Blue": { price: 10, css: "#2a3a5c" },
    "Sakura Pink": { price: 15, css: "#5c3a4a" },
  };

  const SWITCHES = {
    "Gateron Pro Yellow": { price: 0, type: "Linear" },
    "Gateron Pro Red": { price: 0, type: "Linear" },
    "Gateron Pro Brown": { price: 5, type: "Tactile" },
    "Gateron Pro Blue": { price: 5, type: "Clicky" },
  };

  const SHIPPING = {
    Poland: 0,
    EU: 15,
    International: 25,
  };

  const EU_COUNTRIES = [
    "Austria", "Belgium", "Bulgaria", "Croatia", "Cyprus", "Czech Republic",
    "Denmark", "Estonia", "Finland", "France", "Germany", "Greece", "Hungary",
    "Ireland", "Italy", "Latvia", "Lithuania", "Luxembourg", "Malta",
    "Netherlands", "Portugal", "Romania", "Slovakia", "Slovenia", "Spain", "Sweden",
  ];

  /* ----- State ----- */
  let cart = loadCart();
  let selectedColorway = "Charcoal Night";
  let selectedSwitch = "Gateron Pro Yellow";

  /* ----- DOM Ready ----- */
  document.addEventListener("DOMContentLoaded", init);

  function init() {
    setupNav();
    setupScrollAnimations();
    setupConfigurator();
    setupCart();
    setupCheckout();
    setupNewsletter();
    updateCartUI();
  }

  /* ============================================================
     NAVIGATION
     ============================================================ */
  function setupNav() {
    const nav = document.querySelector(".nav");
    const toggle = document.querySelector(".nav-toggle");
    const links = document.querySelector(".nav-links");

    /* Scroll effect */
    window.addEventListener("scroll", function () {
      if (window.scrollY > 50) {
        nav.classList.add("scrolled");
      } else {
        nav.classList.remove("scrolled");
      }
    });

    /* Mobile toggle */
    if (toggle) {
      toggle.addEventListener("click", function () {
        toggle.classList.toggle("open");
        links.classList.toggle("open");
      });
    }

    /* Smooth scroll for nav links */
    document.querySelectorAll('a[href^="#"]').forEach(function (a) {
      a.addEventListener("click", function (e) {
        const target = document.querySelector(a.getAttribute("href"));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth" });
          /* close mobile menu */
          if (toggle) {
            toggle.classList.remove("open");
            links.classList.remove("open");
          }
        }
      });
    });

    /* Active link on scroll */
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", function () {
      let current = "";
      sections.forEach(function (sec) {
        const top = sec.offsetTop - 120;
        if (window.scrollY >= top) {
          current = sec.getAttribute("id");
        }
      });
      document.querySelectorAll(".nav-links a").forEach(function (a) {
        a.classList.remove("active");
        if (a.getAttribute("href") === "#" + current) {
          a.classList.add("active");
        }
      });
    });
  }

  /* ============================================================
     SCROLL ANIMATIONS (IntersectionObserver)
     ============================================================ */
  function setupScrollAnimations() {
    var reveals = document.querySelectorAll(".reveal");
    if (!reveals.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    reveals.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ============================================================
     PRODUCT CONFIGURATOR
     ============================================================ */
  function setupConfigurator() {
    /* Colorway options */
    document.querySelectorAll("[data-colorway]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectedColorway = btn.dataset.colorway;
        document.querySelectorAll("[data-colorway]").forEach(function (b) {
          b.classList.remove("selected");
        });
        btn.classList.add("selected");
        updateConfigSummary();

        /* Also update product section colorway dots */
        document.querySelectorAll(".colorway-dot").forEach(function (dot) {
          dot.classList.remove("active");
          if (dot.dataset.colorway === selectedColorway) {
            dot.classList.add("active");
          }
        });
      });
    });

    /* Switch options */
    document.querySelectorAll("[data-switch]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        selectedSwitch = btn.dataset.switch;
        document.querySelectorAll("[data-switch]").forEach(function (b) {
          b.classList.remove("selected");
        });
        btn.classList.add("selected");
        updateConfigSummary();
      });
    });

    /* Colorway dots in product section */
    document.querySelectorAll(".colorway-dot").forEach(function (dot) {
      dot.addEventListener("click", function () {
        document.querySelectorAll(".colorway-dot").forEach(function (d) {
          d.classList.remove("active");
        });
        dot.classList.add("active");
        selectedColorway = dot.dataset.colorway;
        /* sync configurator */
        document.querySelectorAll("[data-colorway]").forEach(function (b) {
          b.classList.remove("selected");
          if (b.dataset.colorway === selectedColorway) b.classList.add("selected");
        });
        updateConfigSummary();
      });
    });

    /* Add to cart button */
    var addBtn = document.getElementById("btn-add-cart");
    if (addBtn) {
      addBtn.addEventListener("click", addToCart);
    }

    updateConfigSummary();
  }

  function updateConfigSummary() {
    var colorExtra = COLORWAYS[selectedColorway] ? COLORWAYS[selectedColorway].price : 0;
    var switchExtra = SWITCHES[selectedSwitch] ? SWITCHES[selectedSwitch].price : 0;
    var total = BASE_PRICE + colorExtra + switchExtra;

    setTextById("summary-colorway", selectedColorway);
    setTextById("summary-switch", selectedSwitch);
    setTextById("summary-base", "€" + BASE_PRICE);
    setTextById(
      "summary-color-extra",
      colorExtra > 0 ? "+€" + colorExtra : "Included"
    );
    setTextById(
      "summary-switch-extra",
      switchExtra > 0 ? "+€" + switchExtra : "Included"
    );
    setTextById("summary-total", "€" + total);
  }

  function setTextById(id, text) {
    var el = document.getElementById(id);
    if (el) el.textContent = text;
  }

  /* ============================================================
     SHOPPING CART
     ============================================================ */
  function setupCart() {
    /* Open / close cart */
    var cartBtn = document.querySelector(".nav-cart");
    var overlay = document.querySelector(".cart-overlay");
    var sidebar = document.querySelector(".cart-sidebar");
    var closeBtn = document.querySelector(".cart-close");

    function openCart() {
      overlay.classList.add("open");
      sidebar.classList.add("open");
      document.body.style.overflow = "hidden";
    }

    function closeCart() {
      overlay.classList.remove("open");
      sidebar.classList.remove("open");
      document.body.style.overflow = "";
    }

    if (cartBtn) cartBtn.addEventListener("click", openCart);
    if (overlay) overlay.addEventListener("click", closeCart);
    if (closeBtn) closeBtn.addEventListener("click", closeCart);

    /* Checkout button in cart */
    var checkoutBtn = document.getElementById("btn-checkout");
    if (checkoutBtn) {
      checkoutBtn.addEventListener("click", function () {
        if (cart.length === 0) {
          showToast("Your cart is empty", "error");
          return;
        }
        closeCart();
        openCheckout();
      });
    }
  }

  function addToCart() {
    var colorExtra = COLORWAYS[selectedColorway] ? COLORWAYS[selectedColorway].price : 0;
    var switchExtra = SWITCHES[selectedSwitch] ? SWITCHES[selectedSwitch].price : 0;
    var itemPrice = BASE_PRICE + colorExtra + switchExtra;

    /* Check if same config already in cart */
    var existing = cart.find(function (item) {
      return item.colorway === selectedColorway && item.switchType === selectedSwitch;
    });

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: Date.now().toString(36),
        name: "Tznami HS65",
        colorway: selectedColorway,
        switchType: selectedSwitch,
        price: itemPrice,
        qty: 1,
      });
    }

    saveCart();
    updateCartUI();
    showToast("Added to cart!", "success");
  }

  function removeFromCart(id) {
    cart = cart.filter(function (item) {
      return item.id !== id;
    });
    saveCart();
    updateCartUI();
  }

  function updateQty(id, delta) {
    var item = cart.find(function (i) {
      return i.id === id;
    });
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) {
      removeFromCart(id);
      return;
    }
    saveCart();
    updateCartUI();
  }

  function updateCartUI() {
    /* Count badge */
    var totalItems = cart.reduce(function (sum, i) {
      return sum + i.qty;
    }, 0);
    var badge = document.querySelector(".cart-count");
    if (badge) {
      badge.textContent = totalItems;
      badge.classList.toggle("hidden", totalItems === 0);
    }

    /* Cart items list */
    var container = document.querySelector(".cart-items");
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML =
        '<div class="cart-empty">' +
        '<div class="empty-icon">🛒</div>' +
        "<p>Your cart is empty</p>" +
        "</div>";
    } else {
      var html = "";
      cart.forEach(function (item) {
        html +=
          '<div class="cart-item" data-id="' + item.id + '">' +
          '<div class="cart-item-image">HS65</div>' +
          '<div class="cart-item-info">' +
          '<div class="cart-item-name">' + escapeHtml(item.name) + "</div>" +
          '<div class="cart-item-variant">' + escapeHtml(item.colorway) + " · " + escapeHtml(item.switchType) + "</div>" +
          '<div class="cart-item-actions">' +
          '<div class="qty-control">' +
          '<button class="qty-btn qty-minus" data-id="' + item.id + '">−</button>' +
          '<span class="qty-value">' + item.qty + "</span>" +
          '<button class="qty-btn qty-plus" data-id="' + item.id + '">+</button>' +
          "</div>" +
          '<span class="cart-item-price">€' + (item.price * item.qty) + "</span>" +
          '<button class="cart-item-remove" data-id="' + item.id + '">✕</button>' +
          "</div>" +
          "</div>" +
          "</div>";
      });
      container.innerHTML = html;

      /* Wire up buttons */
      container.querySelectorAll(".qty-minus").forEach(function (btn) {
        btn.addEventListener("click", function () {
          updateQty(btn.dataset.id, -1);
        });
      });
      container.querySelectorAll(".qty-plus").forEach(function (btn) {
        btn.addEventListener("click", function () {
          updateQty(btn.dataset.id, 1);
        });
      });
      container.querySelectorAll(".cart-item-remove").forEach(function (btn) {
        btn.addEventListener("click", function () {
          removeFromCart(btn.dataset.id);
        });
      });
    }

    /* Cart total */
    var total = cart.reduce(function (sum, i) {
      return sum + i.price * i.qty;
    }, 0);
    var totalEl = document.querySelector(".cart-total .value");
    if (totalEl) totalEl.textContent = "€" + total;
  }

  /* ----- Persistence ----- */
  function loadCart() {
    try {
      var data = localStorage.getItem(STORAGE_CART);
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  }

  function saveCart() {
    localStorage.setItem(STORAGE_CART, JSON.stringify(cart));
  }

  /* ============================================================
     CHECKOUT
     ============================================================ */
  function setupCheckout() {
    var overlay = document.querySelector(".checkout-overlay");
    var closeBtn = document.querySelector(".checkout-close");
    var placeBtn = document.getElementById("btn-place-order");
    var countrySelect = document.getElementById("checkout-country");

    if (closeBtn) {
      closeBtn.addEventListener("click", closeCheckout);
    }

    if (overlay) {
      overlay.addEventListener("click", function (e) {
        if (e.target === overlay) closeCheckout();
      });
    }

    if (countrySelect) {
      countrySelect.addEventListener("change", updateCheckoutSummary);
    }

    if (placeBtn) {
      placeBtn.addEventListener("click", placeOrder);
    }
  }

  function openCheckout() {
    var overlay = document.querySelector(".checkout-overlay");
    if (overlay) {
      overlay.classList.add("open");
      document.body.style.overflow = "hidden";
      renderCheckoutForm();
      updateCheckoutSummary();
    }
  }

  function closeCheckout() {
    var overlay = document.querySelector(".checkout-overlay");
    if (overlay) {
      overlay.classList.remove("open");
      document.body.style.overflow = "";
    }
  }

  function renderCheckoutForm() {
    var body = document.querySelector(".checkout-body");
    if (!body) return;

    body.innerHTML =
      '<form id="checkout-form" novalidate>' +
      '<div class="form-grid">' +
      '<div class="form-group">' +
      '<label for="checkout-fname">First Name</label>' +
      '<input type="text" id="checkout-fname" required>' +
      '<div class="error-msg" id="err-fname">First name is required</div>' +
      "</div>" +
      '<div class="form-group">' +
      '<label for="checkout-lname">Last Name</label>' +
      '<input type="text" id="checkout-lname" required>' +
      '<div class="error-msg" id="err-lname">Last name is required</div>' +
      "</div>" +
      '<div class="form-group full-width">' +
      '<label for="checkout-email">Email</label>' +
      '<input type="email" id="checkout-email" required>' +
      '<div class="error-msg" id="err-email">Valid email is required</div>' +
      "</div>" +
      '<div class="form-group full-width">' +
      '<label for="checkout-address">Address</label>' +
      '<input type="text" id="checkout-address" required>' +
      '<div class="error-msg" id="err-address">Address is required</div>' +
      "</div>" +
      '<div class="form-group">' +
      '<label for="checkout-city">City</label>' +
      '<input type="text" id="checkout-city" required>' +
      '<div class="error-msg" id="err-city">City is required</div>' +
      "</div>" +
      '<div class="form-group">' +
      '<label for="checkout-postal">Postal Code</label>' +
      '<input type="text" id="checkout-postal" required>' +
      '<div class="error-msg" id="err-postal">Postal code is required</div>' +
      "</div>" +
      '<div class="form-group full-width">' +
      '<label for="checkout-country">Country</label>' +
      '<select id="checkout-country">' +
      buildCountryOptions() +
      "</select>" +
      "</div>" +
      "</div>" +
      '<div class="checkout-order-summary" id="checkout-summary"></div>' +
      '<button type="button" class="btn btn-primary btn-place-order" id="btn-place-order">Place Order</button>' +
      "</form>";

    /* Re-attach events */
    var countrySelect = document.getElementById("checkout-country");
    if (countrySelect) countrySelect.addEventListener("change", updateCheckoutSummary);

    var placeBtn = document.getElementById("btn-place-order");
    if (placeBtn) placeBtn.addEventListener("click", placeOrder);
  }

  function buildCountryOptions() {
    var countries = ["Poland"].concat(EU_COUNTRIES).concat([
      "United Kingdom", "United States", "Canada", "Australia", "Japan",
      "South Korea", "Norway", "Switzerland",
    ]);
    var opts = "";
    countries.forEach(function (c) {
      opts += '<option value="' + c + '">' + c + "</option>";
    });
    return opts;
  }

  function getShippingCost(country) {
    if (country === "Poland") return SHIPPING.Poland;
    if (EU_COUNTRIES.indexOf(country) !== -1) return SHIPPING.EU;
    return SHIPPING.International;
  }

  function updateCheckoutSummary() {
    var summaryEl = document.getElementById("checkout-summary");
    if (!summaryEl) return;

    var countrySelect = document.getElementById("checkout-country");
    var country = countrySelect ? countrySelect.value : "Poland";
    var shipping = getShippingCost(country);

    var subtotal = cart.reduce(function (sum, i) {
      return sum + i.price * i.qty;
    }, 0);

    var html = "<h4>Order Summary</h4>";
    cart.forEach(function (item) {
      html +=
        '<div class="checkout-item-line">' +
        "<span>" + escapeHtml(item.name) + " — " + escapeHtml(item.colorway) + " / " + escapeHtml(item.switchType) + " × " + item.qty + "</span>" +
        "<span>€" + (item.price * item.qty) + "</span>" +
        "</div>";
    });

    html +=
      '<div class="checkout-shipping">' +
      "<span>Shipping (" + escapeHtml(country) + ")</span>" +
      "<span>" + (shipping === 0 ? "Free" : "€" + shipping) + "</span>" +
      "</div>" +
      '<div class="checkout-grand-total">' +
      "<span>Total</span>" +
      '<span class="value">€' + (subtotal + shipping) + "</span>" +
      "</div>";

    summaryEl.innerHTML = html;
  }

  function placeOrder() {
    /* Validate */
    var valid = true;
    var fields = [
      { id: "checkout-fname", err: "err-fname", check: function (v) { return v.trim().length > 0; } },
      { id: "checkout-lname", err: "err-lname", check: function (v) { return v.trim().length > 0; } },
      { id: "checkout-email", err: "err-email", check: function (v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { id: "checkout-address", err: "err-address", check: function (v) { return v.trim().length > 0; } },
      { id: "checkout-city", err: "err-city", check: function (v) { return v.trim().length > 0; } },
      { id: "checkout-postal", err: "err-postal", check: function (v) { return v.trim().length > 0; } },
    ];

    fields.forEach(function (f) {
      var input = document.getElementById(f.id);
      var errEl = document.getElementById(f.err);
      if (input && errEl) {
        if (!f.check(input.value)) {
          input.classList.add("error");
          errEl.classList.add("show");
          valid = false;
        } else {
          input.classList.remove("error");
          errEl.classList.remove("show");
        }
      }
    });

    if (!valid) {
      showToast("Please fill in all required fields", "error");
      return;
    }

    /* Build order */
    var country = document.getElementById("checkout-country").value;
    var shipping = getShippingCost(country);
    var subtotal = cart.reduce(function (s, i) { return s + i.price * i.qty; }, 0);
    var orderId = "TZ-" + Date.now().toString(36).toUpperCase();

    var order = {
      id: orderId,
      date: new Date().toISOString(),
      status: "pending",
      customer: {
        firstName: document.getElementById("checkout-fname").value.trim(),
        lastName: document.getElementById("checkout-lname").value.trim(),
        email: document.getElementById("checkout-email").value.trim(),
        address: document.getElementById("checkout-address").value.trim(),
        city: document.getElementById("checkout-city").value.trim(),
        postalCode: document.getElementById("checkout-postal").value.trim(),
        country: country,
      },
      items: cart.map(function (i) {
        return {
          name: i.name,
          colorway: i.colorway,
          switchType: i.switchType,
          price: i.price,
          qty: i.qty,
        };
      }),
      subtotal: subtotal,
      shipping: shipping,
      total: subtotal + shipping,
    };

    /* Save order */
    var orders = [];
    try {
      var stored = localStorage.getItem(STORAGE_ORDERS);
      if (stored) orders = JSON.parse(stored);
    } catch (e) {
      orders = [];
    }
    orders.push(order);
    localStorage.setItem(STORAGE_ORDERS, JSON.stringify(orders));

    /* Clear cart */
    cart = [];
    saveCart();
    updateCartUI();

    /* Show confirmation */
    showOrderConfirmation(orderId);
  }

  function showOrderConfirmation(orderId) {
    var body = document.querySelector(".checkout-body");
    if (!body) return;

    body.innerHTML =
      '<div class="order-confirmation">' +
      '<div class="confirm-icon">✅</div>' +
      "<h3>Order Placed!</h3>" +
      '<p class="order-id">' + escapeHtml(orderId) + "</p>" +
      "<p>Thank you for your order! We'll send a confirmation email shortly. Your hand-built Tznami HS65 will be on its way soon.</p>" +
      '<button class="btn btn-primary" id="btn-continue-browsing">Continue Browsing</button>' +
      "</div>";

    var continueBtn = document.getElementById("btn-continue-browsing");
    if (continueBtn) {
      continueBtn.addEventListener("click", function () {
        closeCheckout();
      });
    }
  }

  /* ============================================================
     NEWSLETTER
     ============================================================ */
  function setupNewsletter() {
    var form = document.querySelector(".newsletter-form");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var input = form.querySelector("input");
      if (input && input.value.trim()) {
        showToast("Thanks for subscribing!", "success");
        input.value = "";
      }
    });
  }

  /* ============================================================
     TOAST NOTIFICATIONS
     ============================================================ */
  function showToast(message, type) {
    type = type || "info";
    var container = document.querySelector(".toast-container");
    if (!container) {
      container = document.createElement("div");
      container.className = "toast-container";
      document.body.appendChild(container);
    }

    var icons = { success: "✓", error: "✕", info: "ℹ" };
    var toast = document.createElement("div");
    toast.className = "toast " + type;
    toast.innerHTML = "<span>" + (icons[type] || "") + "</span> " + escapeHtml(message);
    container.appendChild(toast);

    setTimeout(function () {
      toast.classList.add("fade-out");
      setTimeout(function () {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3000);
  }

  /* ============================================================
     UTILITIES
     ============================================================ */
  function escapeHtml(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
})();
