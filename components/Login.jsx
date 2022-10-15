import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default function Login(props) {
    return(

        <View className = "flex pt-16 flex-col justify-center gap-8 items-center w-full">
        
            <Text className = " text-4xl font-bold text-neutral-800 items-center left-3">Wander</Text>

            <View className = "flex pt-1 flex-col items-start w-full left-3"> 
                <Text className = "text-3xl font-bold text-neutral-700 gap-3 left-3">    Welcome! </Text> 
                <Text className = "text-neutral-500 left-4 pt-4">   First, select your college campus</Text>
            </View>


            <TouchableOpacity className="flex flex-row justify-center items-center py-2 px-16 bg-green-400 rounded-2xl">
                <Text>Press Here</Text>
            </TouchableOpacity>
            
            {/* <TouchableOpacity className="flex flex-row gap-2 items-center Abg-gray-500 rounded-2xl py-2 justify-center">
                < width={30} height={30} className="flex justify-center items-center"/>
                <Text className="font-[Inter-Black]">Home</Text>
            </TouchableOpacity> */}

        </View>

        
        
    )
}