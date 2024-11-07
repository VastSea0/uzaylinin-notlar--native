import { Stack } from "expo-router";
import { Header } from "../components/header";
 

export default function RootLayout() {
  return (
    <>
      <Header />
      <Stack>
        <Stack.Screen name="(tabs)"  options={{ headerShown: false }} />
      </Stack>
    </>
  );
}
