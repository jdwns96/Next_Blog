import { css, Theme } from "@emotion/react";

export const footnav = (theme: Theme) => css`
  width: 100%;
  height: 72px;

  /* position: sticky; */
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
  width: 95%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  ${theme.deskTop} {
    width: 90%;
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
        font-size: 1.25rem;
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

export const link = (theme: Theme) => css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  cursor: pointer;

  width: 100%;
  height: 100%;
  span {
    align-self: center;

    &:nth-child(1) {
      color: ${theme.icon};
      font-size: 1.25rem;
      padding: 0.5rem;
    }

    &:nth-child(2) {
      font-size: 0.8rem;
    }
  }
`;
