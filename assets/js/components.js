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
    if (link.getAttribute("href") === path) {
      link.classList.add("active");
    }
  });
}

loadComponent("nav", "/components/nav.html");