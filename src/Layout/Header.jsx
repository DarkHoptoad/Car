import headerImg from "../images/Car.jpg"
import Logo from "../images/logo.png"
 
const Header = () => {
    return<>
      
    <div className="header__img">
        <img src={headerImg} alt={headerImg} />
        <div className="header__logo">
            <img src={Logo} alt={Logo} />
        </div>
    <div className="Slogan">Your <span>Car</span> - my <span>Job!</span> </div>
    </div>
    </>
}

export {Header}