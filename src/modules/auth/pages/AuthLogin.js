import React from 'react';
import './../css/login.css'

const AuthLogin = () => {
    return (
        <>
            <main class="login">
            <div class="login__form">
                <h1 >INICIO DE SESIÓN</h1>
                <form class="formulario">
                <label for="">Email:</label>
                <input type="email" class="formulario__input" placeholder="Email" />
                <label for="">Password:</label>
                <input
                    type="password"
                    class="formulario__input"
                    placeholder="Password"
                />
                <button class="formulario__submit" type="submit">
                    Iniciar Sesión
                </button>
                </form>
            </div>
            </main>
        </>
    )
}

export default AuthLogin
