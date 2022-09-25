import featuredImg from "../images/icons8-light-48.png"


const Featured = () => {
    return <>
     <div className="featured">
                <h3 className="featured__title">Why you'll shold chouse <span>Me?</span></h3>
                <div className="featured__content">
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 1</span>
                    </div>
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 2</span>
                    </div>
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 3</span>
                    </div>
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 4</span>
                    </div>
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 5</span>
                    </div>
                    <div className="featured__item">
                        <img src={featuredImg} alt={featuredImg}/>
                        <span className="featured__name">Featured 6</span>
                    </div>
                </div>
            </div>
    </>
}

export {Featured}