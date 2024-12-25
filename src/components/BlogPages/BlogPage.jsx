import React from "react";
import blogimg1 from "../../assets/blogimg1.png";
import blogimg2 from "../../assets/blogimg2.png";
import blogimg3 from "../../assets/blogimg3.png";
import blogimg4 from "../../assets/blogimg4.png";
import blogimg5 from "../../assets/blogimg5.png";
import Footer from "../Footer";
import Header from "../Header";

const BlogPage = () => {
  return (
    <>
    <Header />
    <div className="p-[2rem] max-sm:p-4" style={{ backgroundColor: "#1a0e28", color: "#fff" }}>
      {/* Header */}
     

      {/* Main Content */}
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <h2 style={{
          color: "#ff8aff",
          marginBottom: "0.5rem",
          fontSize: "1.2rem",
          fontFamily: "Arial, sans-serif"
        }}>Blogs</h2>
        <h1 className="font-raleway text-[#F6E8FB] max-sm:text-[2rem] text-[2.5rem]" style={{
          
          fontWeight: "bold",
          marginBottom: "1rem",
          
        }}>
          Insights & Resources for Autism Awareness
        </h1>
        <p className=""  style={{
          fontSize: "1rem",
          color: "#ECECEC",
          lineHeight: "1.6",
          maxWidth: "800px",
          margin: "0 auto",
          fontFamily: "Arial, sans-serif",
          
        }}>
          Welcome to our blog, a dedicated space for parents, caregivers, and educators seeking valuable information on autism and developmental support. Explore expert insights, practical tips, and inspiring stories designed to empower families on their journey. From understanding assessments to navigating therapy options, our articles aim to foster awareness and promote strategies for nurturing growth and happiness in children with autism. Join us as we share knowledge, resources, and a community of support!
        </p>
      </div>

      {/* Featured Posts - Section 1 */}
      <section className="w-[90%] max-sm:w-[90vw]" style={{
        marginTop: "3rem",
        padding: "3rem",
        backgroundColor: "#271937",
        borderRadius: "8px",
        marginBottom: "3rem", // Increased vertical spacing
        
        marginLeft: "auto", // Center the section
        marginRight: "auto" // Center the section
      }}>

        <div className="max-sm:flex-col flex  justify-between items-center mb-[2rem] text-[1.5rem] max-sm:text-[1rem]"  >
          <h3 style={{
            
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Arial, sans-serif"
          }}>Featured Posts</h3>
          <a href="#" style={{
            color: "#ff8aff",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif"
          }}>More →</a>
        </div>

        <div className="max-sm:flex-col max-sm:justify-center max-sm:items-center " style={{ display: "flex", gap: "2rem" }}>
  <div  className="max-sm:w-[80vw] w-[48%] " style={{
    backgroundColor: "#1a0e28",
    borderRadius: "8px",
    overflow: "hidden",
    // Set width for inner boxes
    display: "flex",
    flexDirection: "column"
  }}>
    <img
      src={blogimg1}
      alt="Post 1"
      style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy"
    />
    <div className="font-raleway" style={{ padding: "2rem" }}>
      <h4 style={{
        fontSize: "1.2rem",
        color: "#F6E8FB",
        fontWeight: "bold",
        marginBottom: "0.5rem"
      }}>Understanding Autism: A Guide for Family and Friends</h4>
      <p style={{
        color: "#cfc0e3",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        fontFamily: "Arial, sans-serif"
      }}>Author • Category</p>
      <p className="font-raleway" style={{
        fontSize: "0.9rem",
        color: "#F6E8FB",
        fontFamily: "Arial, sans-serif"
      }}>
        Offer insights into what autism is and provide practical advice on how loved ones can offer support, understand communication differences, and build stronger relationships with autistic individuals.
      </p>
    </div>
  </div>





  <div  className="max-sm:w-[80vw] w-[48%] " style={{
    backgroundColor: "#1a0e28",
    borderRadius: "8px",
    overflow: "hidden",
    // Set width for inner boxes
    display: "flex",
    flexDirection: "column"
  }}>
    <img
      src={blogimg2}
      alt="Post 2"
      style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy"
    />
    <div className="font-raleway" style={{ padding: "2rem" }}>
      <h4 style={{
        fontSize: "1.2rem",
        color: "#F6E8FB",
        fontWeight: "bold",
        marginBottom: "0.5rem"
      }}>Sensory Processing and Autism: </h4>
      <p style={{
        color: "#cfc0e3",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        fontFamily: "Arial, sans-serif"
      }}>Author • Category</p>
      <p className="font-raleway" style={{
        fontSize: "0.9rem",
        color: "#F6E8FB",
        fontFamily: "Arial, sans-serif"
      }}>
       Explore how sensory processing issues affect autistic people and share strategies to manage sensory overload. Tips could include helpful tools, sensory-friendly spaces, and calming techniques.
      </p>
    </div>
  </div>
</div>

      </section>




      {/* Featured Posts - Section 2 */}
      <section className="w-[90%] max-sm:w-[90vw] md:p-[2rem]  max-sm:p-[5vw]     ml-auto mr-auto " style={{
        marginTop: "3rem",
        
        backgroundColor: "#271937",
        borderRadius: "8px",
        // Set the desired width
        // Center the section
        
        marginBottom: "8rem"
        
      }}>
        <div className="max-sm:flex-col flex  justify-between items-center  mb-[2rem] text-[1.5rem] max-sm:text-[1rem]">
          <h3 style={{
            
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "Arial, sans-serif"
          }}>Category</h3>
          <a href="#" style={{
            color: "#ff8aff",
            textDecoration: "none",
            fontWeight: "bold",
            fontFamily: "Arial, sans-serif"
          }}>More →</a>
        </div>

        <div className="max-sm:flex-col   " style={{ display: "flex", gap: "2rem" }}>
          {/* Left Side: Single Post (blogimg3) */}
          <div className="max-sm:w-[80vw] w-[48%]   " style={{
            backgroundColor: "#1a0e28",
            borderRadius: "8px",
            overflow: "hidden",
            // Set width for the left box
            display: "flex",
            flexDirection: "column"
          }}>
            <img
              src={blogimg3}
              alt="Post 3"
              style={{ width: "100%", height: "400px", objectFit: "cover" }} loading="lazy"
            />
            <div className="font-manrope" style={{ padding: "2rem" }}> {/* Increased padding */}
              <h4 style={{
                fontSize: "1.2rem",
                color: "#F6E8FB",
                fontWeight: "bold",
                marginBottom: "0.5rem",
                
              }}>Autism in the Workplace: How to Create an Inclusive Environment</h4>
              <p style={{
                color: "#cfc0e3",
                fontSize: "0.9rem",
                marginBottom: "1rem",
                fontFamily: "Arial, sans-serif"
              }}>Author • Category</p>
              <p className="font-raleway" style={{
                fontSize: "0.9rem",
                color: "#F6E8FB",
                
              }}>
               Discuss ways employers and colleagues can foster a supportive, inclusive work environment for autistic individuals. Include tips for accommodations, communication, and promoting acceptance.
              </p>
            </div>
          </div>

          {/* Right Side: Stacked Posts (blogimg4 and blogimg5) */}
<div className="" style={{ display: "flex", flexDirection: "column", gap: "2rem", width: "48%" }}>
  {/* Post 1 */}
  <div className="max-sm:w-[80vw]  w-full" style={{
            backgroundColor: "#1a0e28",
            borderRadius: "8px",
            overflow: "hidden",
            // Set width for the left box
            display: "flex",
            flexDirection: "column"
          }}>
    <img
      src={blogimg4}
      alt="Post 4"
      style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy"
    />
    <div style={{ padding: "2rem" }}>
      <h4 className="font-manrope" style={{
        fontSize: "1.2rem",
        color: "#F6E8FB",
        fontWeight: "bold",
        marginBottom: "0.5rem"
      }}>Top Resources for Parents of Autistic Children</h4>
      <p style={{
        color: "#cfc0e3",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        fontFamily: "Arial, sans-serif"
      }}>Author • Category</p>
      <p className="font-raleway" style={{
        fontSize: "0.9rem",
        color: "#F6E8FB",
      }}>
        Compile a list of resources, from support groups and educational programs to online communities and helpful books. This can serve as a valuable guide for parents navigating the autism journey.
      </p>
    </div>
  </div>

  {/* Post 2 */}
  <div className="max-sm:w-[80vw]  max-sm:mb-[4vw] w-full" style={{
            backgroundColor: "#1a0e28",
            borderRadius: "8px",
            overflow: "hidden",
            // Set width for the left box
            display: "flex",
            flexDirection: "column"
          }}>
    <img
      src={blogimg5}
      alt="Post 5"
      style={{ width: "100%", height: "200px", objectFit: "cover" }} loading="lazy"
    />
    <div style={{ padding: "2rem" }}>
      <h4 className="font-manrope" style={{
        fontSize: "1.2rem",
        color: "#F6E8FB",
        fontWeight: "bold",
        marginBottom: "0.5rem"
      }}> Tips for Managing Sensory Overload</h4>
      <p style={{
        color: "#cfc0e3",
        fontSize: "0.9rem",
        marginBottom: "1rem",
        fontFamily: "Arial, sans-serif"
      }}>Author • Category</p>
      <p className="font-raleway" style={{
        fontSize: "0.9rem",
        color: "#F6E8FB",
      }}>
       Explore how sensory processing issues affect autistic people and share strategies to manage sensory overload. Tips could include helpful tools, sensory-friendly spaces, and calming techniques.
      </p>
    </div>
  </div>
</div>



        </div>
      </section>
      <div>
        
      </div>
    </div>
    <Footer />
    </>
    
  );
};

export default BlogPage;