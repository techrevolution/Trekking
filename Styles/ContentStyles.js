import { StyleSheet, Dimensions } from 'react-native';
import StyleVars from '../Styles/StyleVars';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
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
