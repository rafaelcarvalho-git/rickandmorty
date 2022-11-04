import React, {useState, useEffect} from 'react';

function Api(){
 
    var [pageNumber, setPageNumber] = useState(1);
    var [fetchedData, updateFetchedData] = useState([]);
    var { info, results } = fetchedData;
    var api = 'https://rickandmortyapi.com/api/character?page=' + pageNumber; 

    useEffect(()=>{ 
    (async function(){
        var data = await fetch(api).then(response=>response.json())
        console.log(data.results);
        updateFetchedData(data);
    })()

    },[api])
 
}

export default Api;