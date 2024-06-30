import '../home.css' 
import '../index.css'
import 'animate.css/animate.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import dynamic from 'next/dynamic'
const NavbarElement = dynamic(() => import('../NavbarElement'), { ssr: false })
function MyApp({ Component, pageProps }) {  
    return (
    <>    
    <NavbarElement />
    <Component {...pageProps} />
    </>
    )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  
  
  export default MyApp