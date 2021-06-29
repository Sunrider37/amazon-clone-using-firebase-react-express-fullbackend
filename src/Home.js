import React from 'react'
import './Home.css'
import Product from './Product'

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="Home" />
            <div className="home__row">

                <Product title='The Lean StartUp' price={29.99} 
                image='https://cdn.wamda.com/feature-images/5eda60444003d26.jpg'  rating={5} />
        
                <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
                 />
            </div>
            <div className="home__row">
            <Product 
              id="23445930"
              title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
              price={98.99}
              rating={5}
              image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product 
             id="3254354345"
             title="Apple Ipad! Look how cool it looks! You agree to sell your soul for it?"
             price={598.99}
             rating={4}
             image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            <Product 
            id="4903850"
            title="Samsun Watch"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"/>
            </div>
            <div className="home__row">
            <Product 
            id="90829332"
            title="Yet Another Overpriced Samsun product"
            price={999999.88}
            rating={10}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            </div>
            </div>
        </div>
    )
}

export default Home
