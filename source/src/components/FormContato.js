import React from 'react';

import {
    Button, Form, FormGroup,
    Label, Input, Container,
} from 'reactstrap';
import { Element } from 'react-scroll';

const FormContato = () => {
    return (
        <Element name="formContato">
            <Container className="mb-5">
                <div className="content-section-heading text-center">
                    <h3 className="text-secondary mb-0">Contato</h3>
                    <h2 className="mb-5">Fale Conosco</h2>
                </div>
                <Form action="https://formspree.io/contato@smarppy.com.br" method="POST">
                    <FormGroup>
                        <Label for="nome">Nome</Label>
                        <Input type="text" name="nome" id="nome" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">E-mail</Label>
                        <Input type="email" name="_replyto" id="email" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="telefone">Telefone</Label>
                        <Input type="tel" name="telefone" id="telefone" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="mensagem">Mensagem</Label>
                        <Input type="textarea" name="mensagem" id="mensagem" />
                    </FormGroup>
                    <Button color="primary">Enviar</Button>
                </Form>
            </Container>
        </Element>
    );
};

export default FormContato;
