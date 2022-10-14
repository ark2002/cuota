import { useInvite } from "../../context/InviteContext";
import "./AccessDropdown.css";

const AccessDropdown = ({ setIsAccess, name, isWidget }) => {
  const accessArray = ["Full access", "Can Edit", "Can View", "No access"];

  const { dispatchList } = useInvite();

  const accessHandler = (access) => {
    if (isWidget === "search") {
      setIsAccess({ showList: false, selectedAccess: access });
    } else {
      setIsAccess(false);
      dispatchList({
        type: "changeAccess",
        payload: { name: name, access: access },
      });
    }
  };

  return (
    <div className="access__dropdown flex__column">
      {accessArray.map((access) => (
        <p
          key={access}
          className={`access-dropdown__item widget__text-large ${
            access === "No access" ? "no-access" : ""
          }`}
          onClick={() => accessHandler(access)}
        >
          {access}
        </p>
      ))}
      {isWidget !== "search" && (
        <p
          className="access-dropdown__item widget__text-large delete"
          onClick={() => dispatchList({ type: "uninvite", payload: name })}
        >
          Delete
        </p>
      )}
    </div>
  );
};

export { AccessDropdown };
