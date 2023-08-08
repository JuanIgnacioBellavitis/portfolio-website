import React from 'react';

import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text
} from '@react-email/components';

import { Tailwind } from '@react-email/tailwind';

type ContactFormEmailProps = {
  message: string,
  senderEmail: string;
}

export default function EmailTemplate({message, senderEmail} : ContactFormEmailProps) {

  return (
    <Html>
      <Head />
      <Preview>Nuevo mensaje de tu portfolio...</Preview>
      <Tailwind>
        <Body className='bg-gray-100 text-black'>
          <Container>
            <Section className='bg-white borderBlack my-10 px-10 py-4 rounded-md'>
              <Heading className='leading-tight'>Recibiste el siguiente mensaje del formulario de Contacto.</Heading>
              <Text>{message}</Text>
              <Hr />
              <Text>Enviado de: {senderEmail}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}