import classes from '../modules/Hero.module.scss'
import iphone from '../assets/iphone-image.svg'
import playstation from '../assets/PlayStation.svg'
import airpods from '../assets/airpods.svg'
import visionPro from '../assets/vision-pro.svg'
import macbook from '../assets/macbook.svg'

const Hero = () => {
    return (
        <>
            <div className={classes['banner-wrapper']}>
                <div className={classes['iphone-text-wrapper']}>
                    <div className={classes['iphone-text']}>
                        <p className={classes['iphone-p']}>Pro.Beyond</p>
                        <br/> <h1 className={classes['iphone-h1']}>IPhone 14 <span className={classes["iphone-span"]}>Pro</span></h1>
                        <br/> <h5 className={classes["iphone-h5"]}>Created to change everything for the better. For everyone</h5>
                        <br/>
                        <button className={classes['shop-now-btn']}> Shop Now</button>
                    </div>

                </div>
                <div className={classes['iphone-14-wrapper']}>
                    <img src={iphone} className={classes['iphone-14-wrapper']}/>
                </div>
            </div>

            <div className={classes['multiple-banner-wrapper']}>
                <div className={classes['left-banner-wrapper']}>
                    <div className={classes['ps5-wrapper']}>
                        <div className={classes['ps5-img']}>
                            <img src={playstation}/>
                        </div>
                        <div className={classes['ps5-text-wrapper']}>
                            <div className={classes['ps5-text']}>
                                <h1 className={classes["ps5-h1"]}>Playstation 5</h1>
                                <p className={classes["ps5-p"]}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your
                                    PlayStation experience.</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes['small-box-wrapper']}>
                        <div className={classes["small-box"]}>
                            <div className={classes['small-box-img']}>
                                <img src={airpods}/>
                            </div>
                            <div className={classes['small-box-text-wrapper']}>
                                <div className={classes['small-box-text']}>
                                    <h1 className={classes["small-box-h1"]} >Apple AirPods <span className={classes["small-box-span"]}>Max</span></h1>
                                    <p className={classes["small-box-p"]}>Computational audio. Listen, it's powerful</p>
                                </div>
                            </div>
                        </div>
                        <div className={classes['small-box-right']}>
                            <div className={classes['small-box-img']}>
                                <img src={visionPro}/>
                            </div>
                            <div className={classes['small-box-text-wrapper']}>
                                <div className={classes['small-box-text']}>
                                    <h1 className={classes["small-box-right-h1"]}>Apple   Vision <span className={classes["small-box-right-span"]}>Pro</span></h1>
                                    <p className={classes["small-box-right-p"]}>An immersive way to experience entertainment</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={classes['right-banner-wrapper']}>
                    <div className={classes['macbook-text-wrapper']}>
                        <div className={classes['macbook-text']}>
                            <h1 className={classes['macbook-h1']}>Macbook <span className={classes['macbook-span']}>Air</span></h1>
                            <p className={classes['macbook-p']}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                            <button className={classes['shop-now-btn']}> Shop Now</button>
                        </div>
                    </div>
                    <div className={classes['macbook-img']}>
                        <img src={macbook}/>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Hero