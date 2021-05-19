import React from 'react';
import {View, Text, Pressable} from 'react-native';
import ButtonRounded from '../ButtonRounded';
import {styles} from './styles';

const NoContent = props => {
  const {text, navigation, hasBackButton} = props;

  return (
    <View style={styles.container}>
      <Text style={styles.text}> {text}</Text>
      {hasBackButton && (
        <ButtonRounded title="Regresar" onPress={() => navigation?.goBack()} />
      )}
    </View>
  );
};

export default NoContent;
