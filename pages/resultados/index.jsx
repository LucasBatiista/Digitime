import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function Resultados() {
  return (
    <Container className="md-container">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Resultados - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
      </Head>
      <Container class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                        <div class="container px-5">
                            <img class="img-fluid rounded-3" width="170px" src="/digitime_logo3.png" alt="..." />
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item"><a class="nav-link" href="/">Home</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/quem-somos">Quem somos</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/servicos">Serviços</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/provas">Provas</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/resultados  ">Resultados</a></li>
                                    <li class="nav-item"><a class="nav-link" href="/contato">Contato</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <section class="py-5">
                        <div class="container px-5 my-5">
                            <div class="text-center mb-5">
                                <h1 class="fw-bolder">Acesse os resultados das últimas corridas</h1>
                                {/* <p class="lead fw-normal text-muted mb-0">Company portfolio</p> */}
                            </div>
                            <div class="row gx-5">
                                <div class="col-lg-6">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-3 mb-3" src="/policia-civil.jpg" alt="..." />
                                        <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://resultscui.active.com/events/1%C2%AACorridadoPolicialCivil">Corrida da Policial Civil</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="position-relative mb-5">
                                        <img class="img-fluid rounded-3 mb-3" src="/SESC.jpg" alt="..." />
                                        <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://estounessa.com.br/wiclax/g-live.html?f=RESONLINE/20231104sesc.clax">Circuito SESC de Corridas Night Run</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="position-relative mb-5 mb-lg-0">
                                        <img class="img-fluid rounded-3 mb-3" src="/Terra-das-Cachoeiras.jpg" alt="..." />
                                        <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://resultscui.active.com/events/3%C2%AACorridaTerradasCachoeiras">3ª Corrida Pedestre Terra das Cachoeiras</a>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="position-relative">
                                        <img class="img-fluid rounded-3 mb-3" src="/tutiplast.jpg" alt="..." />
                                        <a class="h3 fw-bolder text-decoration-none link-dark stretched-link" href="https://resultscui.active.com/events/CorridaTuti30Anos">Corrida Tuti 30 Anos</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>   
                </main>
                <footer class="fixed-bottom bg-dark py-4 mt-auto">
                    <div class="container px-5">
                        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Digitime 2023</div></div>
                        </div>
                    </div>
                </footer>
        </Container> 
    </Container>
  )
}
