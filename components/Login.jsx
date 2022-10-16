import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

import MapIcon from '../assets/icons/map-pin.svg'

const styles = StyleSheet.create({
    input: {
      opacity: 0.5,
      width: "83%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 5,
    },
});

export default function Login(props) {



    return(

        <View className = "flex pt-16 flex-col justify-center gap-y-4 items-center w-full">
        
            <Text className = " text-4xl font-bold text-neutral-800 items-center">Wander</Text>

            <View className = "flex flex-col items-start w-full left-3 pt-6"> 
                <Text className = "text-3xl font-bold text-neutral-700 gap-3 left-3">    Welcome! </Text> 
                <Text className = "text-neutral-500 left-4 pt-6">   First, select your college campus</Text>
            </View>

            <TouchableOpacity className="flex flex-row justify-center items-center pt-9 py-5 mx-6 border-4 border-gray-300 rounded-2xl">
                <View className="flex flex-col justify-between items-start px-8 w-3/4">
                    <View className='flex flex-col items-start'>
                        <Text className="w-full flex text-center">Cornell University</Text>
                        <View className="flex flex-row gap-x-2 justify-center items-center mt-1">
                            <MapIcon width={25} height={25}/>
                            <Text>Ithaca, NY 14850</Text>
                        </View>
                    </View>
                </View>
                <View className="w-1/4">
                    <Image style={{width: 70, height: 70, overflow: "hidden", borderRadius: 30}} source={require('../assets/icons/CU.gif')}></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity className="flex flex-row justify-center items-center pt-9 py-5 mx-6 border-4 border-gray-300 rounded-2xl">
                <View className="flex flex-col justify-between items-start px-8 w-3/4">
                    <View className='flex flex-col items-start'>
                        <Text className="w-full flex text-center">Cornell Tech</Text>
                        <View className="flex flex-row gap-x-2 justify-center items-center mt-1">
                            <MapIcon width={25} height={25}/>
                            <Text>New York, NY 14850</Text>
                        </View>
                    </View>
                </View>
                <View className="w-1/4">
                    <Image style={{width: 70, height: 70, overflow: "hidden", borderRadius: 30}} source={require('../assets/icons/CT.png')}></Image>
                </View>
                
            </TouchableOpacity>

            <View className = "flex flex-col items-start w-full left-3 pt-2"> 
                <Text className = "text-neutral-500 left-4 pt-0">   Next, enter your full name and email</Text>
                <Text className = "text-2xl text-neutral-700 gap-3 left-3 pt-5">    Full Name </Text> 

            </View>
            
            <TextInput style={styles.input} placeholder="Name" />

            <View className = "flex flex-col items-start w-full left-3 pt-1"> 
                <Text className = "text-2xl text-neutral-700 gap-3 left-3 pt-3">    Email </Text> 

            </View>

            <TextInput style={styles.input} placeholder="Email" />


            <TouchableOpacity className="flex flex-row items-center Abg-gray-500 rounded-2xl pt-9 py-4 px-6 justify-center bg-slate-300">
                <Text className="font-[Inter-Black]">Create Account</Text>
            </TouchableOpacity>

        </View>

        
        
    )
}