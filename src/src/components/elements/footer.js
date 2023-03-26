// 1. Import Layer
import Image from "next/image"
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => (
    <footer className={props.className}>
        <a href={props.url} target="_blank" rel="noopener noreferrer">
            Powered by{" "}
            <span>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
        </a>
    </footer>
)

// 3. Style Layer
const StyledComponent = styled(Component)`
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;

    > a {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
    }

    > span {
        height: 1em;
        margin-left: 0.5rem;
    }
    @media (prefers-color-scheme: dark) {
        border-color: #222;
        span > img {
            filter: invert(1);
        }
    }
`

// 4. Logic Layer
const LogicComponent = (props) => {
    return <StyledComponent></StyledComponent>
}

// 5. Export Layer
export default LogicComponent
