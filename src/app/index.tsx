import { View, Text, StyleSheet, Alert, Button} from "react-native"
export default function Index(){ 
    function handleMessage() { 
        return Alert.alert("Olá, Kauã!")
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Hello, World!</Text>

            <Button title="Enviar" onPress={handleMessage} />
        </View>
        
    )
}


const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
    },
    title: { 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    }
})