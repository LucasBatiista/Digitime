import Alert from 'react-bootstrap/Alert';

export default function CardsResultados(props) {

    const results = props.results;

    const resultsList = results?.map((result) => (
        <>
        <div class="card w-100">
            <div class="card-body">
                <h5 class="card-title">{result.nome}</h5>
                <div class="container">
                    <div class="row">
                        <div class="col-sm">
                            <p class="card-text"><Alert.Link href={result.link} target='_blank'>Resultado aqui</Alert.Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <br />
        </>
    ));

    return (
        <>
        {resultsList}
        </>
        )

}