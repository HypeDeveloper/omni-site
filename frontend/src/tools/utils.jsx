import { useRef } from "react"

export function Button(props) {
    const {
        type,
        text
    } = props



    function ButtonOne(props) {
        return (
            <>
                <button>
                    {props.text}
                </button>
            </>
        )
    }

    function ButtonTwo(props) {
        return (
            <>
                <button>
                    {props.text}
                </button>
            </>
        )
    }


    return (
        <>
            {type === 1 ? <ButtonOne text={text} /> : <ButtonTwo text={text} />}
        </>
    )
}


export function ServiceBoxes(props){
    const {subText, header, pText, bttnText, point} = props

    return (
        <div className="ServiceBox" style={{
            flexDirection: point === 'left' ? 'row-reverse' : 'row'
        }}>
            <div className="ServiceImg">
                <div className="imgBox"></div>
            </div>
            <div className="ServiceText" style={{
                marginLeft : point === 'left' ? '120px' : '0',
                marginRight : point === 'right' ? '120px' : '0'
            }}>
                <h2 className="yellow">{subText}</h2>
                <h1>
                    {header}
                </h1>
                <p>
                    {pText}.
                </p>
                <Button text={bttnText} />
            </div>
        </div>
    )
}