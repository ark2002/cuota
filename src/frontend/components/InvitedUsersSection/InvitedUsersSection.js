import { InvitedUserItem } from "../InvitedUserItem/InvitedUserItem";
import "./InvitedUsersSection.css";

const InvitedUsersSection = () => {
  return (
    <div className="base-widget__invited-section flex__column-center">
      <InvitedUserItem />
    </div>
  );
};

export { InvitedUsersSection };
