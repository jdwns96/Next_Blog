import { css, Theme } from "@emotion/react";

export const head = (theme: Theme) => css`
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${theme.gold};

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
  }
`;

export const headInner = (theme: Theme) => css`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: space-between;
`;

export const headLogo = (theme: Theme) => css`
  align-self: center;
`;

export const headHamberger = (theme: Theme) => css`
  font-size: 1.25rem;
  align-self: center;

  cursor: pointer;

  ${theme.deskTop} {
    display: none;
  }
`;

export const headLoginBox = (theme: Theme) => css`
  display: none;

  ${theme.deskTop} {
    align-self: center;
    display: flex;

    & > button:nth-child(2) {
      margin-left: 0.5rem;
    }
  }
`;

export const memberBtn = (theme: Theme) => css`
  background-color: black;

  &:hover {
  }
`;
