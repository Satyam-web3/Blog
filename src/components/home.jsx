import React from 'react'
import Featured from '../components/Featured'
import Navbar from '../components/Navbar'
import Blogcard from './Blogcard'
import Slider from './slider'
import SidePost from './SidePost'
import Footer from './Footer'



export default function Home() {
  return (
    <div>
      <Navbar />


      {/* featured section */}
      <div className="featured_section">
        <div className="featured_section_1">
          <Featured index={3} height='30rem' font='1.3rem' />
        </div>

        <div className="featured_section_2">
          <Featured index={0} font="1rem" height='15rem' />

          <div className="featured_section_3">
            <Featured index={6} font="0.6rem" height='15rem' />
            <Featured index={2} font="0.6rem" height='15rem' />
          </div>
        </div>
      </div>
      {/* featured section */}

      {/* hot section */}
      <div className="hot_section">
        <h4>Hot Section</h4>
        <div className="hot_blogs">

          <Blogcard index={1} />
          <Blogcard index={6} />
          <Blogcard index={8} />
        </div>
      </div>
      <br />
      <hr />

      <div className='full-section'>
        <div className="empty-section"></div>
        <div className="left-full-section">
          <h4>Fashion</h4>
          <div className="fashion_blogs">
            <Blogcard index={13} width='15rem' height='15rem' font='0.5rem' />
            <Blogcard index={18} width='15rem' height='15rem' font='0.5rem' />
            <Blogcard index={22} width='15rem' height='15rem' font='0.5rem' />

          </div>
          <div className="fashion_blogs">
            <Blogcard index={2} width='15rem' height='15rem' font='0.5rem' />
            <Blogcard index={4} width='15rem' height='15rem' font='0.5rem' />
            <Blogcard index={9} width='15rem' height='15rem' font='0.5rem' />

          </div>

          <div className="lifestyle">
            <h4>Lifestyle</h4>
            <div className="lifestyle-blogs">
              <div className="lifestyle-left">
                <Blogcard index={3} showDescription={true}/>
              </div>
              <div className="lifestyle-right">
              <SidePost index='2' />
            <SidePost index='22' />
            <SidePost index='19' />
            <SidePost index='22' />
            
              </div>
            </div>
          </div>

        </div>




        <br />
        <hr />





        {/* sidebar */}
        <div className="sidebar">
          <h4>slider Posts</h4>
          <Slider />

          <div className="Most-commented">
            <h4>Most Commented</h4>
            <SidePost index='2' />
            <SidePost index='22' />
            <SidePost index='19' />
          </div>
        </div>

      {/* sidebar ends */}
      </div>
      <Footer/>
    </div>
  )
}
