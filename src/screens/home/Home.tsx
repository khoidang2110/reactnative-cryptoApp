import {SafeAreaView, Text, View,FlatList} from 'react-native';
import React from 'react';
import {style} from './Style';
import Balance from '../../components/Balance';
import IconButton from '../../components/IconButton';
import ItemCurrency from '../../components/ItemCurrency';
import LineChartExample from '../../components/LineChart';
import { ICONS } from '../../utils/Const';
import { useGetMarketCoinQuery } from '../../api/GeckoAPI';
import moment from 'moment';
import { Coin } from '../../api/DataType';

export default function Home() {

const {data,isLoading,isError} = useGetMarketCoinQuery()

const startDateUnix = moment().subtract(7,'day').unix()

// const dataChart = data ? data[0].sparkline_in_7d.price.map((item,index)=>{
// return {
//   timestamp: startDateUnix + (index +1) *3600,
//   value:item
// }
// }) : []

//const dataChart = data ? data[0].sparkline_in_7d.price :[]
const dataChart = [1,2,3,4,5]

  const dataList = [1, 2, 3, 4, 6, 7,9];
  const renderItem = ({item}:{item:Coin}) => {
const price = item.price_change_percentage_7d_in_currency ? item.price_change_percentage_7d_in_currency.toFixed(2) : '0' ;

    return <ItemCurrency image={item.image} name ={item.name} currency={item.current_price} percent={price} />;
  };

  return (
    <SafeAreaView style={[style.cHome]}>
      <View style={style.cWallet}>
        <Balance title="Wallet" currency="45000,7" percent="5" dayChange="7d" />
        <View style={style.cWalletButton}>
          <IconButton icon={ICONS.SEND} />
          <IconButton icon={ICONS.ARRDOWN}  />
        </View>
      </View>
      <View style={style.cChart}>
        <LineChartExample  dataCoin={dataChart}/>
      </View>
      <View style={style.cTopCurrency}>
        <Text style={style.cTopCurrencyTitle}>Top CryptoCurrency</Text>
        <FlatList
          data={data}
          renderItem={renderItem}
          style={style.cTopCurrencyList}
        />
      </View>

      
    </SafeAreaView>
  );
}
