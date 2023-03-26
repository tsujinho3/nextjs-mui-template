// 1. Import Layer
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => <div className={props.className}>{props.children}</div>

// 3. Style Layer
const StyledComponent = styled(Component)`
    padding: 0 2rem;
`
// 4. Logic Layer
const LogicComponent = (props) => {
    return <StyledComponent>{props.children}</StyledComponent>
}

// 5. Export Layer
export default LogicComponent
