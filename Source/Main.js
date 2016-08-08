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
    BackAndroid
} from 'react-native';


import Welcome from '../Welcome/Welcome';
import MenuNavigator from '../Source/SlideMenu';
import Container from '../Source/Container';

import ContentContainer1 from '../Modules/ContentContainers/ContentContainer1';
import ContentContainer2 from '../Modules/ContentContainers/ContentContainer2';
import ContentContainer3 from '../Modules/ContentContainers/ContentContainer3';
import ContentContainer4 from '../Modules/ContentContainers/ContentContainer4';



console.disableYellowBox = true;


export default class Main extends Component{

    render() {
        return (
            <Navigator
                initialRoute={{
                    id:'welcome'
                }}
                renderScene={
                    this.renderScene
                }
            />
        );

    }
    renderScene(route,navigator){
        BackAndroid.addEventListener('hardwareBackPress',function () {
            if (navigator && navigator.getCurrentRoutes().length > 1) {
                navigator.pop();
                return true;
            }
            return false;
        });
        navigator = navigator;
        switch(route.id){
            case 'welcome':
                return <Welcome navigator={navigator} />
            case 'container':
                return <Container navigator={navigator} />
            case 'slideMenu':
                return <MenuNavigator navigator ={navigator} />
            case 'contentContainer1':
                return <ContentContainer1 navigator ={navigator} />
            case 'contentContainer2':
                return <ContentContainer2 navigator ={navigator} />
            case 'contentContainer3':
                return <ContentContainer3 navigator ={navigator} />
            case 'contentContainer4':
                return <ContentContainer4 navigator ={navigator} />

        }

    }
}

const styles = StyleSheet.create({
    container : {
        flex: 1
    }
});

AppRegistry.registerComponent('Main', () => Main);
