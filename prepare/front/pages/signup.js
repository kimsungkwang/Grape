import React, { useState, useCallback, useEffect } from "react";
import { Form, Input, Checkbox, Button } from "antd";
import Image from "next/image";
import Head from "next/head";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { END } from "redux-saga";
import styled from "styled-components";

import Logo from "../public/favicon.png";
import useInput from "../hooks/useInput";
import { SIGN_UP_REQUEST, LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

const CheckboxStyle = styled.div`
  text-align: center;
  margin-top: 10px;
`;
const ButtonWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const FormWrapper = styled(Form)`
  padding: 20px;
  width: 500px;
  height: 500px;
  margin: 0 auto;
`;

const LogoAndTitle = styled.div`
  margin-top: 10px;
  padding: 100px;
  width: 300px;
  height: 300px;
  margin: 0 auto;
  text-align: center;
`;

const TextInput = ({ value }) => {
  return <div>{value}</div>;
};

TextInput.propTypes = {
  value: PropTypes.string,
};

const Signup = () => {
  const dispatch = useDispatch();
  const { signUpLoadung, signUpDone, signUpError, changeNicknameError } = useSelector((state) => state.user);

  // 로그인 한 상태로 회원가입 페이지 들어 갔을 시
  // useEffect(() => {
  //   if (me && me.id) {
  //     alert("이미 회원입니다!");
  //     Router.replace("/");
  //   }
  // }, [me && me.id]);

  // 회원가입 완료 시 메인페이지로 보내주기
  useEffect(() => {
    if (signUpDone) {
      alert("회원가입 완료! 로그인 해주세요");
      Router.replace("/");
    }
  }, [signUpDone]);

  // 회원가입 에러
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  useEffect(() => {
    if (changeNicknameError) {
      alert(changeNicknameError);
    }
  }, [changeNicknameError]);

  const [passwordCheck, setPasswordCheck] = useState("");
  const [term, setTerm] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [termError, setTermError] = useState(false);

  const [email, onChangeEmail] = useInput("");
  const [nickname, onChangeNickname] = useInput("");
  const [password, onChangePassword] = useInput("");

  const onSubmit = useCallback(() => {
    if (password !== passwordCheck) {
      return setPasswordError(true);
    }
    if (!term) {
      return setTermError(true);
    }
    console.log(email, nickname, password);
    dispatch({
      type: SIGN_UP_REQUEST,
      data: { email, password, nickname },
    });
  }, [email, password, passwordCheck, term]);

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordError(e.target.value !== password);
      setPasswordCheck(e.target.value);
    },
    [password]
  );

  const onChangeTerm = useCallback((e) => {
    setTermError(false);
    setTerm(e.target.checked);
  }, []);

  return (
    <>
      <Head>
        <title>회원가입 | Grape</title>
      </Head>
      <LogoAndTitle>
        <div className="flex-center flex-col">
          <Image src={Logo} width={100} height={100} />
          <h1 className="text-3xl mt-4 italic">Grape</h1>
        </div>
        <div>
          <p className="sm:text-4xl text-xl">포도 포도 포도</p>
        </div>
      </LogoAndTitle>
      <FormWrapper onFinish={onSubmit} style={{ padding: 10 }}>
        <div>
          <label htmlFor="user-email">아이디</label>
          <br />
          <Input name="user-email" type="email" value={email} required onChange={onChangeEmail} />
        </div>
        <div>
          <label htmlFor="user-nick">닉네임</label>
          <br />
          <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
        </div>
        <div>
          <label htmlFor="user-password">비밀번호</label>
          <br />
          <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
        </div>
        <div>
          <label htmlFor="user-password-check">비밀번호체크</label>
          <br />
          <Input name="user-password-check" type="password" value={passwordCheck} required onChange={onChangePasswordCheck} />
          {passwordError && <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다.</div>}
        </div>
        <div>
          <CheckboxStyle>
            <Checkbox name="user-term" checked={term} onChange={onChangeTerm}>
              재밌고 즐겁게 이용해주세요.
            </Checkbox>
          </CheckboxStyle>
          {termError && <div style={{ color: "red" }}>동의하셔야 합니다.</div>}
        </div>
        <div style={{ marginTop: 10 }}>
          <ButtonWrapper>
            <Button loading={signUpLoadung} type="primary" htmlType="submit">
              가입하기
            </Button>
          </ButtonWrapper>
        </div>
      </FormWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log("getServerSideProps start");
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log("getServerSideProps end");
  await store.sagaTask.toPromise();
});

export default Signup;
