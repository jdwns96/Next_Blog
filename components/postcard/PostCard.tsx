import { postcard, leftBox, rightBox, rightBoxTitle, rightBoxLine, rightBoxTagBox, rightBoxTag, rightBoxDate, rightBoxSubscribe } from "./style";
import Image from "next/image";
import image1 from "@styles/assets/image1.jpeg";

interface Props {}

const PostCard = (props: Props) => {
  return (
    <article css={postcard}>
      <div css={leftBox}>
        <Image src={image1} alt="sumnail" />
      </div>
      <div css={rightBox}>
        <div css={rightBoxTitle}>Lorem ipsum dolor sit .</div>
        <hr css={rightBoxLine} />
        <div css={rightBoxTagBox}>
          <p css={rightBoxTag}>자바스크립트</p>
          <p css={rightBoxDate}>2021/11/18</p>
        </div>
        <div css={rightBoxSubscribe}>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
      </div>
    </article>
  );
};

export default PostCard;
