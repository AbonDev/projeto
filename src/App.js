import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import './App.css';


const schema = yup
  .object({
    name: yup
    .string().
    required("O nome é obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("O email é obrigatório"),
    phoneNumber: yup
      .string()
      .min(11, "O telefone deve ter  11 digitos"),
      image: yup 
      .mixed()
      .required("Voce precisa tirar uma foto"),
      licenseplate: yup
      .string().
      required("A placa é obrigatório"),
      brand: yup
      .string().
      required("A marca é obrigatória"),
       
  })
  .required();

  function App() {
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm({
      resolver: yupResolver(schema),
    });
  
    console.log(watch("name")); 
  
    function onSubmit(userData) {
      console.log(userData);
    }
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1> CADASTRO CARRO</h1>
  
        <label>
          Nome Completo
          <input type="text" {...register("name")} />
          <span>{errors.name?.message}</span>
        </label>
  
        <label>
          Email
          <input type="text" {...register("email")} />
          <span>{errors.email?.message}</span>
        </label>
  
        <label>
          Telefone
          <input type="phoneNumber" placeholder='(00)00000-0000' {...register("phoneNumber")} />
          <span>{errors.phoneNumber?.message}</span>
        </label>

        <label>
          Placa do carro
          <input type="licenseplate" placeholder='XXXXXXX' {...register("licenseplate")} />
          <span>{errors.licenseplate?.message}</span>
        </label>

        <label>
          Marca
          <input type="brand"{...register("brand")} />
          <span>{errors.brand?.message}</span>
        </label>

        <label>
        <input type="file" capture="camera" accept='image/*' {...register("image")} />
        <span>{errors.image?.message}</span>
        </label>

        <label>

        <select  multiple  name="test">
          <option>Completa</option>
          <option>Simples</option>
          <option>Motor</option>
          <option>Basica</option>


        </select>

        </label>
  
        <button type="submit">Cadastrar</button>
      </form>
    );
  }
export default App;
