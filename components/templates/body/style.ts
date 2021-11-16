import { css, Theme } from "@emotion/react";

export const body = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  ${theme.deskTop} {
  }
`;
export const bodyInner = (theme: Theme) => css`
  padding: 1rem 0;
  width: 95%;
  ${theme.deskTop} {
    width: 90%;
  }
`;
