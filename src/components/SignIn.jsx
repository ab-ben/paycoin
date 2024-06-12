import React, { useState } from 'react';
import styled from 'styled-components';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your sign-in logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Container>
      <Card>
        <Title>Sign In</Title>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <label>Email:</label>
            <Input
              type="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </FormGroup>
          <FormGroup>
            <label>Password:</label>
            <Input
              type="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </FormGroup>
          <SubmitButton type="submit">Sign In</SubmitButton>
        </Form>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Card = styled.div`
  width: 300px;
  padding: 20px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;

  label {
    margin-bottom: 5px;
    color: #333; /* Optional: Customize label color */
  }
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ccc;
  outline: none;

  &:focus {
    border-color: #007bff; /* Optional: Customize focus color */
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3; /* Optional: Customize hover color */
  }
`;

export default SignIn;
