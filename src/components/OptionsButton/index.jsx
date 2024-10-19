import { useEffect, useState } from "react";
import "./styles.scss";
import ExportSVG from "../ExportSVG";
import ImportSVG from "../ImportSVG";

export default function OptionsButton() {
  const [bttnOpen, setBttOpen] = useState(false);

  const optionFocuseOut = (e) => {
    if (!e.target.closest(".options_bttn")) {
      setBttOpen(false);
      window.removeEventListener("click", optionFocuseOut);
    }
  };

  useEffect(() => {
    if (bttnOpen) {
      window.addEventListener("click", optionFocuseOut);
    }
  }, [bttnOpen]);

  return (
    <div className="options">
      <button
        className={`options_bttn`}
        onClick={() => setBttOpen(!bttnOpen)}
      >
        <span>Опции</span>
        <div className="icon">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0" />

            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M8.75 13.5C10.2869 13.5 11.5747 14.5668 11.9131 16.0003L21.25 16C21.6642 16 22 16.3358 22 16.75C22 17.1297 21.7178 17.4435 21.3518 17.4932L21.25 17.5L11.9129 17.5007C11.5741 18.9337 10.2866 20 8.75 20C7.21345 20 5.92594 18.9337 5.58712 17.5007L2.75 17.5C2.33579 17.5 2 17.1642 2 16.75C2 16.3703 2.28215 16.0565 2.64823 16.0068L2.75 16L5.58688 16.0003C5.92534 14.5668 7.21309 13.5 8.75 13.5ZM15.25 4C16.7869 4 18.0747 5.06682 18.4131 6.50034L21.25 6.5C21.6642 6.5 22 6.83579 22 7.25C22 7.6297 21.7178 7.94349 21.3518 7.99315L21.25 8L18.4129 8.00066C18.0741 9.43368 16.7866 10.5 15.25 10.5C13.7134 10.5 12.4259 9.43368 12.0871 8.00066L2.75 8C2.33579 8 2 7.66421 2 7.25C2 6.8703 2.28215 6.55651 2.64823 6.50685L2.75 6.5L12.0869 6.50034C12.4253 5.06682 13.7131 4 15.25 4Z"
                fill="#788398"
              />{" "}
            </g>
          </svg>
        </div>
      </button>

      <div className={`options_list ${bttnOpen && "options_list_active"}`}>
        <div
          className="options_list_item"
          onClick={() => setBttOpen(!bttnOpen)}
        >
          <span>Экспорт</span>
          <ExportSVG />
        </div>
        <div
          className="options_list_item"
          onClick={() => setBttOpen(!bttnOpen)}
        >
          <span>Импорт</span>
          <ImportSVG />
        </div>
      </div>
    </div>
  );
}
