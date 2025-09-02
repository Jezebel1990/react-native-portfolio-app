import { NavigationContainer } from "@react-navigation/native";

import { BottomTabsRoutes } from "./botom-tabs.routes";

export function Routes () {
    return (
 <NavigationContainer>
   <BottomTabsRoutes/>
 </NavigationContainer>
    );    
}