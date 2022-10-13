import "./PublishSwitch.css";

const PublishSwitch = () => {
  return (
    <label className="switch">
      <input className="switch__checkbox" type="checkbox" />
      <span className="slider round"></span>
    </label>
  );
};

export { PublishSwitch };
