import './prova.css'
import Header from './components/Header';
import Footer from './components/Footer'

function Prova(){

    var url = 'https://opentdb.com/api.php?amount=30&category=15';

    var category = document.querySelector('#category');
    var type = document.querySelector('#type');

    var categoria = [];
    var tipo = [];

    fetch(url)
    .then((response) => {
        return response.json()
    })

    return (
        <>
        <Header />
        <h1>Categoria: ${category, categoria}</h1>
        <h1>Tipo: ${type, tipo}</h1>
        <Footer />
        </>
    )
    }

    export default Prova;