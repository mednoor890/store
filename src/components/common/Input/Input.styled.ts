import  styled  from "styled-components";

export const Label = styled.label`
  font-size: 16px;
  color: #333;
  margin-bottom: 8px;
`;
export const InputField = styled.input`
  padding: 8px;
  font-size: 14px;
  border: none;
  border-bottom: 1px solid #ccc;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #888;
  }
`;
export const InputWrapper = styled.div`
  margin-bottom: 16px;
`;