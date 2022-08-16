import styled from  "styled-components";

export const WrapperForm = styled.div`
margin-right: auto;
margin-left:  auto;

max-width: 960px;

padding: 20px 40px;

box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
`


export const Styledform = styled.form`


    div{ 
        display: flex; 
        flex-direction: column

    }
    label{

    }
    input{
        text-align: center;
        border-radius: 0.25rem;        
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
        background-color: #97CEF9;
        border: none;
        height: 30px;
        
    }
    select{
        border-radius: 0.25rem;          
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15); 
        background-color: #97CEF9;
        border: none;
        height: 30px;  
    }

   


`

         //options?              

export const FormGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    padding: 30px 0px;
  
  `

export const DietGrid = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    padding: 30px 0px;
  
  `
  
export const Deletebutton = styled.button`
       

    background-color: #97CEF9;
    border-radius: 1rem; 
    height: 25px;
    width: 25px; 
    border: none;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  `
export const DietCard = styled.span`
    
    border-radius: 0.25rem;        
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    padding: 10px;

    p{ 
        text-align: center;
    }
`