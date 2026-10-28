import { renderToString } from "react-dom/server";
import App from "./App";

export function render() {
  return renderToString(<App />);
}

export { buildJsonLd } from "./seo/jsonld";
export { buildLlmsFullTxt, buildLlmsTxt, buildSitemap } from "./seo/files";
