import React from 'react';
import {Image, Text, View} from 'react-native';
import {style} from './Style';
import {ICONS} from '../utils/Const';

type Props = {
 icon: string,

}

export default function IconButton({icon}:Props) {
  return (
    
      <View style={style.cButton}>
        <Image source={icon} style={style.cButtonIcon} />
        <Text style={style.cButtonText}> Icon button</Text>
      </View>

 
  );
}
