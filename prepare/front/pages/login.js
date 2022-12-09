import React, { useCallback, useEffect } from "react";
import { Button, Form, Input } from "antd";
import Image from "next/image";
import Head from "next/head";
import Router from "next/router";
import styled from "styled-components";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { END } from 'redux-saga';
import axios from 'axios';
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";

import Logo from "../public/favicon.png";
import useInput from "../hooks/useInput";
import { loginRequestAction } from "../reducers/user";
import wrapper from "../store/configureStore";

const SignLink = styled.div`
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

const Login = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { logInLoading, logInError } = useSelector((state) => state.user);
  const [email, onChangeEmail] = useInput("");
  const [password, onChangePassword] = useInput("");

  // 로그인이 되어있다면 홈 화면으로 이동
  useEffect(() => {
    if (me && me.id) {
      Router.replace("/");
    }
  }, [me]);

  // 로그인 실패 , 에러
  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onSubmitForm = useCallback(() => {
    console.log("Success:", email, password);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  return (
    <>
      <Head>
        <title>로그인 | Grape</title>
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
      <FormWrapper
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onSubmitForm}>
        <Form.Item
          name="username"
          htmlFor="user-email"
          rules={[
            {
              required: true,
              message: "아이디를 입력해주세요!",
            },
          ]}>
          <Input
            name="user-email"
            type="email"
            value={email}
            onChange={onChangeEmail}
            required
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="User"
          />
        </Form.Item>
        <Form.Item
          name="password"
          htmlFor="user-password"
          rules={[
            {
              required: true,
              message: "비밀번호를 입력해주세요!",
            },
          ]}>
          <Input
            name="user-password"
            value={password}
            onChange={onChangePassword}
            required
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <ButtonWrapper>
            <Button type="primary" htmlType="submit" className="login-form-button" loading={logInLoading}>
              로그인
            </Button>
          </ButtonWrapper>
          <SignLink> 회원이 아니신가요? </SignLink>
          <SignLink>
            <a href="/signup"> 회원가입 </a> 하기 !!
          </SignLink>
        </Form.Item>
      </FormWrapper>
    </>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise();
});

export default Login;
