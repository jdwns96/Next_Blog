import { css, Theme } from "@emotion/react";

const curtainCss = `
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    opacity: 0.5;
    background-color: #000000;
    cursor: pointer;
`;
export const curtainOff = (theme: Theme) => css`
  ${curtainCss}
  display: none;
  z-index: -9999;
`;
export const curtain = (theme: Theme) => css`
  ${curtainCss}
  z-index: 9999;
`;

const navCss = `
    padding: 1rem;
    position: fixed;
    width: 250px;
    height: 100vh;
    top: 0;
    z-index: 9999;
    transition: 0.3s;
`;
export const navOff = (theme: Theme) => css`
  ${navCss}
  border-left: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  right: -250px;
`;
export const nav = (theme: Theme) => css`
  ${navCss}
  border-left: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  right: 0;

  & > div:nth-child(1) {
    height: 60px;
  }
  & > div:nth-child(2) {
    height: 130px;
  }
  & > div:nth-child(3) {
  }
`;
