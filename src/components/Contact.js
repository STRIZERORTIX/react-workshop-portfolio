import React, { useRef } from 'react';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';

const Contact = () => {
  return(
      <section className="my-40 lg:section" id="contact">
        <div className="container mx-auto">
          <div className='flex flex-col'>
            { /* Text */ }
            <motion.div 
              variants={fadeIn('right', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount:0.3}}
              className='flex-l flex justify-start items-center'
            >
              <div>
                <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get in touch</h4>
                <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
              </div>
            </motion.div>

            { /* Form */ }
            <motion.form className='flex-l border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
              <input
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type="text" 
                placeholder='Your name'
              />
              <input 
                className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all'
                type="text" 
                placeholder='Your email'
              />
               <textarea
                className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all resize-none mb-12'
                placeholder='Your message'
              >
                <button className="btn btn-lg">Send message</button>
              </textarea>
            </motion.form>
          </div>
        </div>
      </section>
      
  );
};

export default Contact;
