import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { END } from "redux-saga";
import Router from "next/router";
import axios from "axios";
import { useInView } from "react-intersection-observer";

import AppLayout from "../components/AppLayout";
import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";
import { LOAD_POSTS_REQUEST } from "../reducers/post";
import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
import wrapper from "../store/configureStore";

function Home() {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, repostError } = useSelector((state) => state.post);
  const [ref, inView] = useInView();

  // 클라이언트 상에서 유저 정보 없으면 로그인 화면으로 이동
  useEffect(() => {
    if (!me) {
      Router.push("/login");
    }
  }, [me]);

  useEffect(() => {
    if (inView && hasMorePosts && !loadPostsLoading) {
      const lastId = mainPosts[mainPosts.length - 1]?.id;
      dispatch({
        type: LOAD_POSTS_REQUEST,
        lastId,
      });
    }
  }, [hasMorePosts, loadPostsLoading, mainPosts]);

  useEffect(() => {
    if (repostError) {
      alert(repostError);
    }
  }, [repostError]);

  return (
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
      <div ref={hasMorePosts && !loadPostsLoading ? ref : undefined} style={{ height: 10 }} />
    </AppLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : "";
  axios.defaults.headers.Cookie = "";
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  store.dispatch(END);
  await store.sagaTask.toPromise();

  const { user } = store.getState();
  if (!user.me) {
    return {
      redirect: {
        permanent: false,
        destination: "/login",
      },
    };
  }
});

export default Home;
