import React from 'react';
import axios from 'axios';
import Loader from '../basics/Loader';
import Header from '../Header';
import Footer from '../Footer';
import Layout from '../Layout';
import WrapTitle from '../basics/WrapTitle';
import ReferInfo from '../basics/ReferInfo';

class Reference extends React.Component {
  state = {
      isLoading: true,
      refers: [],
  };

  getRefer = async () => {
      const {
          data: {
              data: { htmlRefer },
          },
      } = await axios.get(
          'https://webstoryboy.github.io/dothome1/refer.json'
      );
      this.setState({ htmlRefer, isLoading: false });
  };

  componentDidMount() {
      setTimeout(() => {
          //this.setState({ isLoading: false });
          this.getRefer();
      }, 1000);
  }

  render() {
      const { isLoading, htmlRefer } = this.state;
      return (
          <div>
              {isLoading ? (
                  <Loader />
              ) : (
                  <div id="wrap" className="light">
                      <Header info="none" />
                      <Layout>
                          <section id="referCont">
                              <div className="container">
                                  <WrapTitle text={['Reference', 'Site']} />
                                  <div className="refer-cont">
                                      <div className="refer-table">
                                          <ul>
                                              {htmlRefer.map((refer) => (
                                                  <ReferInfo
                                                      key={refer.id}
                                                      id={refer.id}
                                                      title={refer.title}
                                                      desc={refer.desc}
                                                  />
                                              ))}
                                          </ul>
                                      </div>
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
export default Reference;