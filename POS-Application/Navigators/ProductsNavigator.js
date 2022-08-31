import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import ProductsMain from '../screens/Products/ProductsMain';
//import ProductCard from '../screens/Products/ProductCard';
import ProductDetails from '../screens/Products/ProductDetails';


const Stack = createStackNavigator();

function Mystack()  {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='ProductsMain'  component={ProductsMain} 
                options= {{
                    headerShown: false,
                }}
            />
            <Stack.Screen 
                name='ProductDetails'  component={ProductDetails} 
                options= {{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
}

export default function ProductsNavigator() {
    return  <Mystack />
}