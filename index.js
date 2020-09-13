document.addEventListener("DOMContentLoaded", () => {
    document.documentElement.classList.remove("no-js");
  
    const selectElement = (selector) => document.querySelector(selector);
    const currentTheme = localStorage.getItem("theme") || null;
    const themeSwitch = selectElement("#SVGThemeSwitch");
  
    function applyColorTheme(theme) {
      document.documentElement.setAttribute("data-theme", theme);
      localStorage.setItem("theme", theme);
    }

    function applyPreferedTheme() {
      let prefersDarkTheme = false;
  
      if (window.matchMedia)
        prefersDarkTheme = window.matchMedia("(prefers-color-scheme: dark)")
          .matches;
  
      if (prefersDarkTheme) {
        selectElement("#sun").classList.add("activeThemeIcon");
        applyColorTheme("dark");
      } else {
        selectElement("#moon").classList.add("activeThemeIcon");
        applyColorTheme("light");
      }
    }
  
    function initTheme(theme) {
      if (theme == "light") {
        selectElement("#moon").classList.add("activeThemeIcon");
      } else if (theme == "dark") {
        selectElement("#sun").classList.add("activeThemeIcon");
      }
    }
  
    if (currentTheme) {
      initTheme(currentTheme);
      applyColorTheme(currentTheme);
    } else {
      applyPreferedTheme();
    }
  
    function switchTheme(e) {
      e.preventDefault();
  
      document.querySelectorAll(".clr").forEach((icon) => {
        if (icon.classList.contains("activeThemeIcon")) {
          icon.classList.remove("activeThemeIcon");
        } else {
          icon.classList.add("activeThemeIcon");
  
          if (icon.id == "moon") {
            applyColorTheme("light");
          } else if (icon.id == "sun") {
            applyColorTheme("dark");
          }
  
          if (!icon.classList.contains("animateThemeIcon"))
            icon.classList.add("animateThemeIcon");
        }
      });
    }
  
    themeSwitch.addEventListener("click", switchTheme, false);
  });
  