import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import Swiper from "react-native-swiper";
import { onboarding } from "../../constants";
import { useRef } from "react";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const Onboarding = () => {
  const swiperRef = useRef();
  const [activeIndex, setActiveIndex] = useState(0);
  const isLastSlide = activeIndex === onboarding.length - 1;

  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white">
      <View className="flex-1 items-center justify-center w-full">
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={
            <View className="w-[32px] h-[4px] mx-1 bg-[#d0d0d0] rounded-full" />
          }
          activeDot={
            <View className="w-[64px] h-[4px] mx-1 bg-[#304ffe] rounded-full" />
          }
          onIndexChanged={(index) => setActiveIndex(index)}
        >
          {onboarding.map((item) => (
            <View
              key={item.id}
              className="flex items-center justify-center p-5"
            >
              <Image
                source={item.image}
                className="w-full h-[300px] mt-[10vh]"
                resizeMode="contain"
              />
              <View className="flex flex-row items-center justify-center w-full mt-10">
                <Text className="text-black text-5xl font-bold mx-10 text-center">
                  {item.title}
                </Text>
              </View>
            </View>
          ))}
        </Swiper>

        <CustomButton
          title={isLastSlide ? "Get Started" : "Next"}
          handlePress={() =>
            isLastSlide
              ? router.push("/(auth)/getstarted")
              : swiperRef.current?.scrollBy(1)
          }
          containerStyles="w-11/12 mt-10 mb-16 bg-[#304ffe]"
          textStyles="text-white"
        />
      </View>
    </SafeAreaView>
  );
};

export default Onboarding;
