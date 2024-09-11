import { View, Text, ScrollView, Image } from "react-native";
import React, { useEffect, useState } from "react";
import SafeAreaView from "react-native-safe-area-view";
import CustomButton from "../../../components/CustomButton";
import { ProgressStep, ProgressSteps } from "react-native-progress-steps";
import ReactNativeModal from "react-native-modal";
import { icons } from "../../../constants";

const Spending = () => {
  const [activeStep, setActiveStep] = useState(2);
  const [isComplete, setIsComplete] = useState(false);
  const [isCancelled, setIsCancelled] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);

  // Simulate fetching data from backend and updating the step
  useEffect(() => {
    // Simulate a delay for fetching backend data
    const fetchLoanStatus = async () => {
      // Simulate API call delay
      // Assume we get a response indicating the loan has been accepted
      const loanAccepted = false; // Replace with actual backend response

      if (loanAccepted) {
        setIsComplete(true);
        setActiveStep(2); // Move to "Loan Acceptance" step
      }
    };

    fetchLoanStatus();
  }, []);

  // Function to handle cancel action
  const handleCancelApplication = () => {
    setIsCancelled(true); // Set the application as canceled
  };

  return (
    <SafeAreaView className="flex-1">
      <ScrollView>
        <View className="flex items-center justify-center">
          <View className="bg-white h-[35vh] w-5/6 mt-8 rounded-2xl flex px-3 items-center justify-center">
            <Text className="font-JakartaBold text-2xl mt-4">
              Your Loan Progress
            </Text>
            <ProgressSteps
              activeStep={activeStep}
              progressBarColor="#aeaabf"
              activeStepIconBorderColor="#11da06"
              completedProgressBarColor="#11da06"
              completedStepIconColor="#11da06"
              disabledStepIconColor="#aeaabf"
              labelFontFamily="Jakarta-Bold"
              labelFontSize={12}
              activeLabelColor="#4267B2"
              completedLabelColor="#000700"
              isComplete={isComplete}
            >
              <ProgressStep
                label={`Application${"\n"}Submitted`}
                removeBtnRow={true}
              ></ProgressStep>
              <ProgressStep
                label={`Processing`}
                removeBtnRow={true}
              ></ProgressStep>
              <ProgressStep
                label={`Loan${"\n"}Acceptance`}
                removeBtnRow={true}
              ></ProgressStep>
            </ProgressSteps>
            <Text className="font-JakartaExtraLight text-sm">
              If you want to do re-apply or edit your data, you can do it.
            </Text>
            <View className="flex flex-row mt-4 mb-4">
              <CustomButton
                title={"Edit Info"}
                containerStyles={`w-1/3 mr-3 py-4 border ${
                  isCancelled
                    ? "bg-gray-300 border-gray-300"
                    : "bg-primary border-blue-500"
                }`}
                textStyles={`font-JakartaSemiBold text-sm ${
                  isCancelled ? "text-gray-500" : "text-white"
                }`}
                disabled={isCancelled}
              />
              <CustomButton
                title={"Cancel Application"}
                handlePress={() => setShowCancelModal(true)}
                containerStyles={`w-1/2 py-4 border ${
                  isCancelled
                    ? "bg-gray-300 border-gray-300"
                    : "bg-white border-blue-500"
                }`}
                textStyles={`font-JakartaSemiBold text-sm ${
                  isCancelled ? "text-gray-500" : "text-red-500 text-center"
                }`}
                disabled={isCancelled}
              />
            </View>
            {isCancelled && (
              <Text className="font-JakartaBold text-4xl uppercase border-4 text-center border-red-600 px-6 py-4 text-red-600 absolute -rotate-12">
                Cancelled
              </Text>
            )}
          </View>
        </View>

        <ReactNativeModal isVisible={showCancelModal}>
          <View className="bg-white mx-4 py-10 px-6 rounded-3xl flex items-center justify-center">
            <View className="">
              <Image
                source={icons.Warning}
                resizeMode="contain"
                tintColor="#ff0707"
                className="w-[100px] h-[100px]"
              />
            </View>

            <Text className="text-2xl font-JakartaBold text-center mt-4">
              Are you sure you want to cancel your application?
            </Text>
            <View className="flex flex-row mt-6">
              <CustomButton
                title="Close"
                handlePress={() => setShowCancelModal(false)}
                containerStyles="w-2/5 mr-8 bg-white border-2 border-blue-500"
                textStyles="font-JakartaSemiBold text-lg text-black"
              />
              <CustomButton
                title="Cancel"
                handlePress={() => {
                  handleCancelApplication(); // Confirm cancellation
                  setShowCancelModal(false); // Close modal after action
                }}
                containerStyles="w-2/5 bg-red-500 py-1"
                textStyles="font-JakartaSemiBold text-lg text-white"
              />
            </View>
          </View>
        </ReactNativeModal>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Spending;
