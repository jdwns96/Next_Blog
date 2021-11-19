import Link from "next/link";

import { nav, navList, list, tooltip, tooltipLi, tooltipLabel } from "./style";
import { TooltipHost, TooltipDelay, DirectionalHint, ITooltipProps } from "@fluentui/react";

const PostProps: ITooltipProps = {
  onRenderContent: () => (
    <ul style={{ margin: 10, padding: 0 }} css={tooltipLi}>
      <li>
        <Link href="/post">
          <a css={tooltipLabel}>
            <span>전체 포스트</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/post/js">
          <a css={tooltipLabel}>
            <span>자바스크립트</span>
          </a>
        </Link>
      </li>
      <li>
        <Link href="/post/ts">
          <a css={tooltipLabel}>
            <span>타입스크립트</span>
          </a>
        </Link>
      </li>
    </ul>
  ),
};

const Nav = () => {
  return (
    <div css={nav}>
      <ul css={navList}>
        <li>
          <Link href="/profile">
            <a css={list}>
              <span className="list__label">프로필</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/portfolio">
            <a css={list}>
              <span className="list__label">포트폴리오</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a css={list}>
              <span className="list__label">홈</span>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/post">
            <a css={list}>
              <TooltipHost tooltipProps={PostProps} delay={TooltipDelay.zero} closeDelay={100} directionalHint={DirectionalHint.bottomCenter} css={tooltip}>
                <span className="list__label">포스트</span>
              </TooltipHost>
            </a>
          </Link>
        </li>
        <li>
          <Link href="/set">
            <a css={list}>
              <span className="list__label">설정</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
