export default function test (props, { slots }) {

    return <div>{ props.title } { slots.default() }</div>
}
