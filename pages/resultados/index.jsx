import Container from 'react-bootstrap/Container';
import Layout from '../layout';
import Button from 'react-bootstrap/Button';
import { Prisma, PrismaClient } from '@prisma/client';
import CardsResultados from '../../components/cards_resultados';

const prisma = new PrismaClient();

export default function Resultados(props) {

    const resultados = props.resultados;

    return (
    <>
      <Container class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
          <Layout>
            <section class="py-5">
              <div class="container px-5 my-5">
                <div class="text-center mb-5">
                  <h1 class="fw-bolder">Acesse os resultados das últimas corridas</h1>
                </div>
                    <CardsResultados results={ resultados } />
                </div>
            </section>
          </Layout>
        </main>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
    const allresultados= await prisma.resultados.findMany();

    return {
      props: {
        resultados: JSON.parse(JSON.stringify(allresultados)),
      },
    };
  }
