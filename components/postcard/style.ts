import { css, Theme } from "@emotion/react";

export const postcard = (theme: Theme) => css`
  display: flex;

  width: 100%;
  height: 200px;

  padding: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;

  border: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  ${theme.deskTop} {
    height: 260px;
  }
`;
export const leftBox = (theme: Theme) => css`
  width: 200px;
  height: 100%;
  margin-right: 2rem;
  border: 1px solid ${theme.border};
  ${theme.deskTop} {
    width: 260px;
  }
`;
export const rightBox = (theme: Theme) => css`
  width: 100%;

  & > div:nth-child(1) {
    font-weight: 600;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${theme.border};
  }

  ${theme.deskTop} {
  }
`;
