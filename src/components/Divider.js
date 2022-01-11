import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Divider = ({color="#00000033", width, height}) => {
    return (
        <View style={{ width, height, backgroundColor: color}}>
        </View>
    )
}

export default Divider;
