import { useEffect, useState } from "react"
import { Container, Row, Col, Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import phoneService from "../../services/phones.service"
import { Link } from "react-router-dom"

const DetailsPage = () => {

    const [phoneDetails, setPhoneDetails] = useState(null)
    const { _id } = useParams()

    useEffect(() => {
        loadData()
    },[])
    
    const loadData = () => {
        
        phoneService
            .getPhonesById(_id)
            .then(({ data }) => setPhoneDetails(data))
            .catch(err => console.log(err))
    }
    
    // const {name, manufacturer, description, color, price, imageFileName, screen, processor, ram} =  phoneDetails


    return (
        <>
            
            <Container className="mt-5">
            {
                
                phoneDetails
                    ?

                        <Row>

                            <Col className="text-center" md={{span:3}}>                    
                                <h3>{ phoneDetails.name }</h3>
                                                           
                                <img className="phoneImg" src={`http://localhost:3000/images/${phoneDetails.imageFileName}`} alt={`${phoneDetails.name} photo`} />
                            </Col>

                            <Col md={{span:8}}>                    
                                <h4>Details:</h4>
                                <hr />
                                <p><strong> Description:</strong> {phoneDetails.description}</p>
                                <p><strong>Manufacturer:</strong> {phoneDetails.manufacturer}</p>
                                <p><strong>Color:</strong> {phoneDetails.color}</p>
                                <p><strong>Price:</strong> {phoneDetails.price}</p>
                                <p><strong>Screen Size:</strong> {phoneDetails.screen}</p>
                                <p><strong>Processor:</strong> {phoneDetails.processor}</p>
                                <p><strong>RAM:</strong> {phoneDetails.ram}</p>
                                
                            </Col>
                            <Col md={{span:4, offset:4}} className="d-grid mt-5">
                                <Link className="d-grid link" to='/'>
                                    <Button variant='dark'>Go back</Button>
                                </Link>
                            </Col>
                        </Row>
                    :
                    <h2>Cargando datos</h2>
                }
                </Container>
        </>
        
    )
}

export default DetailsPage