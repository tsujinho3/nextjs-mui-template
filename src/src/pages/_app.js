import { Fragment } from "react"
import GlobalStyle from "styles/global_style"

export default function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <GlobalStyle />
            <Component {...pageProps} />
        </Fragment>
    )
}
