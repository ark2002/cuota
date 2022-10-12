import { useState } from "react";
import { BaseWidget } from "../BaseWidget/BaseWidget";
import { ShareButton } from "../ShareButton/ShareButton";
import "./Main.css";

const Main = () => {
  const [isWidget, setIsWidget] = useState(null);
  return (
    <div className="main__container">
      <ShareButton isWidget={isWidget} setIsWidget={setIsWidget} />
      {isWidget && (
        <div className="widget__container">
          <BaseWidget isWidget={isWidget} setIsWidget={setIsWidget} />
        </div>
      )}
    </div>
  );
};

export { Main };
