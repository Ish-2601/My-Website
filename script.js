// ----------------------------------------------------------
// 1. Dark / light theme toggle
// ----------------------------------------------------------
// The small script in index.html's <head> already picked the starting
// theme (saved choice, or the OS setting) before the page was drawn.
const root = document.documentElement;          // the <html> element
const toggleBtn = document.getElementById("theme-toggle");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  root.setAttribute("data-theme", theme);       // CSS reacts to this attribute
}

toggleBtn.addEventListener("click", () => {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  setTheme(next);
  // localStorage is a tiny key/value store that survives page reloads.
  // try/catch because browsers can block storage (e.g. private mode).
  try { localStorage.setItem("theme", next); } catch (e) {}
});

// If the visitor never clicked the toggle, follow their OS when it changes.
darkQuery.addEventListener("change", (event) => {
  let saved = null;
  try { saved = localStorage.getItem("theme"); } catch (e) {}
  if (!saved) setTheme(event.matches ? "dark" : "light");
});


// ----------------------------------------------------------
// 2. Scroll-reveal animation
// ----------------------------------------------------------
// IntersectionObserver calls our function whenever watched elements
// enter or leave the viewport. Far cheaper than listening to "scroll".
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");  // CSS then fades it in
        revealObserver.unobserve(entry.target); // only animate once
      }
    });
  },
  { threshold: 0.15 }                           // fire when 15% of the element is visible
);

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));


// ----------------------------------------------------------
// 3. Highlight the nav link for the section on screen
// ----------------------------------------------------------
const navLinks = document.querySelectorAll(".site-header nav a");

// rootMargin shrinks the "viewport" to a thin line across the middle of
// the screen, so exactly one section counts as "current" at a time.
const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === "#" + entry.target.id;
        if (isCurrent) link.setAttribute("aria-current", "true");
        else link.removeAttribute("aria-current");
      });
    });
  },
  { rootMargin: "-45% 0px -55% 0px" }
);

document.querySelectorAll("main section[id]").forEach((section) => sectionObserver.observe(section));


// ----------------------------------------------------------
// 4. Footer year stays current automatically
// ----------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
