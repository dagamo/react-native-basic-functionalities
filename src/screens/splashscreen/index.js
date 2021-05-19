import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {showToast} from '../../components/shared/toast';
import {styles} from './style';
const Splashscreen = props => {
  /**
   * UseEffect to navigate
   * the principal view in 3 seconds
   */
  useEffect(() => {
    const {navigation} = props;
    showToast({text: 'Showing splash screen', type: 'success'});
  }, []);

  /**
   * Render the principal view
   */
  return (
    <View style={styles.container}>
      <Text>Splashscreen</Text>
    </View>
  );
};

export default Splashscreen;
