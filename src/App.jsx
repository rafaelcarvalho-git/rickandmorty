//import logo from './logo.svg';
import './App.css';
import Character from './components/Character'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import React, {useState, useEffect} from 'react'

function App() {



    var [pageNumber, setPageNumber] = useState(1); //paginacao com valor padrao de 1
    var [fetchedData, updateFetchedData] = useState([]);
    var { info, results } = fetchedData;
    console.log(results);
    var api = 'https://rickandmortyapi.com/api/character?page=' + pageNumber; //guarda o link da api e recebe a variavel da pagina selecionada
   

    useEffect(()=>{ //espera o carregamento e carrega os dados da api, quando o pageNumber muda a api é carregada novamente
      (async function(){
          var data = await fetch(api).then(response=>response.json())
          console.log(data.results);
          updateFetchedData(data);
      })()

  },[api])


  
  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1>React Rick and Morty</h1>
      </header>
      
      <section className='row mx-auto flex-wrap'>
        <Character />
      </section>
      

      
      <Footer />
    </div>
  );
}

export default App;