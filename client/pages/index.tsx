import { useQuery } from '@apollo/client'
import Layout from '@components/Layout/Layout'
import KawaiiHeader from '@components/KawaiiHeader/KawaiiHeader'
import ProductList from '@components/ProductList/ProductList'
import {
  GetAllAvocadosDocument,
  AvocadoFragment,
} from '@service/graphql/graphql'

const HomePage = () => {
  const { data } = useQuery(GetAllAvocadosDocument)

  let products = (data?.avos || []) as AvocadoFragment[]
  return (
    <Layout title="Home">
      <KawaiiHeader />
      <ProductList products={products} />
    </Layout>
  )
}

export default HomePage
