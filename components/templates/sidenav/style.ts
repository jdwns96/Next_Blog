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
    max-width: 270px;
    width: 100%;
    height: 100vh;
    top: 0;
    z-index: 9999;
    transition: 0.3s;
`;
export const navOff = (theme: Theme) => css`
  ${navCss}
  border-left: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  right: -270px;
`;
export const nav = (theme: Theme) => css`
  ${navCss}
  border-left: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  right: 0;
`;
export const closeBtn = (theme: Theme) => css`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  font-size: 1.5rem;
  margin-bottom: 1rem;

  span {
    cursor: pointer;
    width: 32px;
    height: 32px;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const userBox = (theme: Theme) => css`
  width: 100%;
  height: 72px;
  margin-bottom: 1rem;

  border: 1px solid ${theme.border};
  background-color: ${theme.borderSubBox};
`;
export const listBox = (theme: Theme) => css``;
