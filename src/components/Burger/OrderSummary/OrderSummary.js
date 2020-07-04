import React from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button'

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
    return <li><span style ={{textTransform : 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });
    
	return (
		<Aux>
			<h3>Your Order</h3>
			<p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
    <Button btnType="Danger" clicked = {props.purchasecancelled }>Cancle</Button>
		<Button btnType="Success" clicked ={props.purchasecontinued}>Continue</Button>
		</Aux>
	);
};

export default orderSummary;
