import { Link } from "expo-router";
import { KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, TextInput, View } from "react-native";

export default function SignUp() {
  return (
    <KeyboardAvoidingView
      className="flex-1 bg-white"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-1 bg-white px-6 justify-center">
          <Text className="text-4xl font-bold text-gray-900 mb-8">
            Welcome
          </Text>

          <View className="rounded-2xl border border-gray-200 bg-white p-5 space-y-4">
            <TextInput
              placeholder="Username"
              placeholderTextColor="#9CA3AF"
              className="h-12 rounded-xl border border-gray-300 px-4 text-base text-gray-900"
            />

            <TextInput
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              className="mt-4 h-12 rounded-xl border border-gray-300 px-4 text-base text-gray-900"
            />

            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              className="mt-4 h-12 rounded-xl border border-gray-300 px-4 text-base text-gray-900"
            />
          </View>

          <View className="mt-8">
            <Pressable className="h-12 items-center justify-center rounded-xl bg-black">
              <Text className="text-base font-semibold text-white">
                Sign Up
              </Text>
            </Pressable>

            <Pressable className="mt-4 self-end">
              <Link href={"/(Auth)/SignInScreen"}>
                <Text className="text-sm font-medium text-gray-600">
                  Sign In
                </Text>
              </Link>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}