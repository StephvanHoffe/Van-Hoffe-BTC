(function () {
  "use strict";

  var header = document.querySelector(".site-header");
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");

  // Rand onder de header zodra er gescrold wordt
  function onScroll() {
    if (header) header.classList.toggle("is-scrolled", window.scrollY > 8);
  }
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobiel menu
  function setMenu(open) {
    if (!toggle || !nav) return;
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  }

  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setMenu(false);
        toggle.focus();
      }
    });

    window.matchMedia("(min-width: 981px)").addEventListener("change", function (mq) {
      if (mq.matches) setMenu(false);
    });
  }

  // Actieve sectie markeren in het menu
  var links = Array.prototype.slice.call(document.querySelectorAll('.nav-link[href^="#"]'));
  if ("IntersectionObserver" in window && links.length) {
    var byId = {};
    links.forEach(function (link) {
      byId[link.getAttribute("href").slice(1)] = link;
    });

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = byId[entry.target.id];
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach(function (l) {
              l.classList.remove("is-active");
            });
            link.classList.add("is-active");
          } else if (link.classList.contains("is-active") && entry.boundingClientRect.top > 0) {
            link.classList.remove("is-active");
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    Object.keys(byId).forEach(function (id) {
      var section = document.getElementById(id);
      if (section) observer.observe(section);
    });
  }

  // Actueel jaartal in de footer
  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
