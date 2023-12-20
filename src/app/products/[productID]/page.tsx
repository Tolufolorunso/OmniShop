import React from 'react'

function ProductPage(props: any) {
  // console.log(props)
  const { params } = props
  return (
    <main className="bg-white my-16">
      <div className="container">{params.productID}</div>
    </main>
  )
}

export default ProductPage
