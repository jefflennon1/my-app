import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        borderWidth: 3,
        margin: 10,
        borderRadius: 10,
    },
    image:{
        borderRadius: 5,
        height: 100,
        width: 100, 
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        padding: 10
    }
})