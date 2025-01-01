import './header.css'
import { Link } from 'react-router-dom'

function Header(){
    return(
        <header>
            <Link to='/' className='logo'>Prime flix</Link>
            <Link to='Favoritos' className='favoritos'>Meus Filmes</Link>
        
        </header>
    )
}

export default Header;