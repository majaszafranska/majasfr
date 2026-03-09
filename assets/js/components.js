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

function roll(){
  const faces = ["⚀","⚁","⚂","⚃","⚄","⚅"];
  const dice = document.getElementById("dice");
  const button = document.getElementById("roll-btn");

  button.disabled = true;
  dice.classList.add("rolling");

  let i = 0;

  const interval = setInterval(()=>{
    dice.textContent = faces[Math.floor(Math.random()*6)];
    i++;

    if(i > 12){
      clearInterval(interval);

      dice.classList.remove("rolling");
      dice.textContent = faces[Math.floor(Math.random()*6)];

      button.disabled = false;
    }

  },120);
}