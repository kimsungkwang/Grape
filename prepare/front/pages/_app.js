import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import "antd/dist/antd.css";

const Grape = ({ Component }) => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Grape</title>
      </Head>
      <Component />
    </>
  );
};

Grape.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default Grape;
