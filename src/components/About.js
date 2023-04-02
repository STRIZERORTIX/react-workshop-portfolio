import React from 'react';
//count up hook
import CountUp from "react-countup";
//intersection observer hook
import {useInView} from "react-intersection-observer";
//motion
import {motion} from "framer-motion";
//variants
import {fadeIn} from "../variants";
const About = () => {
  const [ref, inView] = useInView(
      {
    threshold: 0.5,
    triggerOnce: true
    });
  return(
      <section id='about' className="section" ref={ref}>
        <div className="container mx-auto">
          <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen '>
          {/*  images*/}
            <motion.div
                variants={fadeIn('right', 0.5)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex-1 bg-about bg-contain bg-no-repeat h-[640px]
                mix-blend-lighten bg-top '>
            </motion.div>
            {/*  text*/}
            <motion.div
                variants={fadeIn('left', 0.8)}
                initial='hidden'
                whileInView={'show'}
                viewport={{once: false, amount:0.3}}
                className='flex-1'>
              <h2 className='h2 text-accent'>
                About me.
              </h2>
              <h3 className='h3 mb-4 '>
                I'm a Freelance Web Developer with 3 years of experience in the field.
                I have a passion for creating
                websites and web applications that are fast, responsive, and user-friendly.
                I'm also a big fan of
                React and Vue.js.
              </h3>
              <p className='mb-6 '>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Beatae commodi libero maxime placeat quam? Culpa magni mollitia
                nam porro similique?
              </p>
            {/*  stats*/}
              <div className='flex gap-x-6 lg:gap-x-10 mb-12 '>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                    {
                        inView ? <CountUp start={0} end={3} duration={8} /> : null
                    }
                  </div>
                  <div className='font-primary text-sm tracking-[2px] '>
                    Years of <br /> experience
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                    {
                      inView ? <CountUp start={0} end={13} duration={8} /> : null
                    }
                  </div>
                  <div className='font-primary text-sm tracking-[2px] '>
                    Projects<br/> Completed
                  </div>
                </div>
                <div>
                  <div className='text-[40px] font-tertiary text-gradient mb-2 '>
                    {
                      inView ? <CountUp start={0} end={20} duration={8} /> : null
                    }
                    +
                  </div>
                  <div className='font-primary text-sm tracking-[2px] '>
                    Tech Stacks<br /> Explored
                  </div>
                </div>
              </div>
              <div>
                <button>

                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
  );
};

export default About;
