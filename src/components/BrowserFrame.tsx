import type { MouseEvent } from "react";

type Props = { src: string; alt: string; url: string; onClick?: (e: MouseEvent<HTMLElement>) => void };

// A screenshot inside a browser window, so web and admin screens read as real products.
export function BrowserFrame({ src, alt, url, onClick }: Props) {
  return (
    <span className="bwin" onClick={onClick}>
      <span className="bwin__bar" aria-hidden="true" data-url={url}>
        <i /><i /><i />
      </span>
      <img src={src} alt={alt} width={1800} height={927} loading="lazy" decoding="async" />
    </span>
  );
}
