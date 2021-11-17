import type { NextPage } from "next";

import Header from "@components/templates/header";
import Nav from "@components/templates/nav";
import Body from "@components/templates/body";
import Footnav from "@components/templates/footnav";
import Footer from "@components/templates/footer";
import Sidenav from "@components/templates/sidenav";

import PostCard from "@components/postcard";

const Post: NextPage = (props) => {
  return (
    <>
      <Header />
      <Nav />
      <Sidenav />
      <Body>
        <>
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </>
      </Body>
      <Footer />
      <Footnav />
    </>
  );
};

export default Post;
