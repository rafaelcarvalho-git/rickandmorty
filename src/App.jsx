//import logo from './logo.svg';
import './App.css';
import Character from './components/Character'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Pagination from './components/Pagination'
import SearchBar from './components/SearchBar'
import React, {useState, useEffect} from 'react'

function App() {  
  var [pageNumber, setPageNumber] = useState(1); //paginacao com valor padrao de 1
  var [search, setSearch] = useState('');
  var [fetchedData, updateFetchedData] = useState([]);
  var { info, results } = fetchedData;
  var api = 'https://rickandmortyapi.com/api/character?page=' + pageNumber + '&name=' + search; //guarda o link da api e recebe a variavel da pagina selecionada
 
  useEffect(()=>{ //espera o carregamento e carrega os dados da api, quando o pageNumber muda a api é carregada novamente
    (async function(){
        var data = await fetch(api).then(response=>response.json())
        //console.log(data.results);
        updateFetchedData(data);
    })()
  },[api])

  return (
    <div>
      <Navbar />
      <header className="App-header">
        <h1>React Rick and Morty</h1>
      </header>

      <SearchBar setPageNumber={setPageNumber} setSearch={setSearch}/>
      
      <section className='row mx-auto flex-wrap'>
        <Character results={results}/>
      </section>
      

      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      <Footer />
    </div>
  );
}

export default App;