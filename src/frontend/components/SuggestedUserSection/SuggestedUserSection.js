import { SuggestedUserItem } from "../SuggestedUserItem/SuggestedUserItem";
import "./SuggestedUserSection.css";

const SuggestedUserSection = ({ type, list }) => {
  return (
    <div className="search-widget__suggestions flex__column">
      <p className="widget__text-large suggestions__heading">Select a {type}</p>
      {list.map((user) => (
        <SuggestedUserItem user={user} key={user.id} />
      ))}
    </div>
  );
};

export { SuggestedUserSection };
