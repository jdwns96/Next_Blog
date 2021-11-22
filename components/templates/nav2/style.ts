import { css, Theme } from "@emotion/react";

export const nav = (theme: Theme) => css`
  position: sticky;
  top: 72px;
  z-index: 9999;

  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.deskTop} {
    top: 124px;
  }
`;
export const navInner = (theme: Theme) => css`
  position: relative;
  width: 95%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  ${theme.deskTop} {
    width: 90%;
  }
`;
export const navUl = (theme: Theme) => css`
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  margin-right: 85px;

  white-space: nowrap;
  overflow-x: auto;

  li {
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;

    &:not(:nth-child(1)) {
      margin-left: 0.5rem;
    }
  }

  ${theme.deskTop} {
    width: 90%;
  }
`;
export const list = (theme: Theme) => css`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  span {
    padding: 0.5rem;
  }
`;
export const board = (theme: Theme) => css`
  position: absolute;
  top: 0;
  right: 0;

  width: 85px;
  height: 100%;
  background-color: ${theme.borderSubBox};
  border-left: 1px solid ${theme.border};
  border-right: 1px solid ${theme.border};

  font-size: 0.9rem;
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
`;
