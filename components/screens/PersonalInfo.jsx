import {
  View,
  Text,
  ScrollView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import DateTimePicker from "@react-native-community/datetimepicker";
import { useState } from "react";

const PersonalInfo = ({ personalFormData, handleInputChange, errors }) => {
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-2 rounded-lg font-Jakarta`;

  const handleDateChange = (event, date) => {
    if (event.type === "set" && date) {
      setSelectedDate(date);
      handleInputChange("dateOfBirth", date.toISOString().split("T")[0]); // Store in YYYY-MM-DD format
    }
    setDatePickerVisible(false);
  };

  return (
    <ScrollView className="p-4 bg-background">
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Full Name<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.fullName)}
          value={personalFormData.fullName}
          onChangeText={(text) => handleInputChange("fullName", text)}
          placeholder="Enter your full name"
        />
        {errors.fullName && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.fullName}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Date of Birth<Text className="text-error">*</Text>
        </Text>
        <TouchableOpacity
          onPress={() => setDatePickerVisible(true)}
          className={inputStyle(errors.dateOfBirth)}
        >
          <TextInput
            editable={false}
            placeholder="Enter Date of Birth"
            className="text-neutral-900"
            value={selectedDate.toDateString()}
          />
        </TouchableOpacity>
        {datePickerVisible && (
          <DateTimePicker
            mode="date"
            value={selectedDate}
            onChange={handleDateChange}
          />
        )}
        {errors.dateOfBirth && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.dateOfBirth}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          ID Card Number<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.idCardNumber)}
          value={personalFormData.idCardNumber}
          onChangeText={(text) => handleInputChange("idCardNumber", text)}
          placeholder="Enter your ID card number"
          keyboardType="numeric"
        />
        {errors.idCardNumber && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.idCardNumber}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Phone Number<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.phoneNumber)}
          value={personalFormData.phoneNumber}
          onChangeText={(text) => handleInputChange("phoneNumber", text)}
          placeholder="Enter your phone number"
          keyboardType="phone-pad"
        />
        {errors.phoneNumber && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.phoneNumber}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Email Address<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.emailAddress)}
          value={personalFormData.emailAddress}
          onChangeText={(text) => handleInputChange("emailAddress", text)}
          placeholder="Enter your email address"
          keyboardType="email-address"
        />
        {errors.emailAddress && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.emailAddress}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Address<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.address)}
          value={personalFormData.address}
          onChangeText={(text) => handleInputChange("address", text)}
          placeholder="Enter your address"
          multiline={true}
          numberOfLines={4}
          textAlignVertical="top"
        />
        {errors.address && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.address}
          </Text>
        )}
      </View>
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Marital Status<Text className="text-error">*</Text>
        </Text>
        <View className={inputStyle(errors.maritalStatus)}>
          <Picker
            selectedValue={personalFormData.maritalStatus}
            onValueChange={(itemValue) =>
              handleInputChange("maritalStatus", itemValue)
            }
          >
            <Picker.Item label="Select Marital Status" value="" />
            <Picker.Item label="Single" value="single" />
            <Picker.Item label="Married" value="married" />
            <Picker.Item label="Divorced" value="divorced" />
          </Picker>
        </View>
        {errors.maritalStatus && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.maritalStatus}
          </Text>
        )}
      </View>
      <View className="mb-4 font-Jakarta">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Gender<Text className="text-error">*</Text>
        </Text>
        <View className={inputStyle(errors.gender)}>
          <Picker
            selectedValue={personalFormData.gender}
            className="border border-gray-300 p-2 rounded-lg"
            onValueChange={(itemValue) =>
              handleInputChange("gender", itemValue)
            }
          >
            <Picker.Item label="Select Gender" value="" />
            <Picker.Item label="Male" value="male" />
            <Picker.Item label="Female" value="female" />
            <Picker.Item label="Other" value="other" />
          </Picker>
        </View>
        {errors.gender && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.gender}
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default PersonalInfo;
