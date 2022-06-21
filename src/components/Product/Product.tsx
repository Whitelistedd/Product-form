import React from 'react';
import styled from 'styled-components';

type name = string
type image = string

interface Props {
    name: name,
    image: image,
    handleForm: ({name,image} : {name: name, image: image}) => void,
}

export const Product : React.FC<Props> = ({name,handleForm,image}) => {
  return (
    <Container onClick={() => handleForm({name,image})} >
        <Image src={image} />
        <ProductName>{name}</ProductName>
    </Container>
  )
}

const ProductName = styled.p`
  font-size: 2em;
  font-weight: 600;
  font-family: "Barlow";
`

const Image = styled.img`
  height: 100%;
  width: 100%;
`

const Container = styled.div`
  width: 300px;
  min-height: 400px;
  padding: 1em;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #F5F4F4;
  filter: saturate(30%);
  transition: 300ms ease;
  &:hover {
    cursor: pointer;
    filter: saturate(100%);
    background-color: rgb(247, 163, 54,0.5);
    ${ProductName} {
      color: #674BA0;
    }
  }
`
