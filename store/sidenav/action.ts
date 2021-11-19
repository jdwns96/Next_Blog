/* 
    @describe 
    - 모바일 뷰 에서 사이드 nav 바 토글 
*/

/**** redux *****/

export const HAMBERGER = "mode/HAMBERGER" as const;

export const hambergerAction = () => ({ type: HAMBERGER });
