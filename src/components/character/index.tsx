import { Text, View, Image } from 'react-native';
import {styles} from './style'

type props ={
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
}

export function Character({id, name, image, species, gender} : props){
    return(
        <View style={styles.container}> 
            <Text style={styles.text}>{id}</Text>
            <Image
                style={styles.image}
                source={{uri: image}}
            />
            <Text style={styles.text}>{name}</Text>
            <Text style={styles.text}>{species}</Text>
            <Text style={styles.text}>{gender}</Text>
        </View>
    )
}