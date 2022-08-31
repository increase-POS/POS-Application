import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardVendor from '../screens/Dashboard/DashboardVendor';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='DashboardVendor'  component={DashboardVendor} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function DashboardVendorNavigator() {
    return  <Mystack />
}