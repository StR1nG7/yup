import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerSchema } from "./formSchema";

const Form = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const formSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmitHandler)}>
      <div>
        <label htmlFor="email">Your email</label>
        <input {...register("email")} type="email" id="email"/>
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      
      <div>
        <label htmlFor="password">Your password</label>
        <input {...register("password")} type="password" id="password"/>
        {errors.password && <span>{errors.password.message}</span>}
      </div>

      <div>
        <label htmlFor="accountType">Select an option</label>
        <select {...register("accountType")} id="accountType">
          <option value="">Account Type</option>
          <option value="personal">Personal</option>
          <option value="commercial">Commercial</option>
        </select>
        {errors.accountType && <span>{errors.accountType.message}</span>}
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
