import { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() =>{
    SplashScreen.hideAsync();
  }, []);
  return (
   <>
   <Stack screenOptions={{headerShown:false}}/>
   {isLoggedIn ? <Redirect href={"/(main)"} /> :<Redirect href={"/(auth)"} /> }
   </>
  );
}
