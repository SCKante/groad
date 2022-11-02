import { View, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { DATA, THEMES } from "../constants";
import { ScrollView } from "react-native-gesture-handler";
import { PrimaryBtn } from "../components";
import { logoText } from "../assets";

const { spacing, colors, fonts, HEIGHT, WIDTH } = THEMES;
const Onboarding = ({ onLayout }) => {
  const { SLIDE_DATA } = DATA;

  return (
    <SafeAreaView onLayout={onLayout} style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView
        showsHorizontalScrollIndicator={false}
        snapToInterval={WIDTH}
        scrollEventThrottle={16}
        horizontal
      >
        {SLIDE_DATA.map((slide, index) => {
          return (
            <View key={index} style={{ width: WIDTH, overflow: "hidden" }}>
              <View style={styles.slide}>
                <View style={styles.slideHeader}>
                  <Image
                    style={{ width: 300, height: 300, resizeMode: "contain" }}
                    source={slide.thumbnail}
                  />
                </View>
                <View style={styles.slideFooter}>
                  <Text>{slide.title}</Text>
                  <Text>{slide.subtitle}</Text>
                </View>
              </View>
              <View
                style={[
                  styles.layout,
                  {
                    backgroundColor: colors.tertiary,
                  },
                  slide.style,
                ]}
              />
              {index == 1 && (
                <View
                  style={[
                    styles.layout,
                    {
                      position: "absolute",
                      backgroundColor: "#FFFF",
                      bottom: 0,
                      borderTopLeftRadius: 295,
                      borderTopRightRadius: 318,
                      zIndex: -1,
                    },
                  ]}
                />
              )}
            </View>
          );
        })}
      </ScrollView>
      <View style={styles.overlay}>
        <Image
          source={logoText}
          style={{
            width: 150,
            height: 80,
            resizeMode: "contain",
          }}
        />
        <View style={styles.row}>
          <View style={styles.dotContainer}>
            {SLIDE_DATA.map((_, i) => {
              return (
                <View
                  key={i}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 8,
                    backgroundColor: colors.primary,
                    marginRight: 8,
                  }}
                />
              );
            })}
          </View>
          <PrimaryBtn label={"Next"} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFF",
  },
  layout: {
    position: "absolute",
    width: 600,
    height: HEIGHT * 0.55,
    left: -86,
    zIndex: -1,
  },
  slide: {
    flex: 1,
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: WIDTH,
    height: HEIGHT,
    justifyContent: "space-between",
    alignItems: "center",
    padding: spacing.padding20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 60,
    marginBottom: spacing.padding16 * 2,
  },
  dotContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flex: 1,
    width: WIDTH,
  },
  slideHeader: {
    height: HEIGHT * 0.6,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  slideFooter: {
    height: HEIGHT * 0.4,
    justifyContent: "flex-start",
    paddingTop: spacing.padding20 * 2,
    alignItems: "center",
  },
});
