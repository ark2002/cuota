import { useInvite } from "../../context/InviteContext";
import { SelectedUserChip } from "../SelectedUserChip/SelectedUserChip";
import "./SearchInput.css";

const SearchInput = ({ isWidget }) => {
  const {
    list: { searchInput, selectedList },
    dispatchList,
  } = useInvite();

  return (
    <div className="base-widget__search-container flex__row">
      <div className="search-container__left flex__row-center">
        {selectedList.map((user) => (
          <SelectedUserChip user={user} />
        ))}
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
