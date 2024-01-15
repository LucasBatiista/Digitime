import Head from 'next/head'
import Container from 'react-bootstrap/Container';
import Layout from '../layout';
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
                    <Layout>
                        <section class="py-5">
                          <div class="container px-5 my-5">
                            <div class="card w-75">
                              <div class="card-body">
                                <h5 class="card-title">Corrida da Policial Civil</h5>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16">
                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71z"/>
                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0"/>
                                </svg>
                                <p class="card-text">
                                  07:00 - 10:00
                                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                  </svg>
                                  Manaus, Am
                                  </p>
                                <a href="#" class="btn btn-primary">Button</a>
                              </div>
                            </div>
                            <br />
                            <div class="card w-75">
                              <div class="card-body">
                                <h5 class="card-title">Circuito SESC de Corridas Night Run</h5>
                                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                <a href="#" class="btn btn-primary">Button</a>
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
