import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { Image } from "expo-image";
import imagePath from "@/constants/imagePath";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";

const MessageCart = ({
  name,
  message,
  time,
  count,
  image,
  logoComponent,
  rightIcon,
  messageLeftIcon,
  onPress,
}: any) => {
  return (
    <TouchableOpacity style={styels.button} onPress={onPress} activeOpacity={0.7}>
      <View style={styels.leftContainer}>
        <View>
          <Image source={image} style={styels.image} />
          {logoComponent}
        </View>
        <View>
          <Text style={styels.name}>{name}</Text>
          <View style={styels.flexBox}>
            {messageLeftIcon}
            <Text style={styels.message}>{message}</Text>
          </View>
        </View>
      </View>
      <View style={styels.rightContainer}>
        {time && <Text style={styels.time}>{time}</Text>}
        {!!count && (
          <View style={styels.messageCountContainer}>
            <Text style={styels.messageCount}>{count}</Text>
          </View>
        )}
        {
          rightIcon 
        }
      </View>
    </TouchableOpacity>
  );
};

const styels = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(20),
    paddingVertical: verticalScale(15),
    // backgroundColor:"red",
  },
  image: {
    height: moderateScale(53),
    width: moderateScale(53),
    borderRadius: moderateScale(53),
  },
  name: {
    fontWeight: "bold",
    fontSize: moderateScale(14),
    color: "black",
  },
  message: {
    fontSize: moderateScale(13),
    color: "#889095",
    fontWeight: "500",
  },
  time: {
    fontSize: moderateScale(12),
    color: "#889095",
    fontWeight: "bold",
  },
  messageCountContainer: {
    backgroundColor: "#036A01",
    width: moderateScale(22),
    height: moderateScale(22),
    borderRadius: moderateScale(22),
    justifyContent: "center",
    alignItems: "center",
  },
  messageCount: {
    color: "white",
    fontSize: moderateScale(12),
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
  },
  rightContainer: {
    alignItems: "flex-end",
    gap: verticalScale(7),
  },
  flexBox:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(7),
  },
});
export default MessageCart;
