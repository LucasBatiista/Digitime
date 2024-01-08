import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function Servicos() {
  return (
    <Container className="md-container">
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Serviços - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
      </Head>
      <Container class="d-flex flex-column">
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
                    
                    <section class="py-5 bg-light" id="scroll-target">
                        <div class="container px-5 my-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6"><img class="img-fluid rounded mb-5 mb-lg-0" src="/numero_peito.jpeg" alt="..." /></div>
                                <div class="col-lg-6">
                                    <h2 class="fw-bolder">Número de Peito</h2>
                                    <p class="lead fw-normal text-muted mb-0">Produto voltado ao mercado esportivo de corridas de rua e pista. É a prova d’água suportando chuva e suor, extremamente resistente ao manuseio e impressos com jato de cera sólida, proporcionando qualidade e robustez na impressão.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="py-5">
                        <div class="container px-5 my-5">
                            <div class="row gx-5 align-items-center">
                                <div class="col-lg-6 order-first order-lg-last"><img class="img-fluid rounded mb-5 mb-lg-0" src="/cronometragem_eletronica.jpeg" alt="..." /></div>
                                <div class="col-lg-6">
                                    <h2 class="fw-bolder">Cronometragem Eletrônica</h2>
                                    <p class="lead fw-normal text-muted mb-0">Os serviços de cronometragem eletrônica vêm para facilitar a apuração de resultados em vários esportes como corridas de rua, Maratonas Aquáticas, Triathlon e muitos outros, trazendo maior agilidade, dinamismo e confiabilidade nos resultados e premiações.</p>
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
