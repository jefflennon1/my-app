import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import {styles} from './style'

type props ={
    id: number;
    name: string;
    image: string;
    species: string;
    gender: string;
    next: string; 
}

export function Character({id, name, image, species, gender} : props){
    return(
        <>
            
            <View style={styles.container}> 
                <Text style={styles.text}>{id}</Text>
                <Image
                    style={styles.image}
                    source={{uri: image}}
                />
                <Text style={styles.title}>NAME: </Text>
                <Text style={styles.text}>{name}</Text>

                <Text style={styles.title}>SPECIES:</Text>
                <Text style={styles.text}>{species}</Text>

                <Text style={styles.title}>GENDER:</Text>
                <Text style={styles.text}>{gender}</Text>
            </View>
        </>
    )
}