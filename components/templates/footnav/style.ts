import { css, Theme } from "@emotion/react";

export const footnav = (theme: Theme) => css`
  width: 100%;
  height: 72px;

  position: fixed;
  bottom: 0;

  border-top: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  display: flex;
  justify-content: center;
  align-items: center;

  ${theme.deskTop} {
    display: none;
  }
`;
export const footnavInner = (theme: Theme) => css`
  width: 90%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  ${theme.deskTop} {
  }
`;
export const footnavList = (theme: Theme) => css`
  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 100%;

  & > li {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    cursor: pointer;

    span {
      align-self: center;

      &:nth-child(1) {
        color: ${theme.icon};
        font-size: 1.5rem;
        padding: 0.5rem;
      }

      &:nth-child(2) {
        font-size: 0.8rem;
      }
    }
  }

  ${theme.deskTop} {
  }
`;
