import React from 'react';
import {View, ActivityIndicator} from 'react-native';
import {styles} from './styles';

const ActivityIndicatorComponent = props => {
  const {active} = props;
  return (
    <>
      {active && (
        <View style={styles.container}>
          <ActivityIndicator animating={active} size="large" />
        </View>
      )}
    </>
  );
};

export default ActivityIndicatorComponent;
