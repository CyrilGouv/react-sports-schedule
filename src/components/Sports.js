import './Sports.css'


const Sports = ({ lists }) => {

    return (
        <article className="Sports">
            {
                lists.map(list => {
                    const { id, name, description, image, time } = list

                    return (
                        <div key={ id } className="sports__item">
                            <div className="sports__item__img">
                                <img src={ image } alt={ name } />
                            </div>
                            <div className="sports__item__infos">
                                <h3><span>{ name }</span><span>{ time }</span></h3>
                                <p>{ description }</p>
                            </div>
                        </div>
                    )
                })
            }
        </article>
    )
}

export default Sports