import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Layout from '../layout';

export default function Servicos() {
    return (
        <>
            <Container class="d-flex flex-column">
                <main class="flex-shrink-0">
                    <Layout>
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
                    </Layout>
                </main>
            </Container>
        </>
    )
}
