import React, { useState } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { loginAction } from "@store/login/action";

import { loginWrapper, loginBox, loginInputBox, loginLogoBox, loginLogo, label, inputCss, loginBtnBox } from "./style";
import { Label, TextField, DefaultButton, PrimaryButton } from "@fluentui/react";
import logo from "@styles/assets/logo.png";

const Login = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    id: "",
    password: "",
  });

  const onChangeForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((ps) => {
      return {
        ...ps,
        [e.target.name]: e.target.value,
      };
    });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("ok");
    dispatch(loginAction(form));
  };

  const onCreateAccountBtn = () => {
    console.log("회원가입");
  };

  return (
    <div css={loginWrapper}>
      <div css={loginBox}>
        <form onSubmit={onSubmit}>
          <div css={loginLogoBox}>
            <div css={loginLogo}>
              <Image src={logo} alt="logo" />
            </div>
          </div>

          <div css={loginInputBox}>
            <div>
              <Label htmlFor="id" css={label}>
                아이디
              </Label>
              <div css={inputCss}>
                <input id="id" name="id" value={form.id} onChange={onChangeForm} />
              </div>
            </div>
            <div>
              <Label htmlFor="password" css={label}>
                비밀번호
              </Label>
              <div css={inputCss}>
                <input
                  id="password"
                  name="password"
                  type="password"
                  css={inputCss}
                  value={form.password}
                  onChange={onChangeForm}
                />
              </div>
            </div>
          </div>
          <div css={loginBtnBox}>
            <DefaultButton text="로그인" allowDisabledFocus type="submit" />
            <PrimaryButton text="회원가입" allowDisabledFocus onClick={onCreateAccountBtn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
