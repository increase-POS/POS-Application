import React from "react";
import {View, Text, StyleSheet} from 'react-native'

import colors from "../../theme/colors";


const Home = () => {
    return(
        <View style={styles.container}>
            <Text>Home Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.homeBackground
    },
})

export default Home;