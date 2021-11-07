import React from "react";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Board from "./components/Board";

import Modal from "./components/Modal";

//Import dos components de teoria de estrutura das palavras
import Prefixo from "./components/Teoria/prefixos";
import Sufixo from "./components/Teoria/sufixo";
import Radical from "./components/Teoria/radical";

//Import dos components de teoria de classificação das palavras
import Substantivo from "./components/Teoria2/substantivo";
import Verbo from "./components/Teoria2/verbo";
import Adjetivo from "./components/Teoria2/adjetivos";
import Pronome from "./components/Teoria2/pronome";
import Artigo from "./components/Teoria2/artigo";
import Numeral from "./components/Teoria2/numeral";

//Mensagens de ERRO e de ACERTO das atividades
import Message from "./components/Mensagem/acertou/acertou";
import Message2 from "./components/Mensagem/errou/errou";
/*==================================================================== =================*/
//Imjportação das atividades
import Atividades from "./components/Atividades/substantvoAtiv/sub1/atividade1"; //Atividade 1
import AcertouSub1 from "./components/Atividades/substantvoAtiv/sub1/acertou/acertou"; //Atividade 1
import ErrouSub1 from "./components/Atividades/substantvoAtiv/sub1/errou/errou"; //Atividade 1

//sub2
import Atividades2 from "./components/Atividades/substantvoAtiv/sub2/atividade2";
import AcertouSub2 from "./components/Atividades/substantvoAtiv/sub2/acertou"; //Atividade 2
import ErrouSub2 from "./components/Atividades/substantvoAtiv/sub2/errou"; //Atividade 2

//sub3
import Atividades3 from "./components/Atividades/substantvoAtiv/sub3/atividade3";
import AcertouSub3 from "./components/Atividades/substantvoAtiv/sub3/acertou"; //Atividade 3
import ErrouSub3 from "./components/Atividades/substantvoAtiv/sub3/errou"; //Atividade 3
//sub4
import Atividades4 from "./components/Atividades/substantvoAtiv/sub4/atividade4";
import AcertouSub4 from "./components/Atividades/substantvoAtiv/sub4/acertou"; //Atividade 4
import ErrouSub4 from "./components/Atividades/substantvoAtiv/sub4/errou"; //Atividade 4
//sub5
import Atividades5 from "./components/Atividades/substantvoAtiv/sub5/atividade5";
import AcertouSub5 from "./components/Atividades/substantvoAtiv/sub5/acertou"; //Atividade 4
import ErrouSub5 from "./components/Atividades/substantvoAtiv/sub5/errou"; //Atividade 4
/*==================================================================== ===============*/
//Importação atividades sobre radical
//Radi1
import Radical1 from "./components/Atividades/Radical/rad1/radi1";
import RadCerto1 from "./components/Atividades/Radical/rad1/acertou";
import RadErrado1 from "./components/Atividades/Radical/rad1/errou";
//Radi2
import Radical2 from "./components/Atividades/Radical/rad2/radi2";
import RadCerto2 from "./components/Atividades/Radical/rad2/acertou";
import RadErrado2 from "./components/Atividades/Radical/rad2/errou";
//Radi3
import Radical3 from "./components/Atividades/Radical/rad3/radi3";
import RadCerto3 from "./components/Atividades/Radical/rad3/acertou";
import RadErrado3 from "./components/Atividades/Radical/rad3/errou";
//Radi4
import Radical4 from "./components/Atividades/Radical/rad4/radi4";
import RadCerto4 from "./components/Atividades/Radical/rad4/acertou";
import RadErrado4 from "./components/Atividades/Radical/rad4/errou";
//Radi5
import Radical5 from "./components/Atividades/Radical/rad5/radi5";
import RadCerto5 from "./components/Atividades/Radical/rad5/acertou";
import RadErrado5 from "./components/Atividades/Radical/rad5/errou";
/*==================================================================== */
//Importação atividades sobre prefixo
//Pref1
import Prefixo1 from "./components/Atividades/Prefixo/pre1/pref1";
import PreCerto1 from "./components/Atividades/Prefixo/pre1/acertou";
import PreErrado1 from "./components/Atividades/Prefixo/pre1/errou";

