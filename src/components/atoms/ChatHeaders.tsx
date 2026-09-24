import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { moderateScale, scale, verticalScale } from "react-native-size-matters";
import imagePath from "@/constants/imagePath";

interface ChatHeaderProps {
  name?: string;
  onPressVideoCall?: () => void;
  onPressCall?: () => void;
  onPressMenu?: () => void;
}

const ChatHeader = ({
  name,
  onPressVideoCall,
  onPressCall,
  onPressMenu,
}: ChatHeaderProps) => {
  const params = useLocalSearchParams<{ name?: string }>();
  const displayName = name || params.name || "Chat";

  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        <Ionicons
          name="arrow-back-sharp"
          style={styles.backIcon}
          onPress={() => router.back()}
        />
        <Image
          source={imagePath.logo}
          style={styles.image}
        />
        <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
          {displayName}
        </Text>
      </View>

      <View style={styles.rightIconsContainer}>
        <TouchableOpacity
          onPress={onPressVideoCall || (() => alert("Video Call"))}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="videocam"
            size={moderateScale(22)}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressCall || (() => alert("Voice Call"))}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="call"
            size={moderateScale(20)}
            color="white"
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onPressMenu || (() => alert("Menu"))}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Ionicons
            name="ellipsis-vertical"
            size={moderateScale(20)}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(12),
    backgroundColor: "#008069",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(10),
    flex: 1,
    marginRight: scale(10),
  },
  backIcon: {
    fontSize: moderateScale(24),
    color: "white",
  },
  image: {
    width: moderateScale(40),
    height: moderateScale(40),
    borderRadius: moderateScale(40),
  },
  name: {
    fontSize: moderateScale(16),
    fontWeight: "700",
    color: "white",
    marginStart: scale(2),
    flexShrink: 1,
  },
  rightIconsContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: scale(18),
  },
});

export default ChatHeader;