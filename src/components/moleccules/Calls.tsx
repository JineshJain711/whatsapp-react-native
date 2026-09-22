import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MessageCart from "./MessageCart";
import imagePath from "@/constants/imagePath";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { moderateScale } from "react-native-size-matters";

const Calls = () => {
const dataSet = [
  {
    image: imagePath.logo,
    name: "Rahul",
    message: "Hey, how are you?",
    rightIcon:<FontAwesome name="video-camera" style={styels.callIcon}/>,
    messageLeftIcon:<Feather name="arrow-down-left" style={[styels.messageRightIcon,{color:"red"}]}/>
  },
  {
    image: imagePath.logo,
    name: "Priya",
    message: "Are you coming tomorrow?",
    rightIcon:<Ionicons name="call" style={styels.callIcon}/>,
    messageLeftIcon:<Feather name="arrow-down-right" style={styels.messageRightIcon}/>

  },
  {
    image: imagePath.logo,
    name: "Priya",
    message: "Are you coming tomorrow?",
    rightIcon:<FontAwesome name="video-camera" style={styels.callIcon}/>,
    messageLeftIcon:<Feather name="arrow-down-left" style={[styels.messageRightIcon,{color:"red"}]}/>


  },
  
]; 
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataSet}
        renderItem={({ item }: any) => {
          return (
            <MessageCart
              name={item?.name}
              message={item?.message}
              image={item?.image}
              rightIcon ={item?.rightIcon}
              messageLeftIcon={item?.messageLeftIcon}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};


const styels = StyleSheet.create({
  callIcon:{
    color:"#008069",
    fontSize:moderateScale(20),
  },
  messageRightIcon:{
    color:"#008069",
    fontSize:moderateScale(15),

  }
})
export default Calls;
