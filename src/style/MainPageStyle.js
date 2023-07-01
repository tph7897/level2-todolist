import { styled } from 'styled-components';

const StLayout = styled.div`
        margin: 0 auto;
        max-width: 1200px;
        min-width: 800px;
`

const StTop = styled.div`
        font-size: 40px;
        align-items: center;
        border: 1px solid #ddd;
        display: flex;
        height: 50px;
        justify-content: space-between;
        padding: 0 20px;
`

const StInputContainer = styled.div`
        align-items: center;
        display: flex;
        gap: 20px;
        justify-content: space-between;
        margin: 0 auto;
        padding: 30px;
`

const StInput = styled.input`
        width: 300px;
        height: 40px;
`

const StPushButton = styled.button`
        cursor: pointer;

        width: 100px;
        height: 40px;
        font-size: 20px;
        font-weight: 900;
        border: 1px solid black;

        display: flex;
        justify-content: center;
        align-items: center;
`

const StLabel = styled.label`
        font-size: 40px;
`

const StListContainer = styled.div`  
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
`

const StCard = styled.div`
        border-radius : 10px;    
        border: 4px solid rgb(25, 151, 205);
        padding: 12px 24px 24px;
        width: 270px;
        margin: 10px;
`
const StButtonSet = styled.div`
        margin-top : 20px;
        width:100%;
        display: flex;
        justify-content: space-between;
`

const StButton = styled.button`
        border-radius : 5px;
        cursor: pointer;
        width: 100px;
        height: 30px;
        border: 1px solid ${(props) => props.bordercolor};

&:hover{
        background-color: ${(props) => props.bordercolor};
        transition: 0.6s;
}        
`

const StTitle = styled.h2`
        margin: 10px;
        font-size: 25px;
`

export { StCard, StTop, StLayout, StInputContainer, StListContainer, StInput, StLabel, StPushButton, StButtonSet, StButton, StTitle }
