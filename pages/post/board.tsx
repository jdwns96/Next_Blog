import type { NextPage } from "next";

import Header from "@components/templates/header";
import Nav from "@components/templates/nav";
// import Nav2 from "@components/templates/nav2";
import Body from "@components/templates/body";
import Footnav from "@components/templates/footnav";
import Footer from "@components/templates/footer";
import Sidenav from "@components/templates/sidenav";

import Board from "@components/board";

const Post: NextPage = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <Sidenav />
      <Body>
        <>
          <Board />
        </>
      </Body>
      <Footer />
      <Footnav />
    </>
  );
};

export default Post;
