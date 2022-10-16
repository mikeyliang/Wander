import { View, Text, Image, TouchableOpacity } from "react-native"

import MapIcon from '../assets/icons/map-pin.svg'

import HeightIcon from '../assets/icons/line-height.svg'
import RouteIcon from '../assets/icons/route.svg'

  export class BackgroundImage {
    static image = [
      {
        name: '1.jpeg',
        image: require('../assets/image/1.jpeg'),
      },
      {
        name: '2.jpeg',
        image: require('../assets/image/2.jpeg'),
      },
      {
        name: '3.jpeg',
        image: require('../assets/image/3.jpeg'),
      },
      {
        name: '4.jpeg',
        image: require('../assets/image/4.jpeg'),
      },
      {
        name: '5.jpeg',
        image: require('../assets/image/5.jpeg'),
      },
      {
        name: '6.jpeg',
        image: require('../assets/image/6.jpeg'),
      },
      {
        name: '7.jpeg',
        image: require('../assets/image/7.jpeg'),
      },
      {
        name: '8.jpeg',
        image: require('../assets/image/8.jpeg'),
      },
      {
        name: '9.jpeg',
        image: require('../assets/image/9.jpeg'),
      },
      {
        name: '10.jpeg',
        image: require('../assets/image/10.jpeg'),
      },
      {
        name: '11.jpeg',
        image: require('../assets/image/11.jpeg'),
      },
      {
        name: '12.jpeg',
        image: require('../assets/image/12.jpeg'),
      },
      {
        name: '13.jpeg',
        image: require('../assets/image/13.jpeg'),
      },
      {
        name: '14.jpeg',
        image: require('../assets/image/14.jpeg'),
      },
    ];
    static GetImage = (name) => {
      const found = BackgroundImage.image.find(e => e.name === name);
      return found ? found.image : null;
    };
  }

export default function TrailCard(props) {

    const difficulty = props.difficulty === 3 ? "difficult" : props.difficulty === 2 ? "medium" : "easy"

    const backgroundImage = BackgroundImage.GetImage(
        `${props.imagepath}`,
      );

    return (
        <TouchableOpacity className="flex flex-col bg-white shadow-md p-6 w-[260px] justify-center items-center rounded-[30px] h-[370px] m-2">

            <View>
                <View className="absolute bottom-4 right-4 z-10 p-2 rounded-xl bg-green-400/95">
                    <Text className="text-gray-700 font-bold">{difficulty}</Text>
                </View>
                <Image style={{width: 225, height: 225, overflow: "hidden", borderRadius: 30}} source={backgroundImage}></Image>
            </View>
            <View className="flex mt-3 ml-2 flex-col items-center justify-center w-full">

                <View className="flex flex-row gap-2 justify-start items-end w-full pr-4">
                    <MapIcon height={25} width={25}></MapIcon>
                    <Text className="text-end font-semibold mr-4">{`${props.trail}`}</Text>
                </View>

                <View className="flex flex-row gap-2 mt-1 justify-evenly items-center">


                    <View className="flex flex-row justify-center items-center px-3 p-2 rounded-full bg-gray-100">
                        <RouteIcon height={15} width={15}></RouteIcon>
                        <Text className="font-semibold ml-1">{`${props.distance} miles`}</Text>

                    </View>

                    <View className="flex flex-row justify-center items-center p-2 rounded-full bg-gray-100">

                        <HeightIcon height={15} width={25}></HeightIcon>
                        <Text className="font-semibold ml-1">{`${props.elevation} feet`}</Text>

                    </View>



                </View>



            </View>


        </TouchableOpacity>
    )

}