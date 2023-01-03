import React, { useRef } from 'react';
import TeamContent from "../../components/Team";
import useElementOnScreen from "../../hooks/intersection";
import './team.scss';

const Team = () => {
  const ref = useRef(null);
  const isVisible = useElementOnScreen(ref, '-50px');

  console.log(isVisible)
  return (
    <section className={`team ${isVisible ? 'visible' : ''}`} ref={ref}>
      <TeamContent />
    </section>
  );
};

export default Team;
