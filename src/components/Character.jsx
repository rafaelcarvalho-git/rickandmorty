import './Character.css';

function Character() {
  return (     
    <div className="card text-bg-dark mb-3">
        <img className="img-fluid rounded mx-auto" src="https://rickandmortyapi.com/api/character/avatar/361.jpeg" alt="" />          
        <div className="card-header">Rick Sanchez</div>
        <div className="card-body">
            <div className="informations ms-2">
                <div className="d-flex align-items-center">
                    <h5 className="">Status:</h5>
                    <h6 className="mt-1 ms-3 rounded border py-1 px-2">Vivo</h6>
                </div>
                <div className="d-flex align-items-center"> 
                    <h5>Espécie:</h5>
                    <h6 className="mt-1 ms-3 rounded border py-1 px-2">Humano</h6>
                </div>
                <div className="d-flex align-items-center"> 
                    <h5>Gênero:</h5>
                    <h6 className="mt-1 ms-3 rounded border py-1 px-2">Masculino</h6>
                </div>
                <div className="d-flex align-items-center"> 
                    <h5>Origem:</h5>
                    <h6 className="mt-1 ms-3 rounded border py-1 px-2">Terra</h6>
                </div>
                <div className="d-flex align-items-center"> 
                    <h5>First Episode:</h5>
                    <h6 className="mt-1 ms-3 rounded border py-1 px-2">Piloto</h6>  
                </div>  
            </div> 
        </div>
    </div>     
  );
}

export default Character;