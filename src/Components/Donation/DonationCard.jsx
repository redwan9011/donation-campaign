import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({donation}) => {
    const { id, image,category,title , price,text_button_color,category_bg } = donation || {}
  

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-72 h-48' src={image} alt="Movie"/></figure>

           <div className='p-6'>
           <div className='space-y-1 mb-4'>
           <p className={`bg-[${category_bg}] w-fit px-3 py-1 rounded-sm text-[${text_button_color}]`}>{category}</p>
           
            <h1 className={``}>{title}</h1>
            <h4>{price}</h4>
           </div>

           <Link  to ={`/card/${id}`}>
           <button className='btn'>View Details</button>
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