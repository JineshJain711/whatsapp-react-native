import { View, Text, FlatList, StyleSheet } from "react-native";
import React from "react";
import MessageCart from "./MessageCart";
import imagePath from "@/constants/imagePath";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import{Ionicons} from "@expo/vector-icons"

const Status = () => {
const dataSet = [
  {
    image: imagePath.logo,
    name: "Rahul",
    message: "Hey, how are you?",
  },
  
]; 
  return (
    <View style={{ flex: 1 ,gap:10}}>
       <MessageCart 
              name={"Jinesh"}
              message={"Tap to add Status and Update"}
              image={imagePath.logo}
              logoComponent={<View style = {styles.logoContainer}>
                <Ionicons name="add-outline" size={moderateScale(20)} color={"black"}/>
              </View>}
            />
      <FlatList
        data={dataSet}
        renderItem={({ item }: any) => {
          return (
            <MessageCart
              name={item?.name}
              message={item?.message}
              image={item?.image}

            />
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  logoContainer:{
      width:moderateScale(25),
      height:moderateScale(25),
      borderRadius:moderateScale(50),
      backgroundColor:"#008069",
      position:"absolute",
      bottom:verticalScale(-5),
      right:scale(-5),
      borderWidth:2,
      borderColor:"black",
  }
})

export default Status;
