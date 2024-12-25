import React, { useRef } from 'react';
import { GoArrowUpRight } from 'react-icons/go';
import { FaMapMarkerAlt, FaPhoneAlt, FaCalendarAlt } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';
import emailjs from "emailjs-com";
const ContactPage = () => {


    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault(); 
       
      emailjs
        .sendForm(
          "service_3jcjhyy", // this is  EmailJS service ID
          "template_rp28x4l", // this is  EmailJS template ID
          form.current,
          "yD9ETjl2HMt2wVVJC" // this is public key
        )
        .then(
          (result) => {
            console.log("Email sent successfully:", result.text);
            alert("Message sent successfully!");
          },
          (error) => {
            console.error("Error sending email:", error.text);
            alert("Failed to send the message. Please try again.");
          }
        );
  
      // Reset the form after submission
      e.target.reset();
    };

    return (
        <>
            {/* Contact Form Section */}
            <div id='contact' className='2xl:h-[50vw] max-sm:mt-[60px] md:h-[70vw] text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25]'>
                <div className="w-full h-[90%] flex justify-center items-center flex-col border-t rounded-[14rem] border-[#B874B580] max-sm:rounded-[7rem]">
                    <div className='w-full flex-col h-[15vw] max-sm:h-[60vw] justify-center flex items-center'>
                        <div className="">
                            <h1 className='text-center 2xl:text-7xl md:text-5xl max-sm:text-2xl font-semibold leading-[3rem]'>
                                Get in Touch with Ai.gnosis
                            </h1>
                        </div>
                        <div className='px-[5vw]'>
                            <p className='text-center mt-[2vw] 2xl:text-base md:text-sm text-xs'>
                                We’d love to hear from you! Whether you have questions, feedback, or would like to schedule a visit, our contact form makes it easy to reach out.
                            </p>
                        </div>
                    </div>
                    <div className="w-full h-[45vw] px-[5vw] gap-5 flex flex-col md:flex-row justify-center items-center">
                        <div className="w-[100%] md:w-[40%] h-[90%]">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1634778192933!2d75.8266295!3d26.8983064!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db6958f6f2e59%3A0xe378dd988aba33b0!2sBabylon%20Children&#39;s%20Hospital%20%7C%20BEST%20CHILD%20HOSPITAL%20IN%20JAIPUR%20%7C%20CHILD%20DOCTOR%20IN%20JAIPUR!5e0!3m2!1sen!2sin!4v1731096209878!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                        <div className="w-[100%] md:w-[40%] px-[4vw] h-[70%]">
                            <h1 className='2xl:text-base md:text-sm text-xs'>
                                Simply fill in your details below, and we’ll get back to you as soon as possible. You can also find us on the map, showcasing our headquarters and partner locations. For immediate assistance, feel free to call or email us directly!
                            </h1>
                            <form
      ref={form}
      onSubmit={sendEmail}
      className="mt-4 2xl:text-base md:text-sm space-y-4"
    >
      <input
        type="text"
        name="name" 
        placeholder="Your Name"
        required
        className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md"
      />
      <input
        type="email"
        name="email" 
        placeholder="Your Email"
        required
        className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md"
      />
      <input
        type="text"
        name="phone" 
        placeholder="Your Phone Number"
        required
        className="w-full px-4 py-2 border-2 border-[#B740A1] bg-[#2521276B]  rounded-md"
      />
      <textarea
        name="message" 
        placeholder="Your Message"
        required
        className="w-full h-32 px-4 py-2  bg-[#2521276B] border-2 border-[#B740A1] rounded-md resize-none"
      ></textarea>
      <button
        type="submit"
        className="w-[60vw] max-sm:mt-[11px] max-sm:m-auto md:w-[14rem] cursor-pointer mt-[5rem] border-2 border-[#B740A1] gap-4 rounded-full flex justify-center items-center text-[#0D0C0A] h-[3.5rem] group bg-transparent hover:bg-[#B740A1] transition-colors duration-300"
      >
        <span className="text-white">Send Message</span>
        <div className="w-[2.5rem] h-[2.5rem] justify-center flex items-center text-white text-xl group-hover:bg-white group-hover:text-black rounded-full bg-[#B740A1]">
          <GoArrowUpRight />
        </div>
      </button>
    </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className='w-full max-sm:w-[73%] max-sm:mt-[431px] max-sm:mx-auto gap-[7vw] md:mt-[0vw] bg-[#1A0C25] md:h-[20vw] 2xl:h-[25vw] flex justify-center items-center flex-col md:flex-row'>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vh] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <FaMapMarkerAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-2 max-sm:text-sm'>311, Adarsh Nagar ​Jaipur, Rajasthan ​302004</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] md:h-[10vw] max-sm:h-[14vh] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <IoIosMail />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10 max-sm:text-sm'>aignosis7@gmail.com</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] h-[8vw] max-sm:h-[14vh] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5">
                    <FaPhoneAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-4 max-sm:text-sm'>+91 94140 47644 +91 88900 47777</h1>
                </div>
                <div className="2xl:w-[10vw] md:w-[12vw] max-sm:h-[14vh] h-[8vw] md:h-[10vw] text-2xl text-[#731762] bg-[#2d153f] rounded-3xl justify-center items-center flex flex-col mb-5 ">
                    <FaCalendarAlt />
                    <h1 className='2xl:text-sm md:text-xs text-center mt-4 text-white px-10 max-sm:text-sm'>Schedule an appointment</h1>
                </div>
            </div>
        </>
    );
};

export default ContactPage;
