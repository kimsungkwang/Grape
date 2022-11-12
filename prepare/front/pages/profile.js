import React from "react";
import Head from "next/head";

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  const followerList = [{ nickname: "김성광" }, { nickname: "바보" }, { nickname: "그레이프개발자" }];
  const followingList = [{ nickname: "김성광 바보 " }, { nickname: "바보 멍청이" }, { nickname: "그레이프사용자" }];
  return (
    <>
      <Head>
        <title>내 프로필 | Grape</title>
      </Head>
      <AppLayout>
        <NicknameEditForm />
        <FollowList header="팔로잉 목록" data={followerList}/>
        <FollowList header="팔로워 목록" data={followingList} />
      </AppLayout>
    </>
  );
};

export default Profile;
