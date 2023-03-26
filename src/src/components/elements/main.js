// 1. Import Layer
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => <main className={props.className}>{props.children}</main>

// 3. Style Layer
const StyledComponent = styled(Component)`
    min-height: 100vh;
    padding: 4rem 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 2rem;
`

// 4. Logic Layer
const LogicComponent = (props) => {
    return <StyledComponent>{props.children}</StyledComponent>
}

// 5. Export Layer
export default LogicComponent
