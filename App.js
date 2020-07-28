import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons'; 
import { createAppContainer } from 'react-navigation';

class MyHomeScreen extends React.Component{

  // static navigationOptions={
  //    drawerLabel:'Home',
  //    drawerIcon:()=>(  <Ionicons name="md-menu" size="34"color="white" />  )
  // }

   render(){
     return(
     <View style={styles.container}>
     <Button onPress={()=>this.props.navigation.navigate('Notification')} title="go to notification">  </Button>
     </View>)}
}


class MyNotificationScreen extends React.Component{

  // static navigationOptions = {
  //   drawerLabel: 'Notification',
  //   drawerIcon: () => (<Ionicons name="md-menu" size="34" color="white" />)
  // }
        render(){
        return (
         <View style={styles.container}>
             <Button title="Go to Back home" onPress={()=>this.props.navigation.goBack()}> </Button>
               </View>
              );    }

}


const MyDrawerNavigator = createDrawerNavigator({
  Home: MyHomeScreen,
  Notification: MyNotificationScreen,
});

const stackContainer =createStackNavigator()

const AppContainer = createAppContainer(stackContainer)

export default class  App extends React.Component {
  render(){
  return AppContainer;
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
