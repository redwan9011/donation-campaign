import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import CardDetail from "./CardDetail";


const CardDetails = () => {
    const [cards , setCards] = useState()
    const {id} = useParams()

    const cardsArray = useLoaderData()
    // console.log(id, cardsArray)

    useEffect( () =>{
        const findCard = cardsArray?.find(card => card.id === id)
        
       setCards(findCard)
       
    } ,[id, cardsArray])
    
  
    return (
        <div>
         <CardDetail card={cards}></CardDetail>
        </div>
    );
};

export default CardDetails;