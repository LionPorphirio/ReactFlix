import React from 'react'
import PageDefatult from '../../../components/PageDefault'
import { Link } from 'react-router-dom'

function CadastroVideo() {
    return (
      <PageDefatult>
        <h1>Cadastro de Vídeo</h1>

        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </PageDefatult>
    )
  }

  export default CadastroVideo;