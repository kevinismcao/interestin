import { splashInfo } from "./SplashInfo"
import SplashPageShow from "./SplashPageShow"
import "./index.css"
import { useEffect, useRef, useState } from "react"

const Splash = () => {
    const [currentPage, setCurrentPage] = useState(0)
    const [updateInterval, setUpdateInterval] = useState(0)

    const arrowRef = useRef(null)
    const pageButtons = ["0", "1", "2", "3"]

    const handleArrow = () => {
        arrowRef.current?.scrollIntoView({ behavior: 'smooth' })
    }

    const handlePageNav = (page) => {
        setCurrentPage(parseInt(page));
        setUpdateInterval((prev) => (prev % 3) + 1);
    }

    let interval;
    useEffect(() => {
        interval = setInterval(()=>{
            setCurrentPage((prevpage) => prevpage + 1)
        },6000);

    }, []);
   
    useEffect(() => {
        if (updateInterval > 0) {
            interval = setInterval(() => {
                setCurrentPage((prevPage) => prevPage + 1)
            }, 6000);
        }

        return () => {
            clearInterval(interval)
        }
    }, [updateInterval])

    return (
        <div className="splash-container">
            <section className="splash-page-container">
                <div className="splash-text">
                    <div className="splash-header">Get your next</div>
                    
                </div>
                <div className="page-nav-buttons">
                    {pageButtons.map(pageButton =>
                        <div
                            key={pageButton}
                            onClick={() => handlePageNav(pageButton)}
                            className={currentPage % 4 === parseInt(pageButton) ? `${splashInfo[parseInt(pageButton)].title.split(" ")[0]}-page-button` : ""}
                        >
                        </div>
                    )}
                </div>
                <div className="splash-image-container">
                    {
                        splashInfo.map( (page, i) => <SplashPageShow
                        title = {page.title}
                        handleArrow = {handleArrow}
                        photoUrls = {page.photoUrls}
                        key={i}
                        shouldShow={currentPage % 4 === i}
                        shouldLeave={(currentPage - 1) % 4 === i}
                        />)
                    }
                    
                </div>
            </section>
            <section>
                <div className="one-and-half-picture-container">
                    <img src="" alt="" />
                </div>
                <div className="one-and-half-text-container">
                    <h1>See it, make it, try it, do it</h1>
                    <p>The best part of Pinteresting is discovering new things and ideas from people around the word</p>
                </div>
            </section>


        </div>
    )

}

export default Splash