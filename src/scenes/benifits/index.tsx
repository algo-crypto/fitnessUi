import ActionButton from '@/shared/ActionButton';
import Htext from '@/shared/Htext'
import { BenifitType, SelectedPage } from '@/shared/types'
import { HomeModernIcon,UserGroupIcon,AcademicCapIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'
import Benifit from './Benifit';
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'


const benifits:Array<BenifitType> = [
    {
      icon: <HomeModernIcon className="h-6 w-6" />,
      title: "State of the Art Facilities",
      description:
        "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
    },
    {
      icon: <UserGroupIcon className="h-6 w-6" />,
      title: "100's of Diverse Classes",
      description:
        "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
    },
    {
      icon: <AcademicCapIcon className="h-6 w-6" />,
      title: "Expert and Pro Trainers",
      description:
        "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
    },
  ];

  const container = {
    hidden:{},
    visiable:{
        transition:{staggerChildren:0.2}
    }
  }


type Props = {
    setSelectedPage:(value:SelectedPage) => void
}

const Benifits = ({setSelectedPage}: Props) => {

  return (
    <section
    id='benefits'
    className='mx-auto min-h-full w-5/6 py-20'
    >
      <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.Benifits)}
      >
           {/*Header */}
        <motion.div 
           className='md:my-5 md:w-3/5'
           initial="hidden"
           whileInView="visible"
           viewport={{ once: true, amount: 0.5 }}
           transition={{  duration: 0.5 }}
           variants={{
           hidden: { opacity: 0, x: -50 },
           visible: { opacity: 1, x: 0 },}}
        >
            <Htext>
                More Than just Gym
            </Htext>
            <p 
            className='my-5 text-sm'
            >
                We Provide World class fitness classes for our clients with detailed high quality instructions and reasonable price Change your Life for better 
                start today today is tomorrow don't waste time.
            </p>
        </motion.div>

        {/*Benifits section */}
      

        <motion.div 
        className='md:flex items-center justify-between gap-8 mt-5'
        initial="hidden"
        whileInView="visiable"
        viewport={{
            once:true,
            amount:0.5
        }}
        variants={container}
        >
         {
            benifits.map((benifit:BenifitType) => (
               <Benifit
                 key={benifit.title}
                 title={benifit.title}
                 icon={benifit.icon}
                 description={benifit.description}
                 setSelectedPage={setSelectedPage}
               />
            ))
         }
        
        </motion.div>

         {/*Graphics and description */}
          
          <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
            {/* graphic */}
            <img
            className='mx-auto '
            src={BenefitsPageGraphic}
            alt='benifitPageGraphic'
            />

            {/*description */}
            <div>
              {/*Title */}
              <div className='relative'>

                <div 
                className='before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves'
                >
                 <motion.div
                   initial="hidden"
                   whileInView="visible"
                   viewport={{ once: true, amount: 0.5 }}
                   transition={{  duration: 0.5 }}
                   variants={{
                   hidden: { opacity: 0, x: 50 },
                   visible: { opacity: 1, x: 0 },}}
                 >
                  <Htext>
                    millions of happy members Getting {" "}
                    <span className='text-primary-500 '>Fit</span>
                  </Htext>
                 </motion.div>

                </div>

              </div>

              {/*desc */}

              <motion.div
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, amount: 0.5 }}
                 transition={{ delay:0.2, duration: 0.5 }}
                 variants={{
                 hidden: { opacity: 0, x: 50 },
                 visible: { opacity: 1, x: 0 },}}
              >
                <p className='my-5 '>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur, fugit.
                </p>

                <p className='mb-5'>
                 Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo obcaecati, culpa quos deleniti placeat autem labore tempora laborum inventore. Quasi cumque, laudantium omnis libero fugit vel placeat! Consequuntur, neque deserunt?
                </p>
              </motion.div>    

              
              <div className='relative mt-16'>
 
                  <div className='before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles' >
                     <ActionButton 
                     setSelectedPage={setSelectedPage}
                     >
                        Join Now
                     </ActionButton>
                  </div>                
              </div>

              {/*Button */}
            </div>
          </div>


      </motion.div>
    </section>
  )
}

export default Benifits

//2:52