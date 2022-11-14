export const initialState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "성고앙",
      },
      content: " 첫 번째 게시글 #맞팔",
      Images: [
        {
          src: "http://cdn.mydaily.co.kr/FILES/202210/202210240306822689_1.jpg",
        },
        {
          src: "https://img.hankyung.com/photo/202210/BF.31591940.1.png",
        },
        {
          src: "https://file.mk.co.kr/meet/neds/2022/05/image_readtop_2022_428511_16526107615043320.jpg",
        },
      ],
      Comment: [
        {
          User: {
            nickname: "홍길동",
          },
          content: "카즈하 짱",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

const ADD_POST = "ADD_POST";
export const addPost = {
  type: ADD_POST,
};
const dummyPost = {
  id: 2,
  content: "더미데이터",
  User: {
    id: 1,
    nickname: "전우치",
  },
  Images: [],
  Comment: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
      };
    default:
      return state;
  }
};

export default reducer;
