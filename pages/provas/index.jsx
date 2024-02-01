import Container from 'react-bootstrap/Container';
import Layout from '../layout';
import Button from 'react-bootstrap/Button';
import Cards from './cards_prova';
import Months from './cards_mes';


export default function Provas() {

  const events = [
    { card_title: "Corrida 1", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 2", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 3", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 4", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 5", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 6", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 7", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 8", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 9", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 10", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 11", card_date: "17/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
    { card_title: "Corrida 12", card_date: "20/01", card_event_hour: "07:00 - 10:00", card_adress: "Manaus, Am" },
  ];

  const months = [
    {month: "Janeiro 2024"},
    {month: "Feveiro 2024"},
    {month: "Março 2024"},
    {month: "Abril 2024"},
    {month: "Maio 2024"},
    {month: "Junho 2024"},
    {month: "Julho 2024"},
    {month: "Agosto 2024"},
    {month: "Setembro 2024"},
    {month: "Outubro 2024"},
    {month: "Novembro 2024"},
    {month: "Dezembro 2024"},
  ];

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
                <Months months={months} />
                <Cards events={events} />
              </div>
            </section>
          </Layout>
        </main>
      </Container>
    </>
  )
}
