import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardStore from '../screens/Dashboard/DashboardStore';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='DashboardStore'  component={DashboardStore} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function DashboardStoreNavigator() {
    return  <Mystack />
}