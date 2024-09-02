import { View, Text, Image } from "react-native";
import React from "react";
import SafeAreaView from "react-native-safe-area-view";
import CustomButton from "../../components/CustomButton";
import { images } from "../../constants";
import { router } from "expo-router";

const Welcome = () => {
  return (
    <SafeAreaView className="flex items-center justify-between h-full">
      <View className="flex-1 items-center justify-center w-full">
        <Image
          source={images.Welcome}
          resizeMode="contain"
          className="w-full h-[250px]"
        />

        <View className="items-center space-y-3 mt-6">
          <Text className="text-3xl font-JakartaBold text-center">
            Congratulations{"\n"} Welcome to CoinPay
          </Text>
          <Text className="px-4 text-neutral-500 font-JakartaLight text-lg text-center">
            We are happy to see you. It's time to send, receive and track your
            expense.
          </Text>
        </View>
      </View>
      <CustomButton
        title={"Continue"}
        handlePress={() => router.push("/(tabs)/home")}
        containerStyles="w-11/12 mt-10 mb-16 bg-primary"
        textStyles="font-JakartaSemiBold text-lg text-white"
      />
    </SafeAreaView>
  );
};

export default Welcome;
