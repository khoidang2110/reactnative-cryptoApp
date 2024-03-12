import {Image, ImageSourcePropType, Text, View} from 'react-native';
import React from 'react';
import {style} from './Style';
import {ICONS} from '../utils/Const';

type Props = {
  image:string,
  name:string,
currency:number,
percent:number,

}

export default function ItemCurrency({image,name,currency,percent}:Props) {
  let positiveNumber = true;
  if (percent<0){
positiveNumber = false;
  }
  return (
    <View style={style.cItemCurrency}>
      <View style={style.cItemCurrencyLeft}>
        <Image style={style.cItemCurrencyLeftIcon} source={{uri:image}} />
        <Text style={style.cItemCurrencyLeftText}>{name}</Text>
      </View>

      <View style={style.cItemCurrencyRight}>
        <Text style={style.cItemCurrencyRightBalance}> $ {currency}</Text>
        <View style={style.cItemCurrencyChange}>
          <Image source={positiveNumber ? ICONS.UPARROW : ICONS.DOWNARROW} style={[style.cItemCurrencyIcon,positiveNumber ? style.cCurrencyUp : style.cCurrencyDown]}/>
        <Text style={style.cItemCurrencyRightPecent}>{percent} %</Text>
        </View>
       
      </View>
    </View>
  );
}
