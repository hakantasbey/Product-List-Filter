import { Col, Container, Form, Row } from "react-bootstrap";
import ProductCard from "./ProductCard";
import "./Products.scss";
import { products } from "../../helper/data";
import { Header } from "../header/Header";
import { useState } from "react";

const ProductsList = () => {
  const [value, setValue] = useState("")
  const [click, setClick] = useState("all")


  return (
    <>
      <Header setClick={setClick} />
      <Form.Control
        placeholder="Search Product..."
        type="search"
        className="w-50 m-auto"
        onChange={(e)=>setValue(e.target.value)}
        value={value}
      />
      <Container className="product-list rounded-4 my-4 p-3">
        <Row className="g-3 justify-content-center">

        {products.filter((item)=>item.title.toLowerCase().includes(value.toLowerCase().trim()) && (click.toLowerCase()==="all" ? item : item.category.toLowerCase()===click.toLowerCase())).map((item, id)=>(
          <Col key={id}>
          <ProductCard{...item}/>
          </Col>
          ))}
          
        </Row>
      </Container>
    </>
  );
};

export default ProductsList;
