import emailjs from '@emailjs/browser';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { FormRegex } from '../../Data';

interface Props {
    selectedProduct: {name: string,image: string},
    formHiddenStatus: boolean,
    handleCancelForm: () => void,
}

export const Form : React.FC<Props> = ({formHiddenStatus,handleCancelForm,selectedProduct}) => {
    const [formErrors,setFormErrors] = useState({user_name: "", user_email: "", user_phone: ""})

    useEffect(() => {
        console.log(formErrors)
    },[formErrors])

    const handleChange = (event : any) => {
        const targetName = event.target.name
        const targetValue = event.target.value
        console.log(formErrors)

        if(targetName === "user_email") {
            if(!FormRegex.email.test(targetValue)) {
                setFormErrors(prev => ({ ...prev, user_email: "Введите почту" }))
            } else {
                setFormErrors(prev => ({ ...prev, user_email: "" }))
            }
        }
        if(targetName === "user_phone") {
            if(!FormRegex.phone.test(targetValue)) {
                setFormErrors(prev => ({ ...prev, user_phone: "Введите номер телефон" }))
            } else {
                setFormErrors(prev => ({ ...prev, user_phone: "" }))
            }
        }
    }
    
    const SubmitOrder = (event : any) => {
        event.preventDefault()
        if(!formErrors.user_email  && !formErrors.user_phone ) {
            emailjs.sendForm('service_l1qv8qa', 'template_gaiy6a2', event, '6rZBvWHgjoIuINIZn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        }
    }

    return (
        <Container formHiddenStatus={formHiddenStatus} >
            <FormContainer>
                <Title>Оформить заказ</Title>
                <StyledForm method="post" onSubmit={SubmitOrder} >
                    <Label>Продукт</Label>
                    <Input disabled value={selectedProduct?.name} name="user_product" />
                    <Label>ИФО</Label>
                    <Input type="text" placeholder="ИФО" required name="user_name" onChange={handleChange} />
                    <Label>Почта</Label>
                    <Input type="email" placeholder="Почта" required name="user_email" onChange={handleChange} />
                    {formErrors.user_email && <Errors>{formErrors.user_email}</Errors>}
                    <Label>номер телефон</Label>
                    <Input type="text" placeholder="номер телефон" required name="user_phone" onChange={handleChange} />
                    {formErrors.user_phone && <Errors>{formErrors.user_phone}</Errors>}
                    <Buttons>
                        <Submit formErrors={formErrors} type="submit" value="Заказать" />
                    </Buttons>
                </StyledForm>
                <Button onClick={() => handleCancelForm()} >Отменит</Button>
            </FormContainer>
        </Container>
    )
}

const Button = styled.button`
    background-color: red;
    border: none;
    width: 100%;
    border-radius: 5px;
    padding: 1em;
    color: white;
    &:hover {
        cursor: pointer;
    }
`


const Submit = styled.input<{formErrors: {user_phone: string,user_email: string, user_name: string}}>`
    flex: 1;
    padding: 1em;
    border: none;
    border-radius: 5px;
    background-color: green;
    color: white;
    &:hover {
        cursor: pointer;
    }
`

const Buttons = styled.div`
    display: flex;
    gap: 1em;
    width: 100%;
    margin-top: 1em;
`

const Errors = styled.p`
    color: red;
    font-size: 0.8em;
`

const Label = styled.label``

const Input = styled.input`
    padding: 1em;
    border-radius: 5px;
    border: none;
    width: 100%;
    border: 1px solid black;
`

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 0.5em;
    width: 100%;
    border-radius: 10px;
`

const Title = styled.h1`
    margin-top: 0px;
`

const FormContainer = styled.div`
    background-color: #FFFFFF;
    border-radius: 20px;
    display: flex;
    padding: 1em;
    width: 30vw;
    min-width: 300px;
    height: 60vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 1em;
`


const Container = styled.div<{formHiddenStatus: boolean}>`
    position: fixed;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-height: 100vh;
    display: ${props => props.formHiddenStatus ? "flex" : "none"};
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.295);
`