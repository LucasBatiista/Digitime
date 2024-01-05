import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <title>Contato - DIGITIME</title>
      </Head>
      <Container>
        <div class="col-lg-8 mx-auto p-4 py-md-5" />
            <header class="d-flex align-items-center pb-3 md-5">
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <a class="navbar-brand" href="#">
                            <img src="/digitime_logo.png" width="300" alt="" />
                        </a>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                            <li class="nav-item">
                                <a class="nav-link" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                            <a class="nav-link" href="index.html">Quem somos</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Serviços</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Provas</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="resultados.html">Resultados</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contato.html">Contato</a>
                            </li>
                        </ul>
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Pesquisar" aria-label="Search" />
                            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Pesquisar</button>
                        </form>
                        </div>
                    </nav>
                </div>
            </header>
            <main>
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Nome</label>
                        <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Nome" />
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Contato</label>
                        <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Contato" />
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
            </main>
      </Container>
      <footer class="pt-5 my-5 text-body-secondary border-top">© Digitime 2023 </footer>
    </Container>
  )
}
