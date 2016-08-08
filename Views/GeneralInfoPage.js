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


export default class GeneralInfoPage extends Component{
  render(){
    return(
        <View style = {SharedStyles.container}>
          <Image source={require('../Images/background.jpg')}  style={SharedStyles.backgroundImage}>
          <View style= {SharedStyles.body}>
            <ScrollView>
              <Text style = {SharedStyles.heading}>
                General Info
              </Text>
              <Text style = {SharedStyles.content}>
                Nepal makes things easy for foreign travellers. Visas are available on arrival at the international airport in Kathmandu
                and at all land border crossings that are open to foreigners, as long as you have passport photos to hand and can pay
                the visa fee in foreign currency (some crossings insist on payment in US dollars).
                Your passport must be valid for at least six months and you will need a whole free page for your visa.
              </Text>
              <Text style = {SharedStyles.heading}>
                Visa Information
              </Text>
              <Text style = {SharedStyles.content}>
                <Text style={{color: '#71C671', textDecorationLine: 'underline'}}
                      onPress={() => Linking.openURL('http://online.nepalimmigration.gov.np/tourist-visa')}>
                  Apply Visa Online {"\n"}{"\n"}
                </Text>
                <Text>
                  1. The foreign tourist visiting Nepal shall be granted the tourist visa. {"\n"}
                  2. The tourist visa shall be granted for a period in maximum of 150 days in a visa year (Visa years means January to December).{"\n"}
                  3. A tourist who has departed before the expiry of the period specified in the visa issued in a visa year shall not be allowed to use the visa by adding the remaining period to another visa year.{"\n"}
                  4. If any foreigner who has entered into Nepal towards the end of a visa year desires to spend even the period during which he may stay in Nepal with the tourist visa of the other visa year, he may use such facility.{"\n"}{"\n"}
                </Text>

                <Text style = {SharedStyles.heading2}>
                  Required Documents {"\n"}
                </Text>
                <Text style = {SharedStyles.content}>
                  1. Passport. {"\n"}
                  2. Receipt of Online. {"\n"}
                  3. Tax clearance certificate in case of Transfer from Business visa to Tourist Visa. {"\n"}
                  4. Copy of passport of guardian incase of minor below 10 years of Age.{"\n"}{"\n"}
                </Text>
                <Text style = {SharedStyles.heading2}>
                  Visa Rates {"\n"}
                </Text>
                <Text style = {SharedStyles.content}>
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
