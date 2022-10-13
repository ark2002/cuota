// import { useState } from "react";
import { useInvite } from "../../context/InviteContext";
import "./SearchInput.css";

const SearchInput = ({ isWidget }) => {
  const {
    list: { searchInput },
    dispatchList,
  } = useInvite();
  return (
    <div className="base-widget__search-container flex__row-center">
      <input
        className="search__input"
        placeholder="People, emails, groups"
        autoFocus={isWidget === "search"}
        value={searchInput}
        onChange={(e) => {
          dispatchList({ type: "search", payload: e.target.value });
        }}
      />
      <div className="search-container__choices flex__row-center">
        {isWidget === "search" && (
          <div className="invited-user__permission flex__row-center">
            <p className="widget__text-small">No access</p>
            <span className="material-icons expand__icon">expand_more</span>
          </div>
        )}
        <button className="invite__btn bold">Invite</button>
      </div>
    </div>
  );
};

export { SearchInput };
