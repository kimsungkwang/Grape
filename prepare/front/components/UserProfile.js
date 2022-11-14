import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";
import { useDispatch } from "react-redux";

import { logoutAction } from "../reducers/user";

const UserProfile = () => {
  const dispatch = useDispatch();
  const onLogOut = useCallback(() => {
    dispatch(logoutAction());
  }, []);
  return (
    <Card
      actions={[
        <div key="post">
          포스트
          <br />0
        </div>,
        <div key="following">
          팔로잉
          <br />0
        </div>,
        <div key="follower">
          팔로워
          <br />0
        </div>,
      ]}>
      <Card.Meta avatar={<Avatar>김성광</Avatar>} title="김성광" />
      <Button onClick={onLogOut} style={{marginTop:10}}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
