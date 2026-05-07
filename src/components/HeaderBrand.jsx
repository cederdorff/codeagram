import { CodeXml } from "lucide-react";

export function HeaderBrand() {
  return (
    <a className="brand" href="/">
      <span className="brand-mark">
        <CodeXml size={20} strokeWidth={2} />
      </span>
      <span className="brand-copy">
        <span className="brand-title">Codeagram</span>
        <span className="brand-subtitle">Share your coding moments</span>
      </span>
    </a>
  );
}
