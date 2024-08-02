import React from "react";
import { Article } from "./components/Article/Article";
import { Navbar } from "./components/Navbar/Navbar";
import { Counter } from "./components/Counter/Counter";

import caraxes from './assets/image/caraxes.webp'
import syras from './assets/image/syrax.jpg'
import meleys from './assets/image/meleys.webp'
import sunfyre from './assets/image/sunfyre.webp'


import './styles/App.css'



class App extends React.Component {
  render(){
  return (
    <> 

      <Navbar />

      {/* <Counter /> */}

      <section id="articles">
          
           <Article title="Caraxes" 

           thumbnail={caraxes}
           
           provider="Montador: Daemon Targaryen" 
          
           description="O primeiro da lista é o dragão de Daemon Targaryen (Matt Smith), um dos personagens principais da nova produção. Conhecido como Caraxes, ele é um dos maiores e mais antigos dragões da família Targaryen.

           Suas escamas são avermelhadas, dando uma certa imponência à fera, que tem um corpo esguio e possui bastante agilidade."/>

           <Article title="Syrax" 
           
           thumbnail={syras}         
           
           provider="Montador: Rhaenyra Targaryen " 
           
           description="Uma fera majestosa, Syrax é o dragão de Rhaenyra (Emma D'Arcy), a princesa que deveria suceder o rei de Westeros. Ela não é tão grande quanto Caraxes, mas sua exuberância desperta medo e curiosidade em outras pessoas.

           Seu nome foi dado por Rhaenyra em homenagem a uma deusa valiriana. Suas escamas são amarelas e até brilhantes em alguns momentos, garantindo um visual exuberante e chamativo para a fera, que não tem experiência em batalhas."/>

           <Article title="Meleys" 
           
           thumbnail={meleys}

           provider="Montador: Rhaenys Velaryon " 
           
           description="A princesa Rhaenys Velaryon (Eve Best) também possui um dragão para chamar de seu. Pertencendo à mesma espécie de Caraxes, Meleys, uma fêmea, também possui escamas avermelhadas, sendo um dos maiores e mais antigos dragões da Casa Targaryen.
           Rhaenys a apelidou de Rainha Vermelha, nome que também ganhou destaque nos campos de batalha de Westeros. A fera é bastante experiente e já causou estragos durante guerras."/>

           <Article title="Sunfyre"

           thumbnail={sunfyre}
           
           provider="Montador: Aegon Targaryen II"
           
           description="Dentro da mitologia estabelecida no universo de Game of Thrones, Sunfyre é um dragão jovem, porém, enorme, que é montado por Aegon Targaryen II (Tom Glynn-Carney). Por conta de suas escamas douradas e reluzentes, sua imponência é algo marcante que o fez ser conhecido por Westeros.
           Além disso, nos livros, um fato curioso é que as chamas que saem de sua garganta possuem a mesma tonalidade das escamas. Na adaptação da HBO, o dragão ganhou destaque pela sua aparência chamativa e imponente."/>
      </section>

    </>
  );
}
}

export default App;
