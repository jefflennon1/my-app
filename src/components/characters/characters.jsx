import {useState, useEffect} from 'react';
import { FlatList , Text} from 'react-native';

export function Characters(){
    const [list, setList] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
        .then(response => response.json())
        .then(json => setList(json.results));

        console.log("list >>" + list);
    },[]);

    return(
        <>
        <FlatList
            data={list}
            renderItem={({item})=>(
                <Text >{item.name}</Text>
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