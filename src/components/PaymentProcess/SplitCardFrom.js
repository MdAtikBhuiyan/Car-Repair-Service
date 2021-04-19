
import React, { useMemo, useState } from "react";
import {
    useStripe,
    useElements,
    CardNumberElement,
    CardCvcElement,
    CardExpiryElement
} from "@stripe/react-stripe-js";
import ConfirmationModal from "./ConfirmationModal";


const useOptions = () => {
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize: '16px',
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        []
    );

    return options;
};

const SplitCardFrom = ({ handlePayment, setBookIn }) => {

    const stripe = useStripe();
    const elements = useElements();
    const options = useOptions();

    const [paymentError, setPaymentError] = useState(null)
    const [paymentSuccess, setPaymentSuccess] = useState(null)

    const handleSubmit = async event => {

        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement)
        });
        console.log("[PaymentMethod]", payload);

        if (payload.error) {
            console.log('error', payload.error.message);

            setPaymentError(payload?.error.message)
        }
        else {
            console.log('done', payload?.paymentMethod.id);

            const id = payload?.paymentMethod.id
            const card = payload?.paymentMethod?.card?.brand;
            console.log(card);
            setPaymentError('');
            handlePayment(id,card);
            openModal();
        }
    };


    // modal 

    const [modalIsOpen, setIsOpen] = useState(false);
    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
        setBookIn(true);
    }
    return (

        <>
            <form onSubmit={handleSubmit} className='payment-form'>
                <label>
                    Card number
        <CardNumberElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label>
                    Expiration date
        <CardExpiryElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                <label>
                    CVC
        <CardCvcElement
                        options={options}
                        onReady={() => {
                            console.log("CardNumberElement [ready]");
                        }}
                        onChange={event => {
                            console.log("CardNumberElement [change]", event);
                        }}
                        onBlur={() => {
                            console.log("CardNumberElement [blur]");
                        }}
                        onFocus={() => {
                            console.log("CardNumberElement [focus]");
                        }}
                    />
                </label>
                <br />
                {
                    paymentError && <p className="text-danger mb-3 font-weight-bold">{paymentError}</p>
                }
                <button type="submit" className='btn btn-brand' disabled={!stripe}>
                    Pay
                </button>
            </form>

            <ConfirmationModal modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </>

    );
};

export default SplitCardFrom;
