import React from 'react';
import Person1Svg from "../../icons/person1";
import Person2Svg from "../../icons/person2";
import Person3Svg from "../../icons/person3";
import TeamLineIcon from "../../icons/team-line";

const TeamContent = () => {
  return (
    <div className="content">
      <h2 className="text-center">
        Our top team
      </h2>

      <p className="text text-center">
        Learn more about how you can save our planet's nature.
      </p>

      <div className="team-block">
        <div className="person person__1">
          <Person1Svg />
        </div>
        <div className="person person__3">
          <Person2Svg />
        </div>
        <div className="person person__2">
          <Person3Svg />
        </div>

        <div className="line first">
          <TeamLineIcon />
        </div>
        <div className="line second">
          <TeamLineIcon />
        </div>
      </div>
    </div>
  );
};

export default TeamContent;
