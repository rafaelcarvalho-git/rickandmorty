import './Character.css'
import React, {useState, useEffect} from 'react';

function Character() {
  var [pageNumber, setPageNumber] = useState(1); //paginacao com valor padrao de 1
  var [fetchedData, updateFetchedData] = useState([]);
  var { info, results } = fetchedData;
  var api = 'https://rickandmortyapi.com/api/character?page=' + pageNumber; //guarda o link da api e recebe a variavel da pagina selecionada
 
  useEffect(()=>{ //espera o carregamento e carrega os dados da api, quando o pageNumber muda a api é carregada novamente
    (async function(){
        var data = await fetch(api).then(response=>response.json())
        //console.log(data.results);
        updateFetchedData(data);
    })()
  },[api])

  var display;

  if (results) {
    display = results.map((informations) => {
      var { id, image, name, status, species, gender, origin } = informations;

      return (
        <div className="col-3">
          <div className="card text-bg-dark mb-4 mx-auto">
          <img className="w-100 rounded-top" src={image} alt="" />          
            <div className="card-header text-center"><h4 className='mt-1'>{name}</h4></div>
            <div className="card-body">
                <div className="informations ms-2">
                    <div className="d-flex align-items-center">
                        <h5 className="">Status:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{status}</h6>
                    </div>
                    <div className="d-flex align-items-center"> 
                        <h5>Espécie:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{species}</h6>
                    </div>
                    <div className="d-flex align-items-center"> 
                        <h5>Gênero:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{gender}</h6>
                    </div>
                    <div className="d-flex align-items-center"> 
                        <h5>Origem:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{origin.name}</h6>
                    </div>
                </div> 
            </div>
          </div> 
        </div>
   

      );
    });
  } else {
    display = "No Characters Found :/";
  }
  return <>{display}</>;
};

export default Character;