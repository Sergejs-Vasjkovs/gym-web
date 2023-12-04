import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Htext from "@/shared/Htext";
import info from "@/shared/info";
import Class from "./Class";

type OurClassesType = {
  setSelectedPage: (value: SelectedPage) => void;
}

const OurClasses = ({ setSelectedPage }: OurClassesType) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
      <motion.div
        onViewportEnter={()=> setSelectedPage(SelectedPage.OurClasses) }
      >
        <motion.div className="mx-auto w-5/6"
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.5 }} 
        transition={{ duration: 0.5 }}
        variants={{
            hidden: { opacity: 0, x: -50},
            visible: { opacity: 1, x: 0 }
        }}>
          <div>
            <Htext>OUR CLASSES</Htext>
            <p className="py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum corrupti iusto quaerat molestias necessitatibus explicabo numquam dolorum ipsum ullam dicta non, eveniet qui rem asperiores obcaecati. Est eligendi deleniti dolore.</p>
          </div>
        </motion.div>
        <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
              {info.classes.map((item, index) => <Class key={`${item.name} + ${index}`} {...item}/>)}
          </ul>

        </div>
      </motion.div>

    </section>
  );
};

export default OurClasses;