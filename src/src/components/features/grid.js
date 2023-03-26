// 1. Import Layer
import Card from "components/elements/card"
import styled from "styled-components"

// 2. DOM Layer
const Component = (props) => <div className={props.className}>{props.children}</div>

// 3. Style Layer
const StyledComponent = styled(Component)`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 800px;

    @media (max-width: 600px) {
        width: 100%;
        flex-direction: column;
    }
`
// 4. Logic Layer
const LogicComponent = (props) => {
    const items = props.cardList.map((item) => {
        return (
            <Card title={item.title} url={item.url} key={item.title}>
                {item.contents}
            </Card>
        )
    })

    return <StyledComponent>{items}</StyledComponent>
}

// 5. Export Layer
export default LogicComponent
