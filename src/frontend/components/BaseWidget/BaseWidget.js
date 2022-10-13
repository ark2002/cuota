import { useEffect, useState } from "react";
import { useInvite } from "../../context/InviteContext";
import { HelpSection } from "../HelpSection/HelpSection";
import { InvitedUsersSection } from "../InvitedUsersSection/InvitedUsersSection";
import { PublishSection } from "../PublishSection/PublishSection";
import { SearchInput } from "../SearchInput/SearchInput";
import "./BaseWidget.css";

const BaseWidget = ({ isWidget, setIsWidget }) => {
  const [inviteList, setInviteList] = useState([]);
  const {
    list: { dataList },
  } = useInvite();

  useEffect(() => {
    setInviteList(dataList.filter((user) => user.invited));
  }, [dataList]);

  return (
    <div className="base-widget__container flex__column-center">
      <PublishSection />
      <div
        onClick={() => setIsWidget("search")}
        className="base-widget-search__wrapper"
      >
        <SearchInput isWidget={isWidget} inviteList={inviteList} />
      </div>
      <InvitedUsersSection
        inviteList={inviteList}
        setInviteList={setInviteList}
      />
      <HelpSection isWidget={isWidget} />
    </div>
  );
};

export { BaseWidget };
