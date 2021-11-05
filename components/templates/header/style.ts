import { css, Theme } from "@emotion/react";

export const header = (theme: Theme) => css`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid ${theme.gold};
  background: ${theme.darkgold};
`;
