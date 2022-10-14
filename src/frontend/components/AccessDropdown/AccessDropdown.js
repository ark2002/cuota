import { useRef } from "react";
import { useInvite } from "../../context/InviteContext";
import { useOnClickOutside } from "../../hooks/onClickOutsideHook";
import "./AccessDropdown.css";

const AccessDropdown = ({ isAccess, setIsAccess, name, isWidget }) => {
  const accessArray = ["Full access", "Can Edit", "Can View", "No access"];
  const ref = useRef();

  useOnClickOutside(ref, () =>
    isWidget === "search"
      ? setIsAccess({ ...isAccess, showList: false })
      : setIsAccess(false)
  );

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
    <div className="access__dropdown flex__column" ref={ref}>
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
