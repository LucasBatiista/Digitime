import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Layout from '../layout';

export default function Resultados() {
    return (
        <>
            <Container class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                    <Layout>
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
                    </Layout>
                </main>
            </Container>
        </>
    )
}
