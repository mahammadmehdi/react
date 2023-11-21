import React from 'react'
import Card from '../Card'

import "./index.css"

function Products() {
  return (
    <div className='products'>




        <Card title = "Sport Ayaqqabi" description = "$25.00" img="https://akn-desa.a-cdn.akinoncloud.com/products/2023/01/19/188301/cffaa0b8-c709-4ba2-aa34-4cb152f4068c_size780x780_cropCenter.jpg"></Card>
        <Card title = "Klassik Ayaqqabi" description = "$90.00" img = "https://strgimgr.umico.az/sized/1680/325698-0d78e62a2093e52a6e9744c745f33312.jpg"></Card>
        <Card title = "cekelek" description = "$5.00" img = "https://unimall.az/images/detailed/247/Fashy_Yacht_Club_7227_10_Ciabatte_da_---1900.jpg"></Card>
    </div>
  )
}

export default Products