import React from "react";
import styled from "styled-components";


const FormContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
`;

const Form = () => {
    return (
        <FormContainer>
            <input type="text" placeholder="Nome" />
            <input type="email" placeholder="Email" />
            <button>Cadastrar</button>
            </FormContainer>
    );
    };  
    export default Form;