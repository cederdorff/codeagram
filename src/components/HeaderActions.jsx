import { Bell, Search, User } from "lucide-react";

export default function HeaderActions() {
  return (
    <div className="header-actions">
      <button className="icon-button" type="button">
        <Search />
      </button>
      <button className="icon-button has-dot" type="button">
        <Bell />
      </button>
      <button className="icon-button" type="button">
        <User />
      </button>
    </div>
  );
}
