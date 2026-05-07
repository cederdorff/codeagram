import { Bell, Search } from "lucide-react";

export function HeaderActions() {
  return (
    <div className="header-actions">
      <button className="icon-button" type="button">
        <Search />
      </button>
      <button className="icon-button" type="button">
        <Bell />
        <span className="notification-dot" />
      </button>
      <button className="profile-button" type="button" />
    </div>
  );
}
