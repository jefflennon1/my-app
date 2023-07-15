import {Text, View} from 'react-native';
import { style } from './style';
import { Characters } from '../components/characters/characters';  

export function Index(){
    return (
        <View style={style.container}>
            <Text>Aqui jaz um app</Text>
            <Characters/>
        </View>  
    )
}