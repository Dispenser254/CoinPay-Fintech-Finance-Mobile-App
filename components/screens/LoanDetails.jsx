import { View, Text, TextInput, ScrollView } from "react-native";

const LoanDetails = ({ loanFormData, handleLoanAmountChange, errors }) => {
  const inputStyle = (error) =>
    `border ${error ? "border-red-500" : "border-gray-300"} p-2 rounded-lg font-Jakarta`;
  return (
    <ScrollView className="p-4 bg-background">
      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Loan Amount (Kshs)<Text className="text-error">*</Text>
        </Text>
        <TextInput
          className={inputStyle(errors.loanAmount)}
          value={loanFormData.loanAmount}
          onChangeText={(text) => handleLoanAmountChange("mpesaNumber", text)}
          placeholder="Enter the loan amount required"
          keyboardType="numeric"
        />
        {errors.loanAmount && (
          <Text className="text-error font-Jakarta text-xs">
            {errors.loanAmount}
          </Text>
        )}
      </View>

      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Interest Rate (%)
        </Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta bg-gray-200"
          value={loanFormData.interestRate}
          editable={false} // Disable input to prevent editing
          placeholder="Interest rate will be calculated"
          keyboardType="numeric"
        />
      </View>

      <View className="mb-4">
        <Text className="text-lg font-JakartaSemiBold mb-2">
          Duration (Days)
        </Text>
        <TextInput
          className="border border-gray-300 p-2 rounded-lg font-Jakarta bg-gray-200"
          value={loanFormData.duration}
          editable={false} // Disable input to prevent editing
          placeholder="Duration will be calculated"
          keyboardType="numeric"
        />
      </View>
    </ScrollView>
  );
};

export default LoanDetails;
