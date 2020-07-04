import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from "@react-navigation/drawer";

import { Ionicons } from '@expo/vector-icons';

import ContactsList from '../screens/ContactsList';
import ContactDetails from '../screens/ContactDetails';
import ActionsList from "../screens/ActionsList";
import ActionDetails from "../screens/ActionDetails";
import Settings from "../screens/Settings";

const ContactsStack = createStackNavigator();

const ContactsStackScreen = () => {
    return (
        <ContactsStack.Navigator
            screenOptions = {{
                headerStyle: {backgroundColor: 'gray'}
            }}
        >
            <ContactsStack.Screen
                name="ContactsList"
                component={ContactsList}
                options={
                    {
                        headerTitle: "Contacts"
                    }
                }
            />
            <ContactsStack.Screen
                name="ContactDetails"
                component={ContactDetails}
                options={ (props) => {
                        return {
                            headerTitle: props.route.params.contact.name.first
                        }
                    }
                }
            />
        </ContactsStack.Navigator>
    );
};

const ActionsStack = createStackNavigator();
const ActionsStackScreen = () => (
    <ActionsStack.Navigator>
        <ActionsStack.Screen name="Actions" component={ActionsList} />
        <ActionsStack.Screen name="ActionsDetails" component={ActionDetails} />
    </ActionsStack.Navigator>
);

const AppTabs = createBottomTabNavigator();
const AppTabsScreens = () => (
    <AppTabs.Navigator>
        <AppTabs.Screen
            name="Contact"
            component={ContactsStackScreen}
            options={{
                tabBarIcon: props => (
                    <Ionicons
                        name="ios-contacts"
                        size={props.size}
                        color={props.color}
                    />
                ),
        }} />
        <AppTabs.Screen
            name="Action"
            component={ActionsStackScreen}
            options={{
                tabBarIcon: props => (
                    <Ionicons
                    name="ios-checkmark-circle-outline"
                    size={props.size}
                    color={props.color}
                    />
            ),
        }}
        />
    </AppTabs.Navigator>
);

const AppDrawer = createDrawerNavigator();
const AppDrawerScreen = () => (
    <AppDrawer.Navigator>
        <AppDrawer.Screen name="AppTabs" component={AppTabsScreens} />
        <AppDrawer.Screen name="AppSettings" component={Settings} />
    </AppDrawer.Navigator>
);

export default () => {
    return (
        <NavigationContainer>
            <AppDrawerScreen/>
        </NavigationContainer>
    );
}