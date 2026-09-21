import Calls from "@/components/moleccules/Calls";
import Chats from "@/components/moleccules/Chats";
import Status from "@/components/moleccules/Status";
import React, { useState } from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import { Ionicons } from "@expo/vector-icons"

const index = () => {
  const [currentPage, setCurentPage] = useState("chat");

  const ActivePage = () => {
    switch (currentPage) {
      case "chat":
        return <Chats />;
      case "status":
        return <Status />;
      case "calls":
        return <Calls />;
      default:
        return <Chats />;
    }
  };

  const WhatsAppHeader = () => {
    return (
      <View style={styles.whatsappHeaderStyle}>
        <Text style={styles.whatsappText}>WhatsApp</Text>

        <View style={styles.iconcontainer}>
          <TouchableOpacity>
            <Ionicons name="search" style={styles.headerIcon} />
          </TouchableOpacity>

          <TouchableOpacity>
            <Ionicons name="ellipsis-vertical" style={styles.headerIcon} />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={["top", "left", "right"]}>
      <StatusBar
        backgroundColor="#008069"
        barStyle="light-content"
        translucent={false}
      />

      <WhatsAppHeader />

      <View style={styles.topBarContainer}>
        {["chat", "status", "calls"].map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() => setCurentPage(item)}
              style={[
                styles.topBarButton,
                item == currentPage && { borderColor: "white" }
              ]}
            >
              <Text style={styles.topBarText}>{item}</Text>
            </TouchableOpacity>
          )
        })}
      </View>

      <View style={styles.pageContainer}>
        {ActivePage()}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008069",
  },
  whatsappHeaderStyle: {
    backgroundColor: "#008069",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(14),
  },
  whatsappText: {
    fontSize: moderateScale(20),
    fontWeight: "bold",
    color: "white",
  },
  iconcontainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(18),
  },
  headerIcon: {
    fontSize: moderateScale(26),
    color: "white",
  },
  topBarContainer: {
    flexDirection: "row",
    backgroundColor: "#008069",
    paddingHorizontal: scale(5),
  },
  topBarButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: verticalScale(3),
    borderColor: "#008069",
    paddingVertical: verticalScale(11),
  },
  topBarText: {
    fontSize: moderateScale(14),
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
});

export default index;