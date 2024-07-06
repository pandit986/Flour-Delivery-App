import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartIconWithBadge from '../screens/header/card/CartIconWithBadge';
import { truncateText } from '../screens/header/helper';
import { useSelector } from 'react-redux';

const Tab = createBottomTabNavigator();

function MainTabNavigator() {

    const locationState = useSelector((state) => state.location);

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
            tabBarLabel: ({ focused, color }) => {
                let label;
                let fontSize = 12;
                let fontWeight = focused ? 'bold' : 'normal';
                let fontFamily = "san"
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
                return <Text style={{ fontSize, fontWeight, color, fontFamily }}>{label}</Text>;
            },
        })}>
            {/* <Tab.Screen name="Shop" component={HomeScreen} options={{ headerShown: false }} /> */}
            <Tab.Screen
                name="Shop"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: () => (
                        <View style={styles.headerContainer} >
                            <TouchableOpacity onPress={() => navigation.navigate('LocationScreen')} style={styles.locationContainer}>
                                <Ionicons name="location-outline" size={24} color="#6200EE" />
                                <View style={styles.locationTextContainer}>
                                    <View style={styles.locationTitleContainer}>
                                        <Text style={styles.locationTitle}>{truncateText(locationState.pin, 15)}</Text>
                                        <Ionicons name="chevron-forward-outline" size={12} color="#000" style={styles.chevronIcon} />
                                    </View>
                                    <Text style={styles.locationSubtitle}>
                                        {(truncateText(locationState.selectedCity, 25)).toUpperCase()}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={styles.headerIcons}>
                                <TouchableOpacity onPress={() => navigation.navigate('Favorite')}>
                                    <Ionicons name="notifications" size={24} color="#000" style={styles.icon} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                    <CartIconWithBadge />
                                </TouchableOpacity>
                            </View>
                        </View>
                    ),
                    headerStyle: {
                        backgroundColor: '#fff',
                    },
                    headerTintColor: '#000',
                    headerTitleAlign: 'center',
                })}
            />
            <Tab.Screen name="Products" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Cart" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Favorite" component={HomeScreen} options={{ headerShown: false }} />
            <Tab.Screen name="Menu" component={HomeScreen} options={{ headerShown: false }} />
        </Tab.Navigator>
    );
}

export default MainTabNavigator;


const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5
    },
    locationTextContainer: {
        marginLeft: 5,
    },
    locationTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationTitle: {
        fontFamily: "san-medium",
        fontSize: 16,
        color: '#000',
    },
    chevronIcon: {
        marginLeft: 5
    },
    locationSubtitle: {
        fontFamily: "san",
        fontSize: 12,
        color: '#000',
    },
    headerIcons: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    icon: {
        // marginLeft: 10,
    },
});