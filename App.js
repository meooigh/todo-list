import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { View } from 'react-native';
import Screen from './components/Screen';
import Todo from './components/Todo';
import Done from './components/Done';
import Task from './components/Task'
import {Provider, useDispatch, useSelector} from 'react-redux'
import store from './redux/store'

const tab = createBottomTabNavigator();

const Home = () => {
  return(
  <tab.Navigator initialRouteName='Todo'>
    <tab.Screen name='Todo' component={Todo} />
    <tab.Screen name='Done' component={Done} />
  </tab.Navigator>
  )
}

const stack = createNativeStackNavigator();  
const App = () =>{
  return(
  <Provider store={store}>
    <NavigationContainer>
    <stack.Navigator initialRouteName='Screen'>
      <stack.Screen  name='Screen'  component={Screen} options ={{headerShown: false}} />
      <stack.Screen name ='Home' component={Home} options ={{headerShown: false}}  />
      <stack.Screen  name='Task' component={Task}/>
    </stack.Navigator>
    </NavigationContainer>
  </Provider>
  )
}
export default App