// ini halaman yang muncul kalau
// user mengakses ngekosenak.com/home
// halaman ini punya daftar koskosan
// ada search
// ada pagination
// ada navbar
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Navbar2 from '../components/navbar';
// ada profile

export default function Home(){
    function mySubmit(e) {
        e.preventDefault();
        const prompt = e.target.prompt.value;
        // You can handle the prompt value here, e.g., send to API or update state
        console.log('Submitted prompt:', prompt);
    }
    return (
        <div>
        <Navbar2/>
        <div className="m10">
            <div className="g10">
                
                <div controlId="ai">
                    <h1>AI corner</h1>
                    <Form method="POST" onSubmit={mySubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>AI Prompt</Form.Label>
                            <Form.Control type="text"
                             name="prompt"
                              placeholder="Enter Prompt"
                              onChange={function(e){setUsername(e.target.value)}}
                               />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                
            </div>
        </div>
        </div>
    )
}

