import './Card.css'
import Button from '../Button/Button'

function Card(prop){
    return(
        <>
            <div id="card-container">
                <div id='icon'><img src={prop.icon} alt="" /></div>
                <p id='card-text'>{prop.text}</p>
                <Button name='Voir plus'></Button>
            </div>
        </>
    )
}

export default Card