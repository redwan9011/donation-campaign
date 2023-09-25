import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({cards}) => {
    
   
    return (
      <div className='max-w-6xl mx-auto px-4 lg:px-0 mt-16 mb-10'>
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-5 '>
            {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
        </div>
      </div>
    );
};

Cards.propTypes = {
    cards: PropTypes.array
}
export default Cards;