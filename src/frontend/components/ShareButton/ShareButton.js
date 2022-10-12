import "./ShareButton.css";

const ShareButton = ({ isWidget, setIsWidget }) => {
  return (
    <button
      className="main-share__btn flex__row-center"
      onClick={() => setIsWidget(isWidget ? null : "base")}
    >
      <span>Share</span>
      <span className="material-icons share__icon">share</span>
    </button>
  );
};

export { ShareButton };
