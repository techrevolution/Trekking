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

export default class GalleryPage extends Component{
  render(){
    return(

        <View style = {SharedStyles.container}>
        <Image source={require('../Images/background.jpg')}  style={SharedStyles.backgroundImage}>
          <View style= {SharedStyles.body}>
            <ScrollView>
              <Text style = {SharedStyles.heading}>
                Gallery
              </Text>
              <Text style = {SharedStyles.content}>
                We will have this section soon.
              </Text>
            </ScrollView>

          </View>
          </Image>
        </View >

    )
  }
}
