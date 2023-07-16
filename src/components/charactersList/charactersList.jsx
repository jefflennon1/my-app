import {useState, useEffect} from 'react';
import {FlatList , Text} from 'react-native';
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
          setNextPage(json.next) 
          setPrevPage(json.prev)
        }
        );
    },[]);

    return(
        <>
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
                nextPage={next}
                prevPage={prev}
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
}