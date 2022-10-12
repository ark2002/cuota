import { HelpSection } from "../HelpSection/HelpSection";
import { InvitedUsersSection } from "../InvitedUsersSection/InvitedUsersSection";
import { PublishSection } from "../PublishSection/PublishSection";
import { SearchInput } from "../SearchInput/SearchInput";
import "./BaseWidget.css";

const BaseWidget = ({ isWidget, setIsWidget }) => {
  return (
    <div className="base-widget__container flex__column-center">
      <PublishSection />
      <div
        onClick={() => setIsWidget("search")}
        className="base-widget-search__wrapper"
      >
        <SearchInput isWidget={isWidget} />
      </div>
      <InvitedUsersSection />
      <HelpSection />
    </div>
  );
};

export { BaseWidget };
