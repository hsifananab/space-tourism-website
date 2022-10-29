import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home';
import Section from '../components/UI/Section';

import { AnimatePresence } from 'framer-motion';
import Destination from './Destination/Destination';
import Crew from './Crew/Crew';
import Technology from './Technology/Technology';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        {/* {pages
          .filter(page => page.title)
          .map((item, index) => (
            <Route
              key={index}
              path={item.path}
              element={
                <Section
                  title={item.title}
                  index={index + 1}
                  bg={item.bg}
                  label={item.label}
                ></Section>
              }
            />
          ))} */}
        <Route
          path="destination"
          element={
            <Section
              title="pick your destination"
              index={1}
              bg="destination-pattern"
              label="destination"
            >
              <Destination />
            </Section>
          }
        />
        <Route
          path="crew"
          element={
            <Section
              title="meet your crew"
              index={2}
              bg="crew-pattern"
              label="crew"
            >
              <Crew />
            </Section>
          }
        />
        <Route
          path="technology"
          element={
            <Section
              title="space launch 101"
              index={3}
              bg="technology-pattern"
              label="technology"
            >
              <Technology />
            </Section>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
