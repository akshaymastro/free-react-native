import React from "react";
import { Modal } from "react-native";

export default (props) => {
  return (
    <Modal
      visible={props.open}
      onRequestClose={props.onClose}
      presentationStyle="formSheet"
      transparent={true}
    >
      {props.children}
    </Modal>
  );
};
