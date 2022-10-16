import { Button, StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

import HomeIcon from '../assets/icons/home.svg'
import MapIcon from '../assets/icons/map-pin.svg'
import UserIcon from '../assets/icons/user-circle.svg'

import Logo from '../assets/icons/logo.svg'

import { useFonts } from 'expo-font';

export default function Nav(props) {

    
    return (
        <View className="absolute bottom-0 bg-white w-full pb-6 pt-4 rounded-full">
            <View className="flex flex-row justify-between px-12 items-center">
                <TouchableOpacity className={`flex flex-col justify-center items-center`} style={{}}>
                    <HomeIcon width={25} height={25} style={{color: props.section === 'Home' ? '#16a34a': '#6b7280'}}/>
                    <Text className={`font-[Inter-Bold] text-xs text-gray-500 ${props.section === 'Home' ? 'text-green-600' : ''}`}>Home</Text>
                </TouchableOpacity>

                <TouchableOpacity className={`flex flex-col justify-center items-center`}>
                    <MapIcon width={25} height={25} style={{color: props.section === 'Map' ? '#16a34a': '#6b7280'}}/>
                    <Text className="font-[Inter-Bold] text-xs text-gray-500">Map</Text>
                </TouchableOpacity>

                <TouchableOpacity className={`flex flex-col justify-center items-center`}>
                    <UserIcon width={25} height={25} style={{color: props.section === 'Profile' ? '#16a34a': '#6b7280'}}/>
                    <Text className="font-[Inter-Bold] text-xs text-gray-500">Profile</Text>
                </TouchableOpacity>

            
            </View>
            
        </View>
    )
}