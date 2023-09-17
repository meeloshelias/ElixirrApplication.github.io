import {stats} from '../constants';
import styles from '../style';

const Stats = () => {
  return (
    <section id='contact' className={`${styles.flexCenter} flex-row flex-wrap sm:mb-10 mb-6`}>
        {stats.map((stat) => (
            <div
            key={stat.id}
            className={`flex-3 flex justify-start items-center flex-row m-10`}
            >
                <h4 className='font-poppins font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] text-white'>
                    {stat.value}
                </h4>
                <h4 className='font-poppins font-semibold xs:text-[20px] text-[20px] xs:leading-[53px] leading-[43px] text-gradient uppercase ml-3'>
                    {stat.title}
                </h4>
            </div>
        ))}
        
    </section>
  )
}

export default Stats