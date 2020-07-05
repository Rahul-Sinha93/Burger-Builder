import React, { Component } from 'react';
import Aux from '../../../hoc/Auxillary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentWillUpdate(){
        console.log('update Order summary')
    }


	render() {
		const ingredientSummary = Object.keys(this.props.ingredients).map((igKey) => {
			return (
				<li key={igKey}>
					<span style={{ textTransform: 'capitalize' }}>{igKey}</span>: {this.props.ingredients[igKey]}
				</li>
			);
		});
		return (
			<Aux>
				<h3>Your Order</h3>
				<p>A delicious burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<p>
					<strong>Total Price: {this.props.totalPrice.toFixed(2)}</strong>
				</p>
				<p>Continue to Checkout?</p>

				<Button btnType="Danger" clicked={this.props.purchasecancelled}>
					CANCLE
				</Button>
				<Button btnType="Success" clicked={this.props.purchasecontinued}>
					CONTINUE
				</Button>
			</Aux>
		);
	}
}

export default OrderSummary;
