import { css, Theme } from "@emotion/react";

export const footer = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
  }
`;
export const footerInner = (theme: Theme) => css`
  width: 90%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${theme.deskTop} {
  }
`;
export const footerLicense = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
  }
`;

export const footerList = (theme: Theme) => css`
  display: flex;
  justify-content: center;

  & > li {
    font-size: 1.25rem;
    margin: 0 0.25rem;
  }

  ${theme.deskTop} {
  }
`;
export const mode = (theme: Theme) => css`
  align-self: flex-end;
`;
