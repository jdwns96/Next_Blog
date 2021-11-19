import { postcard, leftBox, rightBox, rightBoxTitle, rightBoxTagBox, rightBoxTag, rightBoxDate, rightBoxSubscribe } from "./style";

interface Props {}

const PostCard = (props: Props) => {
  return (
    <article css={postcard}>
      <div css={leftBox}></div>
      <div css={rightBox}>
        <div css={rightBoxTitle}>Lorem ipsum dolor sit .</div>
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
