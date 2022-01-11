import React from 'react'
import { View, Text } from 'react-native'
import Divider from "./Divider";

const ORDivider = ({color = "#00000033", width= "40%", height= 0.5, style}) => {
    return (
        <View
        style={[{ flexDirection: "row",justifyContent:"center",alignItems: "center", marginVertical:16}, style]}
      >
        <Divider color={color} width={width} height={height} />
        <Text style={{ color, fontFamily: "SourceSansPro400" }}>
          {" "}
          OR{" "}
        </Text>
        <Divider color={color} width={width} height={height} />
      </View>
    )
}

export default ORDivider
