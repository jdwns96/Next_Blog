import { css, Theme } from "@emotion/react";

export const bread = (theme: Theme) => css`
  width: 120px;
  height: 40px;
  margin-bottom: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
`;

export const board = (theme: Theme) => css`
  display: flex;
  justify-content: center;
  border: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
`;
export const boardInner = (theme: Theme) => css`
  width: 95%;
  margin: 1.5rem 0;
`;
export const boardHead = (theme: Theme) => css`
  height: 40px;
  margin-bottom: 1rem;

  display: flex;

  & > .board__tag {
    border: 1px solid ${theme.border};
    background-color: ${theme.borderSubBox};
    margin-right: 1rem;
    width: 160px;
  }

  & > .board__title {
    border: 1px solid ${theme.border};
    background-color: ${theme.borderBox};
    flex-grow: 1;
    transition: 0.3s;
    background-color: #eee;
    padding: 0 0.5rem;
    font-size: 1.1rem;
    &:focus {
      outline: none;
      border: 2px solid ${theme.icon};
    }
  }
`;
export const boardMain = (theme: Theme) => css`
  border: 1px solid ${theme.border};
  border-radius: 2px;
  background-color: #fefefe;

  margin-bottom: 1rem;
`;
export const boardSumnail = (theme: Theme) => css`
  border: 1px solid ${theme.border};
  background-color: ${theme.borderSubBox};
`;
export const saveBtn = (theme: Theme) => css`
  width: 120px;
  height: 40px;
`;
