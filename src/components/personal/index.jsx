import Item from "./item"
const Personal = ({ arrInfo }) => {
    return (
        <>
            <div className="personal-info">
                <div className="row g-4">
                    {
                        arrInfo.length > 0 ?
                        arrInfo.map((value, key) => (
                                <Item
                                    key={key}
                                    label={value.label}
                                    value={value.value}
                                />
                            
                        ))
                        : 'Empty'
                    }
                </div>
            </div>
        </>
    )
}

export default Personal