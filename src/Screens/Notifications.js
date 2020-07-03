import React from "react";
import { ScrollView } from "react-native";

import CommanElementWithImage from "../Components/Wrapper/CommanElementWithImage";
import { notificationsVariable } from "../utils/common";

const Notifications = (props) => {
  return (
    <ScrollView>
      <CommanElementWithImage dataArray={notificationsVariable} {...props} />
    </ScrollView>
  );
};

export default Notifications;
