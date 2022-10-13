import { InvitedUserItem } from "../InvitedUserItem/InvitedUserItem";
import "./InvitedUsersSection.css";

const InvitedUsersSection = ({ inviteList }) => {
  return (
    <div className="base-widget__invited-section flex__column-center">
      {inviteList.map((user) => (
        <InvitedUserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export { InvitedUsersSection };
