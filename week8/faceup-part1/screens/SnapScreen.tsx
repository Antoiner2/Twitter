import { View, Text, StyleSheet } from "react-native";
import React from "react";


export default function SnapScreen(){
return (
<View style={styles.title}>
    <Text> Snap Screen </Text>
</View>


);
}


const styles = StyleSheet.create({
title : {
    flex:1,
    width: "80%",
    fontWeight: "600",
    alignItems: 'center',
    justifyContent: 'center'

}


})

