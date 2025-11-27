import Header from '../../components/Header/Header'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import settingsIcon from '../../assets/settings.png'
import trophyIcon from '../../assets/trophy.png'
import mapIcon from '../../assets/map.png'

import './Home.css'



function Home(){
    return(
        <>
            <Header/>
            <p id='hero'>Un quiz simple et ludique pour mieux comprendre la santé sexuelle, lever les idées reçues et apprendre en s’amusant</p>
            <Link to='/login'><button id='start-btn'>Commencer</button></Link>
            <div id="cards">
                <Card icon={trophyIcon} text='Découvrez l’objectif de ce quiz interactif et apprenez comment il vous accompagne, étape après étape, pour renforcer vos connaissances sur la santé sexuelle de manière simple, ludique et fiable.'/>
                <Card icon={settingsIcon} text='Explorez les informations clés liées à la santé sexuelle : prévention, idées reçues, bonnes pratiques et réponses aux questions que beaucoup n’osent pas poser.'/>
                <Card icon={mapIcon} text='Accédez à une sélection de ressources officielles, vérifiées et mises à jour, ainsi qu’aux organismes partenaires engagés dans la prévention et l’éducation à la santé sexuelle.'/>
            </div>
            <Footer/>
            
        </>
    )
}

export default Home