import Item from "./item"
const Skills = ({ data }) => {
    return (
        <>
            <div className="row g-4 skills-animation">
                {
                    data.length > 0 ?
                    data.map((value, key) => 
                        <Item 
                            label={value.label}
                            description={value.description}
                            percent={value.percent}
                            key={key}
                        />
                    ) : 'Empty'
                }
            </div>
        </>
    )
}
export default Skills