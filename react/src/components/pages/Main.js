import React from "react";
import Header from "../Header";
import Layout from "../Layout";
import Footer from "../Footer";

function Main() {
  return (
    <div id="warp">
      <Header />
      <Layout>
        <section id="mainCont">
            <div className="main__cont">
              <div>WE PROVIDE</div>
              <div>VISUAL CODING</div>
              <div>SOLUTIONS</div>
              <div>FOR YOU WEBS</div>
            </div>
        </section>
      </Layout>
      <Footer />
    </div>
  );
}

export default Main;