'use client';
import { ReactLenis } from 'lenis/react';
import Guide from '../sections/Guide';
import Testimonials from './Testimonials';

export const Sections = () => {
  return (
    <ReactLenis root>
      <main>
        <div className="wrapper">
          <section className="text-white  h-screen  w-full  grid place-content-center sticky top-0">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div name="userGuide">
              <h1 className="hidden md:block mb-10 text-black dark:text-white 2xl:text-7xl md:text-6xl text-xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                How to use ?
              </h1>
              <Guide />
            </div>
          </section>

          <section className="bg-white dark:bg-black text-black grid place-content-center h-screen sticky top-0 rounded-tr-2xl rounded-tl-2xl overflow-hidden">
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:54px_54px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <div name="testimonials">
              <h1 className="mb-10 text-black dark:text-white 2xl:text-7xl md:text-6xl text-xl px-8 font-semibold text-center tracking-tight leading-[120%]">
                  See what other users think
              </h1>
              <Testimonials />
            </div>
          </section>
        </div>
      </main>
    </ReactLenis>
  );
}

export default Sections;