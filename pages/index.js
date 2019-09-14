import React from 'react';
import Router from 'next/router';

import { mapGlobals, mapHome } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import Home from 'components/views/home'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

const stateData = require("utils/stateObject");

class HomePage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const homeResponse = await Request.getObject('home');
    const home = mapHome(homeResponse.object);
    const globals = mapGlobals(Response.objects);
    return { globals, home };
  }

  constructor(props){
    super(props);
    this.state = stateData.getStateData();
    console.log("ASDASDASD", this.state);
  }

	render() {
		return (
      <Meta>
        <Head>
          <title>Blishem - Vive momentos y sabores inolvidables</title>
          <meta name="description" content={ this.state.home.seo_description.value } />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <Home home={this.state.home}></Home>
        <Footer footer={this.state.footer} social={this.state.social} contactInfo={this.state.contactInfo} />
      </Meta>
		);
	}
}

export default HomePage;
