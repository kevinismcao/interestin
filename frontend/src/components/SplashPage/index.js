import { splashInfo } from "./fetch_splash_info"
import SplashPageShow from "./SplashPageShow"
import "./index.css"

const Splash = () => {
    return (
        <div>
            <div className="splash-text">
                <div className="splash-header">Get your next</div>
                <div className="splash-idea-text">
                    <p className="ideas-text">idea</p>
                </div>
            </div>
            <div className="splash-image-container">
                {
                    splashInfo.map( (page, i) => <SplashPageShow
                    title = {page.title}
                    photoUrls = {page.photoUrls}
                    key={i}
                    />)
                }
                
            </div>
        </div>
    )

}

export default Splash