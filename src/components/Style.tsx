import {StyleSheet} from 'react-native';
import {COLORS, FONTSIZE} from '../utils/Const';

export const style = StyleSheet.create({
  cTab: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cTabCircle: {
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
  },

  cTabTitle: {
    color: COLORS.white,
    fontSize: 10,
    marginTop: 4,
  },
  cIconSelected: {
    tintColor: COLORS.white,
  },
  cIconUnSelected: {
    tintColor: COLORS.gray,
  },
  cTabTitleUnSelected: {
    color: COLORS.gray,
    fontSize: 10,
    marginTop: 4,
  },
  // Your Wallet
  cBalanceWallet: {
    color: COLORS.textSecondary,
    fontSize: FONTSIZE.medium,
    fontWeight: '700',
  },
  cBalanceCurrency: {
    flexDirection: 'row',
  },
  cBalanceCurrency$: {
    color: COLORS.textSecondary,
    fontSize: FONTSIZE.large,
    fontWeight: '700',
    marginRight: 8,
    marginTop: 8,
  },
  cBalanceCurrencyText: {
    color: COLORS.textColor,
    fontSize: FONTSIZE.xlarge,
    fontWeight: '700',
  },
  cBalanceIcon: {
    tintColor: COLORS.textThirdary,
    width: 14,
    height: 14,
  },
  cBalancePercent: {
    color: COLORS.textThirdary,
    marginRight: 24,
  },
  cBalanceDayChange: {
    color: COLORS.textSecondary,
  },
  cBalanceChange: {
    flexDirection: 'row',
  },
  //Icon Button
  cButton: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgBtnColor,
    paddingHorizontal: 16,
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  cButtonIcon: {
    marginRight: 8,
  },
  cButtonText: {
    fontSize: FONTSIZE.medium,
    fontWeight: '700',
  },
  // Item currency
  cItemCurrency: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  cItemCurrencyLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cItemCurrencyLeftIcon: {
    marginRight: 16,
    height: 24,
    width: 24,
    resizeMode: 'center',
  },
  cItemCurrencyLeftText: {
    color: COLORS.textColor,
    marginRight: 16,
  },
  cItemCurrencyRight: {
    alignItems: 'flex-end',
  },
  cItemCurrencyRightBalance: {
    color: COLORS.textColor,
    fontWeight: '700',
  },
  cItemCurrencyRightPecent: {
    color: COLORS.textThirdary,
  },
  cItemCurrencyChange: {
    flexDirection: 'row',
  },
  cItemCurrencyIcon: {
   
    width: 14,
    height: 14,
  },
  cCurrencyUp:{
    tintColor: COLORS.textThirdary,
  },
  cCurrencyDown:{
tintColor:COLORS.red
  }
});
