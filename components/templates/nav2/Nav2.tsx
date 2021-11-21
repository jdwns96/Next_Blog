import Link from "next/link";
import { nav, navInner, navUl, list, board } from "./style";

interface Props {}

const Nav2 = (props: Props) => {
  return (
    <nav css={nav}>
      <div css={navInner}>
        <ul css={navUl}>
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
        <div css={board}>
          <Link href="/post/board">
            <a css={list}>+ 글쓰기</a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav2;
