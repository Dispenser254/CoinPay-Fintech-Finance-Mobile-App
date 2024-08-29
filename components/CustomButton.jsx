import { TouchableOpacity, Text } from "react-native";

// Define the CustomButton component
const CustomButton = ({ handlePress, containerStyles, title, textStyles }) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      className={`w-full rounded-full p-5 flex flex-row justify-center items-center shadow-md shadow-neutral-400/70 ${containerStyles}`}
    >
      <Text className={`text-lg font-bold ${textStyles}`}>{title}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
