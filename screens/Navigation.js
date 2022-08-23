import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { FontAwesome5 } from '@expo/vector-icons';

// Screens

import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
import TaskScreen from './TaskScreen'
import StackScreen from './StackScreen';

import { MaterialCommunityIcons } from '@expo/vector-icons';


const HomeStackNavigator = createNativeStackNavigator()
const Tab = createBottomTabNavigator();

function MyStack() {
    return (
        <HomeStackNavigator.Navigator
            initialRouteName='HomeScreen'
        >
            <HomeStackNavigator.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name='Stack'
                component={StackScreen}
            />
        </HomeStackNavigator.Navigator>
    )
}


function MyTabs() {
    return (
        <Tab.Navigator
            initialRouteName='Home'
            screenOptions={{
                tabBarActiveTintColor: 'purple'
            }}
        >
            <Tab.Screen
                name="Home"
                //component={HomeScreen} 
                component={MyStack}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    tabBarBadge: 10,
                    headerShown: false
                }}
            />
            <Tab.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="tools" size={24} color="black" />
                    )
                }}

            />
            <Tab.Screen
                name="Task"
                component={TaskScreen}
                options={{
                    tabBarLabel: 'Task',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="tasks" size={24} color="black" />
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (        
            <MyTabs />        
    )
}