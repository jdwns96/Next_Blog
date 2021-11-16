import type { NextPage } from "next";

import { css, Theme } from "@emotion/react";
import { useCallback } from "react";

import Header from "../components/templates/header";
import Footnav from "@components/templates/footnav";
import Footer from "@components/templates/footer";

const divStyle = (theme: Theme) => css`
  border: 2px solid ${theme.gold};
  background-color: ${theme.darkgold};
  color: ${theme.lightgold};
`;

const Home: NextPage = (props) => {
  return (
    <>
      <Header />

      {/* <button
        onClick={useCallback((e) => {
          // @ts-ignore
          props.setMode((prev) => !prev);
        }, [])}
      >
        @ts-ignore
        {props.mode ? "dark" : "light"}
      </button> */}
      <Footnav />
      <Footer />
    </>
  );
};

export default Home;
