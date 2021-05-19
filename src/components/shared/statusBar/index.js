import React from 'react';
import {SafeAreaView, StatusBar, View} from 'react-native';

const MyStatusBar = ({backgroundColor, ...props}) => (
  <View style={[{zIndex: 100}, {backgroundColor}]}>
    <SafeAreaView>
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </SafeAreaView>
  </View>
);
export default MyStatusBar;
