import React, { useState } from 'react';
import PaymentCard from './PaymentCard';
import mastercard from '../assets/mastercard.png';
import Bkashlogo1 from '../assets/BKashlogo1.png';
import { FaPlus } from "react-icons/fa";
const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  const handleChange = (event) => {
    setSelectedPaymentMethod(event.target.value);
  };

  return (
    <div className="w-full space-y-3">
      <h6 className="text-sm text-neutral-700 font-medium">
        Select Payment Method
      </h6>

      <div className="w-full grid grid-cols-2 gap-10">
        <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value="mastercard"
          onChange={handleChange}
          cardholderName="MasterCard"
          cardNumber="1234 5678 9012 3456"
          cardImage={mastercard}
        />

       
               <PaymentCard
          selectedPayment={selectedPaymentMethod}
          value="Bkash"
          onChange={handleChange}
          cardholderName="BKash"
          cardNumber="017 xxxx4867"
          cardImage={Bkashlogo1}
        />

       
      </div>

      <div className="w-full flex justify-end">
          <div className="w-fit flex items-center justify-center gap-x-2 cursor-pointer text-base font-normal text-pink-700">
          <FaPlus />
          <p className='capitalize'>Add New Card</p>
          </div>
      </div>
    </div>
  );
};

export default PaymentMethod;
