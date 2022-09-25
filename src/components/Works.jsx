import WorksImg from "../images/HeaderImg.jpg"

const Works = () => {
    return <>
        <div className="Works">
            <h3 className="Works__title">My <span>Best</span> works</h3>
            <div className="works__content">
            <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 1</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 2</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 3</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 4</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 5</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 6</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 7</div>
                </div>
                <div className="works__item">
                    <img className="works__img" src={WorksImg} alt={WorksImg} />
                    <div className="works__name">Work 8</div>
                </div>
               
            </div>
        </div>
    </>
}

export {Works}