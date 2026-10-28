import { renderToString } from "react-dom/server";
import { resolveRoute } from "./routes";

export function render(path = "/") {
  const Page = resolveRoute(path) ?? resolveRoute("/")!;
  return renderToString(<Page />);
}

export { routePaths } from "./routes";
export { pageMetas, metaFor } from "./seo/meta";
export { buildJsonLd } from "./seo/jsonld";
export { buildLlmsFullTxt, buildLlmsTxt, buildSitemap } from "./seo/files";
