import { View, Text, ScrollView, TextInput } from "react-native";
import React, { useState } from "react";
import { Picker } from "@react-native-picker/picker";

const PersonalInfo = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [idCardNumber, setIdCardNumber] = useState("");
  const [address, setAddress] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [gender, setGender] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");

  return (
    <ScrollView className="p-4 bg-background">
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">Full Name</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={fullName}
          onChangeText={setFullName}
          placeholder="Enter your full name"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">Date of Birth</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
          placeholder="Enter your date of birth"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          ID Card Number
        </Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={idCardNumber}
          onChangeText={setIdCardNumber}
          placeholder="Enter your ID card number"
          keyboardType="numeric"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">Phone Number</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">Email Address</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={emailAddress}
          onChangeText={setEmailAddress}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">Address</Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          value={address}
          onChangeText={setAddress}
          placeholder="Enter your address"
        />
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Marital Status
        </Text>
        <View style="border border-gray-300 rounded-lg">
          <Picker
            selectedValue={maritalStatus}
            onValueChange={(itemValue) => setMaritalStatus(itemValue)}
            itemStyle={{ fontFamily: "Jakarta", fontSize: 50 }}
          >
            <Picker.Item
              label="Select Marital Status"
              value=""
              style={{ fontFamily: "Jakarta" }}
            />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Divorced" value="divorced" />
          </Picker>
        </View>
      </View>
      <View className="mb-4 font-Jakarta">
        <Text className="text-lg font-JakartaSemiBold mb-2">Gender</Text>
        <Picker
          selectedValue={gender}
          className="border border-gray-300 p-2 rounded-lg font-Jakarta"
          onValueChange={(itemValue) => setGender(itemValue)}
        >
          <Picker.Item
            label="Select Gender"
            value=""
            className="font-Jakarta"
          />
          <Picker.Item label="Male" value="male" />
          <Picker.Item label="Female" value="female" />
          <Picker.Item label="Other" value="other" />
        </Picker>
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
