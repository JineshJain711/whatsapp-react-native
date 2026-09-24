import {Stack} from "expo-router";

const MainStack = () => {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen name="index" />
      <Stack.Screen name="chat" />
    </Stack>
    );
};

export default MainStack;