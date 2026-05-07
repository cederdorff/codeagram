import { HeaderActions } from "./HeaderActions.jsx";
import { HeaderBrand } from "./HeaderBrand.jsx";

export function Header() {
  return (
    <div className="app-header">
      <HeaderBrand />
      <HeaderActions />
    </div>
  );
}
