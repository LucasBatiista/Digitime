import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function Home() {
  return (
    <Container className="md-container">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Home - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
      </Head>
      <Container>
        <div>
            <body class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                            <div class="container px-5">
                                <img class="img-fluid rounded-3" width="250px" src="/digitime_logo3.png" alt="..." />
                                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                                        <li class="nav-item"><a class="nav-link" href="">Quem somos</a></li>
                                        <li class="nav-item"><a class="nav-link" href="">Serviços</a></li>
                                        <li class="nav-item"><a class="nav-link" href="">Provas</a></li>
                                        <li class="nav-item"><a class="nav-link" href="">Resultados</a></li>
                                        <li class="nav-item"><a class="nav-link" href="/contato">Contato</a></li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                        <header class="bg-dark py-5">
                            <div class="container px-5">
                                <div class="row gx-5 align-items-center justify-content-center">
                                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                                        <div class="my-5 text-center text-xl-start">
                                            <h1 class="display-5 fw-bolder text-white mb-2">Bem vindo ao nosso mundo</h1>
                                            <p class="lead fw-normal text-white-50 mb-4">A DIGITIME INOVA, empresa genuinamente amazonense, atua no ramo de cronometragem eletrônica de eventos esportivos, com a maior tecnologia existente, além de uma equipe especializada e dedicada a produzir resultados com rapidez e confiabilidade.</p>
                                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="">Resultados de Provas</a>
                                                {/* <a class="btn btn-outline-light btn-lg px-4" href="">Entrar em contato</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="/empresa_digitime.jpg" alt="..." /></div>
                                </div>
                            </div>
                        </header>
                    </main>
                <footer class="bg-dark py-4 mt-auto">
                    <div class="container px-5">
                        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Digitime 2023</div></div>
                        </div>
                    </div>
                </footer>
            </body>
        </div>
        </Container> 
    </Container>
  )
}
