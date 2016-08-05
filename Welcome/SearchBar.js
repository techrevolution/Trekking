/**
 * Created by rajan on 7/29/16.
 */

import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    TextInput
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import StyleVars from 'Trekking/Styles/StyleVars';

export default class SearchBar extends Component{
    render(){
        return(
          <View style ={styles.menu}>
          <Text style = {styles.menuText} >   Buddha Trek         </Text>
          <TextInput style = {styles.inputText} placeholder = 'Search' />
           </View>
        )
    }
}

const styles = StyleSheet.create({
    menu : {
        height: 0.05 * windowHeight,
        backgroundColor: StyleVars.Colors.navBarBackground,
        borderBottomColor: "rgba(255,255,255,0.5)",
        borderBottomWidth: 1,
        width: windowWidth,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    menuText : {
        padding: 5,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 0.03 * windowHeight,
        marginTop: 5,
        marginLeft: 70,
    },
    inputText:{
        width : 0.4*windowWidth,
        fontSize: 30,
        backgroundColor:StyleVars.Colors.navBarBackground,
        color:'gray',
    }
});

AppRegistry.registerComponent('SearchBar', () => SearchBar);
