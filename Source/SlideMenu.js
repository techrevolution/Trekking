'use strict';

import React , { Component } from 'react';

import Trekking from 'react-native-side-menu';
import SharedStyles from '../Styles/SharedStyles';

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
  TouchableOpacity,
  TouchableHighlight,
  BackAndroid
} from 'react-native';



const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;


import TopMenu from '../Welcome/TopMenu';
import Container from '../Source/Container';
import GeneralInfoPage from '../Views/GeneralInfoPage';
import ChecklistPage from '../Views/ChecklistPage';
import GalleryPage from '../Views/GalleryPage';
import AboutPage from '../Views/AboutPage';
import ContactPage from '../Views/ContactPage';
import ContentStyles from '../Styles/ContentStyles';

import ContentContainer1 from '../Modules/ContentContainers/ContentContainer1';
import ContentContainer2 from '../Modules/ContentContainers/ContentContainer2';
import ContentContainer3 from '../Modules/ContentContainers/ContentContainer3';
import ContentContainer4 from '../Modules/ContentContainers/ContentContainer4';


export default class GeneralInfo extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
          <GeneralInfoPage/>
        </Trekking>
    );
  }
}

export default class Checklist extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
          <ChecklistPage/>
        </Trekking>
    );
  }
}

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({isOpen,});
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({id: item});
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
          <AboutPage/>
        </Trekking>
    );
  }
}

export default class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
          <GalleryPage/>
        </Trekking>
    );
  }
}

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
          <ContactPage/>
        </Trekking>
    );
  }
}

export default class ContainerSection extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onButtonPress(value){

       this.props.navigator.push({
          id: value
        });
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  updateMenuState(isOpen) {
    this.setState({ isOpen, });
  }

  onMenuItemSelected = (item) => {
    this.setState({
      isOpen: false,
      selectedItem: item,
    });
    this.props.navigator.replace({ id: item });
  }

  render() {

    var menu = <Menu onItemSelected={this.onMenuItemSelected} navigator={this.props.navigator}/>;

    return (
        <Trekking
            menu={menu}
            isOpen={this.state.isOpen}
            onChange={(isOpen) => this.updateMenuState(isOpen)}>
          <MenuButton onPress={() => this.toggle()}/>
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
        </Trekking>
    );
  }
}

class MenuNavigator extends Component {

  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }

  renderScene(route, nav) {
    BackAndroid.addEventListener('hardwareBackPress',function () {
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    });
    navigator = nav;
    switch (route.id) {
      case 'container':
      return <ContainerSection navigator={nav} />;
      case 'generalInfo':
        return <GeneralInfo navigator={nav} />;
      case 'checklist':
        return <Checklist navigator={nav} />;
      case 'about':
        return <About navigator={nav} />;
      case 'gallery':
        return <Gallery navigator={nav} />;
      case 'contact':
        return <Contact navigator={nav} />;
      case 'contentContainer1':
          return <ContentContainer1 navigator ={nav} />
      case 'contentContainer2':
          return <ContentContainer2 navigator ={nav} />
      case 'contentContainer3':
          return <ContentContainer3 navigator ={nav} />
      case 'contentContainer4':
          return <ContentContainer4 navigator ={nav} />
      default:
        return <ContainerSection navigator={nav} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{id: 'container'}}
        renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
      />
    );
  }

  componentWillUnmount() {
    this._listeners && this._listeners.forEach(listener => listener.remove());
  }

  _setNavigatorRef(navigator) {
    if (navigator !== this._navigator) {
      this._navigator = navigator;

      if (navigator) {
        var callback = (event) => {
          console.log(
            `NavigatorMenu: event ${event.type}`,
            {
              route: JSON.stringify(event.data.route),
              target: event.target,
              type: event.type,
            }
          );
        };
        // Observe focus change events from the owner.
        this._listeners = [
          navigator.navigationContext.addListener('willfocus', callback),
          navigator.navigationContext.addListener('didfocus', callback),
        ];
      }
    }
  }
}

export default class MenuButton extends Component {

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <View style={SharedStyles.menuButton} >
        <TouchableOpacity
          onPress={this.handlePress.bind(this)}
          style={this.props.style}>
          <Text>{this.props.children}</Text>
          <TopMenu />
        </TouchableOpacity>
      </View>
    );
  }
}


export default class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
  }

  render() {

    return (

      <ScrollView scrollsToTop={false} style={SharedStyles.menuSection}>

        <View style={SharedStyles.avatarContainer}>
        <TouchableHighlight onPress={() => this.props.onItemSelected('container')}>
          <Image
            style={SharedStyles.avatar}
            source={require('../Images/avatar.jpg')}
            />
            </TouchableHighlight>
          <Text style={SharedStyles.name} onPress={() => this.props.onItemSelected('container')}>Buddha Trek</Text>
        </View>
        <View style={SharedStyles.menuContainer}>
        <Text
          onPress={() => this.props.onItemSelected('generalInfo')}
          style={SharedStyles.itemText}>
          General Info
        </Text>
        </View>
        <View style={SharedStyles.menuContainer}>
        <Text
          onPress={() => this.props.onItemSelected('checklist')}
          style={SharedStyles.itemText}>
          Checklist
        </Text>
        </View>
        <View style={SharedStyles.menuContainer}>
        <Text
          onPress={() => this.props.onItemSelected('gallery')}
          style={SharedStyles.itemText}>
          Gallery
        </Text>
        </View>
        <View style={SharedStyles.menuContainer}>
        <Text
          onPress={() => this.props.onItemSelected('about')}
          style={SharedStyles.itemText}>
          About Us
        </Text>
        </View>
        <View style={SharedStyles.menuContainer}>
        <Text
          onPress={() => this.props.onItemSelected('contact')}
          style={SharedStyles.itemText}>
          Contact Us
        </Text>
        </View>
      </ScrollView>
    );
  }
}

module.exports = MenuNavigator;
