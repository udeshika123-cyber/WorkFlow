import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';

const SingleProduct = () => {
    const params = useLocalSearchParams();
        console.log(params);
  return (
    <View>
      <Text>SingleProduct</Text>
    </View>
  )
}

export default SingleProduct