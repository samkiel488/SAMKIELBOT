export const applyTheme = (theme) => {
  const root = document.documentElement;
  if (theme === "system") {
    const systemDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    root.classList.toggle("dark", systemDark);
  } else {
    root.classList.toggle("dark", theme === "dark");
  }
};
