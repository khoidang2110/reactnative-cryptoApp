import {Text, View, Image, Switch, ScrollView} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {style} from './Style';

import {ICONS} from '../../utils/Const';
import '../../i18n/i18n';
import {useTranslation} from 'react-i18next';
import SelectList from 'react-native-dropdown-select-list';

export default function Profile() {
  const [FaceId, setFaceId] = useState(false);
  const [onSwitch, setOnSwitch] = useState(true);
  const onChangeFaceId = () => {
    setFaceId(FaceId ? false : true);
  };
  const {t, i18n} = useTranslation();
  const onChangeLang = () => {
    setOnSwitch(onSwitch ? false : true);
    if (onSwitch) {
      i18n.changeLanguage('vi');
    
    } else {
      i18n.changeLanguage('en');
    }
  };

  return (
    <SafeAreaView style={style.cProfile}>
      <ScrollView>
        <Text style={style.cTitle}>{t('profile')}</Text>
        <View style={style.cItem}>
          <Text style={style.cItemText}>mail***@***.com</Text>
          <View style={style.cVerified}>
            <Image source={ICONS.VERIFIED} style={style.cVerifiedIcon} />
            <Text style={style.cVerifiedText}>Verified</Text>
          </View>
        </View>
        <Text style={style.cItemSubText}> ID:12345678</Text>

        <Text style={style.cItemTitle}>{t('app')}</Text>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('launch screen')}</Text>
          <View style={style.cVerified}>
            <Text style={style.cItemSubTextSetting}>{t('home')}</Text>
            <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
          </View>
        </View>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('appearance')}</Text>
          <View style={style.cVerified}>
            <Text style={style.cItemSubTextSetting}>Dark</Text>
            <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
          </View>
        </View>
        <Text style={style.cItemTitle}>{t('account')}</Text>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('payment currency')}</Text>
          <View style={style.cVerified}>
            <Text style={style.cItemSubTextSetting}>USD</Text>
            <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
          </View>
        </View>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('language')}</Text>
          <View style={style.cVerified}>
            <Text style={style.cItemSubTextSetting}>{t('langSelect')}</Text>
            <Switch value={onSwitch} onChange={onChangeLang} />
          </View>
        </View>
        <Text style={style.cItemTitle}>{t('security')}</Text>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>FaceID</Text>
          <Switch value={FaceId} onChange={onChangeFaceId} />
        </View>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('password setting')}</Text>
          <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
        </View>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('change password')}</Text>
          <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
        </View>
        <View style={[style.cItem, style.mt16]}>
          <Text style={style.cItemTextSetting}>{t('2-factor authentication')}</Text>
          <Image source={ICONS.NAVIGATENEXT} style={style.cItemIcon} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
