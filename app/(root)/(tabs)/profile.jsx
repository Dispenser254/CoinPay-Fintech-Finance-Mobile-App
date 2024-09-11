import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Switch,
} from "react-native";
import React, { useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import { LinearGradient } from "expo-linear-gradient";
import { icons, images } from "../../../constants";

const Profile = () => {
  const [isDarkMode, setIsDarkMode] = useState(false); // State to handle dark mode toggle

  const toggleDarkMode = () => {
    setIsDarkMode((previousState) => !previousState); // Toggle dark mode state
    // Add your logic for activating/deactivating dark mode here
  };
  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <LinearGradient
          colors={["#0766ff", "#0766ff", "#3a85ff"]}
          start={{ x: 1, y: 0.2 }}
          end={{ x: 0.3, y: 1 }}
          className="flex w-full pt-[8vh] h-[50vh] rounded-b-[400px]"
        >
          <View className="flex items-center justify-between h-full">
            <View className="bg-white w-3/4 h-[16vh] rounded-3xl py-3 px-6">
              <Text className="font-JakartaBold text-2xl text-center underline mb-2">
                Personal Details
              </Text>
              <View className="flex flex-row gap-x-2">
                <Text className="font-Jakarta text-base">Name:</Text>
                <Text className="font-JakartaSemiBold text-base">
                  Stephen Kibe
                </Text>
              </View>
              <View className="flex flex-row gap-x-2">
                <Text className="font-Jakarta text-base">Email:</Text>
                <Text className="font-JakartaSemiBold text-base">
                  stevensonkibs55@gmail.com
                </Text>
              </View>
              <View className="flex flex-row gap-x-2">
                <Text className="font-Jakarta text-base">Phone No:</Text>
                <Text className="font-JakartaSemiBold text-base">
                  0111927170
                </Text>
              </View>
            </View>
            <View className="-mb-[22px]">
              <Image
                source={images.Profile}
                resizeMode="contain"
                className="w-[20vh] h-[25vh] rounded-full"
              />
            </View>
          </View>
        </LinearGradient>

        <View className="flex h-[75vh] rounded-3xl mx-6 bg-white mt-[5vh]">
          <TouchableOpacity>
            <View className="flex flex-row mx-4 mt-6 border-2 border-slate-200 rounded-3xl items-center justify-between px-4 py-4">
              <View className="flex flex-row items-center gap-x-5">
                <View className="bg-blue-200 p-3 rounded-full">
                  <Image
                    source={icons.User}
                    resizeMode="contain"
                    className="h-6 w-6"
                    tintColor="#0766ff"
                  />
                </View>
                <Text className="font-JakartaSemiBold text-lg">
                  Personal Info
                </Text>
              </View>
              <Image
                source={icons.RightArrow}
                resizeMode="contain"
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mx-4 mt-4 border-2 border-slate-200 rounded-3xl items-center justify-between px-4 py-4">
              <View className="flex flex-row items-center gap-x-5">
                <View className="bg-orange-200 p-3 rounded-full">
                  <Image
                    source={icons.Bank}
                    resizeMode="contain"
                    className="h-6 w-6"
                    tintColor="#e99400"
                  />
                </View>
                <Text className="font-JakartaSemiBold text-lg">Bank Info</Text>
              </View>
              <Image
                source={icons.RightArrow}
                resizeMode="contain"
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mx-4 mt-4 border-2 border-slate-200 rounded-3xl items-center justify-between px-4 py-4">
              <View className="flex flex-row items-center gap-x-5">
                <View className="bg-red-200 p-3 rounded-full">
                  <Image
                    source={icons.Transactions}
                    resizeMode="contain"
                    className="h-6 w-6"
                    tintColor="#e92a00"
                  />
                </View>
                <Text className="font-JakartaSemiBold text-lg">
                  Transactions
                </Text>
              </View>
              <Image
                source={icons.RightArrow}
                resizeMode="contain"
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex flex-row mx-4 mt-4 border-2 border-slate-200 rounded-3xl items-center justify-between px-4 py-4">
              <View className="flex flex-row items-center gap-x-5">
                <View className="bg-blue-200 p-3 rounded-full">
                  <Image
                    source={icons.Settings}
                    resizeMode="contain"
                    className="h-6 w-6"
                    tintColor="#0766ff"
                  />
                </View>
                <Text className="font-JakartaSemiBold text-lg">Settings</Text>
              </View>
              <Image
                source={icons.RightArrow}
                resizeMode="contain"
                className="h-6 w-6"
              />
            </View>
          </TouchableOpacity>

          <View className="flex flex-row mx-4 mt-4 border-2 border-slate-200 rounded-3xl items-center justify-between px-4 py-4">
            <View className="flex flex-row items-center gap-x-5">
              <View className="bg-neutral-400 p-3 rounded-full">
                <Image
                  source={icons.Moon}
                  resizeMode="contain"
                  className="h-6 w-6"
                  tintColor={isDarkMode ? "#ffffff" : "#000000"} // Change tint based on dark mode
                />
              </View>
              <Text className="font-JakartaSemiBold text-lg">Dark Mode</Text>
            </View>
            <Switch
              value={isDarkMode}
              onValueChange={toggleDarkMode}
              thumbColor={isDarkMode ? "#11da06" : "#f4f3f4"} // Color when switch is active
              trackColor={{ false: "#767577", true: "#81b0ff" }} // Track color for inactive and active states
              style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
