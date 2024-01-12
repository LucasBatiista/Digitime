import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export default function Servicos() {
  return (
    <>
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
                    <Navbar expand="lg" className="bg-dark navbar-dark">
                        <Container>
                            <Navbar.Brand href="#home"><img class="img-fluid rounded-3" width="170px" src="/digitime_logo3.png" alt="..." /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="me-auto">
                                    <Nav.Link href="/">Home</Nav.Link>
                                    <Nav.Link href="/quem-somos">Quem Somos</Nav.Link>
                                    <Nav.Link href="/servicos">Serviços</Nav.Link>
                                    <Nav.Link href="/provas">Provas</Nav.Link>
                                    <Nav.Link href="/resultados">Resultados</Nav.Link>
                                    <Nav.Link href="/contato">Contato</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Container>
                    </Navbar>
                    
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
                <footer class="bg-dark py-4 mt-auto">
                    <div class="container px-5">
                        <div class="row align-items-center justify-content-between flex-column flex-sm-row">
                            <div class="col-auto"><div class="small m-0 text-white">Copyright &copy; Digitime 2023</div></div>
                        </div>
                    </div>
                </footer>
        </Container> 
    </>
  )
}
