import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


function App() {
  return (
    <div style={{ background: "#141414" }}>
    <Menu />

    <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={"Sonic, o porco-espinho azul mais famoso do mundo, se junta com os seus amigos para derrotar o terrível Doutor Eggman, um cientista louco que planeja dominar o mundo, e o Doutor Robotnik, responsável por aprisionar animais inocentes em robôs."}
    />

    <Carousel
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
    />

    <Carousel
      category={dadosIniciais.categorias[1]}
    />

    <Carousel
      category={dadosIniciais.categorias[2]}
    />      

    <Carousel
      category={dadosIniciais.categorias[3]}
    />      

    <Carousel
      category={dadosIniciais.categorias[4]}
    />      

    <Carousel
      category={dadosIniciais.categorias[5]}
    />      

    <Footer />
  </div>
  );
}

export default App;
