import {Image, Text, View} from 'react-native';
import React from 'react';
import { style } from './Style';
import { ICONS } from '../utils/Const';

type Props = {
    title: string,
    currency:string,
    percent:string,
    dayChange:string,
}

export default function Balance({title,currency,percent,dayChange}:Props) {
  return (
<View >
    <Text style={style.cBalanceWallet}>{title}</Text>

<View style={style.cBalanceCurrency}>
 
<Text style={style.cBalanceCurrency$}>$</Text>
    <Text style={style.cBalanceCurrencyText}>{currency}</Text>
    <Text style={style.cBalanceCurrency$}>USD</Text>
</View>
 
<View style={style.cBalanceChange}>
<Image source={ICONS.UPARROW} style={style.cBalanceIcon}/>
<Text style={style.cBalancePercent}>{percent}%</Text>
    <Text style={style.cBalanceDayChange}>{dayChange} change</Text>
</View>
  
</View>
  );
}
