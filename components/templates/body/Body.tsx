import { body, bodyInner } from "./style";

const Body = ({ children }: { children: JSX.Element }) => {
  return (
    <main css={body}>
      <div css={bodyInner}>{children}</div>
    </main>
  );
};

export default Body;
