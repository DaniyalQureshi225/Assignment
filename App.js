import React, {useEffect} from 'react';
import { View, Text, StatusBar } from 'react-native';
import Home from './src/Screens/Home';
import About from './src/Screens/About';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Router from './src/Router/Router';
import { Provider } from 'react-redux';
import { Store, persistor } from './src/Redux/Store/Store';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen'
const Stack = createNativeStackNavigator();


const App = () => {


  useEffect(() => {
   
    SplashScreen.hide();
  }, []);


  return (
    <Provider store={Store}>
    <PersistGate loadin={null} persistor={persistor}>
      <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
      <Router />
      {/* <DrawerScreen /> */}
    </PersistGate>
  </Provider>
  );
}

export default App;
