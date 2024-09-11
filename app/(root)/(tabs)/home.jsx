import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import CustomButton from "../../../components/CustomButton";
import { icons } from "../../../constants";
import Slider from "@react-native-community/slider";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

const Home = () => {
  const [loanLimit, setLoanLimit] = useState(5000);
  const [isBalanceVisible, setIsBalanceVisible] = useState(true);

  return (
    <SafeAreaView className="flex-1">
      {/* First Block */}
      <LinearGradient
        colors={["#0766ff", "#0766ff", "#3a85ff"]}
        start={{ x: 1, y: 0.2 }}
        end={{ x: 0.3, y: 1 }}
        className="relative z-0 w-full pt-[8vh] h-[60vh] rounded-b-[50px]"
      >
        <View className="flex flex-row items-center justify-between px-4 w-full mb-2">
          <Text className="text-white text-4xl font-JakartaBold">
            Coin<Text className="text-orange-400">Pay</Text>
          </Text>
          <Image
            source={icons.Notification}
            resizeMode="contain"
            className="w-7 h-7"
            style={{ tintColor: "white" }}
          />
        </View>
        <View className="flex items-center justify-center px-4 w-full mb-4 mt-4">
          <Text className="font-JakartaBold text-xl text-white">
            Your Credit Balance
          </Text>
          <View className="flex flex-row items-center mt-2 gap-x-6">
            <Text className="text-3xl font-Jakarta text-white">
              {"Kshs."}
              {isBalanceVisible ? "0.00" : "****"}
            </Text>
            <TouchableOpacity
              onPress={() => setIsBalanceVisible(!isBalanceVisible)}
            >
              <Image
                source={isBalanceVisible ? icons.EyeSlash : icons.Eye} // Change icon based on state
                resizeMode="contain"
                className="w-7 h-7"
                tintColor="#ffffff"
              />
            </TouchableOpacity>
          </View>
        </View>
      </LinearGradient>

      <View className="absolute top-[30vh] left-6 right-6 z-10 bg-white h-[40vh] rounded-2xl py-4 px-4 shadow-lg">
        {/* Title Centered */}
        <Text className="text-black text-3xl font-JakartaExtraBold mb-4 text-center">
          Loan Amount Limit
        </Text>

        {/* Loan Limit Display */}
        <Text className="text-black text-lg font-JakartaSemiBold mb-4">
          Loan Limit: Kshs. {loanLimit.toLocaleString()}
        </Text>

        {/* Slider Container */}
        <View className="w-full items-center">
          {/* Labels for Min and Max Values */}
          <View className="flex flex-row justify-between w-full mb-2">
            <Text className="text-neutral-700 text-sm font-JakartaExtraLight">
              Min: Kshs. 1,000
            </Text>
            <Text className="text-neutral-700 text-sm font-JakartaExtraLight">
              Max: Kshs. 50,000
            </Text>
          </View>

          {/* Slider Centered */}
          <Slider
            style={{ width: "100%", height: 40 }}
            minimumValue={1000} // Minimum loan limit value
            maximumValue={50000} // Maximum loan limit value
            step={500} // Step value for increments
            value={loanLimit}
            onValueChange={(value) => setLoanLimit(value)}
            minimumTrackTintColor="#4267B2" // Facebook blue
            maximumTrackTintColor="#E0E0E0" // Light gray
            thumbTintColor="#4267B2" // Facebook blue
            thumbStyle={{ height: 30, width: 30 }} // Increase the size of the thumb
          />
        </View>

        {/* Button Section */}
        <View className="flex-1 justify-end items-center px-4 pt-4">
          <Text className="font-JakartaSemiBold text-2xl text-black mb-2">
            Make a loan
          </Text>
          <Text className="font-JakartaMedium text-black mb-4 text-center">
            We are ready to help you for your awesome work. Let's invest there
          </Text>
          <CustomButton
            containerStyles="py-4 w-full bg-primary"
            handlePress={() => router.push("/loan")}
            textStyles="font-JakartaSemiBold text-white"
            title="Apply for a Loan"
          />
        </View>
      </View>

      {/* Last Block */}
      <View className="relative z-0 h-[40vh] px-8">
        <View className="flex-1 mt-[12vh] items-center">
          <Text className="text-3xl font-JakartaBold mb-4 text-black">
            Services
          </Text>
          <View className="flex flex-row justify-between items-start w-full">
            {/* First Item - Deposit */}
            <View className="flex items-center">
              <View className="bg-blue-500 rounded-lg h-12 w-12 flex justify-center items-center">
                <ImageBackground
                  source={icons.Deposit}
                  resizeMode="contain"
                  className="h-8 w-8"
                />
              </View>
              <Text className="text-black text-base font-Jakarta mt-2">
                Deposit
              </Text>
            </View>

            {/* Second Item - Savings History */}
            <View className="flex items-center">
              <View className="bg-blue-500 rounded-lg h-12 w-12 flex justify-center items-center">
                <ImageBackground
                  source={icons.SavingsHistory}
                  resizeMode="contain"
                  className="h-8 w-8"
                />
              </View>
              <Text className="text-black text-center text-base font-Jakarta mt-2">
                Savings{"\n"}History
              </Text>
            </View>

            {/* Third Item - Loan History */}
            <View className="flex items-center">
              <View className="bg-blue-500 rounded-lg h-12 w-12 flex justify-center items-center">
                <ImageBackground
                  source={icons.LoanHistory}
                  resizeMode="contain"
                  className="h-8 w-8"
                />
              </View>
              <Text className="text-black text-center text-base font-Jakarta mt-2">
                Loan{"\n"}History
              </Text>
            </View>

            {/* Fourth Item - Calculator */}
            <View className="flex items-center">
              <View className="bg-blue-500 rounded-lg h-12 w-12 flex justify-center items-center">
                <ImageBackground
                  source={icons.Calculator}
                  resizeMode="contain"
                  className="h-8 w-8"
                />
              </View>
              <Text className="text-black text-base font-Jakarta mt-2">
                Calculator
              </Text>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
