import React from 'react'
import Form from 'react'

class LoginForm extends React.Component {

    state = {
        username: "",
        password: ""
    }

    changeHandler = (event) => {
        this.setState({ [event.target.name]: event.target.value})
    }

    render() {
        return (
            <Form onSubmit={this.submitHandler}>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Username</Form.Label>
                <Form.Control type="username" placeholder="Enter Username" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        )
    }
}

export default LoginForm