//Pref2
import Prefixo2 from "./components/Atividades/Prefixo/pre2/pref2";
import PreCerto2 from "./components/Atividades/Prefixo/pre2/acertou";
import PreErrado2 from "./components/Atividades/Prefixo/pre2/errou";
//Pref3
import Prefixo3 from "./components/Atividades/Prefixo/pre3/pref3";
import PreCerto3 from "./components/Atividades/Prefixo/pre3/acertou";
import PreErrado3 from "./components/Atividades/Prefixo/pre3/errou";
//Pref4
import Prefixo4 from "./components/Atividades/Prefixo/pre4/pref4";
import PreCerto4 from "./components/Atividades/Prefixo/pre4/acertou";
import PreErrado4 from "./components/Atividades/Prefixo/pre4/errou";
//Pref5
import Prefixo5 from "./components/Atividades/Prefixo/pre5/pref5";
import PreCerto5 from "./components/Atividades/Prefixo/pre5/acertou";
import PreErrado5 from "./components/Atividades/Prefixo/pre5/errou";

/*==================================================================== */
//Importação atividades sobre prefixo
//Pref1
import Sufixo1 from "./components/Atividades/Sufixo/suf1/sufi1";
import SufiCerto1 from "./components/Atividades/Sufixo/suf1/acertou";
import SufiErrado1 from "./components/Atividades/Sufixo/suf1/errou";

//Pref2
import Sufixo2 from "./components/Atividades/Sufixo/suf2/sufi2";
import SufiCerto2 from "./components/Atividades/Sufixo/suf2/acertou";
import SufiErrado2 from "./components/Atividades/Sufixo/suf2/errou";
//Pref3
import Sufixo3 from "./components/Atividades/Sufixo/suf3/sufi3";
import SufiCerto3 from "./components/Atividades/Sufixo/suf3/acertou";
import SufiErrado3 from "./components/Atividades/Sufixo/suf3/errou";
//Pref4
import Sufixo4 from "./components/Atividades/Sufixo/suf4/sufi4";
import SufiCerto4 from "./components/Atividades/Sufixo/suf4/acertou";
import SufiErrado4 from "./components/Atividades/Sufixo/suf4/errou";

/*==================================================================== */
//Importação atividades sobre prefixo
//Verbo1
import Verbo1 from "./components/Atividades/Verbo/verb1/verbo1";
import VerbCerto1 from "./components/Atividades/Verbo/verb1/acertou";
import VerbErrado1 from "./components/Atividades/Verbo/verb1/errou";
//Verbo2
import Verbo2 from "./components/Atividades/Verbo/verb2/verbo2";
import VerbCerto2 from "./components/Atividades/Verbo/verb2/acertou";
import VerbErrado2 from "./components/Atividades/Verbo/verb2/errou";
//Verbo3
import Verbo3 from "./components/Atividades/Verbo/verb3/verbo3";
import VerbCerto3 from "./components/Atividades/Verbo/verb3/acertou";
import VerbErrado3 from "./components/Atividades/Verbo/verb3/errou";
//Verbo4
import Verbo4 from "./components/Atividades/Verbo/verb4/verbo4";
import VerbCerto4 from "./components/Atividades/Verbo/verb4/acertou";
import VerbErrado4 from "./components/Atividades/Verbo/verb4/errou";
//Verbo5
import Verbo5 from "./components/Atividades/Verbo/verb5/verbo5";
import VerbCerto5 from "./components/Atividades/Verbo/verb5/acertou";
import VerbErrado5 from "./components/Atividades/Verbo/verb5/errou";

