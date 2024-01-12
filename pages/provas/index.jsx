import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Provas() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Provas - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
      </Head>
      <Container class="d-flex flex-column h-100">
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
                    <section class="py-5">
                    <Card style={{ width: '20rem' }}>
                    <Card.Img variant="top" src="/policia-civil.jpg" />
                    <Card.Body>
                        <Card.Title>Corrida da Policial Civil</Card.Title>
                        <Button variant="primary">Confira o resultado</Button>
                    </Card.Body>
                    </Card>
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
