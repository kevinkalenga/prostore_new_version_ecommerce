
import ProductList from "@/components/product/product-list"
import { getLatestProducts } from "@/lib/actions/product.actions"


const HomePage = async () => {
  // console.log(sampleData)
  const latestProducts = await getLatestProducts() 
  return (
    <>
      <ProductList data={latestProducts} title='Newest Arrivals' limit={4} />
    </>
  )
}

export default HomePage