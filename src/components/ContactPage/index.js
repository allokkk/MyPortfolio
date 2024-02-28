import styled from 'styled-components';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 30px;
  border-radius: 5px;
  margin-top: 40px;
  

`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 600;
  margin-top: 20px;
  color: black;
`;

const Form = styled.form`
  width: 100%;
  max-width: 500px;
  
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: black;
  margin-bottom: 8px;
  display: block;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.primary};

  border-radius: 5px;
  font-size: 16px;
  margin-bottom: 15px;
  resize: none;
  box-shadow:  20px 20px 60px #1F2634,
        -20px -20px 60px #1F2634;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.primary};
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  cursor: pointer;
  margin-bottom: 120px;
  box-shadow:  20px 20px 60px #1F2634,
        -20px -20px 60px #1F2634;
`;

const ContactPage = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_skehrms', 'template_fiiae2j', form.current, {
        publicKey: 'IVURm1b3J3_5pfZVx',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          console.log('message sent');
          alert('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send the message. Please try again.');
        },
      );
  };

  return (
    <Container>
      <Title>Contact Me</Title>
      <Form ref={form} onSubmit={sendEmail}>
        <Label>Name</Label>
        <Input type="text" name="user_name" required />
        <Label>Email</Label>
        <Input type="email" name="user_email" required />
        <Label>Message</Label>
        <TextArea name="message" rows="5" required />
        <Button type="submit">Send Message</Button>
      </Form>
    </Container>
  );
};

export default ContactPage;