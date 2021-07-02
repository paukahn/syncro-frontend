
const Styles = () => ({
    styleApp: { 
        display: 'flex',
        flexDirection: 'row',
        minWidth: '880px', 
        minHeight: '495px', 
        width: '100vw', 
        height: '100vh',
        // width: '880px', 
        // height: '495px', 
        background: '#D0D1DA', 
        border: '1px solid #D0D1DA',
        boxSizing: 'border-box', 
    },
    styleSocials: { 
        width: '7%', 
        height: '100%', 
        background: '#D0D1DA', 
        boxSizing: 'border-box', 
    },
    styleList: { 
        width: '30%', 
        height: '100%', 
        background: '#F2F2F6', 
        boxSizing: 'border-box', 
    },
    styleChat: { 
        width: '63%', 
        height: '100%', 
        background: '#D0D1DA', 
        boxSizing: 'border-box', 
    },
    styleSearchBox: { 
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', 
        height: '10%', //FIXME: Высота строки поиска должна быть равна ширине блока 
        background: '#F2F2F6', 
        border: '1px solid #D0D1DA', 
        boxSizing: 'border-box', 
    },
})

export default Styles();