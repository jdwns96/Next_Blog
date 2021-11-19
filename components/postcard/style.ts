import { css, Theme } from "@emotion/react";

export const postcard = (theme: Theme) => css`
  display: -webkit-flex;
  display: flex;

  width: 100%;
  height: 180px;

  padding: 0.5rem;
  margin-bottom: 1rem;

  border: 1px solid ${theme.border};
  background-color: ${theme.borderBox};

  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: ${theme.icon};
  }

  ${theme.deskTop} {
    height: 220px;
    padding: 1rem;
    margin-top: 1rem;
  }
`;
export const leftBox = (theme: Theme) => css`
  width: 170px;
  height: 100%;

  margin-right: 2rem;

  border: 1px solid ${theme.border};
  background-color: #ccc;

  ${theme.deskTop} {
    width: 260px;
  }
`;
export const rightBox = (theme: Theme) => css`
  -webkit-flex: 1;
  flex: 1;

  width: 100%;

  & > div:nth-child(1) {
    font-weight: 600;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid ${theme.border};

    padding-right: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    /* white-space: nowrap; */
  }
  /* & > div:nth-child(2) {
    color: #fff;
    font-size: 0.85rem;
    margin-bottom: 0.5rem;
    padding-right: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  & > div:nth-child(3) {
    font-size: 1rem;
  }

  ${theme.deskTop} {
    & > div:nth-child(2) {
      color: #fff;
      font-size: 0.85rem;
      margin-bottom: 1rem;
    }
    & > div:nth-child(3) {
      font-size: 1rem;
      max-height: none;
      overflow: hidden;
    }
  } */
`;
