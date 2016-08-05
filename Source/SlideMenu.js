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


import TopMenu from 'Trekking/Welcome/TopMenu';
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const uri = 'http://pickaface.net/includes/themes/clean/img/slide2.png';

export default class GeneralInfoPage extends Component{
  render(){
    return(
        <View style = {styles.container}>
          <Image source={require('Trekking/Images/background.jpg')}  style={styles.backgroundImage}>
          <View style= {styles.body}>
            <ScrollView>
              <Text style = {styles.heading}>
                General Info
              </Text>
              <Text style = {styles.content}>
                Nepal makes things easy for foreign travellers. Visas are available on arrival at the international airport in Kathmandu
                and at all land border crossings that are open to foreigners, as long as you have passport photos to hand and can pay
                the visa fee in foreign currency (some crossings insist on payment in US dollars).
                Your passport must be valid for at least six months and you will need a whole free page for your visa.
              </Text>
              <Text style = {styles.heading}>
                Visa Information
              </Text>
              <Text style = {styles.content}>
                <Text style={{color: '#4d0000'}}
                      onPress={() => Linking.openURL('http://online.nepalimmigration.gov.np/tourist-visa')}>
                  Apply Visa Online {"\n"}{"\n"}
                </Text>
                <Text>
                  1. The foreign tourist visiting Nepal shall be granted the tourist visa. {"\n"}
                  2. The tourist visa shall be granted for a period in maximum of 150 days in a visa year (Visa years means January to December).{"\n"}
                  3. A tourist who has departed before the expiry of the period specified in the visa issued in a visa year shall not be allowed to use the visa by adding the remaining period to another visa year.{"\n"}
                  4. If any foreigner who has entered into Nepal towards the end of a visa year desires to spend even the period during which he may stay in Nepal with the tourist visa of the other visa year, he may use such facility.{"\n"}{"\n"}
                </Text>

                <Text style = {styles.heading2}>
                  Required Documents {"\n"}
                </Text>
                <Text style = {styles.content}>
                  1. Passport. {"\n"}
                  2. Receipt of Online. {"\n"}
                  3. Tax clearance certificate in case of Transfer from Business visa to Tourist Visa. {"\n"}
                  4. Copy of passport of guardian incase of minor below 10 years of Age.{"\n"}{"\n"}
                </Text>
                <Text style = {styles.heading2}>
                  Visa Rates {"\n"}
                </Text>
                <Text style = {styles.content}>
                  1. Minimum 30 US Dollar for upto 15 days.{"\n"}
                  2. After 15 days 2US Dollar per days (extension of the tourist visa, the fees chargeable for 15 days shall be levied if the period is less than 15 days in every extension.{"\n"}
                  3. Extra US Dollar 20 for MRE facility for valid visa period.{"\n"}
                  4. Late fee to be charged Extra 3 US Dollar per day.{"\n"}
                  5. Free of Cost incase minor below 10 years of age.{"\n"}
                </Text>
              </Text>
            </ScrollView>

          </View>
          </Image>
        </View >

    )
  }
}

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

export default class ChecklistPage extends Component{
  render(){
    return(
        <View style = {styles.container}>
          <Image source={require('Trekking/Images/background.jpg')}  style={styles.backgroundImage}>
          <View style= {styles.body}>
            <ScrollView>
              <Text style = {styles.heading}>
                Checklist
              </Text>
              <Text style = {styles.content}>
                What clothing and equipment to take is normally caused for more consideration than any other aspect of preparing for an adventure travel trip.
                We regularly receive reams of advice and suggestions, good and bad, as to what equipment is needed for our trips.
                However, since being suitably equipped is the single most important consideration contributing to your welfare,
                we have provided the following information which we ask you to examine in a flexible manner, adapting it where you feel
                necessary to your own outdoor experience or preference.
              </Text>
              <Text style = {styles.heading2}>
                General Checklist
              </Text>
              <Text style = {styles.content}>

                <Text>
                  Please remember that you should always try to keep the weight of your clothing equipment down to a minimum. Your packed trek bag, should weigh no more than 15 kilograms (33 pounds.)
                  Please remember this is just a checklist and you do not necessarily need to bring everything that is listed below. {"\n"}{"\n"}
                </Text>


                <Text >
                  - Light and expedition weight thermal tops {'\n'}
                  - Fleece jacket or pullover {'\n'}
                  - Fleece Wind-Stopper jacket (optional) {'\n'}
                  - Waterproof shell jacket (preferably breathable fabric) {'\n'}
                  - Lightweight thermal gloves {'\n'}
                  - Underwear (4) {'\n'}
                  - Shorts (2) {'\n'}
                  - Lightweight cotton long trousers/pants {'\n'}
                  - Light and expedition weight thermal bottoms {'\n'}
                  - Sun hat or scarf {'\n'}
                  - Warm fleece hat or light balaclava {'\n'}
                  - T-shirts (2) {'\n'}
                  - Thin, lightweight (inner socks) (4) {'\n'}
                  - Sunglasses with UV protection {'\n'}
                  - Sleeping bag rated to 0 degrees (3/4 season) {'\n'}
                  - Head lamp (eg Petzl) spare bulbs & batteries {'\n'}
                  - Small padlock to lock trek bag {'\n'}
                  - Basic First Aid Kit (see First Aid Medicine below) {'\n'}
                  - Plastic bags - for keeping items dry inside trek bag {'\n'}
                  - Daypack (35-40 litres/2500-3000 cubic inches) {'\n'}
                  - Camping mattress, eg thermarest pad {'\n'}
                  - Water bottles (2) {'\n'}
                  - Toiletries {'\n'}
                  - Small wash towel {'\n'}
                  - Footwear appropriate to the trip {'\n'}
                  - Waterproof shell trousers/pants (preferably breathable fabric) {'\n'}{'\n'}{'\n'}
                </Text>
                <Text style = {styles.heading2}>
                  Trekking Checklist
                </Text>
                <Text style = {styles.content}>
                  {'\n'}{'\n'}
                  - Heavyweight gloves or mittens with a waterproof shell outer {'\n'}
                  - Down vest and/or jacket (optional) {'\n'}
                  - Fleece or wool trousers/pants {'\n'}
                  - Trekking/Hiking boots with spare laces {'\n'}
                  - Thick, warm wool hiking socks (4) {'\n'}
                  - Footwear for around camp, eg running shoes and/or sandals {'\n'}
                  - Gaiters (optional) {'\n'}
                  - Telescopic trekking/ski poles (optional) {'\n'}{'\n'}{'\n'}
                </Text>
                <Text style = {styles.heading2}>
                  Mountaineering/Climbing Checklist
                </Text>
                <Text style = {styles.content}>
                  {'\n'}{'\n'}
                  - Plastic boots and crampons (preferably step-in bindings) with front points.{'\n'}
                  - Mountaineering harness.{'\n'}
                  - Mountaineering ice-axe (60-75cms long - depending on your height and personal
                  preference.){'\n'}
                  - 120cms (4ft) climbing sling and two locking carabiners.{'\n'}
                  - Telescopic ski-sticks (optional).{'\n'}
                  - Prussik loops. {'\n'}
                  - Climbing helmet (optional). {'\n'}{'\n'}{'\n'}
                </Text>
                <Text style = {styles.heading2}>
                  Firstaid/Medicine Checklist
                </Text>
                <Text style = {styles.content}>
                  {'\n'}{'\n'}
                  - Bandage for sprains.{'\n'}
                  - Plasters/Band-aids.{'\n'}
                  - Iodine or water filter (optional).{'\n'}
                  - Moleskin/Second skin - for blisters.{'\n'}
                  - Antiseptic ointment for cuts.{'\n'}
                  - Anti-bacterial throat lozenges (with antiseptic).{'\n'}
                  - Aspirin/paracetamol - general painkiller.{'\n'}
                  - Oral rehydration salts.{'\n'}
                  - Broad-spectrum antibiotic (norfloxacin or ciprofloxin).{'\n'}
                  - Anti-diarrhea medication (antibiotic).{'\n'}
                  - Diarrhea stopper (Imodium - optional).{'\n'}
                  - Antibiotic for Giardia or similar microbe or bacteria.{'\n'}
                  - Diamox (altitude sickness - can be bought in Kathmandu).{'\n'}
                  - Sterile Syringe set (anti-AIDS precaution).{'\n'}
                  - For more details please see our staying healthy topic.{'\n'}{'\n'}{'\n'}
                </Text>
                <Text style = {styles.heading2}>
                  Extra/Luxuries Checklist
                </Text>
                <Text style = {styles.content}>
                  {'\n'}{'\n'}
                  - Binoculars{'\n'}
                  - Reading book{'\n'}
                  - Trail Map/Guide book{'\n'}
                  - Journal & Pen{'\n'}
                  - Walkman{'\n'}
                  - Travel game i.e. chess, backgammon, scrabble{'\n'}{'\n'}{'\n'}
                </Text>

                <Text style = {styles.heading2}>
                  Extra/Luxuries Checklist
                </Text>
                <Text style = {styles.content}>
                  {'\n'}{'\n'}
                  - 1 medium sized quick drying towel{'\n'}
                  - Toothbrush/paste (preferably biodegradable){'\n'}
                  - Multipurpose soap (preferably biodegradable){'\n'}
                  - Deodorant{'\n'}
                  - Nail clippers{'\n'}
                  - Face and body moisturizer{'\n'}
                  - Feminine hygiene products{'\n'}
                  - Small mirror{'\n'}{'\n'}{'\n'}
                </Text>
              </Text>
            </ScrollView>

           </View>
          </Image>
        </View >

    )
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

export default class AboutPage extends Component{
  render(){
    return(

        <View style = {styles.container}>
          <Image source={require('Trekking/Images/background.jpg')}  style={styles.backgroundImage}>
          <View style= {styles.body}>
            <ScrollView>
              <Text style = {styles.heading}>
                About Us
              </Text>
              <Text style = {styles.content}>
                With eight of the top ten highest summits in the world and some of the most beautiful landscapes which are only reachable on foot, trekking in Nepal is one of the unique experiences of Asia.

                Trekking is the most popular activity in Nepal, and travellers will be bombarded on the streets of Kathmandu and the trekking hub, Pokhara, with guides, organised tours and gear for sale or rent.
                The huge variety of options allows for people of many ages and capabilities to attempt a trek in the country.
                While you could spend a year planning an expedition to wild and lofty places that few would dare attempt, you could also arrive in Kathmandu with no plans and be on the trail in a matter of days.

                Despite what many may perceive, trekking in Nepal is not necessarily wandering alone through an uncharted wilderness.
                As they walk along the well-marked trekking paths, travellers will often discover quite the opposite; hundreds of locals passing through each day as they haul food, water and other odd necessities back to their tiny villages, along with dozens of fellow trekkers.
                The regularly-spaced villages and teahouses allow trekkers good opportunities to rest and recover, either for a few minutes or the night. The strong culture and unreserved friendliness of the Nepalese people can also be witnessed as one traverses the hill tracks.
              </Text>
              <Text style = {styles.heading2}>
                Trekking in Nepal
              </Text>
              <Text style = {styles.content}>
                Going trekking in Nepal? Let’s help you with a snapshot overview of what’s likely the twelve best treks in Nepal. At least, they are currently the most popular treks in Nepal, based on number of trekkers.

                Every year Nepal attracts +200,000 trekkers. That also means that every year +200,000 people are faced with the hard choice of selecting which trekking destination to explore in Nepal. Let’s face it – this is not an easy choice.

                How odd it may sound the decision of choosing your favorite trek might actually be easier made in your home country (likely with proper internet connection also…) than in the bustling trekking and tourist area, Thamel, where hundreds of trekking agencies inevitably will offer you different opinions as to which trek is the best trek in Nepal.

                Worst case, some opinions offered by local trekking agencies might be more profit driven than anything else. Best case, you’ll receive good but likely different pieces of advice from various prudent trekking companies in Kathmandu. Because which trek is actually the best in Nepal?{"\n"}
              </Text>

              <Text style = {styles.heading2}>
                Some Trekking Routes
              </Text>
              <Text style = {styles.content}>

                -  Everest Base Camp {'\n'}
                -  Annapurna Circuit {'\n'}
                -  Annapurna Base Camp {'\n'}
                -  Poonhill Trek {'\n'}
                -  Manaslu Trek {'\n'}
                -  Langtang Trek {'\n'}
                -  Gokyo Trek {'\n'}
                -  Upper Mustang Trek {'\n'}
                -  Upper Dolpo {'\n'}
                -  Kanchanjunga Trek {'\n'}
                -  Makalu Base Camp {'\n'}

              </Text>
              <Text style = {styles.heading2}>
                About App
              </Text>
              <Text style = {styles.content}>
                This app provides the complete information about trekking in Nepal.{'\n'}

              </Text>
              <Text style = {styles.heading2}>
                Powered By:
              </Text>
              <Image source={require('Trekking/Images/logo.png')} style ={styles.image}/>
              <Text style = {styles.content}>
                Computer Science Research and Development Center Nepal {'\n'}
                Contact: +9779851217037 {'\n'}
                Kathmandu, Nepal

              </Text>

            </ScrollView>

          </View>
          </Image>
        </View >

    )
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

export default class GalleryPage extends Component{
  render(){
    return(

        <View style = {styles.container}>
        <Image source={require('Trekking/Images/background.jpg')}  style={styles.backgroundImage}>
          <View style= {styles.body}>
            <ScrollView>
              <Text style = {styles.heading}>
                Gallery
              </Text>
              <Text style = {styles.content}>
                We will have this section soon.
              </Text>
            </ScrollView>

          </View>
          </Image>
        </View >

    )
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

export default class ContactPage extends Component{
  render(){
    return(

        <View style = {styles.container}>
          <Image source={require('Trekking/Images/background.jpg')}  style={styles.backgroundImage}>
          <View style= {styles.body}>
            <Text style = {styles.heading}>
              Contact Us
            </Text>
            <Text style = {styles.content}>
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

class MenuNavigator extends Component {

  constructor(props) {
    super(props);
    this._setNavigatorRef = this._setNavigatorRef.bind(this);
  }

  renderScene(route, nav) {
    switch (route.id) {
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

      default:
        return <GeneralInfo navigator={nav} />;
    }
  }

  render() {
    return (
      <Navigator
        ref={this._setNavigatorRef}
        initialRoute={{id: 'generalInfo'}}
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

class MenuButton extends Component {

  handlePress(e) {
    if (this.props.onPress) {
      this.props.onPress(e);
    }
  }

  render() {
    return (
      <View style={styles.menuButton} >
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


class Menu extends Component {

  static propTypes = {
    onItemSelected: React.PropTypes.func.isRequired,
  };

  constructor(props) {
      super(props);
  }

  render() {

    return (

      <ScrollView scrollsToTop={false} style={styles.menuSection}>

        <View style={styles.avatarContainer}>
          <Image
            style={styles.avatar}
            source={{ uri, }}/>
          <Text style={styles.name}>Your name</Text>
        </View>

        <Text
          onPress={() => this.props.onItemSelected('generalInfo')}
          style={styles.itemText}>
          General Info
        </Text>

        <Text
          onPress={() => this.props.onItemSelected('checklist')}
          style={styles.itemText}>
          Checklist
        </Text>
        <Text
          onPress={() => this.props.onItemSelected('about')}
          style={styles.itemText}>
          About Us
        </Text>
        <Text
          onPress={() => this.props.onItemSelected('gallery')}
          style={styles.itemText}>
          Gallery
        </Text>
        <Text
          onPress={() => this.props.onItemSelected('contact')}
          style={styles.itemText}>
          Contact Us
        </Text>
      </ScrollView>
    );
  }
}

var styles = StyleSheet.create({
    menuButton: {

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
        color:'#b34d4d',
        textAlign: 'left',
        marginLeft: 18,
        marginTop: 10

    },
    heading2 :{
        fontSize: 28,
        color:'#ac5353',
        textAlign: 'left',
        marginLeft: 18,
    },
    content : {
        fontSize : 26,
        padding: 10,
        margin: 20,

    },
    menuSection: {
    flex: 1,
    width: window.width,
    height: window.height,
    backgroundColor: '#332f2e',
    padding: 30,
  },
  avatarContainer: {
    marginBottom: 40,
    marginTop: 40,
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 24,
    flex: 1,
  },
  name: {
    position: 'absolute',
    left: 70,
    color: '#c4b2ad',
    top: 20,
    fontSize: 35,
    marginLeft: 20
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
    menuText: {
      flex: 1,
      width: window.width,
      height: window.height,
      padding: 20,
    },
    itemText: {
      fontSize: 32,
      color: '#c4b2ad',
      fontWeight: '300',
      marginTop: 20,
      paddingLeft: 20,
      marginLeft: 20
  },
  backgroundImage:{
    width: windowWidth,
    height: windowHeight,
  }
});

module.exports = MenuNavigator;