/*==================================================================== */
//Importação atividades sobre prefixo
//Verbo1
import Adjetivo1 from "./components/Atividades/Adjetivo/adj1/adjetivo1";
import AdjetivoCerto1 from "./components/Atividades/Adjetivo/adj1/acertou";
import AdjetivoErrado1 from "./components/Atividades/Adjetivo/adj1/errou";
//Verbo2
import Adjetivo2 from "./components/Atividades/Adjetivo/adj2/adjetivo2";
import AdjetivoCerto2 from "./components/Atividades/Adjetivo/adj2/acertou";
import AdjetivoErrado2 from "./components/Atividades/Adjetivo/adj2/errou";
//Verbo3
import Adjetivo3 from "./components/Atividades/Adjetivo/adj3/adjetivo3";
import AdjetivoCerto3 from "./components/Atividades/Adjetivo/adj3/acertou";
import AdjetivoErrado3 from "./components/Atividades/Adjetivo/adj3/errou";
//Verbo4
import Adjetivo4 from "./components/Atividades/Adjetivo/adj4/adjetivo4";
import AdjetivoCerto4 from "./components/Atividades/Adjetivo/adj4/acertou";
import AdjetivoErrado4 from "./components/Atividades/Adjetivo/adj4/errou";
//Verbo5
import Adjetivo5 from "./components/Atividades/Adjetivo/adj5/adjetivo5";
import AdjetivoCerto5 from "./components/Atividades/Adjetivo/adj5/acertou";
import AdjetivoErrado5 from "./components/Atividades/Adjetivo/adj5/errou";

/*==================================================================== */
//Importação atividades sobre prefixo
//Pronome1
import Pronome1 from "./components/Atividades/Pronome/pro1/pronome1";
import PronomeCerto1 from "./components/Atividades/Pronome/pro1/acertou";
import PronomeErrado1 from "./components/Atividades/Pronome/pro1/errou";
//Pronome1
import Pronome2 from "./components/Atividades/Pronome/pro2/pronome2";
import PronomeCerto2 from "./components/Atividades/Pronome/pro2/acertou";
import PronomeErrado2 from "./components/Atividades/Pronome/pro2/errou";
//Pronome1
import Pronome3 from "./components/Atividades/Pronome/pro3/pronome3";
import PronomeCerto3 from "./components/Atividades/Pronome/pro3/acertou";
import PronomeErrado3 from "./components/Atividades/Pronome/pro3/errou";
//Pronome1
import Pronome4 from "./components/Atividades/Pronome/pro4/pronome4";
import PronomeCerto4 from "./components/Atividades/Pronome/pro4/acertou";
import PronomeErrado4 from "./components/Atividades/Pronome/pro4/errou";
//Pronome1
import Pronome5 from "./components/Atividades/Pronome/pro5/pronome5";
import PronomeCerto5 from "./components/Atividades/Pronome/pro5/acertou";
import PronomeErrado5 from "./components/Atividades/Pronome/pro5/errou";

/*==================================================================== */
//Importação atividades sobre prefixo
//Pronome1
import Artigo1 from "./components/Atividades/Artigo/art1/artigo1";
import ArtigoCerto1 from "./components/Atividades/Artigo/art1/acertou";
import ArtigoErrado1 from "./components/Atividades/Artigo/art1/errou";
//Pronome1
import Artigo2 from "./components/Atividades/Artigo/art2/artigo2";
import ArtigoCerto2 from "./components/Atividades/Artigo/art2/acertou";
import ArtigoErrado2 from "./components/Atividades/Artigo/art2/errou";
//Pronome1
import Artigo3 from "./components/Atividades/Artigo/art3/artigo3";
import ArtigoCerto3 from "./components/Atividades/Artigo/art3/acertou";
import ArtigoErrado3 from "./components/Atividades/Artigo/art3/errou";
//Pronome1
import Artigo4 from "./components/Atividades/Artigo/art4/artigo4";
import ArtigoCerto4 from "./components/Atividades/Artigo/art4/acertou";
import ArtigoErrado4 from "./components/Atividades/Artigo/art4/errou";
//Pronome1
import Artigo5 from "./components/Atividades/Artigo/art5/artigo5";
import ArtigoCerto5 from "./components/Atividades/Artigo/art5/acertou";
import ArtigoErrado5 from "./components/Atividades/Artigo/art5/errou";

