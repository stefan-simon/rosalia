import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './screens/HomeScreen';
import SpeciesOverviewScreen from './screens/SpeciesOverviewScreen';
import SpeciesDetailScreen from './screens/SpeciesDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import SpeciesRecordsScreen from './screens/SpeciesRecordsScreen';
import ReportSightingScreen from './screens/ReportSightingScreen';
import SightingMapScreen from './screens/SightingMapScreen';
import UserManualScreen from './screens/UserManualScreen';
import AboutAppScreen from './screens/AboutAppScreen';
import ContactUsScreen from './screens/ContactUsScreen';
import PartnersAndLinksScreen from './screens/PartnersAndLinksScreen';
import ExampleScreen from './screens/ExampleScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#022c4a' },
        headerTintColor: 'white',
        sceneContainerStyle: { backgroundColor: '#385063' },
        drawerContentStyle: { backgroundColor: '#022c4a' },
        drawerInactiveTintColor: 'white',
        drawerActiveTintColor: '#022c4a',
        drawerActiveBackgroundColor: '#a1cbe4',
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#022c4a' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#a2becc' },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="SpeciesOverview" component={SpeciesOverviewScreen} />
          <Stack.Screen
            name="SpeciesDetail"
            component={SpeciesDetailScreen}
            options={{
              title: 'About the Species',
            }}
          />
          <Stack.Screen name="SpeciesRecords" component={SpeciesRecordsScreen} />
          <Stack.Screen name="ReportSighting" component={ReportSightingScreen} />
          <Stack.Screen name="SightingMap" component={SightingMapScreen} />
          <Stack.Screen name="UserManual" component={UserManualScreen} />
          <Stack.Screen name="AboutApp" component={AboutAppScreen} />
          <Stack.Screen name="ContactUs" component={ContactUsScreen} />
          <Stack.Screen name="PartnersAndLinks" component={PartnersAndLinksScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
