import React from "react";
import Particles from "react-particles-js";
import MainLogo from "./mainLogo";

import About from "./about";
import Gallery from "./gallery";
// import Navbar from "./navbar";
import Footer from "./footer";
import Council from "./council";

import "fullpage.js/vendors/scrolloverflow";
import ReactFullpage from "@fullpage/react-fullpage";

//images
import lightRaysImage from "../images/lightRays.png";

class Home extends React.Component {
  scroller = React.createRef();
  target = React.createRef();

  state = {
    scrollPosition: null
  };

    componentDidMount() {
        const wrappedElement = document.querySelector('.fullpage-wrapper');
        console.log(wrappedElement.style.transform.split(',')[1].split('p')[0]);
        this.myInterval = setInterval( () => {
            if(this.state.scrollPosition !== parseInt(wrappedElement.style.transform.split(',')[1].split('p')[0])){
            this.setState({ scrollPosition: parseInt(wrappedElement.style.transform.split(',')[1].split('p')[0])})
            // console.log(-(wrappedElement.style.transform.split(',')[1].split('p')[0]));
            // console.log(this.state.scrollPosition);
            }

            
        }, 500)
        
    }

  //     this.myInterval = setInterval(() => {
  //       if (this.state.scrollPosition !== this.scroller.current.scrollTop) {
  //         if (this.state.scrollPosition <= this.scroller.current.scrollTop) {
  //           this.setState({
  //             scrollPosition:
  //               this.state.scrollPosition + this.target.current.clientHeight
  //           });
  //         } else {
  //           this.setState({
  //             scrollPosition:
  //               this.state.scrollPosition - this.target.current.clientHeight
  //           });
  //         }
  //       }
  //     }, 1200);

  //   this.myInterval = setInterval( () => {
  //       if(this.state.scrollPosition !== window.pageYOffset){
  //           if(this.state.scrollPosition < window.pageYOffset){
  //           this.setState({ scrollPosition: this.state.scrollPosition + ( window.innerHeight)})
  //           }
  //           if(this.state.scrollPosition > window.pageYOffset){
  //               this.setState({ scrollPosition: this.state.scrollPosition - ( window.innerHeight) })
  //           }
  //       }
  //   }, 500)
  //   }

  //   componentDidUpdate() {
  //     const position = this.target.current.scrollTop;
  //     if (this.state.scrollPosition !== position) {
  //       console.log(this.state.scrollPosition);
  //       this.scroller.current.scrollTo(0, this.state.scrollPosition);
  //       this.target.current.scrollTo(0, this.state.scrollPosition);
  //     }
  //   }

