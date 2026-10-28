import { createRoot, hydrateRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400-italic.css";
import { resolveRoute } from "./routes";
import "./index.css";
import "./styles/tokens.css";
import "./styles/site.css";

const root = document.getElementById("root")!;
const Page = resolveRoute(window.location.pathname) ?? resolveRoute("/")!;
// Production HTML is prerendered, so hydrate it; the dev server serves an empty root.
if (root.hasChildNodes()) hydrateRoot(root, <Page />);
else createRoot(root).render(<Page />);
