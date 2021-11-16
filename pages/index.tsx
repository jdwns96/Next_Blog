import type { NextPage } from "next";

import { css, Theme } from "@emotion/react";
import { useCallback } from "react";

import Header from "../components/templates/header";
import Nav from "@components/templates/nav";
import Body from "@components/templates/body";
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
      <Nav />
      <Body>
        <div>
          <button
            onClick={useCallback((e) => {
              // @ts-ignore
              props.setMode((prev) => !prev);
            }, [])}
          >
            {/* @ts-ignore */}
            {props.mode ? "dark" : "light"}
          </button>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet.
          Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint
          velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem?
          Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea
          voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam
          dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo
          laboriosam dicta voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor
          quo laboriosam dicta voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur
          dolor quo laboriosam dicta voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore?
          Consequuntur dolor quo laboriosam dicta voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam
          dolore? Consequuntur dolor quo laboriosam dicta voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea
          quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime illum
          similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex. Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Maxime illum similique a, ea quam dolore? Consequuntur dolor quo laboriosam dicta ipsa ea voluptates dolorem? Facere sint velit amet. Dicta, ex.
        </div>
      </Body>
      <Footer />
      <Footnav />
    </>
  );
};

export default Home;
