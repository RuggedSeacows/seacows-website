import App from "next/app"
import "@theme/index.less"
import { Provider } from "mobx-react"// @ts-ignore
import { withMobx } from "next-mobx-wrapper"
import Head from "next/head"
import * as getStores from "@src/store"

class YoloApp extends App {
  render() {
    const { Component, pageProps, store } = this.props as any
    return (
      <Provider {...store}>
        <Head>
          <title>SeaCows</title>
          <meta name="google-site-verification" content="0zmAWxCN2pLR65Mks8ffunSdn389drsRlZ3cUObSKO4" />
          <meta name="viewport"  content="width=device-width, initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
          <meta name="keywords" content="SSeacows, Seacows nft, nft amm, Seacows amm, nft trading, nft defi, nft marketplace, NFT price evaluation, gamefi nft" />
          <meta
            name="description"
            content="SeaCows is a decentralized NFT AMM powered by AI-driven price oracles to enable instant NFT trading"
          />
          <link rel="shortcut icon" href="/favicon.png" type="image/png"></link>
          <link href="https://fonts.font.im/css?family=Rubik" rel="stylesheet"></link>
          <link rel="stylesheet" href="/font/iconfont.css"></link>
          <link rel="stylesheet" href="/normal.css" />
          <link rel="stylesheet" href="/animate.css" />
          <link rel="stylesheet" href="/static/swiper.min.css" type="text/css" charSet="utf-8" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-R966F3LW8F"></script>
          <script src="/gtag.js"></script>
          {/* <script src="/segment.js"></script> */}
          <script src="/static/swiper.min.js"></script>
        </Head>
        <div className="wrapper">
          {/* <HeaderBar {...store} /> */}
          <Component {...pageProps} {...store} />
          {/* <FooterBar /> */}
        </div>
      </Provider>
    )
  }
}

export default withMobx(getStores)(YoloApp)
