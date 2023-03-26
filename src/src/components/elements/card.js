// 1. Import Layer
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => (
    <a href={props.url} className={props.className}>
        <h2>{props.title} &rarr;</h2>
        <p>{props.children}</p>
    </a>
)

// 3. Style Layer
const StyledComponent = styled(Component)`
    margin: 1rem;
    padding: 1.5rem;
    text-align: left;
    color: inherit;
    text-decoration: none;
    border: 1px solid #eaeaea;
    border-radius: 10px;
    transition: color 0.15s ease, border-color 0.15s ease;
    max-width: 300px;
    :hover,
    :focus,
    :active {
        color: #0070f3;
        border-color: #0070f3;
    }

    > h2 {
        margin: 0 0 1rem 0;
        font-size: 1.5rem;
    }

    > p {
        margin: 0;
        font-size: 1.25rem;
        line-height: 1.5;
    }
    @media (prefers-color-scheme: dark) {
        border-color: #222;
    }
`
// 4. Logic Layer
const LogicComponent = (props) => {
    return (
        <StyledComponent title={props.title} url={props.url}>
            {props.children}
        </StyledComponent>
    )
}

// 5. Export Layer
export default LogicComponent
