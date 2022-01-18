import Card from "../components/shared/Card"
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <Card>
            <h1>About this Project</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum laborum praesentium saepe impedit ratione, expedita atque dolor? Sunt repellendus provident ratione, laborum, fugit natus praesentium, obcaecati beatae cum alias modi?
            Dolor qui quod rem magni consequuntur, vero maiores fugit optio sapiente praesentium, itaque odit dicta! Fugit, ad rem, earum tempora expedita magnam nemo quas, incidunt delectus sunt fugiat veniam placeat.</p>
            <p>
                <Link to='/'>Back to home</Link>
            </p>
        </Card>
    )
}

export default AboutPage
