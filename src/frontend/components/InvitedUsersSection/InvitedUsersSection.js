import axios from "axios";
import { useEffect, useState } from "react";
import { InvitedUserItem } from "../InvitedUserItem/InvitedUserItem";
import "./InvitedUsersSection.css";

const InvitedUsersSection = () => {
  const [dataList, setDataList] = useState([]);
  const [inviteList, setInviteList] = useState([
    {
      id: 5,
      name: "OSlash",
      profileType: "group",
      memberCount: 25,
      profileImg:
        "https://global-uploads.webflow.com/60c0cec90f5782a19af55867/61516da7bff77f7a1bdbb25e_32%20x%2032.png",
      access: "No access",
    },
  ]);

  return (
    <div className="base-widget__invited-section flex__column-center">
      {inviteList.map((user) => (
        <InvitedUserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export { InvitedUsersSection };
