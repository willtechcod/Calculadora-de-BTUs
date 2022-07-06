import {useState} from 'react';
import './app.css';


export default function App(){

  const [luzSolar, setLuzSolar] = useState('');
  const [metro, setMetro] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [baixa, setBaixa] = useState(600);
  const [alta, setAlta] = useState(800);
  const [total, setTotal] =useState('')

  function calcularBTU(){

    const btus = luzSolar * metro;
    if(btus <= 6000 ){
      setMensagem(btus + " Recomendado 7.000BTUs");
    }else if(btus >= 7000 && btus<= 8400){
      setMensagem(btus + " Recomendado 9.000BTUs");
    }else if(btus >=9000 && btus<=11400){
      setMensagem(btus+ " Recomendado 12.000BTUs");
    }else if(btus >=12000 && btus<=15600){
      setMensagem(btus + " Recomendado 16.000BTUs");
    }else if(btus >=16000 && btus<=17400){
      setMensagem(btus + " Recomendado 18.000BTUs");
  }else if(btus >=18000 && btus<=21600){
    setMensagem(btus + " Recomendado 22.000BTUs");
}else if(btus >=21800){
  setMensagem("Fora do padrão residencial Ar Industrial");
}
  
}


  return(
    <div className="app">
      
      <h1>Calculadora de BTUs</h1>
      <span>Vamos escolher seu ar condicionado!</span>
      <div className="area-input">

          <select onChange={(e)=> setLuzSolar(e.target.value)}>
            <option selected={true} >Qual é a Insidencia de Sol no ambiente ?</option>
            <option  value={baixa} >Luz Solar Baixa</option>
            <option  value={alta} >Luz Solar Alta</option>
          </select>

          <input
           type="text"
           disabled={true}
            placeholder="luz solar "
            value={luzSolar}
           />
          <input
           type="number"
            placeholder="metragem do ambiente"
            value={metro}
            onChange={(e)=> setMetro(e.target.value)}
           />
           <button  onClick={calcularBTU} >
             Calcular
           </button>
           
      </div>
      
      <h2> {mensagem } </h2>

      <footer>© Todos os Diretos Reservados - William Pereira.</footer>
    </div>
  )
}