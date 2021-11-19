import { css, Theme } from "@emotion/react";

export const nav = (theme: Theme) => css`
  position: sticky;
  top: 72px;

  width: 100%;
  height: 40px;
  border-bottom: 1px solid ${theme.border};
  background-color: ${theme.borderBox};
  overflow-x: auto;

  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.deskTop} {
    top: 144px;
  }
`;
export const navInner = (theme: Theme) => css`
  width: 95%;
  height: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

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
  span {
    padding: 0.5rem;
  }
`;
