import { View, Text, StyleSheet, Alert} from "react-native"
import { Button } from "../components/button"; 
export default function Index(){ 
    function handleMessage() { 
        console.log("TESTANDO")
        return Alert.alert("Olá, Kauã!");
    }
    return ( 
        <View style={styles.container}>
            <Text style={styles.title}>Hello, World!</Text>
        <Button title="Entrar"/>
        <Button title="Sair"/>
        
        </View>
    )
}


const styles = StyleSheet.create({ 
    container: { 
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center',
        gap:16,
    },
    title: { 
        color: "red", 
        fontSize: 24,
        fontWeight: "bold",
    }
})