import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import UserLogIn from '../screens/User/UserLogIn'
import UserSignup from '../screens/User/UserSignup';
import UserProfile from '../screens/User/UserProfile';

const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='LogIn'  component={UserLogIn} 
                options= {{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Signup'  component={UserSignup} 
                options= {{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='Profile'  component={UserProfile} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
        
    )
}

export default function ProfileNavigator() {
    return  <Mystack />
}