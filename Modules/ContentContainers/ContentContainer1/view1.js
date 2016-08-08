import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView, Image, TouchableHighlight} from 'react-native';
import ContentStyles from 'Trekking/Styles/ContentStyles';

export default class View1 extends Component{
    render(){
        return(
            <ScrollView>
                <Text style={ContentStyles.contentContainerTitle}>
                    Trip Details
                </Text >
                <ScrollView>
                <Text style= {ContentStyles.contentContainerText}>
                    Everest’s daunting summit soars so high that trekking to its base camp (17,590) is still an adventure of the highest sort. Join National Geographic on a 14-day Himalayan trek to Everest’s Southern Face Base Camp through some of the world’s most spectacular mountain scenery. Spend two days discovering the historic treasures of Kathmandu. Stay in villages set against soaring, jagged pinnacles; get to know the unique culture of the Sherpas; and walk trails lined with mani stones, engraved with Tibetan Buddhist prayers. Discover remote mountain monasteries and learn about the Sherpas’ spiritual perspective on the mountains they call home.
                </Text>
                    </ScrollView>
            </ScrollView>
        );
    }
}
