import React, { useState, useCallback } from "react";
import PropTypes from "prop-types";
import { Card, Button, Popover, Avatar, List, Comment } from "antd";
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import moment from "moment";

import PostImages from "./PostImages";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import FollowButton from "./FollowButton";
import { REMOVE_POST_REQUEST, LIKE_POST_REQUEST, UNLIKE_POST_REQUEST, REPOST_REQUEST } from "../reducers/post";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const id = useSelector((state) => state.user.me?.id);

  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onRepost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REPOST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const liked = post.Likers.find((v) => v.id === id);
  return (
    <div style={{ marginTop: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        actions={[
          <RetweetOutlined key="repost" onClick={onRepost} />,
          liked ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onUnLike} /> : <HeartOutlined key="heart" onClick={onLike} />,
          <MessageOutlined key="comment" onClick={onToggleComment} />,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger" onClick={onRemovePost} loading={removePostLoading}>
                      삭제
                    </Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }>
            <EllipsisOutlined />
          </Popover>,
        ]}
        title={post.RepostId ? `${post.User.nickname} 님이 리포스트하셨습니다.` : null}
        extra={id && <FollowButton post={post} />}>
        {post.RepostId && post.Repost ? (
          <Card cover={post.Repost.Images[0] && <PostImages images={post.Repost.Images} />}>
            <span style={{ float: "right" }}>{moment(post.createdAt).fromNow()}</span>
            <Card.Meta
              avatar={
                <Link href={`/user/${post.Repost.User.id}`}>
                  <a>
                    <Avatar>{post.Repost.User.nickname[0]}</Avatar>
                  </a>
                </Link>
              }
              title={post.Repost.User.nickname}
              description={<PostCardContent postData={post.Repost.content} />}
            />
          </Card>
        ) : (
          <>
            <span style={{ float: "right" }}>{moment(post.createdAt).format("YYYY.MM.DD.")}</span>
            <Card.Meta
              avatar={
                <Link href={`/user/${post.User.id}`}>
                  <a>
                    <Avatar>{post.User.nickname[0]}</Avatar>
                  </a>
                </Link>
              }
              title={post.User.nickname}
              description={<PostCardContent postData={post.content} />}
            />
          </>
        )}
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post} />
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment author={item.User.nickname} avatar={<Avatar>{item.User.nickname[0]}</Avatar>} content={item.content} />
              </li>
            )}
          />
        </div>
      )}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RepostId: PropTypes.number,
    Repost: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
