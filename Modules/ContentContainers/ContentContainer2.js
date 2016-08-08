import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import ContentStyles from 'Trekking/Styles/ContentStyles';

export default class ContentContainer2 extends Component{
    render(){
        return(
            <TouchableHighlight onPress={() => alert("Container2 Clicked")}>
                <View style={ContentStyles.container2}>
                    <View style={ContentStyles.titleContainer2}>
                        <Text>Title of container2</Text>
                    </View>
                    <View>
                        <Image
                            style={ContentStyles.imageContainer2}
                            source={require('../../Images/image2.jpg')}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={ContentStyles.bottomContainer2}>
                        <Text>Bottom of Container 2</Text>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }
}
