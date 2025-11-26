import './Button.css'


function Button(prop){

    return(
        <button id="Button">
            {prop.name}
        </button>
    )
}

export default Button