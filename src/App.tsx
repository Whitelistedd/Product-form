import React, { useState } from 'react';
import styled from 'styled-components';

import { Form } from './components/Form/Form';
import { Product } from './components/Product/Product';
import { AllProducts } from './Data';
import GlobalFonts from './fontinjection';

const App : React.FC = () => {

  const [selectedProduct,setSelectedProduct] = useState<{image: string, name: string}>({image: "",name: ""})
  const [formHiddenStatus,setFormHiddenStatus] = useState(false)


  const handleForm = ({image,name} : {image: string, name: string}) => {
    setSelectedProduct({name,image})
    setFormHiddenStatus(true)
  }

  const handleCancelForm = () => {
    setFormHiddenStatus(false)
  }

  return (
    <Container>
      <GlobalFonts />
      <Products>
        {AllProducts.map((product,index) => 
          <Product key={index} handleForm={handleForm} name={product.productName} image={product.productImage} />
        )}
      </Products>
      <Form handleCancelForm={handleCancelForm} formHiddenStatus={formHiddenStatus} selectedProduct={selectedProduct} />
    </Container>
  );
}

const Products = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 1em;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
`

export default App;
