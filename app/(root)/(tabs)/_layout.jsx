import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { icons } from "../../../constants";

const TabIcon = ({ icon, name, color, focused }) => {
  return (
    <View className="flex items-center justify-center gap-2">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-JakartaSemiBold" : "font-Jakarta"} text-xs`}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const Layout = () => {
  return (
    <Tabs
      initialRouteName="index"
      screenOptions={{
        tabBarActiveTintColor: "white", // Active tab color
        tabBarInactiveTintColor: "#9b9ea1", // Inactive tab color (light grey)
        tabBarShowLabel: false, // Hides the label to show only icons
        tabBarStyle: {
          backgroundColor: "#0766ff", // Facebook blue background for tab bar
          height: 78,
          overflow: "hidden",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          marginBottom: 20,
          marginHorizontal: 20,
          borderRadius: 50,
          shadowColor: "#000", // Adds shadow to give a modern, elevated effect
          shadowOffset: { width: 0, height: 5 },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          elevation: 5,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Home}
              color={color}
              name="Home"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="spending"
        options={{
          title: "Spending",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Analytics}
              color={color}
              name="Spending"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.Chat}
              color={color}
              name="Message"
              focused={focused}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false,
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              icon={icons.User}
              color={color}
              name="Profile"
              focused={focused}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default Layout;
