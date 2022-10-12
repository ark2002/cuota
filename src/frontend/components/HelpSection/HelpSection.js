import "./HelpSection.css";

const HelpSection = () => {
  return (
    <div className="base-widget__bottom flex__row-center">
      <div className="base-widget__help flex__row-center">
        <span className="material-icons help__icon">help_outline</span>
        <p className="widget__text-small">learn about sharing</p>
      </div>
      <div className="base-widget__copy-link flex__row-center">
        <span className="material-icons link__icon">link</span>
        <p className="widget__text-small bold">Copy Link</p>
      </div>
    </div>
  );
};

export { HelpSection };
