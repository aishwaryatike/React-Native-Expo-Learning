import { Link } from "expo-router";
import { Pressable, Text, TextInput, View } from "react-native";

export default function SignIn() {
  return (
    <View className="flex-1 justify-center bg-white px-6">
      <Text className="mb-8 text-4xl font-bold text-gray-900">
        Welcome Back
      </Text>

      <View className="rounded-2xl border border-gray-200 bg-white p-5">
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
      </View>

      <View className="mt-8">
        <Link href="/(Tabs)/HomeScreen" className="h-12 items-center justify-center rounded-xl bg-black">
          <Pressable className="h-12 items-center justify-center rounded-xl bg-black w-full">
            <Text className="text-base font-semibold text-white">
              Sign In
            </Text>
          </Pressable>
        </Link>

        <Pressable className="mt-4 self-end">
          <Text className="text-sm font-medium text-gray-600">
            Create Account
          </Text>
        </Pressable>
      </View>
    </View >
  );
}