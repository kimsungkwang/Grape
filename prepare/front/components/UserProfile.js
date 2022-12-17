import React from "react";
import { Avatar, Card } from "antd";
import { useSelector } from "react-redux";
import Link from "next/link";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <div style={{ marginTop: 20 }}>
      <Card
        actions={[
          <div key="post">
            <Link href={`/user/${me.id}`}>
              <a>
                포스트
                <br />
                {me.Posts.length}
              </a>
            </Link>
          </div>,
          <div key="following">
            <Link href="/profile">
              <a>
                팔로잉
                <br />
                {me.Followings.length}
              </a>
            </Link>
          </div>,
          <div key="follower">
            <Link href="/profile">
              <a>
                팔로워
                <br />
                {me.Followers.length}
              </a>
            </Link>
          </div>,
        ]}>
        <Card.Meta
          avatar={
            <Link href={`/user/${me.id}`} prefetch={false}>
              <a>
                <Avatar>{me.nickname[0]}</Avatar>
              </a>
            </Link>
          }
          title={me.nickname}
        />
      </Card>
    </div>
  );
};

export default UserProfile;
