import React from 'react';
import { FaUser, FaCreditCard, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

const PaymentScreen4 = () => {
  return (
    <div style={{
      backgroundColor: '#1A0C25',
      color: '#e2d6f9',
      fontFamily: 'Raleway, sans-serif',
      padding: '40px',
      minHeight: '100vh',
    }}>
      {/* Steps Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '150px',
        flexWrap: 'wrap', // Ensure steps wrap on smaller screens
      }}>
        {['Fill personal details', 'Payment details', 'Confirmation'].map((step, index) => (
          <div key={index} style={{ textAlign: 'center', margin: '0 20px' }}>
            <div style={{
              fontSize: '48px',
              color: '#ff79c6',
            }}>{index + 1}</div>
            <div style={{
              fontSize: '24px',
              color: '#ff79c6',
            }}>
              {index === 0 ? <FaUser /> : index === 1 ? <FaCreditCard /> : <FaCheckCircle />}
            </div>
            <div style={{ fontSize: '12px' }}>{step}</div>
          </div>
        ))}
      </div>

      {/* Confirmation Message */}
      <div style={{
        width: '90%', // Make it responsive
        maxWidth: '600px', // Limit max width
        backgroundColor: '#564A5957',
        padding: '40px',
        borderRadius: '10px',
        height: '500px',
        margin: '0 auto', // Center align
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '12px', marginBottom: '40px' }}>Thank You For Your Purchase</div>

        {/* Loading Circle */}
        <div style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          backgroundColor: '#e2d6f9',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '20px',
        }}>
          <div style={{
            width: '10px',
            height: '10px',
            backgroundColor: '#564A59',
            borderRadius: '50%',
          }}></div>
        </div>

        <div style={{ fontSize: '20px', marginBottom: '30px', marginTop: '40px' }}>Order #123RGR231567Y Confirmed</div>

        {/* Track Order Button */}
        <button style={{
          backgroundColor: '#ff79c6',
          borderColor: '#B7407DB2',
          borderRadius: '5px',
          color: '#F6E8FB',
          padding: '10px 20px',
          fontSize: '16px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '10px',
          cursor: 'pointer',
          fontFamily: 'Manrope, sans-serif', // Change button font to Manrope
        }}>
          Track Order <FaArrowRight style={{ fontSize: '12px' }} />
        </button>

        <div style={{ fontSize: '12px', color: '#F6E8FB' }}>Generate Receipt</div>
      </div>
    </div>
  );
};

export default PaymentScreen4;
