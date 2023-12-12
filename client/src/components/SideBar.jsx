import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faEnvelope, faUsers,faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons'


const SideBar = () => {
    return (

        
            <div>
              <div className="grid grid-cols-3 min-h-screen">
                <div className="col-span-2">
                </div>
                <div className="col-span-1">
                  <div className="flex flex-col gap-8 items-center">
                    <div className="justify-center mt-5">
                      <a className="btn btn-ghost normal-case text-2xl font-bold">ENSAT Club</a>
                    </div>
        
                    <div className="lg:tooltip" data-tip="Home">
                      <label className="btn btn-ghost btn-circle">
                      <FontAwesomeIcon icon={faHome} className="text-2xl" />

                      </label>
                    </div>
        
                    <div className="lg:tooltip" data-tip="Demandes">
                      <label className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <FontAwesomeIcon icon={faEnvelope} className="text-2xl" />
                          <span className="badge badge-sm indicator-item">812</span>
                        </div>
                      </label>
                    </div>
        
                    <div className="lg:tooltip" data-tip="Membres">
                      <label tabIndex="0" className="btn btn-ghost btn-circle">
                        <div className="indicator">
                        <FontAwesomeIcon icon={faUsers} className="text-2xl"  />
                          <span className="badge badge-sm indicator-item">9</span>
                        </div>
                      </label>
                    </div>
        
                    <div className="lg:tooltip" data-tip="Logout">
                      <label className="btn btn-ghost btn-circle avatar">
                      <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl" />
                      </label>
                    </div>
        
                    {/* The following line can be replaced with your user profile avatar component */}
                    <div className="lg:tooltip" data-tip="Profile">
                      <label tabIndex="0" className="btn btn-ghost btn-circle ">
                        <div className="w-10 rounded-full my-1 text-2xl">YI</div>
                      </label>
                    </div>
        
                    <div>
                      <label className="btn btn-neutral">
                        <p>Add Post</p>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
    )
}

export default SideBar
