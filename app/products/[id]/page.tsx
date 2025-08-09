const ProductsPage = async ({
    params, 
} : {
    params: Promise<{id: string}>;
} ) => {
    const resultParams = await params;
    console.log('ini :',resultParams.id);
  return (
    <div>
      <h1>Products Detail Page</h1>
      <p>ini id nya : { resultParams.id }</p>
    </div>
  )
}

export default ProductsPage