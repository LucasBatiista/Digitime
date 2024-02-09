import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Layout from './layout'
import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export default function Home() {
    return (
        <>
            <Container class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                    <Layout>
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
                        <section class="py-5">
                            <div class="text-center mb-5">
                                <h1 class="fw-bolder">Galeria de imagens</h1>
                            </div>
                            <div class="container px-5 my-5">
                                <Carousel data-bs-theme="dark">
                                    <Carousel.Item>
                                        <Image className="d-block w-100 h-50" src='/slide2.jpg' />
                                        <Carousel.Caption>
                                        {/* <h3>First slide label</h3>
                                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image className="d-block w-100 h-50" src='/slide1.jpg'/>
                                        <Carousel.Caption>
                                        {/* <h3>Second slide label</h3>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <Image className="d-block w-100 h-50" src='/slide3.jpg'/>
                                        <Carousel.Caption>
                                        {/* <h3>Third slide label</h3>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </div>
                        </section>
                    </Layout>
                </main>
            </Container>
        </>
    )
}
