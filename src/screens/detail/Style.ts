import {StyleSheet} from 'react-native';
import {COLORS, FONTS, SIZES} from '../../constant/constant';

export const style = StyleSheet.create({
  headerBack: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconPrim: {
    width: 32,
    height: 32,
    tintColor: COLORS.primary,
  },
  iconWhite: {
    width: 32,
    height: 32,
    tintColor: COLORS.white,
  },
  textWhite: {
    color: COLORS.white,
  },
  textGray: {
    color: COLORS.blackGray,
  },
  headerAbsolute: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    padding: SIZES.paddingSmall,
    justifyContent: 'space-between',
  },
  circleAvatar: {
    width: 42,
    height: 42,
    borderRadius: 21,
  },
  paddingX: {
    paddingHorizontal: 10,
  },
  padding20: {
    padding: 20,
  },
  hUserWrapper: {
  
    flexDirection: 'row',
justifyContent:'space-between',
   
    borderRadius: 10,
  },
  hUserTextWrapper: {
    flex: 1,
  },
  bTitleText:{
    flex:1,
    fontSize:FONTS.fontMedium,
    fontWeight:'500',
   
  },
  bodyContainer:{
    padding:SIZES.paddingSmall,
    // marginBottom:24
  },
  avatarLeft:{
    width: 42,
    height: 42,
    borderRadius: 21,
    marginLeft:-20
  },
  subText:{
    color:COLORS.blackGray
    ,
    fontSize:FONTS.fontSmall,
    alignSelf:'flex-end'
  },
  textAlignRight:{
    textAlign:"right"
  },
  cIngredientText:{
    marginTop:SIZES.marginMedium,
    fontWeight:'700'
  },
  cIngredientItem:{
    marginTop:SIZES.marginSmall,
    flexDirection:'row',
    justifyContent:'space-between'
  }
});
