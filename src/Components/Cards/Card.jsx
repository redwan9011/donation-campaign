import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Card = ({card}) => {
    
    const { id,image,category,title,} = card || {}
    
   
    return (
        <div >
                <Link to ={`/card/${id}`}>
                
                <div  className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-36' src={image} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <h1 className='text-xl font-semibold'>{title}</h1>
        
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