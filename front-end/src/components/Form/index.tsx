import { FormHTMLAttributes } from "react";
import { FormWrapper } from "./styles";

type MyProps = {
  formHeader?: string,
};

function Form({
  action,
  onSubmit,
  children,
  formHeader,
}: FormHTMLAttributes<HTMLFormElement> & MyProps) {
  return (
    <FormWrapper action={action} onSubmit={onSubmit}>
      <header><h3>{formHeader}</h3></header>
      {children}
    </FormWrapper>
  );
}

export default Form;

