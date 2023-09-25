import PropTypes from 'prop-types';
import swal from 'sweetalert';

const CardDetail = ({card}) => {
    const { image,description,title , price, text_button_color} = card || {}

    const handleDonate = () =>{

        const donationArrray = [];

        const donationItems = JSON.parse(localStorage.getItem('donation'))

        if(!donationItems){
            donationArrray.push(card)
            localStorage.setItem('donation', JSON.stringify(donationArrray) )
        }
        else{
            donationArrray.push(...donationItems, card)
            localStorage.setItem('donation', JSON.stringify(donationArrray) )

        }

        swal("Thank you!", "For your Donation", "success");
    }

    return (
        <div className="max-w-6xl mx-auto mt-8 mb-10 px-5 md:px-8 lg:px-0">
          <div >
          
           <div>  
           <img className="w-full h-[70vh] mx-auto" src={image} alt="" />
         
           </div>
           <div className='px-8 py-6 bg-black  bg-opacity-50 relative bottom-[89px]'>
                <button  onClick={handleDonate}  style={{backgroundColor:`${text_button_color}`}}
                 className={` text-white px-4 py-2 rounded-sm`}>Donate{price}</button>
            </div>
          

        <h1 className='text-2xl font-bold -mt-12'>{title}</h1>
        <p className='mt-4'>{description}</p>
          </div>
        </div>
    );
};
CardDetail.propTypes = {
    card: PropTypes.object
}
export default CardDetail;