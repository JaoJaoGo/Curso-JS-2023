import Layout from '../components/Layout';

const Estatico = (props) => {
    return (
        <Layout titulo='Conteúdo Estático'>
            <div>
                {props.numero}
            </div>
        </Layout>
    )
}

export function getStaticProps() {
    return {
        props: {
            numero: Math.random()
        }
    }
}

export default Estatico;