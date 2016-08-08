import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import ContentStyles from 'Trekking/Styles/ContentStyles';

export default class ContentContainer4 extends Component{
    render(){
        return(
            <TouchableHighlight onPress={() => alert("Container4 Clicked")}>
                <View style={ContentStyles.container4}>
                    <View style={ContentStyles.titleContainer4}>
                        <Text>Title of container4</Text>
                    </View>
                    <View>
                        <Image
                            style={ContentStyles.imageContainer4}
                            source={require('../../Images/image4.jpg')}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                    <View style={ContentStyles.bottomContainer4}>
                        <Text>Bottom of Container 4</Text>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }
}
