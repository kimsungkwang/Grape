import React from "react";
import PropTypes from "prop-types";
import Link from "next/link"

const AppLayout = ({ children }) => {       // children은 AppLayout 안 부분
  return (
    <div>
      <div>
          <Link href="/"><a>그레이프</a></Link>
          <Link href="/profile"><a>프로필</a></Link>
          <Link href="/signup"><a>회원가입</a></Link>
      </div>
      {children}
    </div>
  );
};

AppLayout.prototypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
