import "bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";
import BacgroundColor from "./components/Background";
import Header from "./components/BackHeader";
import "./App.css";

// The four component as instructed are rendered here and place appropriately within the Card
// Bacgroundcolo and Header are component created for styling and semantics purpose only.
/* in line 21 - 23, the Card.Img react-bootstrap component is not used rather the Image
 component created in Image.js is used since i found it easier to implement */

function App() {
  const name = "Martin";

  return (
    <div>
      <BacgroundColor />
      <Header />
      <Card className="card-container">
        <div className="image-container">
          <Image />
        </div>
        <Card.Body>
          <Card.Title>
            <Name />
            <Price />
          </Card.Title>
          <Card.Text>
            <Description />
            <Button className="mt-3">View Complete details</Button>
          </Card.Text>
        </Card.Body>
      </Card>
      <p className="mt-3 buttom-p">Hello, {name}!</p>
    </div>
  );
}

export default App;
