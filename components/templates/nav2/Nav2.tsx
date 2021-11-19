import Link from "next/link";
import { nav, navInner, list } from "./style";

interface Props {}

const Nav2 = (props: Props) => {
  return (
    <nav css={nav}>
      <ul css={navInner}>
        <li>
          <Link href="/post">
            <a css={list}>
              <span>전체 포스트</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/post/js">
            <a css={list}>
              <span>자바스크립트</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/post/ts">
            <a css={list}>
              <span>타입스크립트</span>
            </a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav2;
