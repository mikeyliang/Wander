import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity, TextInput } from 'react-native';
import storage from '../storage.js';

import MapIcon from '../assets/icons/map-pin.svg'

import { useState } from 'react';

import axios from 'axios';

const styles = StyleSheet.create({
    input: {
      opacity: 0.5,
      width: "83%",
      borderWidth: 1,
      borderRadius: 10,
      padding: 5,
    },
});

export default function Login({navigation}) {


    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [collegeid, setCollegeid] = useState('ef8f0795-9036-4301-b56f-48995494fcfe')
    const [collegename, setcollegename] = useState('Cornell University')

    const TryLogin = async (username, useremail, usercollegeid) => {
        try {
            const response = await axios.get(`http://localhost:3000/user/?email=${useremail.toLowerCase()}`)

            const json = response.data

            if (json) {
                storage.save({key: 'user',
        data: {'name': name,
                'email': email.toLowerCase(),
                'collegeid': collegeid
                }})

            navigation.navigate('Home')
            }

            
        } catch (error) {
            console.log("Error could not push data")
        }
         

    }

    return(

        <View className = "flex pt-16 flex-col justify-center gap-y-4 items-center w-full">
        
            <Text className = " text-4xl font-bold text-neutral-800 items-center">Wander</Text>

            <View className = "flex flex-col items-start w-full left-3 pt-6"> 
                <Text className = "text-3xl font-bold text-neutral-700 gap-3 left-3">    Welcome! </Text> 
                <Text className = "text-neutral-500 left-4 pt-6">   First, select your college campus</Text>
            </View>

            <TouchableOpacity onPress={() => {setCollegeid('ef8f0795-9036-4301-b56f-48995494fcfe'); setcollegename('Cornell Tech')}} className={`flex flex-row justify-center items-center pt-9 py-5 mx-6 border-4 border-gray-300 rounded-2xl ${collegename === 'Cornell University' ? 'bg-gray-200' : ''}`}>
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

            <TouchableOpacity onPress={() => {setCollegeid('03d9f5a7-d341-4ae9-8a30-59249d90e970');  setcollegename('Cornell Tech')} } className={`flex flex-row justify-center items-center pt-9 py-5 mx-6 border-4 border-gray-300 rounded-2xl ${collegename === 'Cornell Tech' ? 'bg-gray-200' : ''}`}>
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
            
            <TextInput style={styles.input} placeholder="Name" onChangeText={text => setName(text)}/>

            <View className = "flex flex-col items-start w-full left-3 pt-1"> 
                <Text className = "text-2xl text-neutral-700 gap-3 left-3 pt-3">    Email </Text> 

            </View>

            <TextInput style={styles.input} placeholder="Email" onChangeText={text => setEmail(text)}/>


            <TouchableOpacity className="flex flex-row items-center Abg-gray-500 rounded-2xl pt-9 py-4 px-6 justify-center bg-slate-300" onPress={ () => TryLogin(name, email, collegeid)}>
                <Text className="font-[Inter-Black]">Create Account</Text>
            </TouchableOpacity>

        </View>

        
        
    )
}