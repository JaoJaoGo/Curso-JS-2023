import Pessoa from './pessoa'
import './assets' // Por estar apenas a pasta e não um arquivo específico, ele irá procurar um chamado index

const atendente = new Pessoa
console.log(atendente.cumprimentar())