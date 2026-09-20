import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/components/atoms/ButtonComp'
import AntDesign from '@expo/vector-icons/AntDesign'
import OTPInput from "@codsod/react-native-otp-input";
import { storage } from '@/utils/utils'

const verify_otp = () => {

  const [otp,setOTP] = useState("");

  const onPress = () => {
    console.log(otp);
    storage.set("token","kljdhfsf4sfsfsfsjfsfrsgetg")
    console.log(storage.getAllKeys())
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.head}>
        <AntDesign
          name="arrow-left"
          style={styles.backButton}
        />

        <Text style={styles.headTitle}>
          Enter OTP Code
        </Text>
      </View>

      <View style={styles.body}>

        <Text style={styles.otpSendText}>
          Code has been send to +91 11******44
        </Text>

        <OTPInput
          length={4}
          onOtpComplete={(txt: string) => setOTP(txt)}
          style={styles.otpContainer}
          inputStyle={styles.input_style}
        />

        <Text style={styles.otpSendText}>
          Resend Code in <Text style={styles.counterText}>56</Text> s
        </Text>

      </View>

      <View style={styles.footer}>
        <ButtonComp
          title="Verify"
          onPress={onPress}
          style={styles.verifyButton}
        />
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    padding:moderateScale(20),
    flex:1,
    justifyContent:"space-between",
    paddingTop:verticalScale(30),
  },

  head:{
    alignItems:"center",
    gap:scale(10),
  },

  backButton:{
    fontSize:moderateScale(24),
    color:"black",
    fontWeight:"bold",
  },

  headTitle:{
    fontSize:moderateScale(20),
    color:"black",
    fontWeight:"bold",
  },

  body:{
    alignItems:"center",
  },

  counterText:{
    color:"#00A884",
  },

  otpSendText:{
    fontSize:moderateScale(16),
    fontWeight:"400",
  },

  resendText:{
  },

  footer:{
  },

  verifyButton:{
    borderRadius:moderateScale(30),
  },

  input_style:{
    color:"black",
    borderColor:"black",
    borderRadius:moderateScale(15),
    height:verticalScale(50),
    width:scale(50),
  },

  otpContainer:{
    gap:scale(10),
  },
})

export default verify_otp