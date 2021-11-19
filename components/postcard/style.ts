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
    width: 200px;
  }
`;
export const rightBox = (theme: Theme) => css`
  -webkit-flex: 1;
  flex: 1;
  width: 100%;
`;
export const rightBoxTitle = (theme: Theme) => css`
  font-weight: 600;
  font-size: 1.25rem;
  padding-bottom: 0.75rem;
  margin-bottom: 0.5rem;
  border-bottom: 1px solid ${theme.border};

  padding-right: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  ${theme.deskTop} {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

export const rightBoxTagBox = (theme: Theme) => css`
  display: flex;
  color: #fff;
  font-size: 0.85rem;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;
  ${theme.deskTop} {
  }
`;

export const rightBoxTag = (theme: Theme) => css`
  padding: 0.15rem;
  margin-right: 0.5rem;
  padding: 0.15rem 0.3rem;

  color: ${theme.borderBox};
  font-weight: 600;

  border: 1px solid ${theme.border};
  background-color: ${theme.btn};

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const rightBoxDate = (theme: Theme) => css`
  border: 1px solid none;
  /* margin: 0.2rem 0; */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const rightBoxSubscribe = (theme: Theme) => css`
  font-size: 1rem;

  ${theme.deskTop} {
    font-size: 1rem;
    max-height: none;
    overflow: hidden;
  }
`;
