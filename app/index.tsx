import { Link } from 'expo-router';
import React from 'react';
import { Text, View } from 'react-native';
import '../global.css';

const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-blue-100">
      <Text className='text-xl text-green-700'>Index</Text>
      <Link href={"/category"} > Category </Link>
      <Link href={"/products"} > Products </Link>
      <Link href={{
        pathname: '/product/[productId]',
        params: { productId: 'example-id' }
      }}> Product </Link>

      <Link href={{
        pathname: '/product/[productId]',
        params: { productId: '1', name: 'Soap' ,city:'Balangoda',},
      }}> Prabha</Link>
      </View>
  )
}

export default Index;

