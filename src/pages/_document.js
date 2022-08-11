import { Html, Head, Main, NextScript } from 'next/document'
import NavbarElement from '../NavbarElement'
export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <NavbarElement />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}