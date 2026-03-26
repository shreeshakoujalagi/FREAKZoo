import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { RootStackParamList, MainTabParamList } from './types';
import { colors, theme } from '../theme/colors';
import { Home, Compass, MessageSquare, User, MessageCircle } from 'lucide-react-native';

// Screens
import SplashScreen from '../screens/onboarding/SplashScreen';
import LoginScreen from '../screens/onboarding/LoginScreen';
import InterestPickerScreen from '../screens/onboarding/InterestPickerScreen';
import AvatarScreen from '../screens/onboarding/AvatarScreen';
import HomeScreen from '../screens/main/HomeScreen';
import DiscoverScreen from '../screens/main/DiscoverScreen';
import RoomsScreen from '../screens/main/RoomsScreen';
import ProfileScreen from '../screens/main/ProfileScreen';
import MessagesScreen from '../screens/main/MessagesScreen';
import RoomChatScreen from '../screens/main/RoomChatScreen';
import DirectMessageScreen from '../screens/main/DirectMessageScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<MainTabParamList>();

function MainTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.surface,
                    borderTopColor: 'rgba(255,255,255,0.1)',
                    height: 60,
                    paddingBottom: 10,
                },
                tabBarActiveTintColor: colors.primaryGradientEnd,
                tabBarInactiveTintColor: colors.textSecondary,
                tabBarShowLabel: false,
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarIcon: ({ color }) => <Home color={color} size={24} />
                }}
            />
            <Tab.Screen
                name="Discover"
                component={DiscoverScreen}
                options={{
                    tabBarIcon: ({ color }) => <Compass color={color} size={24} />
                }}
            />
            <Tab.Screen
                name="Rooms"
                component={RoomsScreen}
                options={{
                    tabBarIcon: ({ color }) => <MessageSquare color={color} size={24} />
                }}
            />
            <Tab.Screen
                name="Messages"
                component={MessagesScreen}
                options={{
                    tabBarIcon: ({ color }) => <MessageCircle color={color} size={24} />
                }}
            />
            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => <User color={color} size={24} />
                }}
            />
        </Tab.Navigator>
    );
}

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="Splash" component={SplashScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="InterestPicker" component={InterestPickerScreen} />
                <Stack.Screen name="Avatar" component={AvatarScreen} />
                <Stack.Screen name="Main" component={MainTabs} />
                <Stack.Screen name="RoomChat" component={RoomChatScreen} />
                <Stack.Screen name="DirectMessage" component={DirectMessageScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
