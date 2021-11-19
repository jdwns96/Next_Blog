import { postcard, leftBox, rightBox } from "./style";

interface Props {}

const PostCard = (props: Props) => {
  return (
    <article css={postcard}>
      <div css={leftBox}></div>
      <div css={rightBox}>
        <div>Lorem ipsum dolor sit .</div>
        <div>
          <span>자바스크립트 </span>
          <span>2021/11/18</span>
        </div>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
      </div>
    </article>
  );
};

export default PostCard;
