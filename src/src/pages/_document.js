import createEmotionServer from "@emotion/server/create-instance"
import Document, { Head, Html, Main, NextScript } from "next/document"
import PropTypes from "prop-types"
import { ServerStyleSheet } from "styled-components"
import createEmotionCache from "../create_emotion_cache"
import theme, { roboto } from "../styles/theme"

export default function MyDocument(props) {
    const { emotionStyleTags } = props
    return (
        <Html lang="en" className={roboto.className}>
            <Head>
                {/* PWA primary color */}
                <meta name="theme-color" content={theme.palette.primary.main} />
                <link rel="shortcut icon" href="/favicon.ico" />
                <meta name="emotion-insertion-point" content="" />
                {emotionStyleTags}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    )
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with static-site generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage
    // for styled-components
    const sheet = new ServerStyleSheet()

    // You can consider sharing the same Emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache()
    const { extractCriticalToChunks } = createEmotionServer(cache)

    try {
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) =>
                    function EnhanceApp(props) {
                        return sheet.collectStyles(
                            <App emotionCache={cache} {...props} />
                        )
                    },
            })

        const initialProps = await Document.getInitialProps(ctx)
        // This is important. It prevents Emotion to render invalid HTML.
        // See https://github.com/mui/material-ui/issues/26561#issuecomment-855286153
        const emotionStyles = extractCriticalToChunks(initialProps.html)
        const emotionStyleTags = emotionStyles.styles.map((style) => (
            <style
                data-emotion={`${style.key} ${style.ids.join(" ")}`}
                key={style.key}
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{ __html: style.css }}
            />
        ))

        return {
            ...initialProps,
            emotionStyleTags,
            styles: (
                <>
                    {initialProps.styles}
                    {sheet.getStyleElement()}
                </>
            ),
        }
    } finally {
        sheet.seal()
    }
}

MyDocument.propTypes = {
    emotionStyleTags: PropTypes.array.isRequired,
}
