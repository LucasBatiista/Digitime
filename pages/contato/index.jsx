import Head from 'next/head'
import { Container } from 'react-bootstrap'

export default function Contato() {
  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content="" />
        <meta name="author" content="" />
        <title>Contato - DIGITIME</title>
        <link href="style/index.css" rel="stylesheet" />
      </Head>
      <Container class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
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
                        <div class="py-5">
                            <div class="container px-5">
                                <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                                    <div class="text-center mb-5">
                                        <h1 class="fw-bolder">Entre em contato</h1>
                                        <p class="lead fw-normal text-muted mb-0">Subtexto</p>
                                    </div>
                                    <div class="row gx-5 justify-content-center">
                                        <div class="col-lg-8 col-xl-6">
                                            <form id="contactForm" data-sb-form-api-token="API_TOKEN">
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                                    <label for="name">Nome Completo</label>
                                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                                    <label for="email">Email</label>
                                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                                    <label for="phone">Celular/Whatsapp</label>
                                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{height: 200 }} data-sb-validations="required"></textarea>
                                                    <label for="message">Mensagem</label>
                                                    <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
                                                </div>
                                                <div class="d-none" id="submitSuccessMessage">
                                                    <div class="text-center mb-3">
                                                        <div class="fw-bolder">Form submission successful!</div>
                                                        To activate this form, sign up at 
                                                        <br />
                                                        <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                                                    </div>
                                                </div>
                                                <div class="d-none" id="submitErrorMessage"><div class="text-center text-danger mb-3">Error sending message!</div></div>
                                                <div class="d-grid"><button class="btn btn-primary btn-lg" id="submitButton" type="submit">Enviar</button></div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
