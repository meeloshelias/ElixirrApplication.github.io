import {features} from '../constants';
import styles, { layout } from '../style';

const FeatureCard = ({icon, title, content, index}) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
      <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain' />
    </div>
    <div className='flex-1 flex flex-col ml-3'>
      <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>{title}</h4>
      <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px] mb-1'>{content}</p>
    </div>
  </div>
)





const Business = () => {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          Dear Ms Devon Bowdler <br />
        </h2>
        <p className={`${styles.paragraph} max-w-[600px] mt-5`}>
          
            I am a recent Economics graduate from the University of Bristol, looking to apply my skills in data analysis, statistical modelling, and presentation to the analyst role at <span className='text-elixirr-gradient'>Elixirr</span>. <br /> <br />

            I am pursuing a career in strategy consulting due to the project-based work, client focused environment, and the ability to work across industries. I believe that my energy and skills acquired throughout my academic journey, align with the competencies of a consultant. <br /> <br />

            I was first recommended <span className='text-elixirr-gradient'>Elixirr</span> as a place to develop my skills at an incredible pace by taking on early responsibility, interacting with senior clients, and adapting to diverse working styles. I am also particularly drawn to <span className='text-elixirr-gradient'>Elixirr</span> by the dynamic drive and supportive culture at the company. At the Bright Network careers fair, I had the most fun talking about <span className='text-elixirr-gradient'>Elixirr</span> with you and George and could tell that the people differentiate the firm from others. This also reassured me that <span className='text-elixirr-gradient'>Elixirr</span> is a place that I feel I fit in and complement the energy of others. <br /> <br />

            I believe my entrepreneurial spirit, resilience, and aptitude for communication, make me a good fit for <span className='text-elixirr-gradient'>Elixirr</span>. <br /> <br />

            Thank you for considering me for the Analyst role. I eagerly wait to hear back from you, and to continue our conversation, so I can learn more about <span className='text-elixirr-gradient'>Elixirr</span>, and you can learn more about me. <br /> <br />

              Yours sincerely,<br />
              Meelosh Elias


        </p>

      </div>
      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index}/>
        ))}
      </div>
      


    </section>
   
  )
}

export default Business