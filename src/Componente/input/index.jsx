import styled from "styled-components"

const InputEstilizado = styled.input`
    width:922px;
    height:80px;
    border-radius: 8px;
    border:none;
    border-bottom: 4px solid #5DC91B;
    padding-left:18px;
    box-sizing: border-box;
    font-size: 24px;
    box-shadow: 6px 5px 4px rgba(0,0,0,0.25);
    margin-bottom: 32px;
    font-family: sans-serif;
`

const InputPadrao = ({ type="text"}) => {
    return(
        <InputEstilizado type={ type }></InputEstilizado>
    )
}

export default InputPadrao