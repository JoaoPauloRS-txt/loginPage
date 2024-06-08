import { FormEvent, useState } from "react"
import './styles.css'
import { Link } from "react-router-dom";
import { auth } from "../../services/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

const Login = () => {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [
        signInWithEmailAndPassword,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const handleSignIn = (e:FormEvent)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
      }
      if (error) {
        return (
          alert("usuário invalido")
        )
      }
      if(loading){
        return<p>Carregando ...</p> 
      }
     
  return (
    <div className="login">
        <div className="container__login">
            <h1 className="container__login-title">
                Dev<span>Login</span>
            </h1>
            <h3 className="container__login-subtitle">
                Entre
            </h3>
            <form className="container__form" >
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
                <a href="#" className="container__password">Esqueceu sua senha?</a>
                <button className="container_button" onClick={handleSignIn}>Entrar</button>
                <p className="container__sign-up">Você não tem uma conta? <Link to="/register">Crie sua conta aqui</Link> </p>
            </div>
            </form>
            
        </div>
    </div>
  )
}

export default Login