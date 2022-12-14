import { useRef, useState } from "react";
import { useInvite } from "../../context/InviteContext";
import { useOnClickOutside } from "../../hooks/onClickOutsideHook";
import { HelpSection } from "../HelpSection/HelpSection";
import { SearchInput } from "../SearchInput/SearchInput";
import { SuggestedUserSection } from "../SuggestedUserSection/SuggestedUserSection";
import "./SearchWidget.css";

const SearchWidget = ({ isWidget, setIsWidget }) => {
  const [search, setSearch] = useState("");

  const {
    list: { userList, groupList },
    dispatchList,
  } = useInvite();

  const ref = useRef();
  useOnClickOutside(ref, () => {
    setIsWidget("");
    dispatchList({ type: "reset" });
  });

  return (
    <div className="search-widget__container flex__column-center" ref={ref}>
      <SearchInput
        isWidget={isWidget}
        setIsWidget={setIsWidget}
        search={search}
        setSearch={setSearch}
      />
      {userList.length || groupList.length > 0 ? (
        <>
          {userList.length > 0 && (
            <SuggestedUserSection type={"person"} list={userList} />
          )}
          {groupList.length > 0 && (
            <SuggestedUserSection type={"group"} list={groupList} />
          )}
        </>
      ) : (
        <h2>no results :( </h2>
      )}
      <div className="help__section">
        <HelpSection isWidget={isWidget} />
      </div>
    </div>
  );
};

export { SearchWidget };
