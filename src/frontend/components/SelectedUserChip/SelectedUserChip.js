import { useInvite } from "../../context/InviteContext";
import "./SelectedUserChip.css";

const SelectedUserChip = ({ user }) => {
  const { dispatchList } = useInvite();
  return (
    <div className="selected-user__chip flex__row-center" key={user.id}>
      <p className="widget__text-small">{user.name}</p>
      <span
        className="material-icons chip__close"
        onClick={() => dispatchList({ type: "deselect", payload: user })}
      >
        close
      </span>
    </div>
  );
};

export { SelectedUserChip };
