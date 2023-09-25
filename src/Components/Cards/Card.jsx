import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({card}) => {
    
    const { id,image,category,title,card_bg, text_button_color,category_bg} = card || {}
    
   
    return (
        <div >
                <Link to ={`/card/${id}`}>
                
                <div style={{backgroundColor:`${card_bg}`}}  className={ `card card-compact    shadow-xl`}>
  <figure><img className='h-36 w-72' src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 style={{color:`${text_button_color}`, backgroundColor:`${category_bg}`}}
     className={`card-title  px-3 py-1 rounded-sm text-sm  w-fit`}>{category}</h2>

    <h1 style={{color:`${text_button_color}`}} 
    className={`text-xl font-semibold`}>{title}</h1>
        
  </div>
</div>
                </Link>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;