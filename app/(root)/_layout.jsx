import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="loan"
        options={{
          title: "Instant Loan",
          headerTitleStyle: { fontFamily: "Jakarta-ExtraBold", fontSize: 30 },
        }}
      />
    </Stack>
  );
};

export default Layout;
