import { TouchableOpacity, Text } from "react-native"
import {  styles  } from "./styles"
export function Button(props) {
    return ( 
        <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{props.title}</Text>
        </TouchableOpacity>
    )
}