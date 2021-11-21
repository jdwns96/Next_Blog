import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    deskTop: string;
    mini: string;

    border: string;
    borderBox: string;
    borderSubBox: string;
    icon: string;
    btn: string;

    darkgold: string;
    gold: string;
    lightgold: string;

    backgroundColor: string;
    fontColor: string;
  }
}
