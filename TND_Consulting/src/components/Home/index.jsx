import React from 'react';
import './style.scss';

const Home = () => {
  return (
    <div className="home">
        <div className="home_top">
            <h1 className="home_top--title">
                THOMAS NODIER - WORKDAY ABSENCE & TIME TRACKING FREELANCE
            </h1>
            <p className="home_top--content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu urna tortor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In faucibus laoreet metus. Morbi commodo arcu ac magna tincidunt elementum. Sed sed dui ac enim lobortis hendrerit. Vivamus vitae ex et augue porta egestas. Mauris interdum porta elit, nec imperdiet enim volutpat non. Cras porttitor sagittis dui id vehicula. Vivamus ac faucibus urna, quis ultricies urna. Mauris eleifend, diam at fringilla fermentum, eros magna ultrices risus, id elementum odio lectus eu libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </div>
        <div className="home_bottom">
        //TODO Create logo with buttons in SASS
            <img className="home_bottom--content" src="/home_bottom.png" alt="Services logo" />
        </div>
    </div>
  )
}

export default Home;