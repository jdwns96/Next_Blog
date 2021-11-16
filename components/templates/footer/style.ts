import { css, Theme } from "@emotion/react";

export const footer = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
  /* margin-bottom: 72px; */

  ${theme.deskTop} {
    margin-bottom: 0;
  }
`;
export const footerInner = (theme: Theme) => css`
  width: 95%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${theme.deskTop} {
    width: 90%;
  }
`;
export const footerLicense = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  margin-top: 1rem;

  ${theme.deskTop} {
  }
`;
export const footerList = (theme: Theme) => css`
  display: flex;
  justify-content: center;

  & > li {
    font-size: 1.25rem;
    margin: 0 0.5rem;
    cursor: pointer;
  }

  ${theme.deskTop} {
  }
`;
export const mode = (theme: Theme) => css`
  align-self: flex-end;
`;
