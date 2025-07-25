import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import Ionicons from '@expo/vector-icons/Ionicons';
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
          },
          default: {},
        }),
      }}>
      <Tabs.Screen
        name="Timer/screen"
        options={{
          title: 'timer',
          tabBarIcon: ({ color }) => <Ionicons name="timer" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="Achievement/screen"
        options={{
          title: 'Achievement',
          tabBarIcon: ({ color }) => <Ionicons name="trophy" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="UserCenter/screen"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="Stats/Screen"
        options={{
          title: 'Stats',
          tabBarIcon: ({ color }) => <Ionicons name="stats-chart" size={28} color="black" />,
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/About"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/DisplaySettings"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/UpdateProfile"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/CatShop"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/Friend/Screen"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/Friend/FriendList"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/Friend/SearchList"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/Friend/FriendInbox"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="UserCenter/Settings/Friend/FriendRanking"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Ranking/screen"
        options={{
          href: null
        }}
      />
      <Tabs.Screen
        name="Ranking/UserRankingCard"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}