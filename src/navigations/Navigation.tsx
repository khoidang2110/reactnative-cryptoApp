import {createStackNavigator} from '@react-navigation/stack';


import Home from '../screens/home/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import Detail from '../screens/detail/Detail';
import Portfolio from '../screens/portfolio/Portfolio';
import Trade from '../screens/trade/Trade';
import Market from '../screens/market/Market';
import Profile from '../screens/profile/Profile';
import { COLORS, ICONS, NAME_NAVIGATION } from '../utils/Const';
import TabIcon from '../components/TabIcon';


const BottomTab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const MainNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={NAME_NAVIGATION.MAINBOTTOMAPPBAR} component={HomeTab} />
      <Stack.Screen name={NAME_NAVIGATION.DETAIL} component={Detail} />
      <Stack.Screen name={NAME_NAVIGATION.PORTFOLIO} component={Portfolio} />
      <Stack.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <Stack.Screen name={NAME_NAVIGATION.MARKET} component={Market} />
      <Stack.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
      
    </Stack.Navigator>
  );
};

export const HomeTab = () => (
  <BottomTab.Navigator screenOptions={{
    headerShown: false,
    tabBarShowLabel:false,
    tabBarStyle:{
      position:'absolute',
      bottom:0,
      left:0,
      right:0,
      height:100,
      backgroundColor:COLORS.bgGrayBlack,
      borderTopWidth:0
    }
   }}>
    <BottomTab.Screen name={NAME_NAVIGATION.HOME} component={Home} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.HOME} title='Home' isCircle={false}/>
    }}/>
    <BottomTab.Screen name={NAME_NAVIGATION.PORTFOLIO} component={Portfolio} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.PORTFOLIO} title='Portfolio' isCircle={false}/>
    }}/>
    <BottomTab.Screen name={NAME_NAVIGATION.TRADE} component={Trade} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.TRADE} title='Trade' isCircle/>
    }}/>
    <BottomTab.Screen name={NAME_NAVIGATION.MARKET} component={Market} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.MARKET} title='Market' isCircle={false}/>
    }}/>
    <BottomTab.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} options={{
      tabBarIcon: ({focused})=> <TabIcon focused={focused} icon={ICONS.PROFILE} title='Profile' isCircle={false}/>
    }}/>
   
  </BottomTab.Navigator>
);
