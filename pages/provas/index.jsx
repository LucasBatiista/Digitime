import Container from 'react-bootstrap/Container';
import Layout from '../layout';
import Button from 'react-bootstrap/Button';
import { Prisma, PrismaClient } from '@prisma/client';
import Cards from './cards_prova';

const prisma = new PrismaClient();

export default function Provas(props) {

    const provas = props.provas;

    return (
    <>
      <Container class="d-flex flex-column h-100">
        <main class="flex-shrink-0">
          <Layout>
            <section class="py-5">
              <div class="container px-5 my-5">
                <div class="text-center mb-5">
                  <h1 class="fw-bolder">Confira as próximas provas</h1>
                </div>
                    {/* {provas?.map((prova, i) => ())} */}
                    <Cards events={ provas } />
                </div>
            </section>
          </Layout>
        </main>
      </Container>
    </>
  )
}

export async function getServerSideProps() {
    const allprovas = await prisma.provas.findMany({
      // where: [
      //   {
      //     dia: 
      //   },
      // ],
      orderBy: [
        {
          dia: 'asc',
        },
      ],
    });

    return {
      props: {
        provas: JSON.parse(JSON.stringify(allprovas)),
      },
    };
  }
