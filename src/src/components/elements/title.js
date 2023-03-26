// 1. Import Layer
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => (
    <h1 className={props.className}>
        Welcome to <a href={props.url}>{props.title}!</a>
    </h1>
)

// 3. Style Layer
const StyledComponent = styled(Component)`
    margin: 0;
    line-height: 1.15;
    font-size: 4rem;
    text-align: center;

    > a {
        color: #0070f3;
        text-decoration: none;

        :hover,
        :focus,
        :active {
            text-decoration: underline;
        }
    }
`

// 4. Logic Layer
const LogicComponent = (props) => {
    return <StyledComponent url={props.url} title={props.title} />
}

// 5. Export Layer
export default LogicComponent
