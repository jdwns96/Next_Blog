import { css, Theme } from "@emotion/react";

export const nav = (theme: Theme) => css`
  display: none;
  position: sticky;
  z-index: 9999;
  top: 72px;

  width: 100%;
  height: 52px;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  ${theme.deskTop} {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const navList = (theme: Theme) => css`
  display: none;
  ${theme.deskTop} {
    display: flex;
    justify-content: center;
    align-items: center;

    width: 90%;
    height: 100%;

    & > li {
      height: 100%;
      font-size: 1rem;
      font-weight: 400;
      cursor: pointer;
      padding: 0 1rem;

      justify-content: center;
      align-items: center;
      height: 100%;

      & > span {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
      }
    }
  }
`;
export const list = (theme: Theme) => css`
  height: 100%;
  font-size: 1rem;
  font-weight: 400;
  cursor: pointer;

  justify-content: center;
  align-items: center;
  height: 100%;

  span.list__label {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
`;

export const tooltip = (theme: Theme) => css`
  ${theme.deskTop} {
    & > div {
      background-color: ${theme.borderBox};
    }
    & > div:nth-child(1) {
      /* 마름모 */
      z-index: 9999;
      box-shadow: none;
      border-left: 1px solid ${theme.border};
      border-top: 1px solid ${theme.border};
      background-color: ${theme.borderBox};
    }
    & > div:nth-child(2) {
      /* 백그라운드 */
      border: 1px solid ${theme.border};
    }
  }
`;
export const tooltipLi = (theme: Theme) => css`
  ${theme.deskTop} {
    & > li {
      padding: 0.5rem;
      font-size: 1.15rem;
      font-weight: 500;

      cursor: pointer;

      &:hover {
        /* background-color: ${theme.backgroundColor}; */
      }
    }
  }
`;
export const tooltipLabel = (theme: Theme) => css`
  ${theme.deskTop} {
    span {
      color: ${theme.fontColor};
    }
  }
`;
