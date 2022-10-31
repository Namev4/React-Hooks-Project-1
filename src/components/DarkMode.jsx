import React, { useState } from "react";

const DarkMode = () => {
  const [buttonText, setButtonText] = useState(true);
  const [BackgroundColor, setBackgroundColor] = useState("#ffffff");

  const changeText = () => {
    if (buttonText === true && BackgroundColor === "#ffffff") {
      setButtonText(false);
      setBackgroundColor((document.body.style.background = "#121212"));
    } else {
      setButtonText(true);
      setBackgroundColor((document.body.style.background = "#ffffff"));
    }
  };

  return (
    <>
      <div className="content">
        <button onClick={changeText} className="button">
          {buttonText ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </>
  );
};

export default DarkMode;
