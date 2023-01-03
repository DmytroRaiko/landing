import React, {useRef} from 'react';
import ParrotIcon from '../../icons/parrot.js';
import members from '../../icons/members.png';
import HomeTitleIcon from '../../icons/home-title.js';
import LocationIcon from '../../icons/location.js';
import MemberIcon from "../../icons/member-icon";

const HomeContent = () => {
  const value = useRef();

  return (
    <div className="content">
      <div className="bg" />
      <div className="content__side left">
        <div className="title">
          <HomeTitleIcon />
        </div>

        <div className="subtitle">
          The scale of the challenges facing our planet can seem daunting, but we can all do something.
        </div>

        <div className="form__search">
          <div className="group">
            <div className="icon">
              <LocationIcon />
            </div>

            <input type="text" ref={value} placeholder="Find the place to help"/>
          </div>

          <button type="submit" >search</button>
        </div>
      </div>

      <div className="content__side right">
        <div className="parrot">
          <ParrotIcon />
        </div>

        <div className="card-members">
          <div className="members">
            <img src={members} alt="members"/>
          </div>

          <div className="members-icon">
            <MemberIcon />
          </div>

          <div className="text">
          <h6>Members</h6>
          <h1>
            29 128
          </h1>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
