import {useState, useEffect} from 'react';
import {FlatList , Text, View, TouchableOpacity} from 'react-native';
import { Character } from '../character/index';
import { styles } from './styles';


export function Characters(){
    const [list, setList] = useState([]);
    const [prevPage, setPrevPage] = useState('');
    const [nextPage, setNextPage] = useState('');

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json =>{
          setList(json.results)
          setNextPage(json.info.next) 
          setPrevPage(json.info.prev)
        }
        );
    },[]);

    return(
        <> 
        <View style={styles.pages}>
            <TouchableOpacity  onPress={()=> handleNavigatePages(next)}> 
                <Text style={styles.buttonText}>{`>>`}</Text>
              </TouchableOpacity> 
                

            <TouchableOpacity style={styles.text} onPress={()=> handleNavigatePages(prev)} >
                <Text style={styles.buttonText} >{'<<'}</Text>
            </TouchableOpacity>
        </View>
        <FlatList
            style={styles.flatList}
            data={list}
            renderItem={({item})=>(
              <Character  
                id={item.id}
                gender={item.gender}
                image={item.image}
                name={item.name}
                species={item.species} 
                next={nextPage}
                prev={prevPage}
                />
            )}
          keyExtractor={item => item.id}
          ListEmptyComponent={() => (
            <Text >
              Ninguém por aqui ainda? Dê um refresh na page.
            </Text>
          )}
        />
        </>
    )
    function handleNavigatePages(page){

    }
}