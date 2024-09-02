/* eslint-disable react-hooks/rules-of-hooks */
import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import PersonalInfo from "../../components/screens/PersonalInfo";
import BasicDetails from "../../components/screens/BasicDetails";
import EmploymentDetails from "../../components/screens/EmploymentDetails";
import LoanDetails from "../../components/screens/LoanDetails";
import BankInfo from "../../components/screens/BankInfo";
import { router } from "expo-router";
import ReactNativeModal from "react-native-modal";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";

const loan = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const nextBtnStyle = {
    paddingVertical: 12, // Equivalent to `py-2`
    paddingHorizontal: 40, // Equivalent to `px-4`
    backgroundColor: "#0766ff", // Equivalent to `bg-blue-600`
    borderRadius: 8, // Equivalent to `rounded-lg`
    borderWidth: 2,
    borderColor: "#0766ff",
    justifyContent: "center",
    alignItems: "center",
  };

  const previousBtnStyle = {
    paddingVertical: 12, // Equivalent to `py-2`
    paddingHorizontal: 24, // Equivalent to `px-4`
    backgroundColor: "#f2f1ed", // Equivalent to `bg-blue-600`
    borderRadius: 8, // Equivalent to `rounded-lg`
    borderWidth: 2,
    borderColor: "#dbdee3",
    justifyContent: "center",
    alignItems: "center",
  };

  const nextBtnTextStyle = {
    color: "#ffffff",
    fontFamily: "Jakarta",
  };

  const previousBtnTextStyle = {
    color: "#000000",
    fontFamily: "Jakarta",
  };

  return (
    <SafeAreaView
      className="flex-1 justify-center px-4 items-center bg-background"
      style={{ marginTop: -50 }}
    >
      <ProgressSteps
        progressBarColor="#aeaabf"
        activeStepIconBorderColor="#11da06"
        completedProgressBarColor="#11da06"
        completedStepIconColor="#11da06"
        disabledStepIconColor="#aeaabf"
        labelFontFamily="Jakarta-Bold"
        labelFontSize={12}
        activeLabelColor="#4267B2"
        completedLabelColor="#000700"
      >
        <ProgressStep
          label={`Personal${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
        >
          <PersonalInfo />
        </ProgressStep>
        <ProgressStep
          label={`More Basic${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
        >
          <BasicDetails />
        </ProgressStep>
        <ProgressStep
          label={`Employment${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
        >
          <EmploymentDetails />
        </ProgressStep>
        <ProgressStep
          label={`Bank${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
        >
          <BankInfo />
        </ProgressStep>
        <ProgressStep
          label={`Loan${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
          onSubmit={() => setShowSuccessModal(true)}
        >
          <LoanDetails />
          <ReactNativeModal isVisible={showSuccessModal}>
            <View className="bg-white mx-4 py-10 px-6 rounded-3xl">
              <Image
                source={icons.Check}
                className="w-[110px] h-[110px] mx-auto my-5 bg-success rounded-full"
              />
              <Text className="text-3xl font-JakartaBold text-center">
                Thank you for your application
              </Text>
              <Text className="text-base text-gray-400 font-Jakarta text-center mt-2">
                We get all information data from you and please wait our review
                time. You can also check your loan stage from our application
                stage tab.
              </Text>
              <CustomButton
                title="Go to Home"
                handlePress={() => router.push(`/(tabs)/home`)}
                containerStyles="mt-5 bg-primary-light"
                textStyles="font-JakartaSemiBold text-lg text-white"
              />
            </View>
          </ReactNativeModal>
        </ProgressStep>
      </ProgressSteps>
    </SafeAreaView>
  );
};

export default loan;
