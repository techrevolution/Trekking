/**
 * Created by rajan on 7/29/16.
 */
'use strict';
import React, { Component } from 'react';
import Trekking from 'react-native-side-menu';
import {
    Dimensions,
    StyleSheet,
    Text,
    AppRegistry,
    View,
    Navigator,
    TouchableHighlight,
    Image,
    ScrollView
} from 'react-native';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;




import Header from '../Welcome/Header';
import Home from '../Welcome/Home';
import TopMenu from '../Welcome/TopMenu';
import MenuNavigator from '../Source/SlideMenu';
import MenuButton from '../Source/SlideMenu';
import Menu from '../Source/SlideMenu';
import ContentStyles from '../Styles/ContentStyles';



export default class Container extends Component{
  render(){
    return(
      <ScrollView>
    <View style={ContentStyles.topContainer}>
        <TouchableHighlight onPress={ this.onButtonPress.bind(this,'contentContainer1')
        }><Image
                        style={ContentStyles.imageContainer1}
                        source={require('../Images/image1.jpg')}
                          resizeMode={'cover'}
                    />

        </TouchableHighlight>

        <TouchableHighlight onPress={ this.onButtonPress.bind(this,'contentContainer2')
        }>
            <Image
                style={ContentStyles.imageContainer2}
                source={require('../Images/image2.jpg')}

            />
        </TouchableHighlight>

        <TouchableHighlight onPress={ this.onButtonPress.bind(this,'contentContainer3')
        }>
            <Image
                style={ContentStyles.imageContainer3}
                source={require('../Images/image3.jpg')}

            />
        </TouchableHighlight>

        <TouchableHighlight onPress={ this.onButtonPress.bind(this,'contentContainer4')
        }><Image
            style={ContentStyles.imageContainer4}
            source={require('../Images/image4.jpg')}

        />
        </TouchableHighlight>

    </View>

    </ScrollView>

    )
  }
  onButtonPress(value){

       this.props.navigator.push({
          id: value
       });
   }
}


const styles = StyleSheet.create({
  topContainer: {
    flex:1,
    backgroundColor:'#f0ffff',
  },
  imageContainer1:{
    marginTop:0.05*windowHeight,
    height:0.5*windowHeight,
    width: windowWidth,
    alignSelf:'center'
  },
  imageContainer2:{
    marginTop:0.05*windowHeight,
    height:0.5*windowHeight,
    width: windowWidth,
    alignSelf:'center'
  },
  imageContainer3:{
    marginTop:0.05*windowHeight,
    height:0.5*windowHeight,
    width: windowWidth,
    alignSelf:'center'
  },
  imageContainer4:{
    marginTop:0.05*windowHeight,
    height:0.5*windowHeight,
    width: windowWidth,
    alignSelf:'center'
  },
  toolbar:{
    height:0.1*windowHeight,
    backgroundColor:'#f0ffff',
  },
  contentContainerTitle: {
    justifyContent:'space-between',
    fontSize:30,
    fontWeight:'bold',
  },
  contentContainerText: {
    justifyContent:'space-between',
    fontSize:20,
    fontWeight:'normal',
  },

  contentContainer: {
    flex:1
  },
  imageContentContainer1: {
    height:0.3*windowHeight,
    flex:1,
  },
  contentContainer1:{
    flex: 2,
  }
});
