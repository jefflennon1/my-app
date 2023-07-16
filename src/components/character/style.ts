import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container:{
        flex: 1, 
        flexDirection: 'column',
        padding: 10,
        alignItems: 'center',
        borderWidth: 3,
        marginVertical: 10,
        borderRadius: 10,
        marginHorizontal : 50
    },
    image:{
        borderRadius: 5,
        height: 150,
        width: 150, 
    },
    text:{
        fontSize: 20,
        textAlign: 'center',
        padding: 10,
        color: '#FFF'
    },
    title:{
        fontWeight: 'bold',
        color: '#fff'
    }, 
})