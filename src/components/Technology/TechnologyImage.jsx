import { motion, AnimatePresence } from 'framer-motion';
import { useStateContext } from '../../contexts/ContextProvider';
import { technologies } from '../../data/data';

const TechnologyImage = ({ index }) => {
  const item = technologies[index];

  const { useWindowSize } = useStateContext();
  const size = useWindowSize();
  console.log(size);

  return (
    <div className="lg:absolute order-first -right-[165px] min-w-[375px] md:min-w-[768px] lg:min-w-[515px] lg:min-h-[527px] object-cover">
      <AnimatePresence mode="wait">
        <motion.div
          key={item.title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {size.width < 1024 && (
            <img src={item.image.landscape} alt={item.title} />
          )}
          {size.width >= 1024 && (
            <img src={item.image.portrait} alt={item.title} />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default TechnologyImage;
