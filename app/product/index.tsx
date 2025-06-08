import { useLocalSearchParams } from 'expo-router';
import { Text, View } from 'react-native';

const product = () => {
    const params = useLocalSearchParams();
    console.log(params);
    
  return (
    <View>
      <Text>product</Text>
    </View>
  )
}

export default product;