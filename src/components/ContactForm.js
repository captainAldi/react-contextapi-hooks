import React, { useState, useContext } from "react";
import { Segment, Form, Input, Button } from "semantic-ui-react";
import _ from "lodash";
import { ContactContext } from '../contexts/ContactContext'

export default function ContactForm() {
  // const name = useFormInput("");
  // const email = useFormInput("");
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(ContactContext);

  //for name and email

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = e => {
    e.preventDefault()
    dispatch({
      type: "ADD_CONTACT",
      payload: {
        id: _.uniqueId(10),
        name: name,
        email: email
      }
    });

    console.log(name + email)
    // Reset Form
    setEmail('')
    setName('')
  };

  return (
    <Segment basic>
      <Form onSubmit={onSubmit}>
        <Form.Group widths="3">
          <Form.Field width={6}>
            <Input
              placeholder="Enter Name"
              required
              value={name}
              onChange={e => setName(e.target.value) }
            />
          </Form.Field>
          <Form.Field width={6}>
            <Input
              placeholder="Enter Email"
              type="email"
              value={email}
              onChange={ e => setEmail(e.target.value)}
            />
          </Form.Field>
          <Form.Field width={4}>
            <Button fluid primary>
              New Contact
            </Button>
          </Form.Field>
        </Form.Group>
      </Form>
    </Segment>
  );
}
