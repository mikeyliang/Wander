import { View, Text, Image } from "react-native"

import MapIcon from '../assets/icons/map-pin.svg'

import HeightIcon from '../assets/icons/line-height.svg'

export default function TrailCard() {

    return (
        <View className="flex flex-col bg-white shadow-md p-6 w-[260px] justify-center items-center rounded-[30px]">

            <View>
                <View className="absolute bottom-4 right-4 z-10 p-2 rounded-xl bg-green-400/95">
                    <Text className="text-gray-700 font-bold">medium</Text>
                </View>
                <Image style={{width: 225, height: 225, overflow: "hidden", borderRadius: 30}} source={require('../assets/images/1.jpeg')}></Image>
            </View>
            <View className="flex mt-3 ml-2 flex-col items-center justify-center w-full">

                <View className="flex flex-row gap-2 justify-start items-end w-full pr-4">
                    <MapIcon height={25} width={25}></MapIcon>
                    <Text className="text-end font-semibold">Cascadilla Falls Trails</Text>
                </View>

                <View className="flex flex-row gap-2 mt-1 justify-evenly items-center">


                    <View className="flex flex-row justify-center items-center px-3 p-2 rounded-full bg-gray-100">

                        <Text className="font-semibold">2.34 miles</Text>

                    </View>

                    <View className="flex flex-row justify-center items-center p-2 rounded-full bg-gray-100">

                        <HeightIcon height={15} width={25}></HeightIcon>
                        <Text className="font-semibold">319 feet</Text>

                    </View>



                </View>



            </View>


        </View>
    )

}