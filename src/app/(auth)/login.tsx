import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { moderateScale, scale, verticalScale } from 'react-native-size-matters'
import ButtonComp from '@/components/atoms/ButtonComp'
import AntDesign from '@expo/vector-icons/AntDesign'
import { router } from 'expo-router'
import CountryPicker from 'react-native-country-picker-modal'

const login = () => {

  const [visible,setVisible] = useState(false)
  const [countryName,setCountryName] = useState("India")
  const [countryCode,setCountryCode] = useState("+91")

  const onNextButtonClick = () => {
    router.push("/(auth)/verify_otp")
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <View style={styles.heading_container}>
          <Text style={styles.heading}>Enter Your Phone Number</Text>

          <Text style={styles.desc}>
            WhatsApp will need to verify your phone number.
            <Text style={styles.link_desc}> What's my number?</Text>
          </Text>
        </View>

        <View style={styles.input_main_container}>

          <TouchableOpacity
            style={styles.dropdown_container}
            onPress={() => setVisible(true)}
          >
            <View />

            <Text style={styles.dropdown_title}>
              {countryName}
            </Text>

            <AntDesign
              name="caret-down"
              size={16}
              color="black"
            />
          </TouchableOpacity>

          <View style={styles.horizontal_line} />

          <View style={styles.input_container}>

            <View style={styles.country_code}>
              <Text style={styles.country_code_text}>
                {countryCode}
              </Text>

              <View style={styles.vertical_line} />
            </View>

            <View style={{gap:verticalScale(10),flex:1}}>
              <TextInput
                style={styles.input}
                placeholder="Enter Your Phone Number"
                keyboardType="phone-pad"
                maxLength={10}
              />
            </View>

          </View>

          <View style={styles.horizontal_line} />

        </View>

      </View>

      <View style={styles.footer}>
        <ButtonComp
          title="Next"
          style={{paddingHorizontal:scale(29)}}
          onPress={onNextButtonClick}
        />
      </View>

      <CountryPicker
        visible={visible}
        withFilter
        withFlag
        withCallingCode
        withCountryNameButton={false}
        withAlphaFilter
        onClose={() => setVisible(false)}
        onSelect={(country) => {
          setCountryName(country.name as string)
          setCountryCode(`+${country.callingCode[0]}`)
          setVisible(false)
        }}
      />

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1,
      paddingVertical:verticalScale(70),
      justifyContent:"space-between",
      alignItems:'center',
      paddingHorizontal:scale(20),
  },

  header:{
    gap:verticalScale(50),
    width:"100%",
  },

  footer:{
    width:"100%",
    alignItems:"center",
  },

  heading_container:{
      gap:verticalScale(20),
  },

  input_main_container:{
    paddingHorizontal:scale(10),
    paddingVertical:verticalScale(12),
  },

  heading:{
    fontSize:moderateScale(20),
    color:"black",
    fontWeight:"bold",
    textAlign:"center",
  },

  desc:{
      textAlign:"center",
      fontSize:moderateScale(13),
      fontWeight:"400",
      color:"black",
  },

  link_desc:{
    color:"#002ACB"
  },

  horizontal_line:{
    width:"100%",
    height:verticalScale(1),
    backgroundColor:"#05AA82",
  },

  dropdown_container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingVertical:verticalScale(10),
    paddingHorizontal:scale(20),
  },

  dropdown_title:{
      fontSize:moderateScale(16),
      fontWeight:"500",
      color:"black",
  },

  input_container:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(20),
    paddingHorizontal:scale(20),
    paddingVertical:verticalScale(10),
  },

  country_code:{
    flexDirection:"row",
    alignItems:"center",
    gap:scale(15),
  },

  vertical_line:{
    width:verticalScale(1),
    height:verticalScale(25),
    backgroundColor:"#CCCCCC",
  },

  input:{
    fontSize:moderateScale(16),
    fontWeight:"500",
    color:"black",
    padding:0,
  },

  country_code_text:{
    fontSize:moderateScale(16),
    fontWeight:"500",
    color:"black",
  }

})

export default login