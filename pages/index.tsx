import type { NextPage } from "next";

import { css, Theme } from "@emotion/react";
import { useCallback } from "react";

import Header from "../components/templates/header";

const divStyle = (theme: Theme) => css`
  border: 2px solid ${theme.gold};
  background-color: ${theme.darkgold};
  color: ${theme.lightgold};
`;

const Home: NextPage = (props) => {
  return (
    <>
      <Header />

      <button
        onClick={useCallback((e) => {
          // @ts-ignore
          props.setMode((prev) => !prev);
        }, [])}
      >
        {/* @ts-ignore */}
        {props.mode ? "dark" : "light"}
      </button>
    </>
  );
};

export default Home;
