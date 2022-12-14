import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { UserOutlined, HomeOutlined, UnlockOutlined } from "@ant-design/icons";
import { Menu, Input, Row, Col } from "antd";
import styled from "styled-components";
import { useSelector } from "react-redux";
import Router, { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { logoutRequestAction } from "../reducers/user";

import PostModal from "./Modal/PostModal";

import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import useInput from "../hooks/useInput";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

function AppLayout({ children }) {
  const dispatch = useDispatch();
  const [searchInput, onChangeSearchInput] = useInput("");
  const router = useRouter();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    dispatch(logoutRequestAction());
    Router.push("/login");
  }, []);

  const onSearch = useCallback(() => {
    Router.push(`/hashtag/${searchInput}`);
  }, [searchInput]);

  return (
    <div>
      <Menu
        mode="horizontal"
        selectedKeys={[router.pathname]}
        items={[
          {
            label: (
              <Link href="/">
                <a>Grape</a>
              </Link>
            ),
            key: "/",
          },
          {
            label: (
              <Link href="/">
                <HomeOutlined />
              </Link>
            ),
            key: "/",
          },
          {
            label: (
              <Link href="/profile">
                <UserOutlined />
              </Link>
            ),
            key: "/profile",
          },
          {
            label: (
              <a loading={logOutLoading} onClick={onLogOut}>
                <UnlockOutlined />
              </a>
            ),
            key: "/logout",
          },
          {
            label: (
              <div>
                <PostModal />
              </div>
            ),
            key: "/post",
          },
          { label: <SearchInput enterButton value={searchInput} onChange={onChangeSearchInput} onSearch={onSearch} />, key: "/search" },
        ]}
      />
      {
        <Row gutter={8}>
          <Col xs={24} md={6}>
            {me ? <UserProfile /> : <LoginForm />}
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
          <Col xs={24} md={6}>
            <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">
              Made by KimsungKwang
            </a>
          </Col>
        </Row>
      }
    </div>
  );
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
