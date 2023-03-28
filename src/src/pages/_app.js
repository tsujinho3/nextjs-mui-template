import { CacheProvider } from "@emotion/react"
import CssBaseline from "@mui/material/CssBaseline"
import { ThemeProvider } from "@mui/material/styles"
import PropTypes from "prop-types"
import GlobalStyle from "styles/global_style"
import createEmotionCache from "../create_emotion_cache"
import theme from "../styles/theme"

const clientSideEmotionCache = createEmotionCache()

export default function MyApp({
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
}) {
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <GlobalStyle />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    )
}

MyApp.propTypes = {
    Component: PropTypes.elementType.isRequired,
    emotionCache: PropTypes.object,
    pageProps: PropTypes.object.isRequired,
}
