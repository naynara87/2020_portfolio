import React from 'react';
import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import Loader from '../basics/Loader';
import axios from 'axios';
import WrapTitle from '../basics/WrapTitle';
import PortInfo from '../basics/PortInfo';

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports: [], //api 데이터를 저장
    };

    getPorts = async () => {
        const {
            data: {
                data: { ports },
            },
        } = await axios.get(
            'https://webstoryboy.github.io/dothome1/portfolio.json'
        );
        //console.log(ports);
        //console.log(ports.data.data.ports);
        this.setState({ ports, isLoading: false });
    };

    componentDidMount() {
        setTimeout(() => {
            //this.setState({ isLoading: false });
            this.getPorts();
        }, 2000);
    }
    render() {
        const { isLoading, ports } = this.state;
        return (
            <div>
                {isLoading ? (
                    <Loader />
                ) : (
                    <div id="wrap">
                        <Header info="none" />
                        <Layout>
                            <section id="portCont">
                                <div className="container">
                                    <WrapTitle text={['Portfolio', 'Site']} />
                                    <div className="port__cont">
                                        {ports.map((port) => (
                                            <PortInfo
                                                key={port.id}
                                                id={port.id}
                                                title={port.title}
                                                category={port.category}
                                                src={port.link}
                                                img={port.image}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </section>
                        </Layout>
                        <Footer />
                    </div>
                )}
            </div>
        );
    }
}

// function Portfolio() {
//     return (
//         <div id="wrap">
//             <Header info="none" />
//             <Layout />
//             <Footer />
//         </div>
//     );
// }

export default Portfolio;