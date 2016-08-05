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
import MenuNavigator from 'Trekking/Source/SlideMenu';
import Main from 'Trekking/Source/Main';

AppRegistry.registerComponent('Trekking', () => Main);
