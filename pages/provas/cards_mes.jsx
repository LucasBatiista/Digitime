import Accordion from 'react-bootstrap/Accordion';

export default function Months(props) {

    const months = props.months;

    const monthsList = months.map((month) => (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item>
                    <Accordion.Header>{ month.month }</Accordion.Header>
                    <Accordion.Body></Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
        </>
    ))

    return (
        <>
        {monthsList}
        </>
    )
}