import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const { id, image,category,title ,card_bg, price,text_button_color,category_bg } = donation || {}
  

    return (
        <div>
            <div style={{backgroundColor:`${card_bg}`}} className="card card-side  shadow-xl md:flex-col lg:flex-row ">
            <figure><img className='h-48 w-44 md:w-96 md:h-52 lg:w-72 lg:h-52 ' src={image} alt="Movie"/></figure>

           <div className='p-3 lg:p-6'>
           <div className='space-y-1 mb-4'>
           <p style={{color:`${text_button_color}`, backgroundColor:`${category_bg}`}} 
           className="w-fit px-3 py-1 rounded-sm">{category}</p>
           
            <h1  style={{color:`${text_button_color}`}} 
            className="font-semibold ">{title}</h1>
            <h4 style={{color:`${text_button_color}`}}>{price}</h4>
           </div>

           <Link  to ={`/card/${id}`}>
           <button style={{backgroundColor:`${text_button_color}`}} className='btn text-white text-[10px] md:text-md'>View Details</button>
           </Link>
           </div>
 
            </div>

         
        </div>
    );
};


DonationCard.propTypes = {
    donation: PropTypes.object
}

export default DonationCard;