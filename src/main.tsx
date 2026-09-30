import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import App from "./App.tsx";
import "./index.css";
import { startAnimatedFavicon } from "./lib/animatedFavicon";

createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <App />
  </HelmetProvider>
);

// Start the tab-icon animation once the page has settled, so it never competes with first paint.
const idle = (cb: () => void) => {
  if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(cb, { timeout: 2500 });
  else setTimeout(cb, 1200);
};
window.addEventListener("load", () => idle(() => startAnimatedFavicon()), { once: true });