//IMportação dos componentes do router
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Header />
        <Board />

        {/*Rodas para navegação entre paginas  */}

        <Route component={Modal} path="/Modal" />
        <Route component={Prefixo} path="/Prefixo" />
        <Route component={Sufixo} path="/Sufixo" />
        <Route component={Radical} path="/Radical" />

        <Route component={Substantivo} path="/Substantivo" />
        <Route component={Verbo} path="/Verbo" />
        <Route component={Adjetivo} path="/Adjetivo" />
        <Route component={Pronome} path="/Pronome" />
        <Route component={Artigo} path="/Artigo" />
        <Route component={Numeral} path="/Numeral" />

        {/*==================================================================== */}
        {/*Radical */}
        <Route component={Radical1} path="/Radical1" />
        <Route component={RadCerto1} path="/Radical1/RadCerto1" />
        <Route component={RadErrado1} path="/Radical1/RadErrado1" />
        {/*Radical 2 */}
        <Route component={Radical2} path="/Radical2" />
        <Route component={RadCerto2} path="/Radical2/RadCerto2" />
        <Route component={RadErrado2} path="/Radical2/RadErrado2" />

        {/*Radical 3 */}
        <Route component={Radical3} path="/Radical3" />
        <Route component={RadCerto3} path="/Radical3/RadCerto3" />
        <Route component={RadErrado3} path="/Radical3/RadErrado3" />

        {/*Radical 4*/}
        <Route component={Radical4} path="/Radical4" />
        <Route component={RadCerto4} path="/Radical4/RadCerto4" />
        <Route component={RadErrado4} path="/Radical4/RadErrado4" />
        {/*Radical 5*/}
        <Route component={Radical5} path="/Radical5" />
        <Route component={RadCerto5} path="/Radical5/RadCerto5" />
        <Route component={RadErrado5} path="/Radical5/RadErrado5" />

        {/*==================================================================== */}
        {/*Prefixo 1 */}
        <Route component={Prefixo1} path="/Prefixo1" />
        <Route component={PreCerto1} path="/Prefixo1/PreCerto1" />
        <Route component={PreErrado1} path="/Prefixo1/PreErrado1" />
        {/*Prefixo 2 */}
        <Route component={Prefixo2} path="/Prefixo2" />
        <Route component={PreCerto2} path="/Prefixo2/PreCerto2" />
        <Route component={PreErrado2} path="/Prefixo2/PreErrado2" />

        {/*Prefixo 3 */}
        <Route component={Prefixo3} path="/Prefixo3" />
        <Route component={PreCerto3} path="/Prefixo3/PreCerto3" />
        <Route component={PreErrado3} path="/Prefixo3/PreErrado3" />

        {/*Prefixo 4 */}
        <Route component={Prefixo4} path="/Prefixo4" />
        <Route component={PreCerto4} path="/Prefixo4/PreCerto4" />
        <Route component={PreErrado4} path="/Prefixo4/PreErrado4" />

        {/*Prefixo 5 */}
        <Route component={Prefixo5} path="/Prefixo5" />
        <Route component={PreCerto5} path="/Prefixo5/PreCerto5" />
        <Route component={PreErrado5} path="/Prefixo5/PreErrado5" />

        {/*==================================================================== */}
        {/*Prefixo 1 */}
        <Route component={Sufixo1} path="/Sufixo1" />
        <Route component={SufiCerto1} path="/Sufixo1/Sufixo1" />
        <Route component={SufiErrado1} path="/Sufixo1/SufiErrado1" />
        {/*Prefixo 2 */}
        <Route component={Sufixo2} path="/Sufixo2" />
        <Route component={SufiCerto2} path="/Sufixo2/Sufixo2" />
        <Route component={SufiErrado2} path="/Sufixo2/SufiErrado2" />

        {/*Prefixo 3 */}
        <Route component={Sufixo3} path="/Sufixo3" />
        <Route component={SufiCerto3} path="/Sufixo3/Sufixo3" />
        <Route component={SufiErrado3} path="/Sufixo3/SufiErrado3" />

        {/*Prefixo 4 */}
        <Route component={Sufixo4} path="/Sufixo4" />
        <Route component={SufiCerto4} path="/Sufixo4/Sufixo4" />
        <Route component={SufiErrado4} path="/Sufixo4/SufiErrado4" />

         {/*==================================================================== */}
        {/*Rotas adas Atividades sobre substantivos*/}

        {/*Rotas das atividades sobre substantivos */}
        <Route component={Atividades} path="/Atividade" />
        <Route component={AcertouSub1} path="/Atividade/AcertouSub1" />
        <Route component={ErrouSub1} path="/Atividade/ErrouSub1" />
        {/*atividade 2*/}
        <Route component={Atividades2} path="/Atividade2" />
        <Route component={AcertouSub2} path="/Atividade2/AcertouSub2" />
        <Route component={ErrouSub2} path="/Atividade2/ErrouSub2" />
        {/*atividade 3*/}
        <Route component={Atividades3} path="/Atividade3" />
        <Route component={AcertouSub3} path="/Atividade3/AcertouSub3" />
        <Route component={ErrouSub3} path="/Atividade3/ErrouSub3" />
        {/*atividade 4*/}
        <Route component={Atividades4} path="/Atividade4" />
        <Route component={AcertouSub4} path="/Atividade4/AcertouSub4" />
        <Route component={ErrouSub4} path="/Atividade4/ErrouSub4" />
        {/*atividade 5*/}
        <Route component={Atividades5} path="/Atividade5" />
        <Route component={AcertouSub5} path="/Atividade5/AcertouSub5" />
        <Route component={ErrouSub5} path="/Atividade5/ErrouSub5" />
 {/*==================================================================== */}
        {/*Verbo 1 */}
        <Route component={Verbo1} path="/Verbo1" />
        <Route component={VerbCerto1} path="/Verbo1/VerbCerto1" />
        <Route component={VerbErrado1} path="/Verbo1/VerbErrado1" />
        {/*Verbo 2 */}
        <Route component={Verbo2} path="/Verbo2" />
        <Route component={VerbCerto2} path="/Verbo2/VerbCerto2" />
        <Route component={VerbErrado2} path="/Verbo2/VerbErrado2" />
        {/*Verbo 3 */}
        <Route component={Verbo3} path="/Verbo3" />
        <Route component={VerbCerto3} path="/Verbo3/VerbCerto3" />
        <Route component={VerbErrado3} path="/Verbo3/VerbErrado3" />
        {/*Verbo 4 */}
        <Route component={Verbo4} path="/Verbo4" />
        <Route component={VerbCerto4} path="/Verbo4/VerbCerto4" />
        <Route component={VerbErrado4} path="/Verbo4/VerbErrado4" />
        {/*Verbo 1 */}
        <Route component={Verbo5} path="/Verbo5" />
        <Route component={VerbCerto5} path="/Verbo5/VerbCerto5" />
        <Route component={VerbErrado5} path="/Verbo5/VerbErrado5" />
        
        {/*==================================================================== */}
        {/*Adjetivo 1 */}
        <Route component={Adjetivo1} path="/Adjetivo1" />
        <Route component={AdjetivoCerto1} path="/Adjetivo1/AdjetivoCerto1" />
        <Route component={AdjetivoErrado1} path="/Adjetivo1/AdjetivoErrado1" />
        {/*Adjetivo 2 */}
        <Route component={Adjetivo2} path="/Adjetivo2" />
        <Route component={AdjetivoCerto2} path="/Adjetivo2/AdjetivoCerto2" />
        <Route component={AdjetivoErrado2} path="/Adjetivo2/AdjetivoErrado2" />
        {/*Adjetivo 3 */}
        <Route component={Adjetivo3} path="/Adjetivo3" />
        <Route component={AdjetivoCerto3} path="/Adjetivo3/AdjetivoCerto3" />
        <Route component={AdjetivoErrado3} path="/Adjetivo3/AdjetivoErrado3" />
        {/*Adjetivo 4 */}
        <Route component={Adjetivo4} path="/Adjetivo4" />
        <Route component={AdjetivoCerto4} path="/Adjetivo4/AdjetivoCerto4" />
        <Route component={AdjetivoErrado4} path="/Adjetivo4/AdjetivoErrado4" />
        {/*Adjetivo 5 */}
        <Route component={Adjetivo5} path="/Adjetivo5" />
        <Route component={AdjetivoCerto5} path="/Adjetivo5/AdjetivoCerto5" />
        <Route component={AdjetivoErrado5} path="/Adjetivo5/AdjetivoErrado5" />

        {/*==================================================================== */}
        {/*Pronome 1 */}
        <Route component={Pronome1} path="/Pronome1" />
        <Route component={PronomeCerto1} path="/Pronome1/PronomeCerto1" />
        <Route component={PronomeErrado1} path="/Pronome1/PronomeErrado1" />
          {/*Pronome 2 */}
          <Route component={Pronome2} path="/Pronome2" />
        <Route component={PronomeCerto2} path="/Pronome2/PronomeCerto2" />
        <Route component={PronomeErrado2} path="/Pronome2/PronomeErrado2" />
          {/*Pronome 3 */}
          <Route component={Pronome3} path="/Pronome3" />
        <Route component={PronomeCerto3} path="/Pronome3/PronomeCerto3" />
        <Route component={PronomeErrado3} path="/Pronome3/PronomeErrado3" />
          {/*Pronome 4 */}
          <Route component={Pronome4} path="/Pronome4" />
        <Route component={PronomeCerto4} path="/Pronome4/PronomeCerto4" />
        <Route component={PronomeErrado4} path="/Pronome4/PronomeErrado4" />
          {/*Pronome 5 */}
          <Route component={Pronome5} path="/Pronome5" />
        <Route component={PronomeCerto5} path="/Pronome5/PronomeCerto5" />
        <Route component={PronomeErrado5} path="/Pronome5/PronomeErrado5" />
        {/*==================================================================== */}
        {/*Artigo 1 */}
        <Route component={Artigo1} path="/Pronome1" />
        <Route component={ArtigoCerto1} path="/Artigo1/ArtigoCerto1" />
        <Route component={ ArtigoErrado1} path="/Artigo1/ArtigoErrado1" />
         {/*Artigo 2 */}
         <Route component={Artigo2} path="/Pronome2" />
        <Route component={ArtigoCerto2} path="/Artigo2/ArtigoCerto2" />
        <Route component={ ArtigoErrado2} path="/Artigo2/ArtigoErrado2" />
         {/*Artigo 3 */}
         <Route component={Artigo3} path="/Pronome3" />
        <Route component={ArtigoCerto3} path="/Artigo3/ArtigoCerto3" />
        <Route component={ ArtigoErrado3} path="/Artigo3/ArtigoErrado3" />
         {/*Artigo 4 */}
         <Route component={Artigo4} path="/Pronome4" />
        <Route component={ArtigoCerto4} path="/Artigo4/ArtigoCerto4" />
        <Route component={ ArtigoErrado4} path="/Artigo4/ArtigoErrado4" />
         {/*Artigo 5 */}
         <Route component={Artigo5} path="/Pronome5" />
        <Route component={ArtigoCerto5} path="/Artigo5/ArtigoCerto5" />
        <Route component={ ArtigoErrado5} path="/Artigo5/ ArtigoErrado5" />
      </Router>
    </>
  );
}

export default App;
