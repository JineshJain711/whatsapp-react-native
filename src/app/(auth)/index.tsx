import { View, Text, StyleSheet, Image, ActivityIndicator } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagePath from '@/constants/imagePath'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { router } from 'expo-router';

const index = () => {
    const[isLoading,setIsLoading] = useState(false);

    let loading_timeout = (() =>{
        setIsLoading(true);
        setTimeout(navigate_to_welcome,3000);
    })

    let navigate_to_welcome = () =>{
        router.push("/(auth)/terms_agree")
    }

    useEffect(()=>{
        const timeout = setTimeout(loading_timeout,2000);

        return () =>{
            clearTimeout(timeout)
        }

    },[])

  return (
    <SafeAreaView style = {styles.container}>
      <View style = {styles.header}></View>

      <View style = {styles.body}>
        <Image
            source={imagePath.logo}
            resizeMode='contain'
            style={styles.logo_style}
        />

        <Text style={styles.whatsapp_text}>
            Whatsapp
        </Text>
      </View>

      <View style = {styles.footer}>
        {
            isLoading ? (
                <>
                    <ActivityIndicator
                        size={moderateScale(40)}
                        color={"#00A884"}
                    />

                    <Text style = {styles.load}>
                        Loading...
                    </Text>
                </>
            ) : (
                <>
                    <Text style={styles.from_text}>
                        From
                    </Text>

                    <Text style={styles.facebook_text}>
                        Facebook
                    </Text>
                </>
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
    },

    header:{
    },

    body:{
        position:"absolute",
        top:"50%",
        left:0,
        right:0,
        alignItems:"center",
        transform:[{translateY:-verticalScale(55)}],
    },

    footer:{
        position:"absolute",
        bottom:verticalScale(30),
        left:0,
        right:0,
        alignItems:"center",
        height:verticalScale(80),
    },

    from_text:{
        fontSize:moderateScale(12),
        color:"#867373"
    },

    facebook_text:{
        fontSize:moderateScale(15),
        color:"#000000",
    },

    logo_style:{
        width:moderateScale(70),
        height:moderateScale(70),
        borderRadius:moderateScale(10)
    },

    whatsapp_text:{
        fontSize:moderateScale(35),
        color:"#000000",
        fontWeight:"bold",
        marginTop:verticalScale(10),
    },

    load:{
        fontSize:moderateScale(16),
        color:"#00A884",
        fontWeight:"bold",
        marginTop:verticalScale(10),
    }
})

export default index