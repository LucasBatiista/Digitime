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
                        <Card style={{ width: '20rem' }}>
                        <Card.Img variant="top" src="/policia-civil.jpg" />
                        <Card.Body>
                            <Card.Title>Corrida da Policial Civil</Card.Title>
                            <Button variant="primary">Confira o resultado</Button>
                        </Card.Body>
                        </Card>
                        </section>
                    </Layout>
                </main>
        </Container>
    </>
  )
}
