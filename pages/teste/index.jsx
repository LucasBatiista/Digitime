import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Head from 'next/head'

function BasicExample() {
  return (
    <>
    <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Home - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
    </Head>
    <Navbar expand="lg" className="bg-dark navbar-dark">
      <Container>
        <Navbar.Brand href="#home"><img class="img-fluid rounded-3" width="170px" src="/digitime_logo3.png" alt="..." /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#QuemSomos">Quem Somos</Nav.Link>
            <Nav.Link href="#Servicos">Serviços</Nav.Link>
            <Nav.Link href="#Provas">Provas</Nav.Link>
            <Nav.Link href="#Resultados">Resultados</Nav.Link>
            <Nav.Link href="#Contato">Contato</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <header class="bg-dark py-5">
        <div class="container px-5">
                                <div class="row gx-5 align-items-center justify-content-center">
                                    <div class="col-lg-8 col-xl-7 col-xxl-6">
                                        <div class="my-5 text-center text-xl-start">
                                            <h1 class="display-5 fw-bolder text-white mb-2">Bem vindo ao nosso mundo</h1>
                                            <p class="lead fw-normal text-white-50 mb-4">A DIGITIME INOVA, empresa genuinamente amazonense, atua no ramo de cronometragem eletrônica de eventos esportivos, com a maior tecnologia existente, além de uma equipe especializada e dedicada a produzir resultados com rapidez e confiabilidade.</p>
                                            <div class="d-grid gap-3 d-sm-flex justify-content-sm-center justify-content-xl-start">
                                                <a class="btn btn-primary btn-lg px-4 me-sm-3" href="/resultados">Resultados de Provas</a>
                                                {/* <a class="btn btn-outline-light btn-lg px-4" href="">Entrar em contato</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-xl-5 col-xxl-6 d-none d-xl-block text-center"><img class="img-fluid rounded-3 my-5" src="/empresa_digitime.jpg" alt="..." /></div>
                                </div>
                            </div>
                        </header>
    </>
  );
}

export default BasicExample;