import React from "react";
import {View, Text, StyleSheet} from 'react-native'
import IconFontAwesome from 'react-native-vector-icons/FontAwesome'

// theme
import colors from "../../theme/colors";



const UserProfile = () => {
    return(
        <View style={styles.container}>
            <Text>Profile Screen</Text>
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

export default UserProfile;