  //   componentWillUnmount() {
  //     clearInterval(this.myInterval);
  //   }
  render() {
    return (
        <>
        <MainLogo position={-(this.state.scrollPosition)} height={this.target.current ? (this.target.current.clientHeight / 5) : null} />
        {/* <Navbar /> */}
      <ReactFullpage
        scrollingSpeed={1000} /* Options here */
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper >
              <div className="body-wrapper" ref={this.target}>
                {/* <div className="page-wrapper" ref={this.scroller}>
          <div className="page-scroller"></div>
        </div> */}
                
                <div className="section-main section">
                  <div className="stars-wrapper">
                    <div className="night">
                      <div className="shooting_star"></div>
                      <div className="shooting_star"></div>
                      <div className="shooting_star"></div>
                    </div>
                  </div>
                  <div className="particle-js-wrapper">
                    
                    <Particles
                      params={{
                        particles: {
                          number: {
                            value: 250,
                            density: {
                              enable: true,
                              value_area: 1500
                            }
                          },
                          line_linked: {
                            enable: false,
                            opacity: 0.02
                          },
                          move: {
                            direction: "right",
                            speed: 0.05
                          },
                          size: {
                            value: 1
                            // "random": true,
                          },
                          opacity: {
                            anim: {
                              enable: true,
                              speed: 1,
                              opacity_min: 0.05
                            }
                          }
                        },
                        interactivity: {
                          events: {
                            onclick: {
                              enable: true,
                              mode: "push"
                            }
                          },
                          modes: {
                            push: {
                              particles_nb: 1
                            }
                          }
                        },
                        retina_detect: true
                      }}
                    />
                  </div>
                  <div className="section-main--logo"></div>

                  <div className="section-main--title">
                    <div className="section-main--title_letter">
                      <span className="main">A</span>
                      <span className="shadow">A</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">D</span>
                      <span className="shadow">D</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">H</span>
                      <span className="shadow">H</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">Y</span>
                      <span className="shadow">Y</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">A</span>
                      <span className="shadow">A</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">A</span>
                      <span className="shadow">A</span>
                    </div>
                    <div className="section-main--title_letter">
                      <span className="main">Y</span>
                      <span className="shadow">Y</span>
                    </div>
                  </div>
                  <div className="rays-wrapper">
                    <img src={lightRaysImage} alt="emiting rays" />
                  </div>
                  <div className="section-main--year">
                    <div className="section-main--year-letters">2K</div>
                    <div className="section-main--year-letters">19</div>
                  </div>
                  <div className="mountains">
                    <div className="mountains-one"></div>
                    <div className="mountains-two"></div>
                    <div className="mountains-three"></div>
                  </div>
                </div>
                <div className="section-about section">
                  <About />
                </div>
                <div className="section-gallery section">
                  <Gallery />
                </div>
                <div className="section-council section">
                  <Council />
                </div>
                <div className="section-footer section">
                  <Footer />
                </div>
              </div>
            </ReactFullpage.Wrapper>
          );
        }}
      />
      </>
    );
  }

  //   render() {
  //     return (
  //       //
  //       <div className="body-wrapper" ref={this.target}>
  //         {/* <div className="page-wrapper" ref={this.scroller}>
  //           <div className="page-scroller"></div>
  //         </div> */}
  //         <Navbar />
  //         <div className="section-main">
  //           <div className="stars-wrapper">
  //             <div className="night">
  //               <div className="shooting_star"></div>
  //               <div className="shooting_star"></div>
  //               <div className="shooting_star"></div>
  //             </div>
  //           </div>
  //           <div className="particle-js-wrapper">
  //             <MainLogo
  //               position={this.state.scrollPosition}
  //               height={
  //                 this.target.current ? this.target.current.clientHeight : null
  //               }
  //             />
  //             <Particles
  //               params={{
  //                 particles: {
  //                   number: {
  //                     value: 250,
  //                     density: {
  //                       enable: true,
  //                       value_area: 1500
  //                     }
  //                   },
  //                   line_linked: {
  //                     enable: false,
  //                     opacity: 0.02
  //                   },
  //                   move: {
  //                     direction: "right",
  //                     speed: 0.05
  //                   },
  //                   size: {
  //                     value: 1
  //                     // "random": true,
  //                   },
  //                   opacity: {
  //                     anim: {
  //                       enable: true,
  //                       speed: 1,
  //                       opacity_min: 0.05
  //                     }
  //                   }
  //                 },
  //                 interactivity: {
  //                   events: {
  //                     onclick: {
  //                       enable: true,
  //                       mode: "push"
  //                     }
  //                   },
  //                   modes: {
  //                     push: {
  //                       particles_nb: 1
  //                     }
  //                   }
  //                 },
  //                 retina_detect: true
  //               }}
  //             />
  //           </div>
  //           <div className="section-main--logo"></div>

  //           <div className="section-main--title">
  //             <div className="section-main--title_letter">
  //               <span className="main">A</span>
  //               <span className="shadow">A</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">D</span>
  //               <span className="shadow">D</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">H</span>
  //               <span className="shadow">H</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">Y</span>
  //               <span className="shadow">Y</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">A</span>
  //               <span className="shadow">A</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">A</span>
  //               <span className="shadow">A</span>
  //             </div>
  //             <div className="section-main--title_letter">
  //               <span className="main">Y</span>
  //               <span className="shadow">Y</span>
  //             </div>
  //           </div>
  //           <div className="rays-wrapper">
  //             <img src={lightRaysImage} alt="emiting rays" />
  //           </div>
  //           <div className="section-main--year">
  //             <div className="section-main--year-letters">2K</div>
  //             <div className="section-main--year-letters">19</div>
  //           </div>
  //           <div className="mountains">
  //             <div className="mountains-one"></div>
  //             <div className="mountains-two"></div>
  //             <div className="mountains-three"></div>
  //           </div>
  //         </div>
  //         <div className="section-about">
  //           <About />
  //         </div>
  //         <div className="section-gallery">
  //           <Gallery />
  //         </div>
  //         <div className="section-council">
  //           <Council />
  //         </div>
  //         <div className="section-footer">
  //           <Footer />
  //         </div>
  //       </div>
  //       // </div>
  //     );
  //   }
}

export default Home;
