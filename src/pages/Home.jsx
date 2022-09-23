import React, { useState, useEffect } from 'react'
import Main from '../components/Main/Main.js'
import { Container, Row, Col} from "reactstrap";
import { useSelector } from 'react-redux'
import './home.css'
import products from "../products"
import ProductCard from '../components/ProductCard/ProductCard.jsx';

const Home = () => {
  const [category, setCategory] = useState("USD")
  const [allProducts, setAllProducts] = useState(products)
  const totalAmount = useSelector(state=> state.cart.totalAmount)

  useEffect(()=> {
    if(category === 'UAH') {
      const filterProducts = products.filter(item => item.category === 'UAH')
      setAllProducts(filterProducts)
    }
    if(category === 'EUR') {
      const filterProducts = products.filter(item => item.category === 'EUR')
      setAllProducts(filterProducts)
    }
    if(category === 'USD') {
      const filterProducts = products.filter(item => item.category === 'USD')
      setAllProducts(filterProducts)
    }
  },[category])

  return (
    <Main title="Home" className="flex">
    <section>
      <Container>
          <Row>
            <Col lg="6" md="6" style={{ textAlign: 'center' }}>
              <h2>Our shop page</h2>
            </Col>
            <Col lg="5">
                <div className="category d-flex flex-wrap align-items-center gap-4 justify-content-center">
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'USD' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('USD')}
                  >USD
                  </button>
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'UAH' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('UAH')}
                  >UAH
                  </button>
                  <button 
                  className={`d-flex align-items-center gap-2 ${category === 'EUR' ? 'foodBtnActive' : ''}`}
                  onClick={() => setCategory('EUR')}
                  >EUR
                  </button>
                </div>
            </Col>
            <Row className="df">
              {allProducts.map((item) => (
                  <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5" >
                      <ProductCard item={item} />
                  </Col>
                  ))}
            </Row>
              
            <Row> <p className="tac">total : {totalAmount}</p></Row>
          </Row>
      </Container>
    </section>
    </Main>
  )
}

export default Home