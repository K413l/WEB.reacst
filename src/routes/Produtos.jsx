import { ListaProdutos } from "../components/ListaProdutos";

export default function Produtos() {
  
  document.title = 'produtos';

  
  return (
  <div>
      <h1>Produtos</h1>

      <div>
          
          <table>
            
            <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>DESCRIÇÃO</th>
                <th>IMAGEM</th>
                <th>PREÇO</th>
                <th>EDITAR/EXCLUIR</th>
            </tr>

            {ListaProdutos.map( (item,indice)=>(
              <tr key={indice}>
                <td>{item.id}</td>
                <td>{item.nome}</td>
                <td>{item.desc}</td>
                <td><img src={`${item.img}`} alt={`${item.desc}`} /></td>
                <td>{item.preco}</td>
                <td> <link to={`/editar/produtos/${item.id}`}>Editar</link> / <link to={`/excluir/produtos/${item.id}`}>Excluir</link>/</td>
              </tr>
            ))}

          </table>

      </div>
  </div>
  )
}
