import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/inter";
import "@fontsource-variable/jetbrains-mono";
import "@fontsource/instrument-serif/400-italic.css";
import App from "./App.tsx";
import "./index.css";
import "./styles/tokens.css";
import "./styles/site.css";

createRoot(document.getElementById("root")!).render(<App />);
