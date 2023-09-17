import styles from "../style";
import {discount, robot, elixirr} from '../assets';
const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY} `}>
        <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
            
                <div className="flex flex-row justify-between items-center w-full">
                    <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">My online Cover Letter For <br className="sm:block hidden"/> {" "} 
                        <span className="text-elixirr-gradient">
                            ELIXIRR

                        </span> 
                         </h1>
                </div>

                <div>
                    <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100px] leading-[75px] w-full">
                        by Meelosh Elias
                    </h1>
                    <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                       
                    </p>
                </div>

        </div>
        <div className={`flex-1 ${styles.flexCenter}`}>
            <img src={elixirr} alt='elixirr' className="relative z-[5]"/>
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "/>
            <div className="absolute z-[0] w-80%] h-[80%] bottom-40 orange__gradient rounded-full "/>
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "/>

        </div>
        
        
    </section>
  )
}

export default Hero