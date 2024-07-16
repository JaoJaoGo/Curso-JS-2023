import Link from 'next/link';

import Navegador from '../components/Navegador';

function Inicio() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexWrap: 'wrap',
      height: '100dvh'
    }}>
      <Navegador destino='/estiloso' texto='Estiloso' />
      <Navegador destino='/exemplo' texto='Exemplo' corFundo='crimson' />
      <Navegador destino='/navegacao/' texto='Navegação #1' corFundo='green' />
      <Navegador destino='/cliente/go-2/123' texto='Navegação #2' corFundo='blue' />
      <Navegador destino='/estado' texto='Componente com Estado' corFundo='coral' />
      <Navegador destino='/integracao_1' texto='Integração com API #1' corFundo='orange' />
      <Navegador destino='/estatico' texto='Conteúdo Estático' corFundo='#fa054a' />
    </div>
  )
}

export default Inicio;