import Item from "./item"
const Portofolio = ({data}) => {
    return (
        <>
            <div className="row g-4 isotope-container" data-aos="fade-up" data-aos-delay="300">
                {
                    data.length > 0 ?
                    data.map((value, key) => (
                        <Item key={key} img={value.img} title={value.title} subtitle={value.subtitle} description={value.description}/>
                    ))
                    : 'Empty Portofolio'
                }
            </div>
        </>
    )
}
export default Portofolio