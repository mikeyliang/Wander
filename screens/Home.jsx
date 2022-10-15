import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';


export default function Home() {
    return (
        <View className="h-full bg-blue-300">
            <View className="mt-[230px] w-full h-[100px] bg-red-300 items-center">
                <View className="h-full w-[100px] bg-white"></View>
            </View>
            <View className="mt-[40px] w-full h-[100px] bg-red-300
            items-center">
                <Text className="text-[40px] w-4/5 text-center">SloganSloganSloganSloganSl</Text>
            </View>
            <View className="mt-[40px] w-full h-[130px] bg-red-300
            items-center">
                <Text className="text-[16px] w-4/5 text-center">SloganSloganSloganSloganSl</Text>
            </View>
            <View className="mt-[40px] w-full h-[50px] bg-red-300
            items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="items-center align-middle bg-neutral-400 px-[130px] py-[16px] rounded-lg">
                        <Text className="text-center w-full">Explore</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="mt-[10px] w-full h-[50px] bg-red-300
            items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="items-center align-middle bg-neutral-400 px-[130px] py-[16px] rounded-lg">
                        <Text className="text-center">Log In</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

