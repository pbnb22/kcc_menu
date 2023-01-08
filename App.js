import React, { useEffect, useState } from 'react';
import { MainScreen } from './src/MainScreen';
import {StyleSheet, View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView,} from 'react-native';

import axios from 'axios'; //For pbnb API Test
// import mobileAds from 'react-native-google-mobile-ads';

// Google 광고를 초기화합니다. 반드시 App.js에 정의해야 해요.
// mobileAds().initialize().then(adapterStatuses => {});

export const App = () => {
  const [TrgtDate, setTrgtDate] = useState(new Date());

  /**Screen 화면 Manage 해주는 함수에요 */
  const getScreen = () =>{
        return(
          <MainScreen 
          setTrgtDate = {setTrgtDate}
          TrgtDate = {TrgtDate}
          />
        )
    }

  return (
    <View>
      {getScreen()}
    </View>

  );
};

export default App;