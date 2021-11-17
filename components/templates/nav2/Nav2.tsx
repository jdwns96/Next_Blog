import { nav, navInner } from "./style";

interface Props {}

const Nav2 = (props: Props) => {
  return (
    <nav css={nav}>
      <ul css={navInner}>
        <li>전체 포스트</li>
        <li></li>
      </ul>
    </nav>
  );
};

export default Nav2;
