import { useState } from "react";
import './MenuItems.css'


function MenuItems({ itemName, description, foodImage, price, isFavorite }){
    const [favorite, setfavorite] = useState(isFavorite)

    const handleClickFavorite = ()=>{
        setfavorite(!favorite)
    }

    return (
        <div className="plat">
    <div className="item">
        <img src={foodImage} alt={itemName} />
        <div className="name-description">
        <h2>{itemName}</h2> 
        <p>{description}</p>
        </div>                
    </div>
    <div className="price-favorite">
        <div id="favorite" onClick={handleClickFavorite}>
            {favorite ? '❤️' : '🤍'}
        </div>
        <div className="price">
        <p>Price: ${price}</p>
        </div>
    </div>
    </div>
    )
        
}

export default MenuItems