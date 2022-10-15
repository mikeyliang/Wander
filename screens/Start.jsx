import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import Logo from '../assets/icons/logo.svg'

export default function Start() {
    return (
        <View className="h-full bg-white py-[100px]">
            <View className="flex flex-row justify-center items-end w-full my-16">
                    <Logo width={150} height={100} />
            
            </View>
            <View className="w-full h-[100px] items-center">
                <Text className="text-[40px] w-4/5 text-center">SloganSloganSloganSloganSl</Text>
            </View>
            <View className="mt-[40px] w-full h-[130px] items-center">
                <Text className="text-[16px] w-4/5 text-center">SloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSloganSlogan</Text>
            </View>
            <View className="mt-[90px] w-full h-[50px]
            items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="items-center bg-[#3d7847] w-full mx-8 py-[16px] rounded-2xl">
                        <Text className="text-center w-full h-full font-bold text-white">Explore Now</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View className="mt-[15px] w-full h-[50px] items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="flex flex-col justify-center items-center border-2 border-[#3d7847] w-full mx-8 rounded-2xl h-full">
                        <Text className="text-center w-full font-bold">Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <StatusBar style="auto" />
        </View>
    )
}

