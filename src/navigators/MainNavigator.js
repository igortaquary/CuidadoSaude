import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import ConfigPage from "../components/pages/Config";

const Drawer = createDrawerNavigator();

const MainNavigator = () => {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Config" component={ConfigPage} options={{title: "Configurações"}} />
        </Drawer.Navigator>
    )
}

export default MainNavigator;