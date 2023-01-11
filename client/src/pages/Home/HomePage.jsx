import { Container, Row, Col, ListGroup } from "react-bootstrap"
import PhonesList from "../../components/PhonesList/PhonesList"
    


const HomePage = () => {


   

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{span:8, offset: 2}}>
                    <ListGroup variant="flush">
                        
                        <PhonesList />
                    </ListGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage