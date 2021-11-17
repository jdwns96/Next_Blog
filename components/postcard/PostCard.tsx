import { postcard, leftBox, rightBox } from "./style";

interface Props {}

const PostCard = (props: Props) => {
  return (
    <article css={postcard}>
      <div css={leftBox}>img</div>
      <div css={rightBox}>
        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</div>
        <div>2</div>
        <div>3</div>
      </div>
    </article>
  );
};

export default PostCard;
