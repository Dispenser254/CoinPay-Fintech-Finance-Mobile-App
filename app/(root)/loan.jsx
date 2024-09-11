/* eslint-disable react-hooks/rules-of-hooks */
import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProgressSteps, ProgressStep } from "react-native-progress-steps";
import PersonalInfo from "../../components/screens/PersonalInfo";
import EmploymentDetails from "../../components/screens/EmploymentDetails";
import LoanDetails from "../../components/screens/LoanDetails";
import BankInfo from "../../components/screens/BankInfo";
import { router } from "expo-router";
import ReactNativeModal from "react-native-modal";
import CustomButton from "../../components/CustomButton";
import { icons } from "../../constants";

const loan = () => {
  const [personalFormData, setPersonalFormData] = useState({
    fullName: "",
    dateOfBirth: "",
    idCardNumber: "",
    address: "",
    maritalStatus: "",
    gender: "",
    phoneNumber: "",
    emailAddress: "",
  });
  const [employmentFormData, setEmploymentFormData] = useState({
    employmentType: "",
    monthlyIncome: "",
    experienceMonths: "",
    otherIncome: "",
    otherIncomeAmount: "",
  });
  const [bankFormData, setBankFormData] = useState({
    paymentMethod: "",
    mpesaNumber: "",
    bankName: "",
    accountNumber: "",
  });
  const [loanFormData, setLoanFormData] = useState({
    loanAmount: "",
    duration: "",
    interestRate: "",
  });
  const [errors, setErrors] = useState({});
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleInputChange = (name, value) => {
    setPersonalFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setEmploymentFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setBankFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleLoanAmountChange = (name, value) => {
    setLoanFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    calculateLoanDetails(value);
  };

  const validatePersonalInfo = () => {
    const errors = {};

    if (!personalFormData.fullName.trim())
      errors.fullName = "Full Name is required.";
    if (!personalFormData.dateOfBirth.trim())
      errors.dateOfBirth = "Date of Birth is required.";
    if (!personalFormData.idCardNumber.trim())
      errors.idCardNumber = "ID Card Number is required.";
    if (!personalFormData.address.trim())
      errors.address = "Address is required.";
    if (!personalFormData.maritalStatus.trim())
      errors.maritalStatus = "Marital Status is required.";
    if (!personalFormData.gender.trim()) errors.gender = "Gender is required.";
    if (!personalFormData.phoneNumber.trim())
      errors.phoneNumber = "Phone Number is required.";
    if (!personalFormData.emailAddress.trim())
      errors.emailAddress = "Email Address is required.";

    setErrors(errors);
    return !hasErrors(); // Return true if no errors
  };

  const validateEmploymentInfo = () => {
    const errors = {};

    if (!employmentFormData.employmentType.trim())
      errors.employmentType = "Employment Type is required.";
    if (!employmentFormData.experienceMonths.trim())
      errors.experienceMonths = "Experience in Months is required.";
    if (!employmentFormData.monthlyIncome.trim())
      errors.monthlyIncome = "Monthly Income is required.";

    setErrors(errors);
    return !hasErrors(); // Return true if no errors
  };

  const validateBankInfo = () => {
    const errors = {};

    if (!bankFormData.paymentMethod.trim())
      errors.paymentMethod = "Payment Method is required.";
    else if (
      bankFormData.paymentMethod === "mpesa" &&
      !bankFormData.mpesaNumber.trim()
    )
      errors.mpesaNumber = "M-Pesa Number is required.";
    else if (bankFormData.paymentMethod === "bank") {
      if (!bankFormData.bankName.trim())
        errors.bankName = "Bank Name is required.";
      if (!bankFormData.accountNumber.trim())
        errors.accountNumber = "Account Number is required.";
    }

    setErrors(errors);
    return !hasErrors(); // Return true if no errors
  };

  const validateLoanInfo = () => {
    const errors = {};

    if (!loanFormData.loanAmount.trim())
      errors.loanAmount = "Loan Amount is required.";

    setErrors(errors);
    return !hasErrors(); // Return true if no errors
  };

  const hasErrors = () => {
    return Object.keys(errors).length > 0; // Return true if there are errors
  };

  const calculateLoanDetails = (amount) => {
    const numericAmount = parseFloat(amount);

    if (isNaN(numericAmount)) {
      setLoanFormData({
        loanAmount: "",
        duration: "",
        interestRate: "",
      });
      return;
    }

    let interestRate = "";
    let duration = "";

    if (numericAmount < 5000) {
      interestRate = "6";
      duration = "14";
    } else if (numericAmount >= 5000 && numericAmount < 10000) {
      interestRate = "8";
      duration = "20";
    } else if (numericAmount >= 10000 && numericAmount < 20000) {
      interestRate = "10";
      duration = "30";
    } else if (numericAmount >= 20000 && numericAmount < 30000) {
      interestRate = "13";
      duration = "30";
    } else if (numericAmount >= 30000 && numericAmount < 40000) {
      interestRate = "15";
      duration = "40";
    } else if (numericAmount >= 40000 && numericAmount <= 50000) {
      interestRate = "18";
      duration = "60";
    }

    setLoanFormData({
      loanAmount: amount,
      interestRate,
      duration,
    });
  };

  const nextBtnStyle = {
    marginTop: 12,
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
          errors={hasErrors()}
          onNext={validatePersonalInfo}
        >
          <PersonalInfo
            personalFormData={personalFormData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </ProgressStep>
        <ProgressStep
          label={`Employment${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
          errors={hasErrors()}
          onNext={validateEmploymentInfo}
        >
          <EmploymentDetails
            employmentFormData={employmentFormData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </ProgressStep>
        <ProgressStep
          label={`Bank${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
          errors={hasErrors()}
          onNext={validateBankInfo}
        >
          <BankInfo
            bankFormData={bankFormData}
            handleInputChange={handleInputChange}
            errors={errors}
          />
        </ProgressStep>
        <ProgressStep
          label={`Loan${"\n"}Details`}
          nextBtnStyle={nextBtnStyle}
          nextBtnTextStyle={nextBtnTextStyle}
          previousBtnStyle={previousBtnStyle}
          previousBtnTextStyle={previousBtnTextStyle}
          errors={hasErrors()}
          onSubmit={() => {
            if (validateLoanInfo() && !hasErrors()) {
              setShowSuccessModal(true); // Show success modal only if no errors
            } else {
              setShowSuccessModal(false); // Ensure modal is hidden if there are errors
            }
          }}
        >
          <LoanDetails
            loanFormData={loanFormData}
            handleLoanAmountChange={handleLoanAmountChange}
            errors={errors}
          />
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
