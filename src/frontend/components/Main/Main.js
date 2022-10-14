import { useState } from "react";
import { BaseWidget } from "../BaseWidget/BaseWidget";
import { SearchWidget } from "../SearchWidget/SearchWidget";
import { ShareButton } from "../ShareButton/ShareButton";
import "./Main.css";

const Main = () => {
  const [isWidget, setIsWidget] = useState("");
  return (
    <div className="main__container">
      <ShareButton isWidget={isWidget} setIsWidget={setIsWidget} />
      {isWidget && (
        <div className="widget__container">
          {isWidget === "base" ? (
            <BaseWidget isWidget={isWidget} setIsWidget={setIsWidget} />
          ) : (
            <SearchWidget isWidget={isWidget} setIsWidget={setIsWidget} />
          )}
        </div>
      )}
    </div>
  );
};

export { Main };
