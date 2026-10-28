import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400-italic.css";
import App from "./App.tsx";
import "./index.css";
import "./styles/tokens.css";
import "./styles/site.css";

const root = document.getElementById("root")!;
// Production HTML is prerendered, so hydrate it; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <App />);
else createRoot(root).render(<App />);
