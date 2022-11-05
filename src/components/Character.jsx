import './Character.css';
import React, {useState, useEffect} from 'react';
import NotFound from './NotFound';

function Character({results}) {
  var display;
  if (results) {
    display = results.map((informations) => {
      var { id, image, name, status, species, gender, origin } = informations;
      return (
        <div key={id} className="col-sm-6 col-lg-4 col-xl-3">
          <div className="card bg-dark my-4 mx-auto">
          <img className="w-100 rounded-top" src={image} alt="" />          
            <div className="card-header text-center"><h4 className='mt-1'>{name}</h4></div>
            <div className="card-body">
                <div className="informations ms-2">
                    <div className="item d-flex align-items-center">
                        <h5>Status:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{status}</h6>
                    </div>
                    <div className="item d-flex align-items-center"> 
                        <h5>Espécie:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{species}</h6>
                    </div>
                    <div className="item d-flex align-items-center"> 
                        <h5>Gênero:</h5>
                        <h6 className="mt-1 ms-3 rounded border py-1 px-2">{gender}</h6>
                    </div>
                    <div className="item d-flex align-items-center"> 
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
    display = NotFound();
  }
  return <>{display}</>;
};

export default Character;