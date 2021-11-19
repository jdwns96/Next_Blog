/* 
    @describe 
    - 웹 페이지 테마를 결정하는 스토어 
    - dark mode , light mode 로 관리한다.
    - localstorage 를 이용해 테마를 고정한다. 
*/

/**** redux *****/

export const DARK_MODE = "mode/DARK_MODE" as const;
export const LIGHT_MODE = "mode/LIGHT_MODE" as const;

export const darkAction = () => ({ type: DARK_MODE });
export const lightAction = () => ({ type: LIGHT_MODE });

/**** saga *****/

export const TOGGLE_MODE = "mode/TOGGLE_MODE" as const;

export const toggleActionSaga = (value: boolean) => ({ type: TOGGLE_MODE, value });
