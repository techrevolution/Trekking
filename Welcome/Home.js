/**
 * Created by rajan on 7/29/16.
 */
'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    AppRegistry,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


export default class Home extends Component{

    render(){
        return(

                <View style = {styles.body} >
                    <Image
                        source={require('Trekking/Images/trekker.png')}
                        style={styles.image}
                    >
                    <Text style={styles.welcome}>

                        There are no foreign lands. It is the traveler only who is foreign.
                    </Text>
                      <Text style={styles.text}>
                          Welcome to the land of Himalayas !
                    </Text>

                    </Image>
                </View >
        )
    }


}

const styles = StyleSheet.create({
    body : {
        height: 0.94 * windowHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image: {
        height:0.94*windowHeight,
        marginTop: 0,
        width: windowWidth
    },
    welcome : {
        fontSize : 30,
        marginTop: 0.28 * windowHeight,
        paddingLeft: 20,
        paddingRight:20,
        textAlign: 'center'
    },
    text : {
      fontSize : 30,
      paddingBottom: 5,
      textAlign: 'center'
    }
});

AppRegistry.registerComponent('Home', () => Home);
