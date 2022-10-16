import { Text, View, Image } from "react-native";
import Nav from "../components/Nav";

import AsyncStorage from '@react-native-async-storage/async-storage';

import ProfileIcon from '../assets/icons/profile.svg'

import Logo from '../assets/icons/logo.svg'

import SettingIcon from '../assets/icons/settings.svg'

import ArrowUp from '../assets/icons/arrow-up-right.svg'
import ArrowDown from '../assets/icons/arrow-down-right.svg'

export default function Profile({navigation}) {
    
    return (
        <View className="flex flex-col justify-center items-center h-full">
            <Nav section={"Profile"} navigation={navigation}/>

            <View className="absolute top-16 w-full">
                <View className="flex flex-row justify-between mx-8">
                    <View className="p-3 bg-white flex justify-center items-center rounded-full shadow-md">
                        <SettingIcon width={20} height={20}/>
                    </View>

                    <View className="p-3 bg-white flex justify-center items-center rounded-full shadow-md">
                        <Logo width={20} height={20}/>
                    </View>
                </View>

            </View>

            <View className="h-1/3 w-full">
                <View className="absolute right-50 bottom-0 ml-[120px]">
                    <View className="p-2 bg-white shadow-lg rounded-full">
                        <ProfileIcon width={130} height={130}></ProfileIcon>
                    </View>
                    
                </View>


            </View>

            <View className="h-2/3 flex flex-col justify-center items-center py-24">
                <Text className="font-extrabold text-4xl my-6">Michael Liang</Text>
                <View className="flex flex-row gap-2 justify-center items-center flex-wrap mx-8">
                    <View className="px-2 py-1 border-2 border-[#16a34a] rounded-full">
                        <Text className="text-neutral-700 font-bold">New Explorer</Text>
                    </View>
                    <View className="px-2 py-1 border-2 border-[#16a34a] rounded-full">
                        <Text className="text-neutral-700 font-bold">Sustainability</Text>
                    </View>
                </View>

                <View className="flex flex-row items-center justify-evenly w-full mt-8 mb-4">
                    <View className="flex flex-col justify-center items-start bg-white shadow-sm rounded-2xl py-4 px-6">
                        <Text className="mb-2 text-sm font-semibold">Sites Visited</Text>
                        <View className="flex flex-row gap-4 justify-center items-center">
                            <Text className="text-2xl font-black">5</Text>
                            <View className="flex flex-row justify-center items-center p-2 bg-green-200 rounded-2xl">
                                <ArrowUp width={15} height={15} /> 
                                <Text className="ml-1 mr-1 font-semibold">1</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-col justify-center items-start bg-white shadow-sm rounded-2xl p-4 px-6">
                        <Text className="mb-2 text-sm font-semibold">Weekly Challenges</Text>
                        <View className="flex flex-row gap-4 justify-center items-center">
                            <Text className="text-2xl font-black">2</Text>
                            <View className="flex flex-row justify-center items-center p-2 bg-red-200 rounded-2xl">
                                <ArrowDown width={15} height={15} /> 
                                <Text className="ml-1 mr-1 font-semibold">2</Text>
                            </View>
                        </View>
                    </View>
                </View> 

                <View className="flex flex-col justify-center items-center mx-4 gap-2 mb-24">
                    <View className="flex flex-row justify-center items-center gap-4 rounded-2xl">
                        <View className="flex flex-row justify-center items-center p-4 bg-white shadow-sm rounded-2xl">
                        <View className="flex flex-row justify-center items-center p-2 bg-green-200 rounded-2xl">
                                <ArrowUp width={15} height={15} /> 
                                <Text className="ml-1 mr-1 font-semibold">3</Text>
                            </View>
                            <Text className="ml-2 font-extrabold">in Cornell University</Text>
                            <Image style={{width: 25, height: 25, marginLeft: 10}}source={require('../assets/icons/CU.png')}></Image>
                        </View>

                    </View>

                    <View className="mt-4 flex flex-row justify-center items-center gap-4 rounded-2xl">
                        <View className="flex flex-row justify-center items-center p-4 bg-white shadow-sm rounded-2xl">
                        <Image style={{width: 25, height: 25, marginRight: 10}}source={require('../assets/icons/CU.png')}></Image>
                        <Text className="mr-2 font-extrabold">Cornell University</Text>
                        <View className="flex flex-row justify-center items-center p-2 bg-green-200 rounded-2xl">
                            <ArrowUp width={15} height={15} /> 
                            <Text className="ml-1 mr-1 font-semibold">1</Text>
                        </View>
                            
                        </View>

                    </View>


                </View>
            </View>
            

        </View>


    )

}