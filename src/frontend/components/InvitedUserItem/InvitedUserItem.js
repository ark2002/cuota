import "./InvitedUserItem.css";

const InvitedUserItem = ({ user }) => {
  const { name, profileType, memberCount, profileImg, access } = user;
  return (
    <div className="base-widget__invited-item flex__row-center">
      <img src={profileImg} alt="oslash__logo" className="user__img" />
      <div className="invited-user__details flex__column">
        <p className="widget__text-large bold user__name">{name}</p>
        {profileType === "group" && (
          <p className="widget__text-small">{memberCount} workspace members</p>
        )}
      </div>
      <div className="invited-user__permission flex__row-center">
        <p className="widget__text-small">{access}</p>
        <span className="material-icons expand__icon">expand_more</span>
      </div>
    </div>
  );
};

export { InvitedUserItem };
