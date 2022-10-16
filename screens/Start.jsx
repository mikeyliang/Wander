import { StatusBar } from 'expo-status-bar';
import { Text, View, TouchableOpacity } from 'react-native';

import Logo from '../assets/icons/logo.svg'

export default function Start({navigation}) {
    return (
        <View className="h-full bg-white py-[100px]">
            <View className="flex flex-row justify-center items-end w-full my-16">
                    <Logo width={150} height={100} />
            
            </View>
            <View className="w-full h-[200px] items-center">
                <Text className="text-[30px] w-4/5 text-center font-black text-neutral-700">Leave your dorm, take the trail.</Text>
            </View>
            <View className="mt-[20px] w-full h-[100px] items-center">
                <Text className="text-[16px] w-4/5 text-center"></Text>
            </View>
            <View className="mt-[80px] w-full h-[50px]
            items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="items-center bg-[#3d7847] w-full mx-8 py-[16px] rounded-2xl" onPress={() => navigation.navigate('Login')}>
                        <Text className="text-center w-full h-full font-[Inter-Bold] text-white">Get Started</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/*<View className="mt-[15px] w-full h-[50px] items-center">
                <View className="h-full w-10/12 bg-white items-center">
                    <TouchableOpacity className="flex flex-col justify-center items-center border-2 border-[#3d7847] w-full mx-8 rounded-2xl h-full">
                        <Text className="text-center w-full font-bold">Create Account</Text>
                    </TouchableOpacity>
                </View>
            </View>*/}
            <StatusBar style="auto" />
        </View>
    )
}

