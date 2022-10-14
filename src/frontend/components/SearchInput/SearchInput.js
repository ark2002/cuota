import { useState } from "react";
import { useInvite } from "../../context/InviteContext";
import { AccessDropdown } from "../AccessDropdown/AccessDropdown";
import { SelectedUserChip } from "../SelectedUserChip/SelectedUserChip";
import "./SearchInput.css";

const SearchInput = ({ isWidget, setIsWidget }) => {
  const { list, dispatchList } = useInvite();

  const { searchInput, selectedList } = list;

  const [isAccess, setIsAccess] = useState({
    showList: false,
    selectedAccess: "No access",
  });

  const { showList, selectedAccess } = isAccess;

  return (
    <div className="base-widget__search-container flex__row">
      <div className="search-container__left flex__row-center">
        {isWidget === "search" && (
          <>
            {selectedList.map((user) => (
              <SelectedUserChip user={user} key={user.id} />
            ))}
          </>
        )}
        <input
          className="search__input"
          placeholder="People, emails, groups"
          autoFocus={isWidget === "search"}
          value={searchInput}
          onChange={(e) => {
            dispatchList({ type: "search", payload: e.target.value });
          }}
        />
      </div>
      <div className="search-container__choices flex__row-center">
        {isWidget === "search" && (
          <div
            className="invited-user__permission flex__row-center"
            onClick={() => setIsAccess({ ...isAccess, showList: !showList })}
          >
            <p className="widget__text-small">{selectedAccess}</p>
            <span className="material-icons expand__icon">expand_more</span>
          </div>
        )}
        {showList && (
          <AccessDropdown
            isAccess={isAccess}
            setIsAccess={setIsAccess}
            isWidget={isWidget}
          />
        )}
        <button
          className="invite__btn bold"
          onClick={() => {
            dispatchList({ type: "invited", payload: selectedAccess });
            setIsAccess({ showList: false, selectedAccess: "No access" });
            setIsWidget("base");
          }}
          disabled={selectedList.length < 1}
        >
          Invite
        </button>
      </div>
    </div>
  );
};

export { SearchInput };
