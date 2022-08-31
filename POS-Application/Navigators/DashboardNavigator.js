import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Dashboard from '../screens/Dashboard/Dashboard';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Dashboard'  component={Dashboard} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function DashboardNavigator() {
    return  <Mystack />
}