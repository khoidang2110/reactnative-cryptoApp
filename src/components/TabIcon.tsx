import {Image, Text, View} from 'react-native';
import React from 'react';
import { ICONS } from '../utils/Const';
import { style } from './Style';

type Props = {
  focused: boolean,
  icon:any,
  title:string,
  isCircle:boolean
};

export default function TabIcon({focused,icon,title,isCircle=false}:Props) {
  return (
<View style={[style.cTab, isCircle ? style.cTabCircle : null]}>
  <Image source={icon} style={isCircle ? style.cIconSelected :(focused ? style.cIconSelected :style.cIconUnSelected)}/>
    <Text style={isCircle ? style.cTabTitle : (focused ? style.cTabTitle : style.cTabTitleUnSelected)}>{title}</Text>
</View>
  );
}
