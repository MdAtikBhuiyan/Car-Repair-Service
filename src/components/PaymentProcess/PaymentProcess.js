import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import SplitCardFrom from './SplitCardFrom';
import './PaymentProcess.css';

const stripePromise = loadStripe('pk_test_51Ie13xIC4ZzrGk5WK54KNlYC2VJ6OEr7cghgQTyMDh7FpXtZkRmGnmYJnMdAdYx25MXXqNW64pfNEK887jbADOZ60078KfchK3');

const PaymentProcess = ({handlePayment,setBookIn}) => {
    return (
        <Elements stripe={stripePromise}>
           <SplitCardFrom handlePayment={handlePayment} setBookIn={setBookIn} />
        </Elements>
    );
};

export default PaymentProcess;