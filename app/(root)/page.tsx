import sampleData from "@/db/sample-data"
import ProductList from "@/components/product/product-list"


const HomePage = () => {
  console.log(sampleData)
  return (
    <>
      <ProductList data={sampleData.products} title='Newest Arrivals' limit={4} />
    </>
  )
}

export default HomePage