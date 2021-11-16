import { TooltipHost, TooltipDelay, DirectionalHint, ITooltipProps } from "@fluentui/react";
import { nav, navList, tooltip, tooltipLi } from "./style";

const PostProps: ITooltipProps = {
  onRenderContent: () => (
    <ul style={{ margin: 10, padding: 0 }} css={tooltipLi}>
      <li>전체 포스트</li>
      <li>자바스크립트</li>
      <li>타입스크립트</li>
    </ul>
  ),
};
const boardProps: ITooltipProps = {
  onRenderContent: () => (
    <ul style={{ margin: 10, padding: 0 }} css={tooltipLi}>
      <li>전체 게시판</li>
      <li>자유 게시판</li>
    </ul>
  ),
};

const Nav = () => {
  return (
    <div css={nav}>
      <ul css={navList}>
        <li>
          <span>소개</span>
        </li>
        <li>
          <TooltipHost tooltipProps={PostProps} delay={TooltipDelay.zero} closeDelay={100} directionalHint={DirectionalHint.bottomCenter} css={tooltip}>
            <span>포스트</span>
          </TooltipHost>
        </li>
        <li>
          <TooltipHost tooltipProps={boardProps} delay={TooltipDelay.zero} closeDelay={100} directionalHint={DirectionalHint.bottomCenter} css={tooltip}>
            <span>게시판</span>
          </TooltipHost>
        </li>
        <li>
          <span>설정</span>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
