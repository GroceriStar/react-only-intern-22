import React, { Component } from 'react';

import './../assets/css/demo.css';
import './../assets/css/component.css';
import Header from '../components/Header/Header';
import img1 from './../assets/images/1.png';
import img2 from './../assets/images/2.png';
import img3 from './../assets/images/3.png';
import img4 from './../assets/images/4.png';
import img5 from './../assets/images/5.png';
import img6 from './../assets/images/6.png';

class Template extends Component {

    render() {
        return(
            <div>
                <div className="container">
                    <Header />
                    <div id="cbp-so-scroller" className="cbp-so-scroller">
                        <section className="cbp-so-section">
                            <article className="cbp-so-side cbp-so-side-left">
                                <h2>Lemon drops</h2>
                                <p>Fruitcake toffee jujubes. Topping biscuit sesame snaps jelly caramels jujubes tiramisu fruitcake. Marzipan tart lemon drops chocolate sesame snaps jelly beans.</p>
                            </article>
                            <figure className="cbp-so-side cbp-so-side-right">
                                <img src={img1} alt="img01"/>
                            </figure>
                        </section>
                        <section className="cbp-so-section">
                            <figure className="cbp-so-side cbp-so-side-left">
                                <img src={img2} alt="img01" />
                            </figure>
                            <article className="cbp-so-side cbp-so-side-right">
                                <h2>Plum caramels</h2>
                                <p>Lollipop powder danish sugar plum caramels liquorice sweet cookie. Gummi bears caramels gummi bears candy canes cheesecake sweet roll icing dragée. Gummies jelly-o tart. Cheesecake unerdwear.com candy canes apple pie halvah chocolate tiramisu.</p>
                            </article>
                        </section>
                        <section className="cbp-so-section">
                            <article className="cbp-so-side cbp-so-side-left">
                                <h2>Marzipan gingerbread</h2>
                                <p>Soufflé bonbon jelly cotton candy liquorice dessert jelly bear claw candy canes. Pudding halvah bonbon marzipan powder. Marzipan gingerbread sweet jelly.</p>
                            </article>
                            <figure className="cbp-so-side cbp-so-side-right">
                                <img src={img3} alt="img01"/>
                            </figure>
                        </section>
                        <section className="cbp-so-section">
                            <figure className="cbp-so-side cbp-so-side-left">
                                <img src={img4} alt="img01"/>
                            </figure>
                            <article className="cbp-so-side cbp-so-side-right">
                                <h2>Carrot cake</h2>
                                <p>Sesame snaps sweet wafer danish. Chupa chups carrot cake icing donut halvah bonbon. Chocolate cake candy marshmallow pudding dessert marzipan jujubes sugar plum.</p>
                            </article>
                        </section>
                        <section className="cbp-so-section">
                            <article className="cbp-so-side cbp-so-side-left">
                                <h2>Pudding lollipop</h2>
                                <p>Chupa chups pudding lollipop gummi bears gummies cupcake pie. Cookie cotton candy caramels. Oat cake dessert applicake. Sweet roll tiramisu sweet roll sweet roll.</p>
                            </article>
                            <figure className="cbp-so-side cbp-so-side-right">
                                <img src={img5} alt="img01"/>
                            </figure>
                        </section>
                        <section className="cbp-so-section">
                            <figure className="cbp-so-side cbp-so-side-left">
                                <img src={img6} alt="img01"/>
                            </figure>
                            <article className="cbp-so-side cbp-so-side-right">
                                <h2>Soufflé bonbon</h2>
                                <p>Cake cotton candy lollipop. Cake croissant cheesecake candy sugar plum icing apple pie wafer. Pie sugar plum tiramisu tiramisu pie fruitcake candy icing. Candy icing gummies gummies cheesecake brownie lemon drops chocolate gingerbread.</p>
                            </article>
                        </section>
                    </div>
                </div>
            </div>
        );
    }
}

export default Template;