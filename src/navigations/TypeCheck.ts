

import { RouteProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";


export type MainStackParams = {
    HOME: undefined,
    SPLASHSCREEN: undefined,
    DETAIL:{
        id:string
    },
    SEARCH:{
        dataSearch:string
    }
}

// export type PropsPush = NativeStackNavigationProp<MainStackParams,SCREENS.DETAIL>
// export type PropsRouteDetail = RouteProp<MainStackParams,SCREENS.DETAIL>
// export type PropsRouteSearch = RouteProp<MainStackParams,SCREENS.SEARCH>