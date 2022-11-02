import { View, Text } from "react-native";
import React from "react";
import { THEMES } from "../constants";

const PrimaryBtn = ({ propStyle, label }) => {
  const { colors, spacing, fonts } = THEMES;
  return (
    <View
      style={{
        flex: 1,
        height: 50,
        borderRadius: spacing.radius_s,
        backgroundColor: colors.primary,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={[fonts.H5, { color: "#ffff" }]}>{label}</Text>
    </View>
  );
};

export default PrimaryBtn;
