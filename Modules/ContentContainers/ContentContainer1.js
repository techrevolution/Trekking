import React,{ Component } from 'react';
import { StyleSheet,ScrollView,AppRegistry, View, Image} from 'react-native';

import ScrollableTabView, { DefaultTabBar, } from 'react-native-scrollable-tab-view';

import View1 from 'Trekking/Modules/ContentContainers/ContentContainer1/view1';
import View2 from 'Trekking/Modules/ContentContainers/ContentContainer1/view2';
import View3 from 'Trekking/Modules/ContentContainers/ContentContainer1/view3';
import View4 from 'Trekking/Modules/ContentContainers/ContentContainer1/view4';
import ContentStyles from 'Trekking/Styles/ContentStyles';
export default class ContentContainer1 extends Component{

    render() {
        return (

                <View style={ContentStyles.contentContainer}>
                    <Image
                        style={ContentStyles.imageContentContainer1}
                        source={require('../../Images/image1.jpg')}
                    />

                    <ScrollableTabView style = {ContentStyles.contentContainer1}>
                        <View1 tabLabel="Overview"/>
                        <View2 tabLabel="Details"/>
                        <View3 tabLabel="Schedule"/>
                        <View4 tabLabel="Others"/>
                    </ScrollableTabView>
                </View>
        )

    }

}
