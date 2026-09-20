import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import { Image } from 'expo-image'
import imagePath from '@/constants/imagePath'
import ButtonComp from '@/components/atoms/ButtonComp'
import { router } from 'expo-router'

const terms_agree = () => {

  const onAgree = () =>{
      router.push("/(auth)/login");
  }
  return (
   <SafeAreaView style={styles.container}>
     <View style={styles.header}>
      <Text style = {styles.welcome_text}>Welcome To Whatsapp</Text>
      <Image source={imagePath.welcome} style={styles.image_style} resizeMode='contain'/>
      <Text style={styles.description_text}>
        Read our <Text style={styles.lint_text}>Privacy Policy.</Text> Tap "Agree and continue" to accept the <Text style={styles.lint_text}>Terms of Service.</Text>
      </Text>
      <View style={styles.button}><ButtonComp title = "AGREE AND CONTINUE" onPress={onAgree}/></View>
     </View>
     <View style={styles.footer}>
      <Text style = {styles.from_text}>From</Text>
      <Text style={styles.facebook_text}>Facebook</Text>
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
      paddingVertical:verticalScale(55),
      paddingHorizontal:scale(24),
  },
  header:{
    alignItems:"center",
    gap:verticalScale(25),
    width:"100%",
  },
  footer:{
      alignItems:"center",
  },
  from_text:{
      fontSize:moderateScale(12),
      color:"#867373",
      marginBottom:verticalScale(3),
  },
  facebook_text:{
    fontSize:moderateScale(14),
    color:"#075E54",
    textTransform:"uppercase",
    fontWeight:"600",
  },
  welcome_text:{
    width:"100%",
    fontWeight:"bold",
    fontSize:moderateScale(30),
    lineHeight:moderateScale(38),
    color:"black",
    marginBottom:verticalScale(5),
  },
  image_style:{
    width:moderateScale(190),
    height:moderateScale(190),
    borderRadius:moderateScale(190),
    marginBottom:verticalScale(5),
  },
  description_text:{
      width:"100%",
      textAlign:"center",
      fontSize:moderateScale(13),
      lineHeight:moderateScale(19),
      color:"black",
  },
  lint_text:{
    color:"#0C42CC",
  },
  button:{
      width:"100%",
      paddingHorizontal:scale(5),
  }
})

export default terms_agree