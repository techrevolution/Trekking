/**
 * Created by rajan on 7/26/16.
 */
import { StyleSheet, Dimensions } from 'react-native';
import StyleVars from '../Styles/StyleVars';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
    screenContainer: {
        flex: 1,
        flexDirection: "column",
        backgroundColor: StyleVars.Colors.mediumBackground
    },
    headingText: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.heading,
        fontSize: 20,
        fontWeight: "600"
    },
    text: {
        color: StyleVars.Colors.primaryText,
        fontFamily: StyleVars.Fonts.general,
        fontSize: 12,
        fontWeight: "400"
    },
    navBarTitleText: {
        color: StyleVars.Colors.navBarTitle,
        fontFamily: StyleVars.Fonts.heading,
        fontWeight: "600",
        fontSize: 18,
        lineHeight: 22
    },
    menuImage: {
      backgroundColor: 'blue'
    },
    container : {
        flex: 1,
        backgroundColor: '#a79d9a'
    },
    body : {
        height: 0.95 * windowHeight,
    },
    heading :{
        fontSize: 32,
        color:'#8B0000',
        textAlign: 'left',
        marginLeft: 18,
        marginTop: 10

    },
    heading2 :{
        fontSize: 28,
        color:'#9E0508',
        textAlign: 'left',
        marginLeft: 18,
    },
    content : {
        fontSize : 0.04 * windowWidth,
        padding: 10,
        margin: 20,
        color: '#030303',

    },
    menuSection: {
      flex: 1,
      width: window.width,
      height: window.height,
      backgroundColor: 'rgb(200,200,200)',
      paddingTop: 30,
  },
  avatarContainer: {
      marginTop: 40,
      borderWidth: 0.3,
      borderColor: '#aaaaaa',
  },
  avatar: {
    width: 0.16* windowWidth,
    height: 0.1 * windowHeight,
    borderRadius: 24,
    marginBottom: 30,
    marginTop: 20,
    marginLeft: 20,
    flex: 1,
  },
  name: {
    position: 'absolute',
    color: '#000000',
    top: 30,
    fontSize: 0.06*windowWidth,
    marginLeft: 0.22* windowWidth,
    marginTop: 0.015 * windowHeight,
  },
    image : {
        margin : 20,
    },
    item: {
      fontSize: 16,
      fontWeight: '300',
      paddingTop: 20,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#777'
    },
    pageContent: {
        flex: 1,
        alignItems: 'center',
    },
    menuContainer: {
      borderWidth: 0.5,
      borderColor: '#aaaaaa',
  },
    menuText: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    itemText: {
      fontSize: 0.04*windowWidth,
      color: '#000000',
      fontWeight: '300',
      marginTop: 20,
      paddingLeft: 20,
      marginBottom: 20,
      marginLeft: 20,

  },
  backgroundImage:{
    width: windowWidth,
    height: windowHeight,
  }
});
