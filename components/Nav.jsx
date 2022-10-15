import { StyleSheet, Text, View } from 'react-native';

import Logo from '../assets/icons/logo.svg'

export default function Nav() {
    
    const text = 'hi'

    return (
        <View className="absolute">
            <Text>{text}</Text>
            <Logo width={120} height={120} />
        </View>
    )
}