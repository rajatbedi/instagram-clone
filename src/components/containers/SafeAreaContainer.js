import React from 'react'
import { StyleSheet, SafeAreaView, StatusBar, Platform} from 'react-native'

const SafeAreaContainer = ({bgColor, style,...props}) => {
    return (
        <SafeAreaView style={[styles(bgColor).container, style]} >
            {props.children}
        </SafeAreaView>
    )
}

export default SafeAreaContainer

const styles = (bgColor) => StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: bgColor,
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        
      },
})
