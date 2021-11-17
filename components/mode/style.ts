import { css, Theme } from "@emotion/react";

export const mode = (theme: Theme) => css`
  button[aria-checked="true"] {
    background-color: ${theme.btn} !important;
  }
  ${theme.deskTop} {
  }
`;
