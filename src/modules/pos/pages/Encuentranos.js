import React from 'react'
import Navbar from '../components/Navbar';
import './../css/Encuentranos.css'

const Encuentranos = () => {
    return (
        <>
         <Navbar />
            <div id="map">
            </div>

            <footer class="footer">
                <div class="footer__links">
                    <a href="#" class="footer__items" style={{color:'#2a2a2c'}}>Nosotros</a>
                    <a href="#" class="footer__items" style={{color:'#2a2a2c'}}>Donaciones</a>
                    <a href="#" class="footer__items" style={{color:'#2a2a2c'}}>Noticias</a>
                    <a href="#" class="footer__items" style={{color:'#2a2a2c'}}>Productos</a>
                    <a href="#" class="footer__items" style={{color:'#2a2a2c'}}>Soporte</a>
                </div>
                <div class="social-media">
                    <a class="social-media__links fab fa-facebook" href="https://www.facebook.com/"></a>
                    <a class="social-media__links fab fa-twitter" href="https://www.twitter.com/"></a>
                    <a class="social-media__links fab fa-pinterest" href="https://www.pinterest.com/"></a>
                    <a class="social-media__links fab fa-instagram" href="https://www.instagram.com/"></a>
                </div>
                <span>© 2021 Cooperativa Hogar</span>
            </footer>
 
        </>
    )
}

export default Encuentranos
