import React from 'react';
import Link from 'next/link';
export default function Home() {

  return (


    <div>
      {/* navbar starts */}
      <div className={"container mx-auto flex items-center border-b-2 px-6 py-2"}>
        <img className={"companyName"} src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65f975acedcccd076f5248e7_Unitech.svg" alt="Unitech" />

        <div className="grow">
          <div className="flex items-center justify-center gap-2 md:gap-8">
            <Link href="https://unitech-template.webflow.io/about-us">About us</Link>
            <Link href="https://unitech-template.webflow.io/features">Features</Link>
            <Link href="https://unitech-template.webflow.io/blogs">Blogs</Link>
            <Link href="https://unitech-template.webflow.io/careers">Careers</Link>
            <Link href="https://unitech-template.webflow.io/pricing">Pricing</Link>
            <Link href="https://unitech-template.webflow.io/contact">Contact</Link>
          </div>
        </div>

        <Link href=""> Cart ( 0 ) </Link>
        <button className="btncss hover:bg-black hover:text-white">Get Started  
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65f97a784f551949d13887e6_ic-arrow.svg" ></img>
        </button>
      </div>

      {/* navbar ends */}


        {/* part2 starts*/}
        <div className="hero min-h-fit flex flex-col justify-center items-center px-4 py-24">
          <h1 className="text-6xl font-bold text-dark text-center mb-8">Explore the unitech Experience</h1>
          <div className="text-xl text-gray-700 text-center leading-relaxed w-2/4">
              We invite you to explore a realm where innovation is second nature, and intuitive solutions pave the way for transformative success.
          </div>
        </div>


        {/* part2 ends*/}


        {/* part3 starts */}

        <div className="hero-form-wrap flex justify-center items-center">
          <input className="hero-input w-1/4 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="Email address" type="email" id="email" />
          <button className="btnpart3  hover:bg-black hover:text-white"> Request Demo</button>
        </div>
        
        <div className="hero min-h-fit flex flex-col justify-center items-center p-4">
          <div className="text-l text-gray-800 text-center leading-relaxed  ">
            Personalized solutions for your specific requirements.
          </div>
        </div>

        {/* part3 ends */}


        

    {/* part4 starts */}
    <div className="hero-images hover">
      <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6607a563094a6c4d5d6f311a_hero%20image.svg"
        alt="Hero Main Image"
        className="hero-main-img hover:scale-110 transition duration-300 ease-in-out"
      />
      <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c0e54a024e711e8671c0_hero-1.svg"
        alt="Hero Graph"
        className="hero-graph hover:scale-110 transition duration-300 ease-in-out"
      />
      {/* <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c16f5c310ea51dbbfe83_hero-3.svg"
        alt="Hero Graph"
        className="hero-service"
      /> */}
      <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c1b91c6484534258e8da_hero-2.svg"
        alt="Hero Graph"
        className="hero-right-graph hover:scale-110 transition duration-300 ease-in-out"
        
      />
      <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c3eff5a5a23973c52d5c_arrow.svg"
        alt="Arrow"
        className="hero-left-arrow "
      />
      <img
        src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602c4f7705882416ec67cfa_arrow-1.svg"
        alt="Arrow"
        className="hero-right-arrow"
      />
    </div>
    

    {/* part4 ends */}
    
    

    {/* part5 starts */}
    

    <div className="text-l text-gray-800 text-center leading-relaxed bg-white p-10"> 
          Trusted by Visionaries, Embraced by Leading Companies Worldwide 
        </div>
    
    <div className="outerTrusted" style={{width:"100%", overflow:"hidden", background:"white"}}>

    
    <div className="trusted-companies flex justify-center items-center bg-white flex p-2" style={{flexWrap:"wrap"}}>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc18176874e8d2ae268838_luminous.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12 h-10"/>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc1816ea85400f356cfe9f_hourglass.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12  h-10"/>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc181688745fc10c087d67_capsule.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12 h-10"/>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc1816a8779e93c140501a_lightbox.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12 h-10"/>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc181b1becc2048c77b6bb_spherule.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12 h-10"/>
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fc181b88745fc10c08807e_webflow.svg" className="trusted-companies-img hover:scale-110 transition duration-300 ease-in-out mr-12 h-10"/> 
      </div>
  
      </div>


      <div className="fullouter" style={{height:"140vh", background:"white", textOverflow:"hidden"}}>
        <div className="outer grid grid-cols-3 gap-4" >

        <div className="outerLeft flex">
        <div className="bg-red p-6">
          <div className="feature-left flex flex-col items-center">
            <div className="feature-head mb-4">
              <div className="feature-title flex items-center">
                <img className="feature-icon mr-4" src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693834e7943c65361375_ic-automation.svg"/>
                <h3 className="feature-heading text-xl text-black-800">Intelligent Automation</h3>
              </div>
              <p className="feature-info">Harness the power of smart automation to streamline repetitive tasks and boost operational efficiency.</p>
            </div>
            <img className="feature-graph w-full h-auto object-cover" src='https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04fcc998910faad931_gp-automation.svg'/>
          </div>
        </div>
      </div>

      <div className="outerRight flex col-span-2 grid grid-rows-4 grid-flow-col gap-4">
        <div className="outerRight_upper">
        <div className="outerRight_container grid grid-cols-2 gap-4" style={{marginTop:"4vh"}}>
          <div className="scalable-wrap flex flex-col items-center h-fit">
            <div className="feature-head mb-4">
              <div className="feature-title flex items-center">
                <img className="feature-icon mr-4" src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693823f3e07c502c2434_ic-architecture.svg"/>
                <h1 className="feature-heading text-xl text-black-900">Scalable Architecture</h1>
              </div>
              <p className="feature-info">Seamlessly adapt to changing demands, ensuring sustained success as your business evolves.</p>
            </div>
            <img className="feature-graph w-full h-auto object-cover" src='https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04469cbfb12ba29854_gp-architecture.svg'/>
          </div>
        


          <div className="edge-wrap flex flex-col items-center h-fit">
            <div className="feature-head mb-4">
              <div className="feature-title flex items-center">
                <img className="feature-icon mr-4" src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693829abfc8a69a9a096_ic-edge.svg"/>
                <h1 className="feature-heading text-xl text-black-900">Cutting-Edge Innovation</h1>
              </div>
              <p className="feature-info">Access the latest technologies, continuous innovation and features that empower you to lead in a dynamic market.</p>
            </div>
            <img className="feature-graph w-full h-auto object-cover" src='https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04353929331e59526f_gp-innovation.svg'/>
          </div>
        </div>

        </div>

        <div className="outerRight_lower">
          <div className="interface-wrap grid grid-col-5" style={{height:"40vh"}}>


            <div className="feature-head mb-4 col-span-2">
              <div className="feature-title flex items-center">
                <img className="feature-icon mr-4" src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602693986d258c6d318a6f8_ic-interface.svg"/>
                <h1 className="feature-heading text-xl text-black-900">Intuitive User Interface</h1>
              </div>
              <p className="feature-info">Navigate effortlessly through Unitech, focusing on your goals without unnecessary complexity.</p>
            </div>

          <div className="col-span-3">
            <img className="feature-graph w-full h-auto object-cover" src='https://assets-global.website-files.com/65dc317709162b5bce8680ee/66026a04233cd4dbbcac49d3_gp-interface.svg'/>
          </div>
          
          </div>
        </div>
      </div>

      </div>
</div>


<div className="section-wrap bg-white pt-24 pb-24">
      <div className="section-img">
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution.jpg"
          loading="lazy"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 46vw"
          srcSet="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution-p-500.jpg 500w, https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution-p-800.jpg 800w, https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution.jpg 1236w"
          alt="Evolution Image"
          className="section-image"
        />
        <div className="on-scroll" style={{ display: 'block', transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
      </div>
      <div className="section-data">
        <h3 className="sub-heading">Initiating your business evolution with unitech</h3>
        <p className="evolution-text">It's the catalyst for the evolution of your business. Seamlessly integrate groundbreaking solutions that lay the foundation for your upward trajectory.</p>
        <ul role="list" className="evolution-data">
          <li className="evolution-info">Smart Solutions for Intelligent Growth</li>
          <li className="evolution-info">Innovate for Industry Leadership</li>
          <li className="evolution-info">Intuitive Design, Effortless Progress</li>
          <li className="evolution-info">Scalability at Your Fingertips</li>
        </ul>
        <div className="button-wrap">
          <a href="https://unitech-template.webflow.io/features" className="primary-button w-inline-block hover:bg-lime-400 hover:text-white ">
            <div>Discover Now</div>
          </a>
        </div>
      </div>
    </div>




    <div className="section-wrap bg-white pt-24 pb-24">
      <div className="section-data pl-20">
        <h3 className="sub-heading">The unity of innovation and execution</h3>
        <p className="execution-text">At Unitech, we believe in the power of unity – where groundbreaking ideas and meticulous execution come together to propel your vision forward.</p>
        <div className="execution-data">
          <div className="execution-info pb-4" style={{borderBottom:"1px solid lightgrey"}}>
            <h6 className="execution-title font-semibold">1. Innovation Redefined</h6>
            <div>Our platform serves as a breeding ground for pioneering solutions, keeping you at the forefront of progress.</div>
          </div>
          <div className="execution-info pb-4" style={{borderBottom:"1px solid lightgrey"}}>
            <h6 className="execution-title font-semibold">2. Precision in Execution</h6>
            <div>Every feature is meticulously crafted to ensure seamless integration and impactful outcomes.</div>
          </div>
        </div>
        <div className="button-wrap">
          <a href="https://unitech-template.webflow.io/features" className="primary-button w-inline-block hover:bg-lime-400 hover:text-white">
            <div>Explore More</div>
          </a>

          
        </div>
      </div>

      <div className="section-img">
        <img
          src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66028d748dc21e687b1b2e48_evolution.jpg"
          loading="lazy"
          sizes="(max-width: 479px) 92vw, (max-width: 767px) 95vw, (max-width: 991px) 96vw, 46vw"
          srcSet="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660290b4a19f921db8d839c4_execution.jpg 1236w"
          alt="Evolution Image"
          className="section-image pr-4"
        />
        <div className="on-scroll" style={{ display: 'block', transform: 'translate3d(100%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }}></div>
      </div>
    </div>
    
    
    


    <div className="section-title pl-20">
        <p>Features</p>
        <h1 style={{fontWeight:"500", fontSize:"46px"}}>Powerful Features</h1>
    </div>


    <div className="pf-wrapper bg-white">
      
      <div className="pf-info-data">
        <div className="features-block">
          <h4 className="pf-heading">Analyze your Data</h4>
          <p className="features-text">Our platform provides you with the capabilities to dissect and make sense of your data into valuable insights.</p>
        </div>
        <div className="features-block">
          <h4 className="pf-heading">Collaborate Securely</h4>
          <p className="features-text">Our platform provides a secure environment for seamless teamwork, ensuring information at every step.</p>
        </div>
        <div className="features-block">
          <h4 className="pf-heading">Insight Reach</h4>
          <p className="features-text">Harness the power of data-driven insights to reach your target audience effectively, with advanced analytics.</p>
        </div>
      </div>
      <div className="pf-img">
        <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/6602a15e0acd4b09478fd837_iPhone%2015%20Pro%20(1).svg" loading="lazy" style={{ opacity: 1, transform: 'translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)', transformStyle: 'preserve-3d' }} alt="Features Image" className="pf-image" />
      </div>
      <div className="pf-info-data">
        <div className="features-block">
          <h4 className="pf-heading">Easy and Intuitive</h4>
          <p className="features-text">Navigating through our platform is a breeze, thanks to its user-friendly design and straightforward features.</p>
        </div>
        <div className="features-block">
          <h4 className="pf-heading">Power of Flow</h4>
          <p className="features-text">Our streamlined platform empowers you to automate tasks, and achieve more with less effort.</p>
        </div>
        <div className="features-block">
          <h4 className="pf-heading">Smart Sync</h4>
          <p className="features-text">With Smart Sync, experience effortless collaboration and productivity, no matter where you are.</p>
        </div>
      </div>
    </div>
      


    <section className="integrations-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="integration-wrap">
          <div className="integration-top">
            <h3 className="ig-heading text-xl">Integrating Your Workflow with Unitech's</h3>
            <p className="integration-text">In the dynamic landscape of business operations, the key to unlocking optimal efficiency lies in the seamless integration of your workflow.</p>
            <div className="ig-btn">
              <a href="/https://unitech-template.webflow.io/integrations" className="link-button white w-inline-block flex hover:text-green" style={{ color: 'rgb(255, 255, 255)' }}>
                <div className="link-icon flex mx-2" style={{ backgroundColor: 'rgb(185, 233, 125)' }}>
                  <img loading="lazy" src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbd7264d431200f9ecde39_ic-btn-arrow.svg" alt="Arrow" className="arrow" />
                </div>
                <div className='mx-1  hover:text-green'>Explore Integrations</div>
              </a>
            </div>
          </div>
          <div className="ig-logo-wrap">
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029886b68690c68a3ff49a_ic-Layers.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885c99f7af534956e42_ic-Boltshift.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885cb785f539dc1446f_ic-connectify.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298856d31544936b7277b_ic-infinita.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298850253a5007ec435cb_ic-sybcflow.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885d9caab4371d48eef_ic-datafuse.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298851dcae241671538b7_ic-linkworx.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/66029885469cbfb12bca9a8d_ic-FocalPoint.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/660298862cf92a81a16afbc4_ic-aqua.svg" loading="lazy" alt="Integration Logo" className="ig-logo" />
          </div>
        </div>
      </div>
    </section>


    <section className="blogs bg-white p-28">
      <div className="w-layout-blockcontainer container w-container">
        <div className="section-title">
          <div className="sub-title">Our Blogs</div>
          <h1 className="section-heading mb-5" style={{fontWeight:"500", fontSize:"46px"}}>Articles &amp; Resource</h1>
        </div>
        <div className="w-dyn-list">
          <div role="list" className="post-list w-dyn-items">
            <div role="listitem" className="post-item w-dyn-item">
              <a href="https://unitech-template.webflow.io/blog-posts/beyond-the-blueprint-crafting-your-unique-success-structure" className="post-block w-inline-block">
                <div className="post-img">
                  <img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd05746b8c70d026eaf9_blog-thumb-01.jpg" loading="lazy" alt="Post Image" className="post-image" />
                </div>
                <div className="post-data">
                  <div className="post-date">
                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" loading="lazy" alt="Date Icon" />
                    <div>Apr 24, 2024</div>
                  </div>
                  <h5 className="post-title">Beyond the blueprint crafting your unique success structure</h5>
                  <div className="post-btn" style={{ color: 'rgb(51, 51, 51)' }}>
                    <div>Read More</div>
                    <div className="post-line" style={{ width: '0%', height: '0.996094px' }}></div>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="post-item w-dyn-item">
              <a href="https://unitech-template.webflow.io/blog-posts/navigating-the-landscape-of-core-principles" className="post-block w-inline-block">
                <div className="post-img">
                  <img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd287e4ee1d7a1062719_blog-thumb-02.jpg" loading="lazy" alt="Post Image" className="post-image" />
                </div>
                <div className="post-data">
                  <div className="post-date">
                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" loading="lazy" alt="Date Icon" />
                    <div>Apr 24, 2024</div>
                  </div>
                  <h5 className="post-title">Navigating the landscape of core principles</h5>
                  <div className="post-btn" style={{ color: 'rgb(51, 51, 51)' }}>
                    <div>Read More</div>
                    <div className="post-line" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </a>
            </div>
            <div role="listitem" className="post-item w-dyn-item">
              <a href="https://unitech-template.webflow.io/blog-posts/sustainable-growth-strategies-paving-the-path-to-lasting-success" className="post-block w-inline-block">
                <div className="post-img">
                  <img src="https://assets-global.website-files.com/65f97ac947fa88734712d3fb/65fbbd530a0906bf3be0c28f_blog-thumb-03.jpg" loading="lazy" alt="Post Image" className="post-image" />
                </div>
                <div className="post-data">
                  <div className="post-date">
                    <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fbbfe51836f4b9d860e026_ic-date.svg" loading="lazy" alt="Date Icon" />
                    <div>Apr 24, 2024</div>
                  </div>
                  <h5 className="post-title">Sustainable growth strategies paving the path to lasting success</h5>
                  <div className="post-btn" style={{ color: 'rgb(51, 51, 51)' }}>
                    <div>Read More</div>
                    <div className="post-line" style={{ width: '0%' }}></div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    
    <section className="cta bg-white" style={{padding:"6rem"}}>
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-wrap" >
          <div className="cta-top">
            <div className="cta-left">
              <h2 className="cta-title">Start transformation today!</h2>
              <p className="cta-text">Are you ready to revolutionize the way you do business? Unitech is your catalyst for success, combining innovation, seamless integration, and tailored solutions.</p>
            </div>
            <a href="https://unitech-template.webflow.io/sign-up" className="btncss hover:bg-black hover:text-white"><div>Get Started</div></a>
          </div>
          <div className="cta-bottom" >
            
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>User-Friendly Interface</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Tailored Solutions</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Support and Training</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Data Security</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Integration Capabilities</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Innovative features</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Access all features</div></div>
            <div className="cta-tag mx-7"><img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65faa6f77992c97a3fcfd066_ic-cta.svg" loading="lazy" alt="CTA Icon" className="cta-icon" /><div>Innovative features</div></div>

          </div>
        </div>
      </div>
    </section>





    <section className="footer">
  <div className="w-layout-blockcontainer container w-container">
    <div className="footer-top">
      <div className="footer-left">
        <a href="/" aria-current="page" className="brand w-inline-block w--current">
          <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa7505a4cb99600cee404e_w-unitech.svg" loading="lazy" alt="Unitech" />
        </a>
        <div className="ft-address">LNMIIT College, Jaipur (302031), Rajasthan</div>
        <a href="mailto:info@example.com" className="ft-mail">chelawatak@gmail.com</a>
        <div className="ft-social-wrap">
          <a href="https://twitter.com/" target="_blank" className="ft-social twitter w-inline-block">
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa765b60a13e9aa744d5a0_ic-twitter.svg" loading="lazy" alt="Social Icon" />
          </a>
          <a href="https://www.facebook.com/" target="_blank" className="ft-social facebook w-inline-block">
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa765dd18b5eb68777360c_ic-facebook.svg" loading="lazy" alt="Social Icon" />
          </a>
          <a href="https://www.youtube.com/" target="_blank" className="ft-social youtube w-inline-block">
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa765beb81309a691aaf7d_ic-youtube.svg" loading="lazy" alt="Social Icon" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" className="ft-social insta w-inline-block">
            <img src="https://assets-global.website-files.com/65dc317709162b5bce8680ee/65fa765beb81309a691aaf81_ic-insta.svg" loading="lazy" alt="Social Icon" />
          </a>
        </div>
      </div>
      <div className="footer-right">
        <div>
          <div className="ft-sub-title">Product</div>
          <div className="ft-menu">
            <a href="/" aria-current="page" className="ft-link w--current">Home</a>
            <a href="/features" className="ft-link">Features</a>
            <a href="/about-us" className="ft-link">About us</a>
            <a href="/integrations" className="ft-link">Integrations</a>
            <a href="/pricing" className="ft-link">Pricing</a>
          </div>
        </div>
        <div>
          <div className="ft-sub-title">Company</div>
          <div className="ft-menu">
            <a href="/careers" className="ft-link">Careers</a>
            <a href="/blogs" className="ft-link">Blogs</a>
            <a href="/faq" className="ft-link">FAQ</a>
            <a href="/reviews" className="ft-link">Reviews</a>
            <a href="/contact-us" className="ft-link">Contact us</a>
          </div>
        </div>
        <div>
          <div className="ft-sub-title">Resources</div>
          <div className="ft-menu">
            <a href="/template-info/style-guide" className="ft-link">Style Guide</a>
            <a href="/template-info/licensing" className="ft-link">Licensing</a>
            <a href="/template-info/changelog" className="ft-link">Changelog</a>
            <a href="/401" className="ft-link">Password</a>
            <a href="/404" className="ft-link">Error 404</a>
          </div>
        </div>
        <div>
          <div className="ft-sub-title">Utilities</div>
          <div className="ft-menu">
            <a href="/privacy-policy" className="ft-link">Privacy Policy</a>
            <a href="/terms-conditions" className="ft-link">Terms &amp; Conditions</a>
            <a href="/cookie-policy" className="ft-link">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-bottom">
    <div className="w-layout-blockcontainer container w-container">
      <div className="ft-btm">
        <div>© 2024 unitech. All Rights Reserved.</div>
        <div>Designed by <a href="/" target="_blank" className="ft-btm-link">Aniket Chelawat 😎.</a> Assigned by <a href="./" target="_blank" className="ft-btm-link">Hire Quotient. 😀</a></div>
      </div>
    </div>
  </div>
</section>


<section>
{/* <div className="carousel w-1/2 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={myImage} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  
</div> */}

</section>

</div>
  );
}
