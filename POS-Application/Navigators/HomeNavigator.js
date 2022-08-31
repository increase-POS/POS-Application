import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from '../screens/Home/Home';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Home'  component={Home} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function HomeNavigator() {
    return  <Mystack />
}