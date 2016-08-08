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

export default class ChecklistPage extends Component{
  render(){
    return(
        <View style = {SharedStyles.container}>
          <Image source={require('../Images/background.jpg')}  style={SharedStyles.backgroundImage}>
          <View style= {SharedStyles.body}>
            <ScrollView>
              <Text style = {SharedStyles.heading}>
                Checklist
              </Text>
              <Text style = {SharedStyles.content}>
                What clothing and equipment to take is normally caused for more consideration than any other aspect of preparing for an adventure travel trip.
                We regularly receive reams of advice and suggestions, good and bad, as to what equipment is needed for our trips.
                However, since being suitably equipped is the single most important consideration contributing to your welfare,
                we have provided the following information which we ask you to examine in a flexible manner, adapting it where you feel
                necessary to your own outdoor experience or preference.
              </Text>
              <Text style = {SharedStyles.heading2}>
                General Checklist
              </Text>
              <Text style = {SharedStyles.content}>

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
                <Text style = {SharedStyles.heading2}>
                  Trekking Checklist
                </Text>
                <Text style = {SharedStyles.content}>
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
                <Text style = {SharedStyles.heading2}>
                  Mountaineering/Climbing Checklist
                </Text>
                <Text style = {SharedStyles.content}>
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
                <Text style = {SharedStyles.heading2}>
                  Firstaid/Medicine Checklist
                </Text>
                <Text style = {SharedStyles.content}>
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
                <Text style = {SharedStyles.heading2}>
                  Extra/Luxuries Checklist
                </Text>
                <Text style = {SharedStyles.content}>
                  {'\n'}{'\n'}
                  - Binoculars{'\n'}
                  - Reading book{'\n'}
                  - Trail Map/Guide book{'\n'}
                  - Journal & Pen{'\n'}
                  - Walkman{'\n'}
                  - Travel game i.e. chess, backgammon, scrabble{'\n'}{'\n'}{'\n'}
                </Text>

                <Text style = {SharedStyles.heading2}>
                  Extra/Luxuries Checklist
                </Text>
                <Text style = {SharedStyles.content}>
                  {'\n'}{'\n'}
                  - 1 medium sized quick drying towel{'\n'}
                  - Toothbrush/paste (preferably biodegradable){'\n'}
                  - Multipurpose soap (preferably biodegradable){'\n'}
                  - Deodorant{'\n'}
                  - Nail clippers{'\n'}
                  - Face and body moisturizer{'\n'}
                  - Feminine hygiene products{'\n'}
                  - Small mirror{'\n'}{'\n'}
                </Text>
              </Text>
            </ScrollView>

           </View>
          </Image>
        </View >

    )
  }
}
