import Header from './Header.jsx'
import Footer from './Footer.jsx'
import myImage from './assets/me_career_fair.png';
export default function Introduction() {
    document.title = "Introduction"
  return (
    <>
    <Header />
      <main>
		<h2>Connor J. Lewis: Introduction</h2>
        <figure>
        <img src={myImage} alt="A photo of me before attending a career fair in 2023"></img>
        <figcaption><em>A photo of me before attending a career fair in 2023</em></figcaption>
		</figure>
		<ul>
            <li><strong>Personal Background:</strong> Born and raised in Thomasville, NC I moved to Asheboro after graduating high school and focused on getting my degree in computer science. Some of my hobbies include gaming, watching horror movies, and playing basketball.</li>
            <li><strong>Professional Background: </strong>I have no experience in the technology field yet, but I have worked in traffic control, at Domino’s, and at a movie theater.</li>
            <li><strong>Academic Background: </strong>I graduated from Thomasville High School as valedictorian, and I am concentrating on AI, Robotics, and Gaming.</li>
            <li><strong>Primary Computer: </strong>The computer I mainly use is my Dell windows laptop that I use either at my house or on campus.</li>
            <li><strong>Course I'm Taking & Why: </strong>
            <ul>
                <li><strong>ITIS3135 - Web Development: </strong>I am taking this so I can better understand frontend coding.</li>
                <li><strong>ITCS4123 - Visualization and Visual Communication: </strong>I chose this course because I thought the concept of visualization in Unity3D seemed very interesting.</li>
                <li><strong>ITSC3146 - Oper Syst & Networking: </strong>I am taking this class because I felt as if knowing more about operating systems could be useful in my pursuit of a career path.</li>
                <li><strong>STAT2122 - Intro to Prob & Stat: </strong>This was the last class I needed to take in order to finish the math portion of my degree.</li>
            </ul>
            </li>
        </ul>
	</main>
    <Footer />
    </>
  )
}