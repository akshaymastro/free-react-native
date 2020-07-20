import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  TextInput,
  FlatList,
  Button,
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth,
} from "react-native-responsive-dimensions";
import { useNavigation } from "@react-navigation/native";

export default class ChatScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit ametLorem ipsum ",
        },
        {
          id: 2,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit amet",
        },
        {
          id: 3,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 4,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 5,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 6,
          date: "9:50 am",
          type: "out",
          message: "Lorem ipsum dolor sit a met",
        },
        {
          id: 7,
          date: "9:50 am",
          type: "in",
          message: "Lorem ipsum dolor sit a met",
        },
      ],
    };
  }

  renderDate = (date, itemStyle) => {
    return (
      <View>
        <Text style={itemStyle}>{date}</Text>
      </View>
    );
  };

  renderImage = (imagestyle, styles) => {
    return (
      <View style={imagestyle}>
        <TouchableOpacity style={styles}></TouchableOpacity>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={this.state.data}
          keyExtractor={(item) => {
            return item.id;
          }}
          renderItem={(message) => {
            const item = message.item;
            let inMessage = item.type === "in";
            let styleItem = inMessage ? styles.item : styles.item2;
            let itemStyle = inMessage ? styles.itemOut : styles.itemIn;
            let itemTextStyle = inMessage
              ? styles.itemInText
              : styles.itemOutText;
            return (
              <View>
                {!inMessage && this.renderDate(item.date, styles.time)}
                {inMessage && this.renderDate(item.date, styles.timeRender)}
                <View style={{ flexDirection: "column" }}>
                  <View style={[styleItem, itemStyle]}>
                    <View style={[styles.balloon]}>
                      <Text style={itemTextStyle}>{item.message}</Text>
                    </View>
                  </View>
                  {!inMessage &&
                    this.renderImage(
                      styles.imageContainer,
                      styles.imageThumnail
                    )}
                  {inMessage &&
                    this.renderImage(
                      styles.imageContainer2,
                      styles.imageThumnail2
                    )}
                </View>
              </View>
            );
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Type an answer"
              underlineColorAndroid="transparent"
              onChangeText={(name_address) => this.setState({ name_address })}
            />
          </View>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={styles.buttonText}>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  list: {
    paddingHorizontal: 17,
  },
  buttonStyle: {
    position: "absolute",
    right: 18,
    backgroundColor: "#3d86e1",
    height: responsiveHeight(8),
    width: responsiveWidth(15),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 2,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
  },
  footer: {
    flexDirection: "row",
    // marginVertical: 20,
    backgroundColor: "#eeeeee",
    paddingHorizontal: 10,
    padding: 5,
  },
  imageContainer: { alignItems: "flex-end" },
  imageContainer2: { alignItems: "flex-start" },
  imageThumnail: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#e3e3e3",
    width: responsiveWidth(16),
    height: responsiveHeight(8),
    borderRadius: 50,
  },
  imageThumnail2: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
    backgroundColor: "#e3e3e3",
    width: responsiveWidth(16),
    height: responsiveHeight(8),
    borderRadius: 50,
    // marginBottom: 10,
  },
  itemInText: {
    color: "#000",
  },
  itemOutText: {
    color: "#fff",
  },
  btnSend: {
    backgroundColor: "#00BFFF",
    width: 40,
    height: 40,
    borderRadius: 360,
    alignItems: "center",
    justifyContent: "center",
  },
  timeRender: {
    alignSelf: "flex-start",
    fontSize: 10,
    marginHorizontal: 50,
    backgroundColor: "#e3e3e3",
    color: "#808080",
    padding: 5,
    borderRadius: 40,
  },
  iconSend: {
    width: 30,
    height: 30,
    alignSelf: "center",
  },
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  inputs: {
    height: responsiveHeight(12),
    width: responsiveWidth(95),
    backgroundColor: "#fff",
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 2,
    paddingHorizontal: 20,
    // border
  },
  balloon: {
    maxWidth: 250,
    padding: 15,
    // borderRadius: 20,
  },
  itemIn: {
    alignSelf: "flex-start",
    backgroundColor: "#3d86e1",
    color: "#ededed",
    width: responsiveWidth(78),
  },
  itemOut: {
    alignSelf: "flex-end",
    backgroundColor: "#e3e3e3",
    width: responsiveWidth(78),
  },
  time: {
    alignSelf: "flex-end",
    fontSize: 10,
    marginHorizontal: 50,
    backgroundColor: "#3d86e1",
    color: "#fff",
    padding: 5,
    borderRadius: 40,
  },
  item: {
    marginVertical: 14,
    flex: 1,
    // flexDirection: "row",
    backgroundColor: "#eeeeee",
    // borderRadius: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 2,
    padding: 3,
  },
  item2: {
    marginVertical: 14,
    flex: 1,
    flexDirection: "row",
    backgroundColor: "#eeeeee",
    // borderRadius: 300,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 2,
    borderBottomLeftRadius: 30,
    padding: 3,
  },
});
