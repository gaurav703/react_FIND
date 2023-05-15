import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, StyleSheet } from 'react-native';
import Category from './Screen/Category';
import Meal from './Screen/Meal';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// NavigationContainer is a component that wraps your entire app and manages the navigation state. It also contains the navigation logic.

// createStackNavigator is a function that returns a component. This component is a wrapper for your screens and manages the navigation state for a stack of screens. 
// createStackNavigator takes an object as an argument. This object contains the configuration for the stack. The configuration object has a screens property which is an object that contains the configuration for each screen in the stack.
// The configuration object for each screen has a screen property which is a component that represents the screen. The screen component is passed a navigation prop which contains the navigation logic for that screen.
// stack navigator is a component that manages the navigation state for a stack of screens. It takes an object as an argument. This object contains the configuration for the stack. The configuration object has a screens property which is an object that contains the configuration for each screen in the stack.

const Stack = createStackNavigator();

// intialRouteName is the name of the first screen that will be displayed when the stack is first rendered.
//initialRouteName is not required. If it is not provided, the first screen in the stack will be displayed.
// statusBar is a component that controls the appearance of the status bar. It takes a style prop which can be 'light' or 'dark'.
// <> is a fragment. It is a component that allows you to return multiple components from a component. It is a wrapper for multiple components.
// <> is not required. You can return multiple components without a fragment. However, you can only return one component without a fragment. 

function App() {
   return (
      <>
      
      <StatusBar style='light' />
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Meal-Category" component={Category} />
               <Stack.Screen name="Meal-Overview" component={Meal} />
            </Stack.Navigator>
         </NavigationContainer>
      </>
   );

}

export default App;


const styles = StyleSheet.create({
   text: {
      fontSize: 30,
      color: 'red',
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop: 50,
      marginEnd: 40,

   },



});