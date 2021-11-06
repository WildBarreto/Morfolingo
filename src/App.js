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
        
        
      </Router>
    </>
  );
}

export default App;
