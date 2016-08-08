import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import ContentStyles from 'Trekking/Styles/ContentStyles';

export default class ContentContainer3 extends Component{
    render(){
        return(
            <TouchableHighlight onPress={() => alert("Container3 Clicked")}>
                <View style={ContentStyles.container3}>
                    <View style={ContentStyles.titleContainer3}>
                        <Text>Title of container3</Text>
                    </View>
                    <View>
                        <Image
                            style={ContentStyles.imageContainer3}
                            source={require('../../Images/image2.jpg')}
                            resizeMode={Image.resizeMode.contain}
                        />
                    </View>
                        <View style={ContentStyles.bottomContainer3}>
                        <Text>Bottom of Container 3</Text>
                    </View>

                </View>
            </TouchableHighlight>
        );
    }
}
