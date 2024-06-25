import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'; // Import Ionicons for most icons
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Text } from 'react-native';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                let IconComponent = Ionicons;
                let iconSize = size + 2;
                switch (route.name) {
                    case 'Shop':
                        iconName = focused ? 'storefront' : 'storefront-outline';
                        break;
                    case 'Products':
                        iconName = focused ? 'grid' : 'grid-outline';
                        break;
                    case 'Cart':
                        iconName = focused ? 'cart' : 'cart-outline';
                        break;
                    case 'Favorite':
                        iconName = focused ? 'heart' : 'heart-outline';
                        break;
                    case 'Menu':
                        iconName = focused ? 'menu' : 'menu-outline';
                        break;
                    default:
                        iconName = 'circle';
                }

                return <IconComponent name={iconName} size={iconSize} color={color} />;
            },
            tabBarActiveTintColor: '#6200EE',
            tabBarInactiveTintColor: 'gray',
            showLabel: false,
            tabBarStyle: {
                height: 56, 
            },
            tabBarLabel: ({ focused, color}) => {
                let label;
                let fontSize = 12; 
                let fontWeight = focused ? 'bold' : 'normal';
                switch (route.name) {
                    case 'Shop':
                        label = 'Shop';
                        break;
                    case 'Products':
                        label = 'Products';
                        break;
                    case 'Cart':
                        label = 'Cart';
                        break;
                    case 'Favorite':
                        label = 'Favorite';
                        break;
                    case 'Menu':
                        label = 'Menu';
                        break;
                    default:
                        label = route.name;
                }
                return <Text style={{ fontSize, fontWeight, color }}>{label}</Text>;
            },
        })}>
            <Tab.Screen name="Shop" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Products" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Menu" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;
