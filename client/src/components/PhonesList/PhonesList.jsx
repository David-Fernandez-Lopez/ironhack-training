import { useEffect, useState } from "react"
import { ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import phoneService from "../../services/phones.service"



const PhonesList = () => {

    const [phones, setPhones] = useState(null)

    useEffect(() => {
        loadData()
    },[])
   
    const loadData = () => {
        
        phoneService
            .getAllPhones()
            .then(({ data }) => setPhones(data))
            .catch(err => console.log(err))
    }



    return (
       
        <article>

            <h2>Our Phones</h2>
            <hr />
            
            {phones?.map(elm => {

                return (
                    <section>
                        

                    <ListGroup.Item key={elm._id}>
                        <Link className="link" to={`/${elm._id}`}>
                            {elm.name}
                        </Link>
                    </ListGroup.Item>
                    
                    </section>
                )
            })}
            
        </article>
      
    )
}

export default PhonesList