import PropTypes from 'prop-types';


const Card = ({card}) => {
    
    const { image,category,title} = card || {}



    return (
        <div >
            <div className="card card-compact  bg-base-100 shadow-xl">
  <figure><img className='h-36' src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{category}</h2>
    <h1 className='text-xl font-semibold'>{title}</h1>
   
  </div>
</div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object
}
export default Card;