import { FormEvent, useState } from "react"
import './styles.css'
import { Link } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {auth} from "../../services/firebaseConfig"
const Register = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
      ] = useCreateUserWithEmailAndPassword(auth);
    
      const handleSignIn = (e:FormEvent)=>{
        e.preventDefault()
        createUserWithEmailAndPassword(email,password)
      }
    
      if(loading){
        return <p>Carregando ....</p>
      }
      if (user) {
        return (
          <div>
            <p>Registrado usuário: {user.user.email}</p>
          </div>
        );
      }

  return (
    <div className="Register">
        <div className="container__Register">
            <h1 className="container__Register-title">
                Dev<span>Login</span>
            </h1>
            <h3 className="container__Register-subtitle">
                Registrar
            </h3>
            <form className="container__form">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    name="email"
                    value={email}
                    placeholder="Digite seu email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <label htmlFor="password">Senha</label>
                <input 
                    type="password" 
                    name="email"
                    value={password}
                    placeholder="***********"
                    onChange={(e)=>{setPassword(e.target.value)}}
                />
                <div className="container__below">
                <button className="container_button" onClick={handleSignIn}>Entrar</button>
                <p className="container__sign-up">Você já tem uma conta? <Link to="/">Acesse sua conta aqui</Link> </p>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default Register