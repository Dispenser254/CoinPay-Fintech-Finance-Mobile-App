import { View, Text, Image } from "react-native";
import SafeAreaView from "react-native-safe-area-view";
import { images, onboarding } from "../../constants";
import CustomButton from "../../components/CustomButton";
import { router } from "expo-router";

const GetStarted = () => {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-white px-4">
      <View className="flex-1 items-center justify-center w-full space-y-4">
        <Image
          source={images.Get_Started}
          resizeMode="contain"
          className="w-full h-[200px] mb-10"
        />

        <View className="items-center space-y-3">
          <Text className="text-5xl font-JakartaBold text-center">
            Create your{"\n"} CoinPay account
          </Text>
          <Text className="px-4 text-neutral-500 font-JakartaLight text-lg text-center">
            Coinpay is a powerful tool that allows you to easily send, receive,
            and track all your transactions.
          </Text>
        </View>

        <View className="w-full">
          <CustomButton
            title={"Sign Up"}
            handlePress={() => router.push("/(auth)/sign-up")}
            containerStyles="w-full bg-[#304ffe] mt-8"
            textStyles="text-white"
          />

          <CustomButton
            title={"Log In"}
            handlePress={() => router.push("/(auth)/welcome")}
            containerStyles="w-full mt-4 bg-transparent border-neutral-300 border-[0.5px]"
            textStyles="text-[#304ffe]"
          />
        </View>

        <Text className="px-4 pt-8 text-neutral-500 font-JakartaLight text-lg text-center">
          By continuing you accept our{"\n"}
          <Text className="text-blue-500 underline">
            Terms of Service
          </Text> and{" "}
          <Text className="text-blue-500 underline">Privacy Policy</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default GetStarted;
