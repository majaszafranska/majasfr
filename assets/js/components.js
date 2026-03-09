async function loadComponent(id, file) {
  const el = document.getElementById(id);
  if (!el) return;

  const res = await fetch(file);
  const html = await res.text();
  el.innerHTML = html;

  highlightActiveLink(el);
}

function highlightActiveLink(container) {
  const links = container.querySelectorAll("a");
  const path = window.location.pathname;

  links.forEach(link => {
    const href = link.getAttribute("href");

    if (href !== "/" && path.startsWith(href)) {
      link.classList.add("active");
    }

    if (href === "/" && path === "/") {
      link.classList.add("active");
    }
  });
}

loadComponent("nav", "/components/nav.html");