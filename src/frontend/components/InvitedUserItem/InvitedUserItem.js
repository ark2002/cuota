import "./InvitedUserItem.css";

const InvitedUserItem = () => {
  return (
    <div className="base-widget__invited-item flex__row-center">
      <img
        src="https://global-uploads.webflow.com/60c0cec90f5782a19af55867/61516da7bff77f7a1bdbb25e_32%20x%2032.png"
        alt="oslash__logo"
        className="invited-user__img"
      />
      <div className="invited-user__details flex__column">
        <p className="widget__text-large bold">Everyone at OSlash</p>
        <p className="widget__text-small">25 workspace members</p>
      </div>
      <div className="invited-user__permission flex__row-center">
        <p className="widget__text-small">No access</p>
        <span className="material-icons expand__icon">expand_more</span>
      </div>
    </div>
  );
};

export { InvitedUserItem };
