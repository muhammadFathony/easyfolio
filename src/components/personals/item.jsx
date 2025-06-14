const ItemPersonal = ({label, value}) => {
    return (
        <>
            <div className="col-6">
                <div className="info-item">
                    <span className="label">{label}</span>
                    <span className="value">{value}</span>
                </div>
            </div>
        </>
    )
}
export default ItemPersonal