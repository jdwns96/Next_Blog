import { css, Theme } from "@emotion/react";

export const head = (theme: Theme) => css`
  position: sticky;
  top: 0;
  z-index: 9999;
  width: 100%;
  height: 72px;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
    border-bottom: none;
  }
`;

export const headInner = (theme: Theme) => css`
  width: 95%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  ${theme.deskTop} {
    justify-content: flex-end;
    width: 90%;
    max-width: 1920px;
  }
`;

export const headLogo = (theme: Theme) => css`
  position: relative;
  align-self: center;
  width: 160px;
  cursor: pointer;

  ${theme.deskTop} {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0%);
  }
`;

export const headHamberger = (theme: Theme) => css`
  font-size: 1.25rem;
  align-self: center;
  color: ${theme.icon};

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
  background-color: ${theme.btn};
  border-color: ${theme.border};
  color: #000;
  &:hover {
    background-color: ${theme.btn};
    border-color: ${theme.border};
  }
`;
export const loginBtn = (theme: Theme) => css`
  border-color: ${theme.border};
  color: ${theme.fontColor};
  &:hover {
  }
`;
export const userBox = (theme: Theme) => css`
  display: none;
  ${theme.deskTop} {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    & > .userBox__namespace {
      font-size: 0.9rem;
      border: 1px solid ${theme.border};
      background-color: #333;
      padding: 0.25rem 0.5rem;
    }

    & > .userBox__user {
      width: 48px;
      height: 48px;
      border: 1px solid ${theme.border};
      border-radius: 50%;
      margin-left: 1rem;
      background-color: #333;

      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
    }
  }
`;
