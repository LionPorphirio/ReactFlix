import React, { useState, useEffect } from 'react'
import PageDefatult from '../../../components/PageDefault'
import { Link } from 'react-router-dom'
import FormField from '../../../components/FormField'
import Button from '../../../components/Button'

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  }
  const [categorias, setCategorias] = useState([])
  const [values, setValues] = useState(valoresIniciais)



  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleChange(infosDoEvento) {
    setValue(
    infosDoEvento.target.getAttribute('name'), 
    infosDoEvento.target.value
    )
  }

  useEffect(() => {
    console.log('hello buradjiro')
    const URL = 'http://localhost:3000/cadastro/categoria'
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json()
        setCategorias([
          ...resposta,
        ])
      })

    // setTimeout(() => {
    //   setCategorias([
    //     ...categorias,
    //       {
    //         "id": 1,
    //         "nome": "Front End",
    //         "descricao": "uma categoria bacanudassa",
    //         "cor": "cbd1ff"

    //     },

    //     {
    //         "id": 2,
    //         "nome": "Back End",
    //         "descricao": "uma categoria bacanudassa",
    //         "cor": "cbd1ff"

    //     },
    //   ])
    // }, 4 * 1000)
  }, [])

    return (
      <PageDefatult>
        <h1>Cadastro de Categoria: {values.nome}</h1>


        <form onSubmit={function handleSubmit(infosDoEvento) {
          infosDoEvento.preventDefault();
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valoresIniciais)
        }}>
          
          <FormField 
            label="Nome da Categoria"
            type="text"
            name="nome"
            value={values.nome}
            onChange={handleChange}
          />

          <FormField 
            label="Descrição"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField 
            label="Cor"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <Button>
            Cadastrar
          </Button>
        </form>

        {categorias.length === 0 && (
          <div>
            {/* Cargando... */}
            Loading...
          </div>
        )}

        <ul>
          {categorias.map((categoria) => {
            return (
              <li key={`${categoria.nome}`}>
                {categoria.nome}
              </li>
            )
          })}
        </ul>

        <Link to="/">
          Ir para home
        </Link>
      </PageDefatult>
    )
  }

  export default CadastroCategoria;