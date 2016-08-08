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
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

import StyleVars from '../Styles/StyleVars';

export default class TopMenu extends Component{
    render(){
        return(
                <View style = {styles.menu} >
                <Image
                  source={require('../Images/menu.png')} style={styles.menuImage}
                />
                    <Text style = {styles.menuText}>
                        Buddha Trek
                    </Text>
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
    menuImage : {
      width: 0.05 * windowWidth,
      height: 0.025 * windowHeight,
      marginLeft: 15,
      marginTop: 10
    }
});

AppRegistry.registerComponent('TopMenu', () => TopMenu);
