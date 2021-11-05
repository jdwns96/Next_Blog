import { css, Theme } from "@emotion/react";
import type { ICheckboxStyles, ICheckStyleProps } from "@fluentui/react";
import { getTheme } from "@fluentui/react";

const theme = getTheme();

export const header = (theme: Theme) => css``;

// fluentUI Checkbox
export const checkboxStyle = (styleProps: ICheckStyleProps): ICheckboxStyles => {
  return {
    checkbox: [
      styleProps.checked && {
        background: "red",
        borderColor: "red",
      },
    ],
    root: [
      styleProps.checked && {
        selectors: {
          "&:hover > label > div": {
            background: "pink !important",
            borderColor: "pink !important",
          },
        },
      },
    ],
  };
};

// @https://developer.microsoft.com/en-us/fluentui#/styles/web/colors/theme-slots
