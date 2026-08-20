/* Cole Consulting — shared site behavior */
(function () {
  "use strict";

  /* Header scroll state */
  var header = document.querySelector(".site-header");
  var progress = document.querySelector(".scroll-progress");

  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle("is-scrolled", y > 12);
    if (progress) {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      var pct = docH > 0 ? (y / docH) * 100 : 0;
      progress.style.width = pct + "%";
    }
  }
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Mobile nav toggle */
  var navToggle = document.querySelector(".nav-toggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      document.body.classList.toggle("nav-open");
    });
  }

  /* Mobile mega-menu accordion */
  document.querySelectorAll(".nav-item.has-mega > .nav-link").forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (window.innerWidth <= 980) {
        e.preventDefault();
        link.closest(".nav-item").classList.toggle("mega-open");
      }
    });
  });

  /* Close mobile nav on link click */
  document.querySelectorAll(".main-nav a:not(.nav-item.has-mega > .nav-link)").forEach(function (a) {
    a.addEventListener("click", function () {
      document.body.classList.remove("nav-open");
    });
  });

  /* Scroll reveal */
  var revealEls = document.querySelectorAll("[data-reveal]");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.14, rootMargin: "0px 0px -60px 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }

  /* Marquee: duplicate track content for seamless loop */
  document.querySelectorAll(".marquee-track").forEach(function (track) {
    track.innerHTML += track.innerHTML;
  });

  /* Animated counters */
  var counters = document.querySelectorAll("[data-counter]");
  if ("IntersectionObserver" in window && counters.length) {
    var counterIO = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var el = entry.target;
          var target = parseFloat(el.getAttribute("data-counter"));
          var suffix = el.getAttribute("data-suffix") || "";
          var duration = 1400;
          var start = null;
          function step(ts) {
            if (!start) start = ts;
            var p = Math.min((ts - start) / duration, 1);
            var eased = 1 - Math.pow(1 - p, 3);
            var val = target * eased;
            el.textContent = (target % 1 === 0 ? Math.round(val) : val.toFixed(1)) + suffix;
            if (p < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
          counterIO.unobserve(el);
        });
      },
      { threshold: 0.5 }
    );
    counters.forEach(function (el) { counterIO.observe(el); });
  }

  /* Contact form field focus states (visual only — submission handled by Netlify Forms) */
  document.querySelectorAll(".form-field input, .form-field textarea").forEach(function (field) {
    var wrap = field.closest(".form-field");
    field.addEventListener("focus", function () { wrap.classList.add("focused"); });
    field.addEventListener("blur", function () {
      if (!field.value) wrap.classList.remove("focused");
    });
  });

  /* Footer year */
  document.querySelectorAll("[data-year]").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
