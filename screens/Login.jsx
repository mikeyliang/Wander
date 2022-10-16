import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import MapIcon from '../assets/icons/map-pin.svg'

import { useState } from 'react';

import axios from 'axios';

import Logo from '../assets/icons/logo.svg'

const styles = StyleSheet.create({
    input: {
      opacity: 0.75,
      width: "80%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      height: 40
    },
});

export default function Login({navigation}) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [collegeid, setCollegeid] = useState('ef8f0795-9036-4301-b56f-48995494fcfe')
    const [collegename, setcollegename] = useState('Cornell University')


    return(

        <View className = "flex pt-16 flex-col justify-center gap-y-4 items-center w-full">
        
            <View className="absolute top-20 right-12">
                <View className="p-3 bg-white flex justify-center items-center rounded-full shadow-md">
                    <Logo width={20} height={20}/>
                </View>
            </View>

            <View className = "flex flex-col items-start w-full left-3 pt-6 mb-8"> 
                <Text className = "text-3xl font-extrabold text-neutral-700 gap-3 left-3">   Welcome! </Text> 
                <Text className = "text-gray-600 font-bold left-4 pt-2">   Select a College Campus:</Text>
            </View>

            <TouchableOpacity onPress={() => {setCollegeid('ef8f0795-9036-4301-b56f-48995494fcfe'); setcollegename('Cornell University')}} className={`flex flex-row justify-center items-center pt-9 py-5 mx-6 px-8 border-4 w-[300px] border-gray-300 rounded-2xl ${collegename === 'Cornell University' ? 'bg-gray-200' : ''}`}>
                <View className="flex flex-col justify-between items-start">
                    <View className='flex flex-col items-start'>
                        <Text className="w-full flex text-center font-black">Cornell University</Text>
                        <View className="flex flex-row gap-x-2 justify-center items-center mt-1">
                            <MapIcon width={25} height={25}/>
                            <Text className="font-semibold">Ithaca, NY 14850</Text>
                        </View>
                    </View>
                </View>
                <View className="ml-6">
                    <Image style={{width: 50, height: 50, overflow: "hidden"}} source={require('../assets/icons/CU.png')}></Image>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {setCollegeid('03d9f5a7-d341-4ae9-8a30-59249d90e970');  setcollegename('Cornell Tech')} } className={`flex flex-row justify-center items-center pt-9 py-5 mx-6 px-8 border-4 w-[300px] border-gray-300 rounded-2xl ${collegename === 'Cornell Tech' ? 'bg-gray-200' : ''}`}>
                
                <View className="flex flex-col justify-center items-start">
                    <View className='flex flex-col items-start'>
                        <Text className="w-full flex text-center font-black">Cornell Tech</Text>
                        <View className="flex flex-row gap-x-2 justify-center items-center mt-1">
                            <MapIcon width={25} height={25}/>
                            <Text className="font-semibold">New York, NY 14850</Text>
                        </View>
                    </View>
                </View>
                <View className="ml-4">
                    <Image style={{width: 50, height: 50, overflow: "hidden"}} source={require('../assets/icons/CT.png')}></Image>
                </View>
                
                
            </TouchableOpacity>

            <View className = "flex flex-col items-start w-full left-3 pt-2 ml-8"> 
                <Text className = "text-2xl font-extrabold text-neutral-700 gap-3 left-3 mt-4">   Link an Account</Text> 
                <Text className = "text-gray-600 font-bold left-4 pt-2">   Enter user information:</Text>
            </View>

            <View className = "flex flex-col items-start w-full left-3 pt-2 "> 
         
                <Text className = "text-lg font-black text-neutral-700 gap-3 left-6 pt-3">    Name: </Text> 

            </View>
            
            <TextInput style={styles.input} placeholder="Name" onChangeText={text => setName(text)}/>

            <View className = "flex flex-col items-start w-full left-3 pt-1"> 
                <Text className = "text-lg font-black text-neutral-700 gap-3 left-6 pt-3 ">    Email: </Text> 

            </View>

            <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)} className="mb-4"/>


            <TouchableOpacity className="flex flex-row items-center rounded-2xl  py-4 mx-8 justify-center bg-[#3d7847]" onPress={ () => navigation.navigate('Home')}>
                <Text className="font-[Inter-Black] w-full text-center text-white ">Create Account</Text>
            </TouchableOpacity>

        </View>

        
        
    )
}