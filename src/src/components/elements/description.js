// 1. Import Layer
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => (
    <p className={props.className}>
        Get started by editing <code>{props.url}</code>
    </p>
)

// 3. Style Layer
const StyledComponent = styled(Component)`
    margin: 4rem 0;
    line-height: 1.5;
    font-size: 1.5rem;
    text-align: center;

    > code {
        background: #fafafa;
        border-radius: 5px;
        padding: 0.75rem;
        font-size: 1.1rem;
        font-family: Menlo, Monaco, Lucida Console, Liberation Mono, DejaVu Sans Mono,
            Bitstream Vera Sans Mono, Courier New, monospace;

        @media (prefers-color-scheme: dark) {
            background: #111;
        }
    }
`

// 4. Logic Layer
const LogicComponent = (props) => {
    return <StyledComponent url={props.url} />
}

// 5. Export Layer
export default LogicComponent
