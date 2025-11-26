import './Header/Header'
import logoImg from './../placeholder.png'


function Logo(){
    
    return(
        <>
            <div id="logo">
                <div id='logo-img'>
                   <img src={logoImg} alt="" />
                </div>
                <div id='logo-text'>
                    Placeholder
                </div>
            </div>
            
        </>
    )
}

export default Logo