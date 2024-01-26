import Head from 'next/head';
import Container from 'react-bootstrap/Container';
import Layout from '../layout';

export default function Contato() {

    async function onSubmit(event) {
        console.log("AQUI")
        event.preventDefault()

        const formData = new FormData(event.target)
        const response = await fetch('/api/email', {
            method: 'POST',
            body: formData,
        })

        // Handle response if necessary
        const data = await response.json()
        // ...
    }

    return (
        <>
            <Container class="d-flex flex-column h-100">
                <main class="flex-shrink-0">
                    <Layout>
                        <div class="py-5">
                            <div class="container px-5">
                                <div class="bg-light rounded-3 py-5 px-4 px-md-5 mb-5">
                                    <div class="text-center mb-5">
                                        <h1 class="fw-bolder">Entre em contato</h1>
                                        <p class="lead fw-normal text-muted mb-0">Mande sua mensagem</p>
                                    </div>
                                    <div class="row gx-5 justify-content-center">
                                        <div class="col-lg-8 col-xl-6">
                                            <form onSubmit={onSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="name" type="text" placeholder="Enter your name..." data-sb-validations="required" />
                                                    <label htmlFor="name">Nome Completo</label>
                                                    <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="email" type="email" placeholder="name@example.com" data-sb-validations="required,email" />
                                                    <label htmlFor="email">Email</label>
                                                    <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                                                    <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <input class="form-control" id="phone" type="tel" placeholder="(123) 456-7890" data-sb-validations="required" />
                                                    <label htmlFor="phone">Celular/Whatsapp</label>
                                                    <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
                                                </div>
                                                <div class="form-floating mb-3">
                                                    <textarea class="form-control" id="message" type="text" placeholder="Enter your message here..." style={{ height: 200 }} data-sb-validations="required"></textarea>
                                                    <label htmlFor="message">Mensagem</label>
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
                    </Layout>
                </main>
            </Container>
        </>
    )
}
