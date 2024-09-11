import { View, Text, TextInput, ScrollView } from "react-native";
import { Picker } from "@react-native-picker/picker";

const EmploymentDetails = ({
  employmentFormData,
  handleInputChange,
  errors,
}) => {
  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-2 rounded-lg font-Jakarta`;

  return (
    <ScrollView className="p-4 bg-background">
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Employment Type<Text className="text-error">*</Text>
        </Text>
        <View className={inputStyle(errors.employmentType)}>
          <Picker
            selectedValue={employmentFormData.employmentType}
            onValueChange={(itemValue) =>
              handleInputChange("employmentType", itemValue)
            }
          >
            <Picker.Item label="Select Employment Type" value="" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Self-Employed" value="self-employed" />
            <Picker.Item label="Employed" value="employed" />
            <Picker.Item label="Retired" value="retired" />
            <Picker.Item label="Jobless" value="jobless" />
          </Picker>
        </View>
        {errors.employmentType && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.employmentType}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Monthly Income<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.monthlyIncome)}
          value={employmentFormData.monthlyIncome}
          onChangeText={(text) => handleInputChange("monthlyIncome", text)}
          placeholder="Enter your monthly income"
          keyboardType="numeric"
        />
        {errors.monthlyIncome && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.monthlyIncome}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Experience (in Months)<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.experienceMonths)}
          value={employmentFormData.experienceMonths}
          onChangeText={(text) => handleInputChange("experienceMonths", text)}
          placeholder="Enter experience in months"
          keyboardType="numeric"
        />
        {errors.experienceMonths && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.experienceMonths}
          </Text>
        )}
      </View>

      <View className="border-2 border-neutral-500 shadow shadow-neutral-300 rounded-3xl p-4">
        <View className="mb-4">
          <Text className="text-lg font-JakartaSemiBold mb-2">
            Other Income
          </Text>
          <TextInput
            className={inputStyle(errors.otherIncome)}
            value={employmentFormData.otherIncome}
            onChangeText={(text) => handleInputChange("otherIncome", text)}
            placeholder="Enter any other income source"
          />
        </View>

        <View className="mb-4">
          <Text className="text-lg font-JakartaSemiBold mb-2">
            Amount from Other Income
          </Text>
          <TextInput
            className={inputStyle(errors.otherIncomeAmount)}
            value={employmentFormData.otherIncomeAmount}
            onChangeText={(text) =>
              handleInputChange("otherIncomeAmount", text)
            }
            placeholder="Enter the amount from other income"
            keyboardType="numeric"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default EmploymentDetails;
