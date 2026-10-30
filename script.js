/* Masters Strategies — Manus-faithful interactions */
(function () {
  "use strict";

  const I18N = {
    zh: {
      "nav.brand": "臥龍",
      "nav.about": "關於臥龍",
      "nav.services": "專業服務",
      "nav.products": "產品與落地",
      "nav.contact": "聯絡我們",
      "cta.consult": "立即諮詢",
      "cta.explore": "探索產品",
      "cta.services": "了解服務",
      "cta.cooperation": "探索合作機會",
      "hero1.tag": "專業戰略營銷",
      "hero1.title": "讓天下都能有效地<br>推廣產品與服務",
      "hero1.sub": "臥龍戰略營銷管理有限公司，您最可靠的商業夥伴",
      "hero2.tag": "產品與品牌落地",
      "hero2.title": "AIYOUTH 艾青春<br>澳門區總代理",
      "hero2.sub": "堅持以人為本，品質為先，科技為重，讓產品更智能，更貼心。您的澳門渠道與行銷夥伴。",
      "hero3.tag": "專業營銷服務",
      "hero3.title": "品牌策略 · 數碼營銷<br>會展活動 · 媒體廣告",
      "hero3.sub": "以專業知識與在地資源，為您的品牌提供全方位的 B2B 戰略營銷服務",
      "chip.trade": "產品貿易",
      "chip.brand": "品牌策略",
      "chip.digital": "數碼營銷",
      "chip.events": "會展活動",
      "chip.media": "媒體廣告",
      "stat1.num": "5+",
      "stat1.label": "年行業經驗",
      "stat2.num": "10+",
      "stat2.label": "服務企業客戶",
      "stat3.num": "3",
      "stat3.label": "大灣區城市佈局",
      "stat4.num": "100%",
      "stat4.label": "本地化服務",
      "about.label": "關於我們",
      "about.title": "關於臥龍",
      "about.quote": "立足澳門 · 放眼大灣區<br>讓天下都能有效地推廣產品與服務",
      "about.p1": "臥龍戰略營銷管理有限公司（Masters Strategy Marketing Management Limited）是一家立足澳門、放眼大灣區的專業戰略營銷管理公司。",
      "about.p2": "我們融合 B2B 專業服務與 B2C/B2B 實體產品兩大核心業務，為企業提供從品牌策略、數碼營銷、會展活動到產品代理與渠道拓展的全鏈條解決方案。",
      "about.p3": "「臥龍」取自諸葛亮之號，寓意深藏不露、運籌帷幄。我們相信，每一個品牌都有其獨特的潛力，而我們的使命，就是幫助您將這份潛力轉化為市場競爭力。",
      "feat1.title": "戰略視野",
      "feat1.desc": "宏觀視野，精準定位，助您在競爭中脫穎而出。",
      "feat2.title": "專業團隊",
      "feat2.desc": "資深行銷專家，跨領域整合資源，全方位服務。",
      "feat3.title": "成效導向",
      "feat3.desc": "數據驅動決策，以可量化的商業成果為目標。",
      "feat4.title": "本地深耕",
      "feat4.desc": "深耕澳門多年，熟悉本地商業生態與資源網絡。",
      "services.label": "專業服務",
      "services.title": "核心服務",
      "services.lead": "以專業知識與在地資源，為您的品牌提供全方位的 B2B 戰略營銷服務",
      "svc1.title": "品牌策略與顧問",
      "svc1.desc": "品牌診斷、市場定位、中長期策略規劃，建立強大品牌資產。",
      "svc2.title": "數碼營銷及社交媒體",
      "svc2.desc": "Facebook、Instagram、小紅書、微信全平台代營，內容、視覺、廣告一站式服務。",
      "svc3.title": "會展活動策劃及執行",
      "svc3.desc": "全流程會展活動服務，打造品牌體驗與 B2B 商業配對機會。",
      "svc4.title": "本地推廣活動方案",
      "svc4.desc": "澳門地推、路演及社區整合營銷，精準觸達目標受眾。",
      "svc5.title": "戶外廣告媒體",
      "svc5.desc": "巴士車身、視頻廣告、戶外燈箱廣告，全面覆蓋澳門城市流量。",
      "svcCta.title": "立即開始合作",
      "svcCta.desc": "與我們的專家團隊洽談，制定專屬您的戰略方案",
      "products.label": "產品與品牌落地",
      "products.title": "產品與品牌落地",
      "brand.aiyouth.role": "澳門區總代理",
      "brand.aiyouth.badge": "澳門區總代理",
      "brand.hanker.role": "品牌合作夥伴",
      "brand.agency": "品牌代理",
      "brand.aiyouth.desc": "AIYOUTH 品牌成立於 2017 年，定位中高端品質家用電器品牌。堅持以人為本，品質為先，科技為重，讓產品更智能，更貼心，成為生活中無微不至的幫手。",
      "tag.1": "便攜果汁杯",
      "tag.2": "掛脖風扇",
      "tag.3": "加濕器",
      "tag.4": "暖暖杯 55℃",
      "tag.5": "台式迷你風扇",
      "tag.6": "迷你榨汁機",
      "tag.7": "消毒刀架",
      "tag.8": "USB 手持風扇",
      "tag.9": "迷你豆漿機",
      "tag.10": "多功能蒜泥器",
      "tag.11": "暖菜板",
      "tag.12": "學生宿舍風扇",
      "caps.title": "我們的產品服務能力",
      "cap1.title": "搜羅優質產品",
      "cap1.desc": "具採購與選品能力，為市場引進高品質、具差異化的特色產品。",
      "cap2.title": "品牌代理及分銷",
      "cap2.desc": "協助外地優質品牌在本地進行代理，入駐連鎖超市、零售商及 B2B 分銷網絡。",
      "cap3.title": "品牌聯乘活動",
      "cap3.desc": "主導跨界別、跨品牌的聯乘活動策劃，創造社群話題性與爆發性流量。",
      "cap4.title": "品牌落地宣傳",
      "cap4.desc": "為外地進駐品牌量身定制在地化的整合落地宣傳，實現品牌產品與形象建立。",
      "cap5.title": "品牌會展",
      "cap5.desc": "組織、策劃或參與專業型品牌及行業展覽會，對接展會 B2B 商業配對、批發與採購。",
      "cap6.title": "紀念品/禮品定制",
      "cap6.desc": "面向企業客戶與大型活動，提供高質感企業禮品、商務定制、活動紀念品採購。",
      "usb.title": "USB 精選禮品",
      "usb.lead": "適合企業禮贈與活動紀念品的精選 USB 小電系列",
      "contact.label": "聯絡我們",
      "contact.title": "合作洽談",
      "contact.info": "聯絡資訊",
      "contact.company": "公司名稱",
      "contact.companyVal": "臥龍戰略營銷管理有限公司",
      "contact.hours": "服務時間",
      "contact.hoursVal": "週一至週五 09:00 至 18:00",
      "contact.area": "服務地區",
      "contact.areaVal": "澳門 · 大灣區",
      "form.name": "姓名",
      "form.company": "公司名稱",
      "form.phone": "聯絡電話",
      "form.email": "電子郵件",
      "form.need": "需求項目",
      "form.needPlaceholder": "請選擇需求類別",
      "form.needService": "服務類 (B2B 戰略營銷)",
      "form.needProduct": "產品類 (品牌代理/分銷)",
      "form.needOther": "其他",
      "form.message": "留言內容",
      "form.messagePh": "請描述您的需求或問題…",
      "form.submit": "提交留言",
      "form.ok": "感謝您的留言。我們會盡快以電郵回覆。",
      "form.err": "請填寫必填欄位（姓名、電郵、留言）。",
      "footer.desc": "臥龍戰略營銷管理有限公司，立足澳門，放眼大灣區，為您提供全方位的戰略營銷解決方案。",
      "footer.quick": "快速導覽",
      "footer.contact": "聯絡資訊",
      "footer.copy": "© 2026 臥龍戰略營銷管理有限公司. 版權所有.",
      "services.more": "查看完整服務說明",
      "contact.pageLink": "查看聯絡頁與合作流程",
      "footer.aiyouth": "AIYOUTH 澳門區總代理"
    },
    en: {
      "nav.brand": "臥龍",
      "nav.about": "About",
      "nav.services": "Services",
      "nav.products": "Products",
      "nav.contact": "Contact",
      "cta.consult": "Consult Now",
      "cta.explore": "Explore Products",
      "cta.services": "Our Services",
      "cta.cooperation": "Explore Partnership",
      "hero1.tag": "Professional Strategic Marketing",
      "hero1.title": "Helping Brands Promote<br>Products & Services Effectively",
      "hero1.sub": "Masters Strategy Marketing Management Limited — Your most reliable business partner",
      "hero2.tag": "Products & Brand Distribution",
      "hero2.title": "AIYOUTH<br>Macau Exclusive Agent",
      "hero2.sub": "People-first, quality-first, technology-driven. Your Macau channel and marketing partner.",
      "hero3.tag": "Marketing Services",
      "hero3.title": "Brand · Digital · Expo<br>Events · Media Ads",
      "hero3.sub": "Full-spectrum B2B strategic marketing powered by expertise and local resources",
      "chip.trade": "Product Trade",
      "chip.brand": "Brand Strategy",
      "chip.digital": "Digital Marketing",
      "chip.events": "Events & Expo",
      "chip.media": "Media & Ads",
      "stat1.num": "5+",
      "stat1.label": "Years Experience",
      "stat2.num": "10+",
      "stat2.label": "Enterprise Clients",
      "stat3.num": "3",
      "stat3.label": "GBA Cities",
      "stat4.num": "100%",
      "stat4.label": "Local Service",
      "about.label": "About Us",
      "about.title": "About Masters",
      "about.quote": "Based in Macau · Serving the Greater Bay Area<br>Helping brands promote products & services effectively",
      "about.p1": "Masters Strategy Marketing Management Limited is a professional strategic marketing company based in Macau, serving the Greater Bay Area.",
      "about.p2": "We integrate B2B professional services with B2C/B2B physical products, delivering end-to-end solutions from brand strategy and digital marketing to exhibitions, product agency and channel expansion.",
      "about.p3": "「臥龍」draws from Zhuge Liang’s courtesy name — quiet strength and strategic foresight. We help every brand turn unique potential into market competitiveness.",
      "feat1.title": "Strategic Vision",
      "feat1.desc": "Macro thinking and precise positioning so you stand out.",
      "feat2.title": "Expert Team",
      "feat2.desc": "Senior experts integrating cross-domain resources for full-service support.",
      "feat3.title": "Results-Driven",
      "feat3.desc": "Data-driven decisions aimed at measurable commercial outcomes.",
      "feat4.title": "Local Expertise",
      "feat4.desc": "Deep roots in Macau with strong local business networks.",
      "services.label": "Services",
      "services.title": "Core Services",
      "services.lead": "Comprehensive B2B strategic marketing powered by expertise and local resources",
      "svc1.title": "Brand Strategy & Consulting",
      "svc1.desc": "Brand diagnosis, market positioning and mid-to-long-term planning to build strong brand equity.",
      "svc2.title": "Digital & Social Media",
      "svc2.desc": "One-stop management for Facebook, Instagram, Xiaohongshu and WeChat — content, visuals and ads.",
      "svc3.title": "Exhibition & Event Planning",
      "svc3.desc": "End-to-end exhibition services creating brand experiences and B2B matching opportunities.",
      "svc4.title": "Local Promotion Solutions",
      "svc4.desc": "Macau roadshows, street promotions and community marketing to reach target audiences.",
      "svc5.title": "Outdoor Advertising Media",
      "svc5.desc": "Bus wraps, video ads and outdoor lightboxes covering Macau city traffic.",
      "svcCta.title": "Start a Partnership",
      "svcCta.desc": "Talk with our team to craft your tailored strategic plan",
      "products.label": "Products & Branding",
      "products.title": "Products & Brand Distribution",
      "brand.aiyouth.role": "Macau Exclusive Agent",
      "brand.aiyouth.badge": "Macau Exclusive Agent",
      "brand.hanker.role": "Brand Partner",
      "brand.agency": "Brand Agency",
      "brand.aiyouth.desc": "Founded in 2017, AIYOUTH is a mid-to-high-end home appliance brand. People-first, quality-first, technology-driven — smarter, more thoughtful products for everyday life.",
      "tag.1": "Portable Juice Cup",
      "tag.2": "Neck Fan",
      "tag.3": "Humidifier",
      "tag.4": "Warm Cup 55℃",
      "tag.5": "Desktop Mini Fan",
      "tag.6": "Mini Juicer",
      "tag.7": "Knife Sterilizer",
      "tag.8": "USB Handheld Fan",
      "tag.9": "Mini Soy Milk Maker",
      "tag.10": "Garlic Processor",
      "tag.11": "Food Warming Plate",
      "tag.12": "Dorm Room Fan",
      "caps.title": "Our Product Capabilities",
      "cap1.title": "Premium Product Sourcing",
      "cap1.desc": "Procurement and curation to introduce high-quality, differentiated products.",
      "cap2.title": "Brand Agency & Distribution",
      "cap2.desc": "Help quality brands enter local markets via retail chains and B2B distribution.",
      "cap3.title": "Brand Crossover Campaigns",
      "cap3.desc": "Cross-industry collaborations that create buzz and high-impact traffic.",
      "cap4.title": "Brand Localization",
      "cap4.desc": "Localized integrated campaigns for brands establishing presence in Macau.",
      "cap5.title": "Brand Exhibitions",
      "cap5.desc": "Organize or join professional exhibitions for B2B matching, wholesale and procurement.",
      "cap6.title": "Gifts & Souvenirs",
      "cap6.desc": "Premium corporate gifts, custom sets and event souvenirs for enterprises and events.",
      "usb.title": "Featured USB Gifts",
      "usb.lead": "Curated USB lifestyle products for corporate gifting and event souvenirs",
      "contact.label": "Contact",
      "contact.title": "Let’s Talk",
      "contact.info": "Contact Info",
      "contact.company": "Company",
      "contact.companyVal": "Masters Strategy Marketing Management Limited",
      "contact.hours": "Hours",
      "contact.hoursVal": "Mon-Fri 09:00-18:00",
      "contact.area": "Coverage",
      "contact.areaVal": "Macau · Greater Bay Area",
      "form.name": "Name",
      "form.company": "Company",
      "form.phone": "Phone",
      "form.email": "Email",
      "form.need": "Inquiry Type",
      "form.needPlaceholder": "Select a category",
      "form.needService": "Services (B2B Marketing)",
      "form.needProduct": "Products (Agency / Distribution)",
      "form.needOther": "Other",
      "form.message": "Message",
      "form.messagePh": "Tell us about your needs…",
      "form.submit": "Send Message",
      "form.ok": "Thank you. We will reply by email shortly.",
      "form.err": "Please fill in required fields (name, email, message).",
      "footer.desc": "Masters Strategy Marketing Management Limited — based in Macau, serving the Greater Bay Area with comprehensive strategic marketing solutions.",
      "footer.quick": "Quick Links",
      "footer.contact": "Contact",
      "footer.copy": "© 2026 Masters Strategy Marketing Management Limited. All rights reserved.",
      "services.more": "View full services",
      "contact.pageLink": "Contact page and how we work",
      "footer.aiyouth": "AIYOUTH Macau Agency"
    }
  };

  let lang = "zh";

  function applyI18n(next) {
    lang = next;
    const dict = I18N[lang] || I18N.zh;
    document.documentElement.lang = lang === "zh" ? "zh-Hant-MO" : "en";
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key] != null) el.textContent = dict[key];
    });
    document.querySelectorAll("[data-i18n-html]").forEach((el) => {
      const key = el.getAttribute("data-i18n-html");
      if (dict[key] != null) el.innerHTML = dict[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
      const key = el.getAttribute("data-i18n-placeholder");
      if (dict[key] != null) el.setAttribute("placeholder", dict[key]);
    });
    document.querySelectorAll(".lang-btn").forEach((btn) => {
      btn.classList.toggle("is-active", btn.getAttribute("data-lang") === lang);
    });
  }

  /* Nav solid on scroll */
  const nav = document.getElementById("siteNav");
  function onScroll() {
    if (!nav) return;
    nav.classList.toggle("is-solid", window.scrollY > 40);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile menu */
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      const open = links.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    links.querySelectorAll("a").forEach((a) => {
      a.addEventListener("click", () => {
        links.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* Language */
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => applyI18n(btn.getAttribute("data-lang")));
  });

  /* Hero carousel */
  const slides = Array.from(document.querySelectorAll(".hero-slide"));
  const dotsWrap = document.getElementById("heroDots");
  let index = 0;
  let timer = null;
  const INTERVAL = 6000;

  function go(n) {
    if (!slides.length) return;
    index = (n + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("is-active", i === index));
    if (dotsWrap) {
      dotsWrap.querySelectorAll("button").forEach((d, i) => {
        d.classList.toggle("is-active", i === index);
      });
    }
    restart();
  }

  function restart() {
    if (timer) clearInterval(timer);
    timer = setInterval(() => go(index + 1), INTERVAL);
  }

  if (dotsWrap) {
    slides.forEach((_, i) => {
      const b = document.createElement("button");
      b.type = "button";
      b.setAttribute("aria-label", "Slide " + (i + 1));
      if (i === 0) b.classList.add("is-active");
      b.addEventListener("click", () => go(i));
      dotsWrap.appendChild(b);
    });
  }

  const prev = document.getElementById("heroPrev");
  const next = document.getElementById("heroNext");
  if (prev) prev.addEventListener("click", () => go(index - 1));
  if (next) next.addEventListener("click", () => go(index + 1));

  /* Swipe */
  const hero = document.querySelector(".hero");
  if (hero) {
    let startX = 0;
    hero.addEventListener("touchstart", (e) => {
      startX = e.changedTouches[0].clientX;
    }, { passive: true });
    hero.addEventListener("touchend", (e) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      go(dx < 0 ? index + 1 : index - 1);
    }, { passive: true });
  }

  go(0);

  /* Contact form (client-side only) */
  const form = document.getElementById("contactForm");
  const note = document.getElementById("formNote");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const name = String(fd.get("name") || "").trim();
      const email = String(fd.get("email") || "").trim();
      const message = String(fd.get("message") || "").trim();
      const dict = I18N[lang] || I18N.zh;
      if (!name || !email || !message) {
        if (note) {
          note.hidden = false;
          note.classList.remove("is-ok");
          note.textContent = dict["form.err"];
        }
        return;
      }
      const subject = encodeURIComponent("[Masters Strategies] " + name);
      const body = encodeURIComponent(
        "Name: " + name +
        "\nCompany: " + (fd.get("company") || "") +
        "\nPhone: " + (fd.get("phone") || "") +
        "\nEmail: " + email +
        "\nNeed: " + (fd.get("need") || "") +
        "\n\n" + message
      );
      window.location.href = "mailto:Yumi@mastersstrategies.com?subject=" + subject + "&body=" + body;
      if (note) {
        note.hidden = false;
        note.classList.add("is-ok");
        note.textContent = dict["form.ok"];
      }
      form.reset();
    });
  }
})();
