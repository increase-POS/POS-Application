import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DashboardCustomer from '../screens/Dashboard/DashboardCustomer';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='DashboardCustomer'  component={DashboardCustomer} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function DashboardCustomerNavigator() {
    return  <Mystack />
}