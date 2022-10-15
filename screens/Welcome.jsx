


export default function Welcome() {
    return (
        <View style={styles.container}>
            <Nav />
            <Text>Open up App.js to start working on your app!</Text>
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });