import img from '../assets/images/SectionL.png';
import { Link } from 'react-router-dom';
import Header from './Header';
import image1 from '../assets/members/image1.jpg';
import image2 from '../assets/members/image2.png';
import image3 from '../assets/members/image3.png';
import image4 from '../assets/members/image4.png';
import image5 from '../assets/members/image5.png';
import image6 from '../assets/members/image6.png';
import image7 from '../assets/members/image7.png';
import image9 from '../assets/members/image9.png';
import about from '../assets/aboutus.png';
import archit_img from '../assets/members/archit_img.jpg';
import Partner from './Partner';
import Footer from './Footer';
import ContactPage from './ContactPage';
const Divider = ({ title }) => (
    <div className="flex flex-row justify-center items-center space-x-4 mb-8 mt-10">
        <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
                background:
                    "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
        ></span>
        <h1 className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-sm">
            {title}
        </h1>
        <span
            className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
            style={{
                background:
                    "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
            }}
        ></span>
    </div>
);

const TeamMember = ({ name, img, description, height }) => (
    <div className="w-[80%] sm:w-[30%] md:w-[20%] text-center flex flex-col items-center mx-auto">
        <div className="w-full h-[50vw] sm:h-[30vw] md:h-[20vw] bg-[#D9D9D947] flex justify-center items-center">
            <img src={img} className="w-full h-full object-cover" alt="" />
        </div>
        <div className="w-full mt-2 flex flex-col items-center">
            <h1 className={`text-lg sm:text-xl md:text-2xl ${height || 'h-[3rem]'} flex items-center justify-center`}>
                {name}
            </h1>
            <p className="text-xs sm:text-sm uppercase h-[2rem] flex items-center justify-center">
                {description}
            </p>
        </div>
    </div>
);



const AboutUs = () => {
    return (
        <div className="bg-[#1A0C25] font-montserrat text-white">
            <div className="min-h-screen w-full pt-[30px] pb-[120px]">
                <Header />
                <section className="flex flex-col 2xl:pt-[4vw] md:pt-[12vw] items-center h-auto md:h-[48vw] justify-center px-4 md:px-0">
                    <Divider title="About Us" />
                    <div className="text-center">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl mt-5 font-medium">
                            Ai.gnosis – Empowering Early Detection
                        </h1>
                        <p className="mt-3 text-xs sm:text-base">Working together for a brighter future.</p>
                    </div>
                    <img src={about} alt="About Us" className="w-[90%] md:w-[40vw] h-auto mt-[2vw]" loading="lazy" />
                    <p className="w-[90%] md:w-[60vw] text-center mt-[2vw] text-xxs sm:text-xs md:text-base mb-200">
                        At Ai.gnosis, we are committed to making a positive impact on the lives of children and families
                        through early autism screening and support. Our team harnesses the power of advanced AI to enable early,
                        accessible diagnoses and provide parents with the resources they need for timely intervention. With a
                        focus on compassionate care and innovation, we’re dedicated to guiding families on the path to better
                        understanding and support.
                    </p>
                </section>
            </div>

            <section className="w-full h-auto px-4 sm:px-[5vw] md:px-[10vw] py-[2vw] bg-[#1A0C25]">
                <div className="w-full rounded-3xl border border-[#dfcbed26] p-4">
                    <Divider title="Our Project Team" />
                    <div className="text-center mb-10">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium">The Minds Behind Ai.gnosis</h1>
                        <p className="mt-3 text-xs sm:text-base">Working together for a brighter future.</p>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-[7vw]">
                        <TeamMember name="Divyansh Mangal" img={image2} description="CO FOUNDER" loading="lazy" />
                        <TeamMember name="Raksheet Jain" img={image3} description="CO FOUNDER" loading="lazy" />
                    </div>
                    <div className='flex justify-center items-center my-10'>
                        <h2 className='font-raleway text-[#FFFFFF] text-2xl sm:text-5xl'>Advisors</h2>
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-[7vw]">
                        <TeamMember name="Dr. S. Sitaraman" img={image1} description="DIRECTOR & DEVELOPMENTAL NEUROLOGIST" height="h-[6rem]" loading="lazy" />
                        <TeamMember name="Dr. Ramesh Agrawal" img={image6} description="HOD mother & child block, AIIMS Delhi" height="h-[6rem]"  loading="lazy"/>
                        <TeamMember name="Dr. Rajesh Jain" img={image4} description="Consultant Pediatrician Raksheet Hospital" height="h-[6rem]" loading="lazy" />
                    </div>

                    <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-5 md:gap-[5vw] mt-10 mb-5 pb-5">
                        <TeamMember name="Dr. Dhananajay Mangal" img={image5} description="Consultant Pediatrician Babylon Hospital" height="h-[6rem]" loading="lazy" />
                        <TeamMember name="Dr. Anami Gour" img={image7} description="Consultant Paediatric Intensive Care, London" height="h-[6rem]" loading="lazy" />
                        <TeamMember name="Mr. Rajneesh Bhandari" img={image9} description="NeuroEquilibrium Diagnostics Pvt. LMT." height="h-[6rem]" loading="lazy" />
                        <TeamMember name="Mr. Arcchit Jain" img={archit_img} description="Vice President, Goldman Sachs" height="h-[6rem]" loading="lazy" />
                    </div>
                </div>
            </section>

            <div className='mt-[3vw]'>
                <Partner />
            </div>

           <ContactPage/>
            <Footer />
        </div>
    );
};

export default AboutUs;
