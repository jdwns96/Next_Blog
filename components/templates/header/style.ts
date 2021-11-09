import { css, Theme } from "@emotion/react";

export const head = (theme: Theme) => css`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${theme.gold};
  background: ${theme.darkgold};

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
  }
`;

export const headInner = (theme: Theme) => css`
  width: 90%;
  height: 100%;
`;
