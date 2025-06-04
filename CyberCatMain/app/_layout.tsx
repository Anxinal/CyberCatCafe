import {  DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { HeaderTitle } from '@react-navigation/elements';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    // colorScheme === 'dark' ? DarkTheme : DefaultTheme
    <ThemeProvider value={DefaultTheme}>
         <Stack>
           <Stack.Screen name= "account/register" options={{headerShown: false}}/>
           <Stack.Screen name= "index" options={{headerShown: false}}/>
           <Stack.Screen name="+not-found" options = {{title:'404'}}/> 
         </Stack>
      <StatusBar style="auto" />
    </ThemeProvider>
  );
}