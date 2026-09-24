import { View, Text, FlatList } from "react-native";
import React from "react";
import MessageCart from "./MessageCart";
import imagePath from "@/constants/imagePath";
import { router } from "expo-router";

const Chats = () => {
  const onPressFunction = (item: any) => {
    router.push({
      pathname: "/chat",
      params: { name: item?.name },
    });
  };
const dataSet = [
  {
    image: imagePath.logo,
    name: "Rahul",
    message: "Hey, how are you?",
    time: "7:00 pm",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Priya",
    message: "Are you coming tomorrow?",
    time: "6:45 pm",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Akash",
    message: "Project is completed 👍",
    time: "6:20 pm",
    messageCount: 3,
  },
  {
    image: imagePath.logo,
    name: "Sneha",
    message: "Good morning!",
    time: "5:55 pm",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Rohit",
    message: "Send me the notes.",
    time: "5:30 pm",
    messageCount: 4,
  },
  {
    image: imagePath.logo,
    name: "Neha",
    message: "Let's meet at 6.",
    time: "4:50 pm",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Amit",
    message: "Thanks bro!",
    time: "4:25 pm",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Pooja",
    message: "Did you submit the assignment?",
    time: "3:40 pm",
    messageCount: 5,
  },
  {
    image: imagePath.logo,
    name: "Vishal",
    message: "Check this out.",
    time: "3:15 pm",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Anjali",
    message: "Okay, see you later.",
    time: "2:45 pm",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Sagar",
    message: "Can you call me?",
    time: "2:10 pm",
    messageCount: 3,
  },
  {
    image: imagePath.logo,
    name: "Kunal",
    message: "The meeting starts at 10.",
    time: "1:30 pm",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Snehal",
    message: "I will send it soon.",
    time: "12:55 pm",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Aditya",
    message: "Nice work 🔥",
    time: "12:20 pm",
    messageCount: 4,
  },
  {
    image: imagePath.logo,
    name: "Komal",
    message: "Where are you?",
    time: "11:45 am",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Nikhil",
    message: "Let's start the project.",
    time: "11:10 am",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Shubham",
    message: "I'll call you tonight.",
    time: "10:30 am",
    messageCount: 3,
  },
  {
    image: imagePath.logo,
    name: "Riya",
    message: "Happy birthday 🎉",
    time: "9:45 am",
    messageCount: 1,
  },
  {
    image: imagePath.logo,
    name: "Harsh",
    message: "Have you reached?",
    time: "9:15 am",
    messageCount: 2,
  },
  {
    image: imagePath.logo,
    name: "Vivek",
    message: "See you tomorrow!",
    time: "Yesterday",
    messageCount: 0,
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
              count={item?.messageCount}
              time={item?.time}
              onPress={() => onPressFunction(item)}
            />
          );
        }}
      ></FlatList>
    </View>
  );
};

export default Chats;
