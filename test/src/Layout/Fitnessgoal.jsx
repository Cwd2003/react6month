import React from 'react'

function Fitnessgoal() {
  return (
    <div>

        <div className="container-fluid goal pt-5">
            <div className="container pt-5">
                <div className="row g-5">
                    <div className="col-lg-6 wow fadeInLeft" data-wow-delay="0.2s">
                        <div className="goal-content">
                            <h4 className="text-primary">Fitness Goal</h4>
                            <h1 className="display-4 mb-4">Complete your possibilities, Achieve Your Fitness Goals.</h1>
                            <div className="goal-item d-flex p-4">
                                <div className="d-flex me-4">
                                    <div className="bg-primary d-inline p-3" style={{width: "80px", height: "80px"}}>
                                        <img src="/assets/img/icon-1.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <h4>Free Fitness Training</h4>
                                    <p className="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                </div>
                            </div>
                            <div className="goal-item d-flex p-4 mb-4">
                                <div className="d-flex me-4">
                                    <div className="bg-primary d-inline p-3" style={{width: "80px", height: "80px"}}>
                                        <img src="/assets/img/icon-6.png" className="img-fluid" alt=""/>
                                    </div>
                                </div>
                                <div>
                                    <h4>Cardio and Strength</h4>
                                    <p className="text-white mb-0">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore est harum</p>
                                </div>
                            </div>
                            <div className="ms-1">
                                <a href="#" className="btn btn-primary py-3 px-5 ms-2"> <span>Read Details</span></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 wow fadeInRight" data-wow-delay="0.2s">
                        <div className="h-100">
                            <img src="/assets/img/fitness-goal-banner.png" className="img-fluid h-100" style={{objectFit: "cover" }}alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Fitnessgoal
