import { useRouter } from 'next/router';

import Layout from '../../../components/Layout';

function ClienteProCodigo() {
    const router = useRouter();

    return (
        <Layout titulo='Navegação Dinâmica'>
            <div>Filial = {router.query.filial}</div>
            <div>Código = {router.query.codigo}</div>
        </Layout>
    )
}

export default ClienteProCodigo;