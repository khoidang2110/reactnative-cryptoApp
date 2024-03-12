import {StyleSheet} from 'react-native';
import { COLORS } from '../../utils/Const';


export const style = StyleSheet.create({
cHome:{
  backgroundColor:COLORS.primary,
  flex:1,
  
},
//wallet
cWallet: {
backgroundColor:COLORS.bgGrayBlack,
paddingHorizontal:16,
paddingVertical:48,
borderEndEndRadius:16,
borderEndStartRadius:16,

},
cWalletButton:{
  flexDirection:'row',
  justifyContent:'space-evenly',
  position:'absolute',
  bottom:-20,
  left:0,
  right:0
},
cChart:{
  marginTop:40
},
//Top currency
cTopCurrency:{
  marginTop:24,
 marginBottom:500
},
cTopCurrencyTitle:{
  color:COLORS.textColor,
  fontSize:16,
  fontWeight:'700'
},
cTopCurrencyList:{
  marginTop:16
}
});
