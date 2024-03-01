import Posts from './Activities';
import AddPost from './AddPost';
import ListeDemande from './ListeDemande';
import SideBar from '../SideBar';
import ListeMembres from './ListeMembres';
import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const PresidentHome = () => {
  const username = localStorage.getItem("username");
  const [showMembreList, setShowMembre] = useState(false)
  const [showDemandeList, setShowDemande] = useState(true)

  const toggleMembreList = () => {
    setShowMembre(true);
    setShowDemande(false);
  }

  const toggleDemandeList = () => {
    setShowMembre(false);
    setShowDemande(true);
  }

  return (
    <div className="grid grid-cols-6 flex-1 w-full h-screen">

      <div className="col-span-1 sticky h-screen top-0">
        <SideBar toggleDemandeList={toggleDemandeList} toggleMembreList={toggleMembreList} />
      </div>

      <div className="flex flex-col col-span-3 border-l border-[#d3d9d8] h-screen">
        <div className="flex justify-center py-5 font-bold text-3xl my-3">
          <h2>Welcome {username}!!</h2>
        </div>
        <div > {/* Adjust the height as needed */}
          <AddPost />
        </div>
        <hr className="w-full" />

        <div className="overflow-y-auto"> {/* Use flex-1 to occupy remaining space */}
          <Posts />
        </div>
      </div>

      <div className="col-span-2 h-screen -z-0 overflow-y-auto ">
      <TransitionGroup>
          {showMembreList && (
            <CSSTransition timeout={300} classNames="slide">
              <ListeMembres />
            </CSSTransition>
          )}
          {showDemandeList && (
            <CSSTransition timeout={300} classNames="slide">
              <ListeDemande />
            </CSSTransition>
          )}
        </TransitionGroup>

      </div>

    </div>
  );
};

export default PresidentHome;

const styles = `
.slide-enter {
  transform: translateX(100%);
}
.slide-enter-active {
  transform: translateX(0%);
  transition: transform  200ms ease-in-out;
}
.slide-exit {
  transform: translateX(0%);
}
.slide-exit-active {
  opacity: 0;
  transform: scale(0.9);
  transition: transform 250ms ease-in-out, opacity 250ms ease-in-out;
}
`;


const styleTag = document.createElement('style');
styleTag.type = 'text/css';
styleTag.appendChild(document.createTextNode(styles));
document.head.appendChild(styleTag);
