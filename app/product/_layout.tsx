import { Slot } from "expo-router";
import { View } from "react-native";

const RootLayout = () => {
  return (<View className="w-full relative flex-1">
    <Slot/>
    <View className="w-full absolute h-12 bottom-0 left-0 z-50 bg-red-500">
    </View>
  </View>
  );
}

export default RootLayout