import React from 'react'
import './SubTotal.css'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../../StateProvider';
import { getBasketTotal } from '../../reducer';
import { useHistory } from 'react-router-dom';

function SubTotal() {
    const [{basket}, dispatch] = useStateValue();
    const history = useHistory();
    return (
        <div className="subtotal">
           <CurrencyFormat renderText={(value) => (
               <>
               <p>
                   SubTotal ({basket.length} items): <strong>{value}</strong>
               </p>
               <small className="subtotal__gift">
                <input type="checkBox" /> This order contains a gift
               </small>
               </>
           )}
           decimalScale={2}
           value={getBasketTotal(basket)}
           displayType={"text"}
           thousandSeparator={true}
           prefix={"$"}
           /> 
           <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default SubTotal;
