import image1 from "@styles/assets/image1.jpeg";
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
  border-radius: 1px;

  overflow: hidden;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border-color: ${theme.icon};

    .postcard__img_box {
      border-color: ${theme.icon} !important;
    }
  }

  ${theme.mini} {
    flex-direction: column;
    /* height: 140px; */
    height: 400px;
    padding: 0.75rem;
  }

  ${theme.deskTop} {
    height: 220px;
    padding: 1rem;
    margin-top: 1rem;
  }
`;
export const leftBox = (theme: Theme) => css`
  position: relative;
  width: 170px;
  height: 100%;
  margin-right: 2rem;
  border: 1px solid ${theme.border};

  transition: 0.3s;
  background-color: ${theme.borderSubBox};

  span {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    vertical-align: top;
  }

  img {
    width: 100% !important;
    height: 100% !important;
    object-fit: contain;
    vertical-align: top !important;
  }

  ${theme.mini} {
    /* display: none; */
    width: 100%;
    height: 60%;
    margin-right: 0;
    margin-bottom: 0.75rem;
  }

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
  font-size: 1.5rem;
  /* padding-bottom: 0.75rem; */
  margin-bottom: 0.5rem;
  /* border-bottom: 1px solid ${theme.border}; */

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1; // 줄 관련인듯
  overflow: hidden;
  max-height: 33px;

  overflow: hidden;
  text-overflow: ellipsis;
  ${theme.deskTop} {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
    /* padding-bottom: 1rem; */
  }
`;

export const rightBoxLine = (theme: Theme) => css`
  margin-bottom: 0.75rem;
  border-color: ${theme.border};
`;

export const rightBoxTagBox = (theme: Theme) => css`
  display: flex;
  flex-wrap: wrap;

  color: #fff;
  font-size: 0.75rem;
  margin-bottom: 0.5rem;
  text-overflow: ellipsis;

  ${theme.deskTop} {
    font-size: 0.8rem;
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
  font-size: 0.8rem;

  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; // 줄 관련인듯

  ${theme.deskTop} {
    font-size: 0.9rem;
    max-height: none;
    overflow: hidden;
  }
`;
