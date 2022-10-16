import { View, Text, Image } from "react-native"


export default function ChallengeCard() {

    return (

        <View className="flex flex-row justify-between items-start bg-white p-2 rounded-2xl h-[100px] w-[325px] shadow-lg">
            <View className="flex flex-col justify-center items-center mx-4">
                <Text className="mt-4 text-base font-extrabold text-center">Complete Cayuga Trail</Text>
                <View className="mr-16 p-2 mt-1 bg-white shadow-sm rounded-xl">
                    <Text className="font-bold">By Oct 21st</Text>
                </View>
                

            </View>

            <Image style={{width: 80, height: 80, borderRadius: 25}} source={require('../assets/image/10.jpeg')}></Image>
            

        </View>


    )


}