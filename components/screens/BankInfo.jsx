import { View, Text, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const BankInfo = ({ bankFormData, handleInputChange, errors }) => {
  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-2 rounded-lg font-Jakarta`;

  return (
    <View className="p-4 bg-background">
      {/* Select Payment Method */}
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Select Payment Method<Text className="text-error">*</Text>
        </Text>
        <View className={inputStyle(errors.paymentMethod)}>
          <Picker
            selectedValue={bankFormData.paymentMethod}
            onValueChange={(itemValue) =>
              handleInputChange("paymentMethod", itemValue)
            }
          >
            <Picker.Item label="Select Payment Method" value="" />
            <Picker.Item label="M-Pesa" value="mpesa" />
            <Picker.Item label="Bank" value="bank" />
          </Picker>
        </View>
        {errors.paymentMethod && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.paymentMethod}
          </Text>
        )}
      </View>

      {/* M-Pesa Phone Number Input */}
      {bankFormData.paymentMethod === "mpesa" && (
        <View className="border border-neutral-500 rounded-3xl p-4">
          <View className="mb-4">
            <Text className="text-lg font-JakartaSemiBold mb-2">
              M-Pesa Phone Number
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-lg font-Jakarta"
              value={bankFormData.mpesaNumber}
              onChangeText={(text) => handleInputChange("mpesaNumber", text)}
              placeholder="Enter Safaricom Registered Phone Number"
              keyboardType="phone-pad"
            />
            {errors.mpesaNumber && (
              <Text className="text-error font-Jakarta text-xs">
                {errors.mpesaNumber}
              </Text>
            )}
          </View>
        </View>
      )}

      {/* Bank Details Input */}
      {bankFormData.paymentMethod === "bank" && (
        <View className="border border-neutral-500 rounded-3xl p-4">
          <View className="mb-4">
            <Text className="text-lg font-JakartaSemiBold mb-2">Bank Name</Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-lg font-Jakarta"
              value={bankFormData.bankName}
              onChangeText={(text) => handleInputChange("bankName", text)}
              placeholder="Enter Bank Name"
            />
            {errors.bankName && (
              <Text className="text-error font-Jakarta text-xs">
                {errors.bankName}
              </Text>
            )}
          </View>
          <View className="mb-4">
            <Text className="text-lg font-JakartaSemiBold mb-2">
              Account Number
            </Text>
            <TextInput
              className="border border-gray-300 p-2 rounded-lg font-Jakarta"
              value={bankFormData.accountNumber}
              onChangeText={(text) => handleInputChange("accountNumber", text)}
              placeholder="Enter Bank Account Number"
              keyboardType="numeric"
            />
            {errors.accountNumber && (
              <Text className="text-error font-Jakarta text-xs">
                {errors.accountNumber}
              </Text>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default BankInfo;
