import './Footer.css'
import facebook from './../assets/facebook.png'
import google from './../assets/google.png'
import apple from './../assets/apple.png'



function Footer(){
    return(
        <footer id="footer-1">
            <p id='footer-logo'>PLACEHOLDER</p>
            <nav id='footer-nav'>
                <a href="#">À propos</a>
                <a href="#">Sources</a>
                <a href="#">Mentions légales</a>
            </nav>
            <div id='last-line'>
                <div id='socials'>
                    <a href=""><div className="socials"><img src={google} alt="google" /></div></a>
                    <a href=""><div className="socials"><img src={apple} alt="apple" /></div></a>
                    <a href=""><div className="socials"><img src={facebook} alt="facebook" /></div></a>
                    <p>/pixelCraft</p>
                </div>
                <div id='rights'>
                    <p id='Cyear'>&copy; 2025</p><p id='rights-text'> — Projet réalisé pour la Nuit de l’Info avec SIS Association</p>
                </div>
            </div>
        </footer>
    )

}

export default Footer