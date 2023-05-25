import './about.css';

const About = () => {
  return (
    <>
      <div className='about-section'>
        <h1>About Us Page</h1>
        <p>My name is Anton Kozak.</p>
        <p>I make React single page today 2023-05-23 21:56</p>
      </div>

      <div className='row'>
        <div className='column'>
          <div className='card'>
            <img src={require(`../../../assets/images/image0.jpeg`)} alt='Anton'/>
            <div className='container'>
              <h2>Anton Kozak</h2>
              <p className='title'>Art Director & Designer</p>
              <p>Studing React.</p>
              <p>kozakanton@i.ua</p>
              <p>
                <button className='button'>Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
