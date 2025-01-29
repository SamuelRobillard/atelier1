import React from 'react';
import {Link} from "react-router-dom";


function Navbar(props) {
    return (
        <div >
            <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
    <a class="navbar-brand"><Link to="/">MonProjet</Link> </a>
    
     <a class="nav-link"> <Link to="/"> Home</Link></a>
      
      
     <a class="nav-link"> <Link to="/listAxios"> ListUser1</Link></a>
     <a class="nav-link"> <Link to="/listFetch"> ListUser2</Link></a>
     <a class="nav-link"> <Link to="/options/1"> Inscription</Link></a>
     <a class="nav-link"> <Link to="/options/2"> Modification</Link></a>
     <a class="nav-link"> <Link to="/options/3"> Suppression</Link></a>
     
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
        </div>
    );
}

export default Navbar;