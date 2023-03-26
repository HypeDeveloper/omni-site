export function Loading (){
    const Style = {
        position: 'fixed',
        height: '100vh',
        width: '100%',
        background: 'white',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: '10000000000000'
    }
    return(
        <div style={Style}>
            <h1>loading---</h1>
        </div>
    )
}