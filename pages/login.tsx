import type { NextPage } from "next";

import Header from "@components/templates/header";
import Nav from "@components/templates/nav";
import Body from "@components/templates/body";
import Footnav from "@components/templates/footnav";
import Footer from "@components/templates/footer";
import Sidenav from "@components/templates/sidenav";

import Login from "@components/login";

const Home: NextPage = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <Sidenav />
      <Body>
        <Login />
      </Body>
      <Footer />
      <Footnav />
    </>
  );
};

export default Home;
