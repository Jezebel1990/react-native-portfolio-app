import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MainScreen from "../screens/Main/MainScreen";
import Ionicons from '@expo/vector-icons/Ionicons';
import SkillScreen from "../screens/Skill/SkillScreen";


const { Navigator, Screen } = createBottomTabNavigator()

export function BottomTabsRoutes() {
    return (
        <Navigator
         screenOptions={{
        headerShown: false, 
        tabBarShowLabel: true, // Se quiser esconder os textos, mude para false
        tabBarActiveTintColor: "#6614ae", // Cor ativa do ícone
        tabBarInactiveTintColor: "#888", // Cor inativa do ícone
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          borderTopColor: "#eee"
        },
      }}
        >
         <Screen name='main'
         component={MainScreen}
           options={{
             tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-circle" color={color} size={size} />
          ),
           }}
         />
         <Screen name='skill'
         component={SkillScreen}
         options={{
           tabBarLabel: "Skills",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="code-working" color={color} size={size} />
          ),
         }}
         />
        </Navigator>
  );
}