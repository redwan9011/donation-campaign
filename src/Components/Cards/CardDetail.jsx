import PropTypes from 'prop-types';

const CardDetail = ({card}) => {
    const { image,description,title , price, text_button_color} = card || {}
    return (
        <div className="max-w-6xl mx-auto mt-8 mb-10">
          <div className="  ">
          
           <div> 
           <img className="w-full h-[70vh] mx-auto" src={image} alt="" />
           </div>
            <div className='px-8 bg-slate-900'>
                <button className={`bg-[${ text_button_color}] text-white px-4 py-2 rounded-sm`}>Donate{price}</button>
            </div>

        <h1 className='text-2xl font-bold mt-6'>{title}</h1>
        <p className='mt-4'>{description}</p>
          </div>
        </div>
    );
};
CardDetail.propTypes = {
    card: PropTypes.object
}
export default CardDetail;