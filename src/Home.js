import React from 'react'
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className="home">
            <div className="home_container">
            <img
            className="home_image"
            src="https://store.ubi.com/on/demandware.static/-/Library-Sites-shared-library-web/default/dw2887500d/landings/2020/uplayplus_FT/uplayplus_hero.jpg"
            alt = ""
            />
        <div className="home_row">
            <Product 
            id="154524421"
            title="Tom Clancy's The Division 2" price = {29.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwebb4d74c/images/large/5e15ab9f5cdf9a1ec45ad831.jpg?sw=341&sh=450&sm=fit"
             rating={4}
              />
            <Product
            id="154524422"
            title="Assassin's Creed Valhalla" price = {49.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw75a90933/images/large/5e84a5065cdf9a21c0b4e737.jpg?sw=341&sh=450&sm=fit"
             rating={5}
              />
            <Product
            id="154524423"
            title="Tom Clancy's Rainbow Six Siege" price = {19.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwdf41a589/images/large/56c494ad88a7e300458b4d5a.jpg?sw=341&sh=450&sm=fit"
             rating={5}
              />
            
            
        </div>
        <div className="home_row">
            <Product
            
            id="154524424"
            title="Watch Dogs 2" price = {29.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwf5aa242b/images/large/574d3a8aca1a64fb3b8b4567.jpg?sw=341&sh=450&sm=fit"
             rating={4}
              />
            <Product 
            id="154524425"
            title="Watch Dogs: Legion" price = {59.99}
              image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwc0decf30/images/large/5cec2d9939798c0870c0769a.jpg?sw=341&sh=450&sm=fit"
              rating={5}
               />
            <Product 
            id="1545244216"
            title="Far Cry 6" price = {39.99}
               image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw7387f247/images/large/5ecd2c925cdf9a1528a8c1d1.jpg?sw=341&sh=450&sm=fit"
               rating={5}
                />
            
        </div>
        <div className="home_row">
        <Product 
        id="154524427"
        title="For Honor" price = {19.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dwa60a287f/images/large/5759633788a7e3de678b4567.jpg?sw=341&sh=450&sm=fit"
             rating={4}
              />
        <Product 
            id="154524428"
            title="The Crew 2" price = {14.99}
             image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw237d8d97/images/large/598c6a3e0c8ee469268b4568.jpg?sw=341&sh=450&sm=fit"
             rating={5}
              />
              <Product 
              id="154524429"
              title="Assassin's Creed Odyssey" price = {24.99}
              image="https://store.ubi.com/dw/image/v2/ABBS_PRD/on/demandware.static/-/Sites-masterCatalog/default/dw889b9197/images/large/5afda8aa6b54a4271407a875.jpg?sw=341&sh=450&sm=fit"
              rating={4}
               />              

        
        </div>
        </div>
        </div>
    );
}

export default Home
