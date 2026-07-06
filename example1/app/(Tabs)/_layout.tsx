import { Tabs } from "expo-router";
import { House, Settings, UserRound } from "lucide-react-native";


export default function TabsLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false}}>
            <Tabs.Screen
                name="HomeScreen"
                options={{
                    title: "Home",
                    tabBarIcon: ({ color, size }) => (
                        <House color={color} size={size} />
                    )
                }} />

            <Tabs.Screen
                name="ProfileScreen"
                options={{
                    title: "Profile",
                    tabBarIcon: ({ color, size }) => (
                        <UserRound color={color} size={size} />
                    )
                }} />

            <Tabs.Screen
                name="SettingsScreen"
                options={{
                    title: "Settings",
                    tabBarIcon: ({ color, size }) => (
                        <Settings color={color} size={size} />
                    )

                }} />

        </Tabs>

    );
}