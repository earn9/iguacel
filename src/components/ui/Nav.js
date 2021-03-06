import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "../ui_styles/nav.css";
import { useSpring, animated } from "react-spring";
import { useMeasure } from "react-use";
import { useLocation } from "react-router-dom";
import pageviews from "../../utils/pageviews";
import ThemeContext from "../../context/ThemeContext";
import { LanguageContext } from "../../context/LanguageContext";

// Sound imports
import useSound from "use-sound";
import { volume } from "../sound/volume";
import clickSound from "../sound/click.mp3";
import infoSound from "../sound/info.mp3";
// Index
import index, { NUM } from "../../exp/index.js";

import { truncate } from "../../utils/utils";

const Nav = () => {
  const languageContext = useContext(LanguageContext);
  const languageId = languageContext.language.id;

  let { pathname } = useLocation();
  let currentPage = +pathname.split("/")[2];
  let pageId = `exp_${currentPage}`;
  let title =
    index[pageId] && languageId && index[pageId].title[languageId]
      ? index[pageId].title[languageId]
      : `${currentPage} / ${NUM}`;
  let info = index[pageId] && index[pageId].info[languageId];
  let tools = index[pageId] && index[pageId].tools;

  return (
    <div className="navMain">
      <Accordion
        currentPage={currentPage}
        title={title}
        info={info}
        tools={tools}
      />
    </div>
  );
};

export default Nav;

const Accordion = ({ currentPage, title, info, tools }) => {
  const [on, toggle] = useState(false);
  const [ref, { height, top }] = useMeasure();

  const { dark } = useContext(ThemeContext);

  const [playClick] = useSound(clickSound, { volume });
  const [playInfo] = useSound(infoSound, { volume });

  const animation = useSpring({
    height: on ? height + top * 2 : 0,
  });

  useEffect(() => {
    document.title = `${title}`;
    if (dark) {
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#000000");
    } else {
      document
        .querySelector("meta[name=theme-color]")
        .setAttribute("content", "#FFFFFF");
    }
  });

  return (
    <div className="navWrapper">
      <div
        className="navButtons"
        style={{
          display: "flex",
          height: "40px",
        }}
      >
        <div
          className="title"
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "1em",
            flex: "0 1 100%",
          }}
        >
          <h1 style={{ fontSize: "1.2em", lineHeight: "1.2em" }}>
            {" "}
            {truncate(title, 20)}
          </h1>
        </div>

        <div
          className="infoButton"
          onClick={() => {
            toggle(!on);
            playInfo();
            pageviews(`${currentPage}-info)`);
          }}
        >
          {tools && <InfoIcon on={on} />}
        </div>
        <div className="prevButton">
          <Link
            onClick={() => {
              toggle(false);
              playClick();
              pageviews(currentPage - 1);
            }}
            to={currentPage === 1 ? `/exp/${NUM}` : `/exp/${currentPage - 1}`}
          >
            <PrevIcon />
          </Link>
        </div>
        <div className="nextButton">
          <Link
            onClick={() => {
              toggle(false);
              playClick();
              pageviews(currentPage + 1);
            }}
            to={currentPage === NUM ? `/exp/1` : `/exp/${currentPage + 1}`}
          >
            {" "}
            <NextIcon />
          </Link>
        </div>
      </div>

      {/* INFO PANEL */}
      <animated.div className="navInfo" style={{ ...animation }}>
        <div
          ref={ref}
          style={{
            borderTop: "1px solid var(--foreground-color)",
            padding: "1em",
            margin: "0 auto",
          }}
        >
          {tools && (
            <p
              className="pm regular"
              style={{
                fontSize: "0.9em",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
              }}
            >
              {tools}
            </p>
          )}

          {info && info}
        </div>
      </animated.div>
    </div>
  );
};

const NextIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 20 20"
      style={{
        flex: "0 0 40px",
        borderLeft: "1px solid var(--foreground-color)",
      }}
    >
      <path fill="var(--foreground-color)" d="M14.8 10L6.7 5.5v9l8.1-4.5z" />
      <title>Next</title>
    </svg>
  );
};
const PrevIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 20 20"
      style={{
        flex: "0 0 40px",
        borderLeft: "1px solid var(--foreground-color)",
      }}
    >
      <path
        d="M5.4 10l8.1 4.5v-9L5.4 10z"
        fill="var(--foreground-color)"
      ></path>
      <title>Previous</title>
    </svg>
  );
};

const InfoIcon = (on) => {
  return (
    <div style={{ cursor: "pointer" }}>
      {on && (
        <svg
          width="40"
          height="40"
          viewBox="-2 -1.5 24 24"
          style={{
            flex: "0 0 40px",
            borderLeft: "1px solid var(--foreground-color)",
          }}
        >
          <path
            fill="var(--foreground-color)"
            d="M13.1 15.2H6.9v-1.6H9V10H7.1V8.3h4.1v5.3h1.9v1.6zM9.9 4.1c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z"
          />
          <title>Info</title>
        </svg>
      )}
    </div>
  );
};
