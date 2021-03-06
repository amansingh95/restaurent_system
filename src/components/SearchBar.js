import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

const SearchBar =({term, onTermChange, onTermSubmit})=>{
    return(
        <View style={styles.backgroundStyle}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
             style={styles.inputStyle}
             placeholder="Search"
             autoCapitalize="none"
             autoCorrect={false}
             value={term}
             onChangeText={onTermChange}
             onEndEditing={onTermSubmit }
             />
            <Text>Search Bar {term} </Text>
        </View>
    )
}
const styles= StyleSheet.create({
    backgroundStyle:{
        backgroundColor:'#F0EEEE',
        marginTop:10,
        height:50,
        borderRadius:5,
        marginHorizontal:15,
        flexDirection:'row'
    },
    
        inputStyle:{
            flex:1,
            fontSize:18
        },
        iconStyle:{
            fontSize:35,
            alignSelf:'center',
            marginHorizontal:15
        }
    
});

export default SearchBar;