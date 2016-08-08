'use strict';

import React , { Component } from 'react';

import Trekking from 'react-native-side-menu';
import {
  Navigator,
  AppRegistry,
  View,
  Dimensions,
  Text,
  Linking,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import SharedStyles from '../Styles/SharedStyles';

export default class ContactPage extends Component{
  render(){
    return(

        <View style = {SharedStyles.container}>
          <Image source={require('../Images/background.jpg')}  style={SharedStyles.backgroundImage}>
          <View style= {SharedStyles.body}>
            <Text style = {SharedStyles.heading}>
              Contact Us
            </Text>
            <Text style = {SharedStyles.content}>
              Buddha Travels and Tours.. {'\n'}
              Contact: +9779851217037 {'\n'}
              Kathmandu, Nepal
            </Text>


          </View>
         </Image>
        </View >


    )
  }
}
