import React from 'react'
import './Home.css'
import Product from './Product'
function Home() {
    return (
        <div className='home'>
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/ShakuntalaDevi/1500x600_Hero-Tall_np._CB406910536_.jpg" alt=""
            >
            </img>

            <div className="home__row">
                <Product
                    id="1234567"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="https://m.media-amazon.com/images/I/91Vg-6MEI2L._AC_UY218_.jpg"
                    rating={4}
                ></Product>

                <Product
                    id="1234568"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
                    rating={4}
                ></Product>
            </div>
            <div className="home__row">
                <Product
                    id="1234569"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
                    rating={4}
                ></Product>

                <Product
                    id="1234561"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="https://images-eu.ssl-images-amazon.com/images/I/61MrRA4qE0L._AC_UL320_SR248,320_.jpg"
                    rating={4}
                ></Product>

                <Product
                    id="1234562"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="https://images-na.ssl-images-amazon.com/images/I/71ZU4VsevqL._SL1000_.jpg"
                    rating={4}
                ></Product>
            </div>
            <div className="home__row">

                <Product
                    id="1234563"
                    title="The Lean Startup:How constant innovation Creates just my thing hello"
                    price={11.96}
                    image="            https://images-na.ssl-images-amazon.com/images/I/71nplbAMwzL._SL1202_.jpg
                    "
                    rating={4}
                ></Product>
            </div>

        </div>
    )
}

export default Home
