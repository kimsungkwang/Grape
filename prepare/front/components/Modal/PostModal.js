import React, { useState } from "react";
import { Modal } from "antd";
import { EditOutlined } from "@ant-design/icons"
import PostForm from "../PostForm";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <div onClick={showModal}>
        <EditOutlined />
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <PostForm />
      </Modal>
    </>
  );
};
export default App;
