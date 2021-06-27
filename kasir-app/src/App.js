import { Row, Col, Container } from "react-bootstrap";
import NavbarComponent from "./components/NavbarComponent";
import ListCategories from "./components/ListCategories";
import Hasil from "./components/Hasil";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <Container fluid>
        <div className="mt-3">
          <Row>
            <ListCategories />
            <Col>
              <h4>Daftar Produk</h4>
              <hr />
            </Col>
            <Hasil />
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default App;
