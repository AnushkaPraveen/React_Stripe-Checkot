import logo from './logo.svg';
import './App.css';
import StripeCheckout from 'react-stripe-checkout';


function App() {

function handleToken(token,addresses){
  console.log({token,addresses});
}
  return (
    <div className="App">
      <h1>React Stripe Checkout</h1>
      <StripeCheckout
        token={handleToken}
        stripeKey="Publishable key" //insert Publishable key of stripe API keys
      />
    </div>
  );
}

export default App;
