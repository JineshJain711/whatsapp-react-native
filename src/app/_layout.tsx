import { useEffect, useState } from "react";
import { Redirect, Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { storage } from "@/utils/utils";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const[isLoggedIn, setIsLoggedIn] = useState(false);
  const acess_token = storage.getString("token")
  useEffect(() =>{
    SplashScreen.hideAsync();
  }, []);
  useEffect(()=>{
    console.log(acess_token);
    if(acess_token)
    {
      setIsLoggedIn(true);
    }
  },[acess_token]);
  return (
   <>
   <Stack screenOptions={{headerShown:false}}/>
   {isLoggedIn ? <Redirect href={"/(main)"} /> :<Redirect href={"/(auth)"} /> }
   </>
  );
}
