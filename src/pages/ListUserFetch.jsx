import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
function ListUserFetch(props) {
    const [tabUsers, setTabUsers] = useState([])

    useEffect(() =>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => setTabUsers(data))
        .catch(err => console.log(err))

    },[])


    return (
        <div>
          <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">City</th>
      <th scope="col">Longitude</th>
    </tr>
  </thead>
  <tbody>
    {/* le i increment automatiquement 
    cela permet de ne jamais avoir de ligne dupliquer*/}
    {
        tabUsers.map((ligne, i) => ( 
        <tr key={i}>
            <th scope="row">{ligne.id}</th>
            <td>{ligne.name}</td>
            <td>{ligne.email}</td>
            <td>{ligne.address.city}</td>
            <td>{ligne.address.geo.lng}</td>
          </tr>)

    )
    }
    
  </tbody>
</table>
            
        </div>
    );
}

export default ListUserFetch;