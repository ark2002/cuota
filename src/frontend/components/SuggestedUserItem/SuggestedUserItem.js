import { useInvite } from "../../context/InviteContext";
import "./SuggestedUserItem.css";

const SuggestedUserItem = ({ user }) => {
  const { name, profileImg } = user;
  const { list, dispatchList } = useInvite();
  console.log(list);
  return (
    <div
      className="suggested-item__container flex__row-center"
      onClick={() => dispatchList({ type: "select", payload: name })}
    >
      <img src={profileImg} className="user__img" alt="user__img" />
      <p className="widget__text-large bold user__name">{name}</p>
    </div>
  );
};

export { SuggestedUserItem };
