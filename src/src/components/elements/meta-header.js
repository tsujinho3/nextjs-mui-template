// 1. Import Layer
import Head from "next/head"
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => (
    <Head className={props.className}>
        <title>{props.title}</title>
        <meta name="description" content={props.content} />
        <link rel="icon" href={props.icon} />
    </Head>
)

// 3. Style Layer
const StyledComponent = styled(Component)``

// 4. Logic Layer
const LogicComponent = (props) => {
    return (
        <StyledComponent
            title={props.title}
            content={props.content}
            icon={props.icon}
        />
    )
}

// 5. Export Layer
export default LogicComponent
