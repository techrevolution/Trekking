/**
 * Created by rajan on 7/29/16.
 */
'use strict';
import React, { Component } from 'react';
import {
    Dimensions,
    StyleSheet,
    Text,
    AppRegistry,
    View,
    Navigator,
    TouchableHighlight,
    Image
} from 'react-native';


import Header from '../Welcome/Header';
import Home from '../Welcome/Home';
import MenuNavigator from '../Source/SlideMenu';
//import Container from '../Source/Container';


export default class Welcome extends Component{
    constructor(props, context){
      super(props, context);
    }
    render(){
        return(
          <TouchableHighlight onPress={ this.onButtonPress.bind(this,'slideMenu')}>
            <View style ={styles.container}>

                <Header />
                <Home />

            </View>
          </TouchableHighlight>
        )
    }
    onButtonPress(value){
        this.props.navigator.replace({
            id: value
        });
    }

}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

AppRegistry.registerComponent('Welcome', () => Welcome);
