import PropTypes from 'prop-types';
import clock from '../../assets/images/clock.svg'
import fire from '../../assets/images/fire.svg'

const Card = ({ card, handleAddToCook }) => {

    if (!card) {
        return;
    }

    const { recipe_name, short_description, ingredients, preparing_time, calories, recipe_image } = card;
    return (
        <div className="text-start">
            <div className="card w-96 bg-base-100 shadow-xl min-h-full">
                <figure><img src={recipe_image} alt="" className='rounded-xl'/></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className='text-sm text-[#878787]'>{short_description}</p>
                    <hr />
                    <p>Ingredients: {ingredients.length}</p>
                    <ul className='list-disc text-[#878787]'>
                        {ingredients.map((ingredient, idx) => (<li key={idx}>{ingredient}</li>))}
                    </ul>
                    <hr />
                   <div className='flex flex-col lg:flex-row gap-2'>
                   <img src={clock} alt="" className='w-[24px] h-[24px]' /> {preparing_time}
                    <img src={fire} alt="" className='w-[24px] h-[24px]' /> {calories}
                   </div>
                    <div className="card-actions">
                        <button onClick={() => handleAddToCook(card)} className="btn btn-accent rounded-full">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleAddToCook: PropTypes.func
}

export default Card;