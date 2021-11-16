import { css, Theme } from "@emotion/react";

export const footnav = (theme: Theme) => css`
  width: 100%;
  height: 72px;

  position: fixed;
  bottom: 0;

  border-top: 1px solid #000;

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
    display: none;
  }
`;
export const footnavInner = (theme: Theme) => css`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  ${theme.deskTop} {
  }
`;
export const footnavList = (theme: Theme) => css`
  ${theme.deskTop} {
  }
`;
