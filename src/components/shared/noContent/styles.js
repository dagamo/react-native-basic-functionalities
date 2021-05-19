import {StyleSheet} from 'react-native';
import {wp} from './../../utils/responsive';
import {colors} from './../../theme/themeLigth';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: wp(6),
    color: '#c4c4c4',
    fontWeight: 'bold',
  },
});
