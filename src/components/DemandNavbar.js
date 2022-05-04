import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

const DemandNav = () => {
    return (
        <Nav justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
            <Nav.Link href="/home">Demands</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link eventKey="link-1">Offers</Nav.Link>
        </Nav.Item>
        </Nav>
    );
}

export default DemandNav;