import { PublishSwitch } from "../PublishSwitch/PublishSwitch";
import "./PublishSection.css";

const PublishSection = () => {
  return (
    <div className="base-widget__top flex__row-center">
      <span className="material-icons public__icon">public</span>
      <div className="base-widget__top-details flex__column">
        <p className="widget__text-large bold">Share to web</p>
        <p className="widget__text-small">Publish and share link with anyone</p>
      </div>
      <div className="base-widget__switch">
        <PublishSwitch />
      </div>
    </div>
  );
};

export { PublishSection };
