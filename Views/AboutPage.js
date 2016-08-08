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

export default class AboutPage extends Component{
  render(){
    return(

        <View style = {SharedStyles.container}>
          <Image source={require('../Images/background.jpg')}  style={SharedStyles.backgroundImage}>
          <View style= {SharedStyles.body}>
            <ScrollView>
              <Text style = {SharedStyles.heading}>
                About Us
              </Text>
              <Text style = {SharedStyles.content}>
                With eight of the top ten highest summits in the world and some of the most beautiful landscapes which are only reachable on foot, trekking in Nepal is one of the unique experiences of Asia.

                Trekking is the most popular activity in Nepal, and travellers will be bombarded on the streets of Kathmandu and the trekking hub, Pokhara, with guides, organised tours and gear for sale or rent.
                The huge variety of options allows for people of many ages and capabilities to attempt a trek in the country.
                While you could spend a year planning an expedition to wild and lofty places that few would dare attempt, you could also arrive in Kathmandu with no plans and be on the trail in a matter of days.

                Despite what many may perceive, trekking in Nepal is not necessarily wandering alone through an uncharted wilderness.
                As they walk along the well-marked trekking paths, travellers will often discover quite the opposite; hundreds of locals passing through each day as they haul food, water and other odd necessities back to their tiny villages, along with dozens of fellow trekkers.
                The regularly-spaced villages and teahouses allow trekkers good opportunities to rest and recover, either for a few minutes or the night. The strong culture and unreserved friendliness of the Nepalese people can also be witnessed as one traverses the hill tracks.
              </Text>
              <Text style = {SharedStyles.heading2}>
                Trekking in Nepal
              </Text>
              <Text style = {SharedStyles.content}>
                Going trekking in Nepal? Let’s help you with a snapshot overview of what’s likely the twelve best treks in Nepal. At least, they are currently the most popular treks in Nepal, based on number of trekkers.

                Every year Nepal attracts +200,000 trekkers. That also means that every year +200,000 people are faced with the hard choice of selecting which trekking destination to explore in Nepal. Let’s face it – this is not an easy choice.

                How odd it may sound the decision of choosing your favorite trek might actually be easier made in your home country (likely with proper internet connection also…) than in the bustling trekking and tourist area, Thamel, where hundreds of trekking agencies inevitably will offer you different opinions as to which trek is the best trek in Nepal.

                Worst case, some opinions offered by local trekking agencies might be more profit driven than anything else. Best case, you’ll receive good but likely different pieces of advice from various prudent trekking companies in Kathmandu. Because which trek is actually the best in Nepal?{"\n"}
              </Text>
              <Text style = {SharedStyles.heading2}>
                Some Trekking Routes
              </Text>
              <Text style = {SharedStyles.content}>
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
              <Text style = {SharedStyles.heading2}>
                About App
              </Text>
              <Text style = {SharedStyles.content}>
                This app provides the complete information about trekking in Nepal.{'\n'}
              </Text>
              <Text style = {SharedStyles.heading2}>
                Powered By:
              </Text>
              <Image source={require('../Images/logo.png')} style ={SharedStyles.image}/>
              <Text style = {SharedStyles.content}>
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
