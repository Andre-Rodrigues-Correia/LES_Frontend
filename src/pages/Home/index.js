import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import './styles.css';

function Home(){
    return (
        <>
            <section class="bgDark" id="homeInfo">
                <div class="infoImg"></div>
                <div class="infoContent">
                <h2><span class="textPrimary">A História </span>Do Nosso Hotel</h2>
                <p>O Smith Palace Hotel começou a partir do sonho de tornar serviços de aluguel de quartos acessível à todos, desde então não paramos de inovar,
                    passando a oferecer aluguel de veículos e espaço de eventos, além daquele preço competitivo que agrada todos os clientes.
                </p>
                <a href="sobre.html" class="btn btnLight">Leia Mais</a>
                </div>
            </section>
            <section id="features">
                <div class="box bgLight">
                <i class="fas fa-hotel fa-3x"></i>
                <h3>Ótima Localização</h3>
                <p>Localização privilegiada perto de praias e dos melhores restaurantes da cidade!</p>
                </div>
                <div class="box bgPrimary">
                <i class="fas fa-utensils fa-3x"></i>
                <h3>Refeições Grátis</h3>
                <p>Oferecemos refeições preparadas pelos melhores chefes de cozinha do país de forma inteiramente grátis e livre de taxas extras!</p>
                </div>
                <div class="box bgLight">
                <i class="fas fa-dumbbell fa-3x"></i>
                <h3>Academia</h3>
                <p>Não quer para de exercitar? Conheça a nosso academia com os melhores personais e com o melhor maquinário disponível!</p>
                </div>
            </section>
        </>
    )
}

export default Home;