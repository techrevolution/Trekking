import React,{ Component } from 'react';
import { StyleSheet,ScrollView,AppRegistry, View, Image} from 'react-native';

import styles from './../../styles';
export default class ImageNavBar extends Component{

render(){
    return(

        <Image
            style={styles.imageContentContainer1}
            source={require('../../../images/image4.jpg')}
            resizeMode={'cover'}
        />
    );
}
}