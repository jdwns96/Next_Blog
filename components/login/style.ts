import { css, Theme } from "@emotion/react";

export const loginWrapper = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const loginBox = (theme: Theme) => css`
  width: 100%;
  max-width: 480px;
  padding: 1rem 2rem;

  border: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  ${theme.deskTop} {
  }
`;
export const loginLogoBox = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  ${theme.deskTop} {
  }
`;
export const loginLogo = (theme: Theme) => css`
  position: relative;
  align-self: center;
  width: 160px;
  cursor: pointer;

  ${theme.deskTop} {
  }
`;
export const loginInputBox = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const label = (theme: Theme) => css`
  color: inherit;
  font-size: 1.15rem;
`;
export const inputCss = (theme: Theme) => css`
  display: flex;
  width: 100%;
  input {
    margin-bottom: 1rem;
    font-size: 1.15rem !important;
    outline: none;
    flex: 1 1 auto;
    width: 1%;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    letter-spacing: 2px;

    border: 0;

    &:hover {
      border-color: ${theme.backgroundColor};
    }
  }
`;

export const loginBtnBox = (theme: Theme) => css`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
`;
