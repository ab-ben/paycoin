import React from 'react';
import styled from 'styled-components';

const Packages = () => {
  return (
    <Container>
      <Package>
        <Title>Free Package</Title>
        <Features>
          <Feature>Supported Cryptocurrencies:</Feature>
          <ul>
            <li>Bitcoin</li>
            <li>Ethereum</li>
            <li>Litecoin</li>
            <li>Bitcoin Cash</li>
          </ul>
          <Feature>Integration Options:</Feature>
          <p>Basic payment buttons and forms for easy integration.</p>
          <p>Standard integration with popular e-commerce platforms like WooCommerce, Shopify, etc.</p>
          <Feature>Security Features:</Feature>
          <p>SSL encryption for secure payment transactions.</p>
          <p>Basic fraud protection measures.</p>
          <Feature>Customer Support:</Feature>
          <p>Community support forums and documentation for self-help.</p>
        </Features>
      </Package>

      <Package>
        <Title>Premium Package</Title>
        <Features>
          <Feature>Additional Cryptocurrencies:</Feature>
          <ul>
            <li>Support for over 100 cryptocurrencies including USD Coin and other altcoins.</li>
          </ul>
          <Feature>Advanced Integration Options:</Feature>
          <p>Advanced integration options for custom websites and e-commerce platforms.</p>
          <p>Customizable payment forms and checkout processes.</p>
          <Feature>Enhanced Security:</Feature>
          <p>Two-factor authentication (2FA) for enhanced security.</p>
          <p>Advanced fraud protection and compliance tools.</p>
          <p>IP whitelist to restrict access to authorized users.</p>
          <Feature>Priority Customer Support:</Feature>
          <p>Dedicated customer support with phone and email assistance.</p>
          <p>Priority support with a dedicated account manager.</p>
          <Feature>Customization and Reporting:</Feature>
          <p>Advanced payment tracking and reporting features.</p>
          <p>Customizable invoices and payment notifications.</p>
          <p>Multi-language support for international users.</p>
        </Features>
      </Package>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
`;

const Package = styled.div`
  margin: 0 20px;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
  width: 320px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const Features = styled.div`
  margin-top: 20px;
`;

const Feature = styled.h3`
  margin-bottom: 10px;
`;

export default Packages;
 