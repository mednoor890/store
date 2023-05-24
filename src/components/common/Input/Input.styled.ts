import  styled  from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
  font-family: Public Sans;
font-size: 14px;
font-weight: 400;
line-height: 16px;
letter-spacing: 0em;
text-align: left;
display:flex;

`;
export const InputField = styled.input`
  padding: 8px;
  font-size: 16px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-color 0.3s ease;
  width:289px;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;
export const InputWrapper = styled.div`
  margin-bottom: 30px;
`;