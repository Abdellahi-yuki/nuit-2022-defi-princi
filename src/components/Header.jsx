import './Header.css'
import Logo from './Logo'
import Button from './Button'
import { Link } from 'react-router-dom'


function Header(){

    return(<>
        <header id='Header-1'>
            
            <nav id='navbar'>
                <Logo/>
                <div id='padding-1'></div>
                <Link to="/login"><Button name="Login"/></Link>
                <Link to="/signup"><Button name="Signup"/></Link>
            </nav>
            <div id=''></div>

        </header>
        </>
    )
}
export default Header