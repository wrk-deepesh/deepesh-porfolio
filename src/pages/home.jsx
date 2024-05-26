import React from 'react'

const Home = () => {
  const message = {
    fullStackdeveloperTag : `<full-stack-developer />`,
    aboutMeOpeningTag : `<about-me>`,
    aboutMeClosingTag : `<about-me />`,
    aboutMeContent : `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia explicabo hic, commodi culpa dignissimos architecto saepe quibusdam nobis! Sunt nostrum est modi assumenda quisquam quia minima commodi aspernatur vero officia?`,
    nameOpeningTag : `<name>`,
    nameClosingTag : `<name />`,
    nameContent : `Deepesh Singh`
  }
  
  return (
    <div className='page' style={{alignItems: 'center'}}>
        <div style={{ flex: "50%" }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, voluptatum. Dolor, repudiandae. Inventore a maxime repudiandae atque tempora dolore rem, totam incidunt unde cumque impedit perspiciatis earum debitis, modi commodi alias. Temporibus obcaecati error magnam, illum reiciendis fugiat, harum enim tempora sint corporis earum quasi animi dolore quam blanditiis consequatur?
        </div>
        <div style={{ flex: "50%" }}>
            <p className='mock-html-tags' style={{ marginLeft : '40px' }}>{ message.fullStackdeveloperTag }</p>
            <p className='mock-html-tags' style={{ marginLeft : '40px' }}>{ message.nameOpeningTag }</p>
            <p style={{ marginLeft : '80px' }}>{ message.nameContent }</p>
            <p className='mock-html-tags' style={{ marginLeft : '40px' }}>{ message.nameClosingTag }</p>
            <p className='mock-html-tags' style={{ marginLeft : '40px' }}>{ message.aboutMeOpeningTag }</p>
            <p style={{ marginLeft : '80px' }}>{ message.aboutMeContent }</p>
            <p className='mock-html-tags' style={{ marginLeft : '40px' }}>{ message.aboutMeClosingTag }</p>
        </div>
    </div>

  )
}

export default Home