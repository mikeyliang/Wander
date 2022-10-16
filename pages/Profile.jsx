import { Text, View, Image } from "react-native";
import Nav from "../components/Nav";

import AsyncStorage from '@react-native-async-storage/async-storage';

import ArrowUp from '../assets/icons/arrow-up-right.svg'
import ArrowDown from '../assets/icons/arrow-down-right.svg'

export default function Profile({navigation}) {
    
    return (
        <View className="flex flex-col justify-center items-center">
            <Nav section={"Profile"} navigation={navigation}/>

            <View className="h-1/3">
                <View className="absolute">
                    <View className="p-2 bg-gray-400">
                        
                    </View>
                    
                </View>


            </View>

            <View className="h-2/3 flex flex-col justify-center items-center pt-24">
                <Text>Michael Liang</Text>
                <Text>New Explorer</Text>

                <View className="flex flex-row items-center justify-evenly">
                    <View className="flex flex-col justify-center items-start">
                        <Text>Sites Visited</Text>
                        <View className="flex flex-row gap-2 justify-center items-center">
                            <Text>5</Text>
                            <View className="flex flex-row gap-2 p-2 bg-green-200">
                                <ArrowUp width={15} height={15} /> 
                                <Text>1</Text>
                            </View>
                        </View>
                    </View>
                    <View className="flex flex-col justify-center items-start">
                        <Text>Weekly Challenges</Text>
                        <View className="flex flex-row gap-2 justify-center items-center">
                            <Text>2</Text>
                            <View className="p-2 bg-red-200">
                                <ArrowDown width={15} height={15} /> 
                                <Text>2</Text>
                            </View>
                        </View>
                    </View>
                </View> 

                <View className="flex flex-col justify-center items-center mx-4">
                    <View className="flex flex-row justify-center items-center gap-4 rounded-xl">
                        <View className="flex flex-row justify-center items-center p-4 rounded-2xl">
                            <View className="bg-lime-500 p-2">
                                <Text>#1</Text>
                            </View>
                            <Text>Ranking Among Cornell University</Text>
                        </View>

                    </View>

                    <View className="mt-4 flex flex-row justify-center items-center gap-4 rounded-xl">
                        <View className="flex flex-row justify-center items-center p-4 rounded-2xl">
                            <View className="bg-lime-500 p-2">
                                <Text>#1</Text>
                            </View>
                            <Text>Ranking Among other Colleges</Text>
                        </View>

                    </View>


                </View>
            </View>
            

        </View>


    )

}