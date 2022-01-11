import React from 'react'
import { StyleSheet, Text, View, ActivityIndicator, Dimensions } from 'react-native'

const AppLoading = () => {
    return (
        <View style={styles.container}>
        <ActivityIndicator size="large" color="black" animating={true}/>

        </View>
    )
}

export default AppLoading

const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height,
        zIndex: 99
    }
})
