import { css, Theme } from "@emotion/react";

export const body = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  min-height: calc(100vh - 256px);

  ${theme.deskTop} {
  }
`;
export const bodyInner = (theme: Theme) => css`
  padding: 1rem 0;
  width: 95%;
  align-self: stretch;

  ${theme.deskTop} {
    width: 90%;
  }
`;
