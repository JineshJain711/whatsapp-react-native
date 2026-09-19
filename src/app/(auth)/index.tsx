import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const index = () => {
    const[isLoading,setIsLoading] = useState(false);
    let loading_timeout =( () =>{
        setIsLoading(true);
        setTimeout(nevigate_to_welcome,3000);
    })
    let nevigate_to_welcome = () =>{
        router.push("/(auth)/terms_agree")
    }
    useEffect(()=>{
        setTimeout( loading_timeout, 2000);
    },[])
  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}></View>
      <View style = {styles.body}>
        <Image source={imagePath.logo} resizeMode='contain' style={styles.logo_style}/>
        <Text style={styles.whatsapp_text}>Whatsapp</Text>
      </View>
      <View style = {styles.footer}>
        {
            isLoading ?  (<>
                <ActivityIndicator size={moderateScale(40)} color={"green"}/>
                <Text style = {styles.load}>Loading...</Text></>)
             : (
            <>
                <Text style={styles.from_text}>From </Text>
                <Text style={styles.facebook_text}>Facebook</Text></>
            )
        }
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"white",
        alignItems:"center",
        justifyContent:"space-between",
        paddingVertical:verticalScale(50)
    },
    header:{
    },
    body:{
        alignItems:"center",
        gap:verticalScale(10),
    },
    footer:{
        alignItems:"center",
        height:verticalScale(80)
    },
    from_text:{
        fontSize:moderateScale(12),
        color:"#867373"
    },
    facebook_text:{
        fontSize:moderateScale(15),
        color:"#000000",
        // fontWeight:"bold"
    },
    logo_style:{
        width: moderateScale(70),
        height: moderateScale(70),
        borderRadius:moderateScale(10)
    },
    whatsapp_text:{
        fontSize:moderateScale(35),
        color:"#000000",
        fontWeight:"bold",


    },
    load:{
        fontSize:moderateScale(24),
        color:"#00A884",
        fontWeight:"bold",
        marginTop : verticalScale(15),
        alignItems:"center"
    }
})

export default index