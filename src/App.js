import "./App.css";

function App() {
  return (
    <div className="container">
      <header className="cabecalho_logo">
        <img src="/imagens/logo.jpeg" alt="Imagem da Logo Marca" />
      </header>
      <section className="container_botoes">
        <ul className="lista_botoes">
          <a href="https://www.instagram.com/iluminadaa_fashion/">
            <li className="itens_botoes">
              <div>
                <img src="/imagens/instagram.png" alt="Logo Instagram" />
              </div>
              <span>Instagram</span>
            </li>
          </a>

          <a href="https://api.whatsapp.com/send?phone=5571985168230&text=Ol%C3%A1,%20Vim%20pelo%20Instagram%20e%20gostaria%20de%20maiores%20informa%C3%A7%C3%B5es%20sobre%20as%20roupas!">
            <li className="itens_botoes">
              <div>
                <img src="/imagens/whatsapp.png" alt="Logo WhatsApp" />
              </div>
              <span>WhatsApp</span>
            </li>
          </a>
          <li className="itens_botoes">
            <div>
              <img src="/imagens/raio.png" alt="Logo Raio" />
            </div>
            <span>Catálogo</span>
          </li>
          <li className="itens_botoes">
            <div>
              <img src="/imagens/shopee.png" alt="Logo Shopee" />
            </div>
            <span>Loja Online</span>
          </li>
        </ul>
      </section>
      <footer className="footer">
        <div className="footer_informativos">
          <span>
            Copyright © 2023 Iluminada Fashion - Todos os direitos reservados
          </span>
          <span>
            <a href="https://www.iluminadafashion.com.br">
              www.iluminadafashion.com.br
            </a>
          </span>
        </div>
      </footer>
    </div>
  );
}

export default App;
