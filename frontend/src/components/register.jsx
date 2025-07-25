
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Register0(){
    return (
        <div className="m10">

    
    <Form method="POST" action="/register">
      <Form.Group className="mb-3" controlId="fullnameGroup">
        <Form.Label>Fullname</Form.Label>
        <Form.Control type="text" name="fullname" placeholder="Fullname" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="usernameGroup">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" placeholder="Username" />
      </Form.Group>
        <Form.Group className="mb-3" controlId="emailGroup">
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" name="email" placeholder="Email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="passwordGroup">
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" name="password" placeholder="Password" />
        </Form.Group>
    <Form.Group className="mb-3" controlId="phoneNumberGroup">
      <Form.Label>Phone Number</Form.Label>
        <Form.Control type="text" name="phoneNumber" placeholder="Phone Number" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="birthdateGroup">
        <Form.Label>Birthdate</Form.Label>
        <Form.Control type="date" name="birthdate" placeholder="Birthdate" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="jobGroup">
        <Form.Label>Job</Form.Label>
        <Form.Control type="text" name="job" placeholder="Job" />
    </Form.Group>
    <Form.Group controlId="imageGroup" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    )
}