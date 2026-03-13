# Analytics

This directory covers Tznami's marketing analytics setup — tracking tools, KPIs, and how to interpret data to improve future launches.

---

## Analytics Stack

### Google Analytics 4 (GA4)
**URL**: https://analytics.google.com  
**Purpose**: Website traffic, user behavior, conversion tracking

**Setup checklist**:
- [ ] Create GA4 property for tznami.com
- [ ] Install Google tag (gtag.js) on all site pages
- [ ] Connect to Shopify via GA4 integration plugin
- [ ] Set up key conversion events: `purchase`, `begin_checkout`, `add_to_cart`, `sign_up` (email list)
- [ ] Create Audiences: Past purchasers, IC survey visitors, Blog readers
- [ ] Enable Enhanced E-commerce reporting

**Key reports to review weekly**:
- Traffic sources (organic vs. Reddit vs. Instagram vs. email)
- Conversion rate by source
- Cart abandonment rate
- Most visited pages (product page vs. blog vs. home)

**During a GB**: Check daily. Key metric: conversion rate on the GB product page. Anything under 2% means something in the funnel needs fixing (pricing, photos, copy, trust signals).

---

### Google Search Console
**URL**: https://search.google.com/search-console  
**Purpose**: SEO performance, search query visibility

Connect tznami.com and monitor:
- Which search queries bring traffic (keyboard keywords: "custom 65% keyboard," "gasket mount keyboard GB," etc.)
- Pages with high impressions but low CTR → improve meta title/description
- Core Web Vitals for product pages

---

### Meta Business Suite
**URL**: https://business.facebook.com  
**Purpose**: Instagram and Facebook analytics

**Key metrics**:
- Reach and impressions per post
- Engagement rate (aim for >3% for keyboard content)
- Story completion rate
- Profile visits and website taps from bio link
- Top performing post types (carousel > single image > reel in most cases)

**Review cadence**: Weekly post-performance review; monthly trend analysis

---

### Reddit Analytics

Reddit does not have a native analytics API for third-party posts. Use:
- **Reddit's own post analytics** (available from post options as original poster)
- **Social Blade** for general subreddit growth tracking
- Manual tracking: Record upvotes, comments, and link clicks (use UTM parameters on all links)

**UTM Parameter convention for Reddit posts**:
```
?utm_source=reddit&utm_medium=organic&utm_campaign=kb65-gb&utm_content=r-mechkeys
```

---

### Shopify Analytics
**URL**: Shopify Admin → Analytics  
**Purpose**: Revenue, order volume, customer data

**Key Shopify reports to track**:
- Sales over time (by day during GB)
- Traffic sources → conversion (which platform drives actual buyers?)
- Average order value
- Returning customer rate
- Inventory movement (for component reorder planning)

---

## KPI Dashboard Template

Track these KPIs monthly in a shared Notion/Google Sheets doc:

| KPI | Target | Current Month | Last Month | Trend |
|-----|--------|---------------|------------|-------|
| Website sessions (monthly) | 5,000+ | | | |
| Email subscribers (total) | — | | | |
| Email open rate | >30% | | | |
| Email CTR | >5% | | | |
| Instagram followers | — | | | |
| Instagram engagement rate | >3% | | | |
| Reddit post upvotes (IC/GB) | >200 | | | |
| GB conversion rate | >3% | | | |
| Average order value | $[X] | | | |
| Returning customer rate | >20% | | | |
| Discord members | — | | | |

---

## Attribution Notes

Most keyboard customers discover a board via Reddit or community Discord, then convert via email or direct return visit — not on first click. This means:
- **Last-click attribution** (GA4 default) undervalues Reddit
- **Data-Driven attribution** in GA4 is more accurate but requires significant conversion volume
- For small team tracking: keep a manual "how did you find us?" field in the Discord intro channel and GB interest survey — first-party attribution beats all analytics tools
