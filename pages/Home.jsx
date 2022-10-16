
import { View, Text, ScrollView } from "react-native";
import Nav from "../components/Nav";

import TrailCard from "../components/TrailCard";

import Logo from '../assets/icons/logo.svg'

import SchoolIcon from '../assets/icons/school.svg'

export default function Home() {


    return (

        <View className="flex flex-col justify-start items-center h-full w-full">
            

            <Nav />



            <View className="flex flex-row justify-between mt-14 mb-6 items-center w-full px-8">
                <View className="flex flex-row gap-2 justify-center items-center">
                    <SchoolIcon width={20} height={20}/>
                    <Text className="font-semibold text-base">Cornell University</Text>
                </View>
                <View className="p-3 bg-white flex justify-center items-center rounded-full shadow-md">
                    <Logo width={20} height={20}/>
                </View>
            </View>

            <View className="flex flex-col items-start justify-center">

                <Text className="w-full px-4 text-2xl font-extrabold text-gray-700">Recommended Sites</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="px-4 py-2 h-[100px]">
                    <TrailCard />
                    <TrailCard/>
                </ScrollView>

                <Text className="w-full px-4 text-2xl font-extrabold text-gray-700">Challenges</Text>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="px-4 py-2">
                    <Text> hiiiii</Text>
                </ScrollView>

            </View>


            
            
    
        </View>
        
    )

}