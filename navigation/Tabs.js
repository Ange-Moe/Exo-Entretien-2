import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';


import Empreinte from '../screens/Empreinte';
import Tickets from '../screens/Tickets';
import Offres from '../screens/Offres';
import Profil from '../screens/Profile';

const Tab = createBottomTabNavigator();

const Tabs = () => {
return(
<Tab.Navigator screenOptions={({route}) => {return {tabBarIcon : () => {let IconName = "" ;console.log(route); if (route.name === "Empreinte") { IconName = "ios-finger-print" } else if (route.name === "Tickets") { IconName = "md-bookmarks" } else if (route.name === "Offres") { IconName = "pricetag-outline" } else if (route.name === "Profil") { IconName = "ios-person-circle-outline" } return <Ionicons name={IconName}/>}}}}>
    
    <Tab.Screen name='Empreinte' component={Empreinte}/>
    <Tab.Screen name='Tickets' component={Tickets}/>
    <Tab.Screen name='Offres' component={Offres}/>
    <Tab.Screen name='Profil' component={Profil}/>
</Tab.Navigator>
)
}

export default Tabs