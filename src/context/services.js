import React from 'react';
import { FaShippingFast } from 'react-icons/fa';
import { RiExchangeDollarLine } from 'react-icons/ri';
import { FiPhoneCall } from 'react-icons/fi';

export const Services = [
  {
    name: 'Free Shipping',
    desc: 'For on order over $199.00',
    icon: <FaShippingFast />,
  },
  {
    name: 'RETURN EXCHANGE',
    desc: '100% money back guarantee',
    icon: <RiExchangeDollarLine />,
  },
  {
    name: 'Quality Support',
    desc: 'Alway online feedback 24/7',
    icon: <FiPhoneCall />,
  },
];
