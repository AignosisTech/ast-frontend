import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import bg from '../assets/images/bg3.png';
import graph_img from '../assets/graph.png';
import belongs from '../assets/belongs.png'
const Screen4 = () => {
  const data = {
    datasets: [
      {
        label: 'Language Development',
        borderColor: 'yellow',
        backgroundColor: 'yellow',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 20 },
          { x: 2, y: 80 },
          { x: 3, y: 60 },
          { x: 4, y: 30 },
          { x: 5, y: 10 },
          { x: 6, y: 5 },
        ],
        fill: false,
      },
      {
        label: 'Sensory Pathway (Vision, Hearing)',
        borderColor: 'blue',
        backgroundColor: 'blue',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 10 },
          { x: 2, y: 50 },
          { x: 3, y: 90 },
          { x: 4, y: 70 },
          { x: 5, y: 20 },
          { x: 6, y: 10 },
        ],
        fill: false,
      },
      {
        label: 'Higher Cognitive Function',
        borderColor: 'pink',
        backgroundColor: 'pink',
        data: [
          { x: 0, y: 0 },
          { x: 1, y: 5 },
          { x: 2, y: 30 },
          { x: 3, y: 70 },
          { x: 4, y: 90 },
          { x: 5, y: 50 },
          { x: 6, y: 15 },
        ],
        fill: false,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: 'linear',
        position: 'bottom',
        ticks: {
          stepSize: 1,
          color: 'white',  // Make x-axis labels white
        },
        grid: {
          display: false,       // Hide x-axis inner grid lines
          borderColor: 'white', // Show x-axis line in white
        },
      },
      y: {
        beginAtZero: true,
        max: 100,
        ticks: {
          color: 'white',  // Make y-axis labels white
          stepSize: 20,    // Add gap of 20 units on y-axis
        },
        grid: {
          display: false,       // Hide y-axis inner grid lines
          borderColor: 'white', // Show y-axis line in white
        },
      },
    },
    plugins: {
      legend: {
        labels: {
          color: 'white',  // Make legend text white
        },
        display: true, // Show the legend
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 4,
      },
    },
  };
  const Divider = ({ title }) => (
    <div className="flex flex-row justify-center items-center space-x-4 mb-8 mt-10">
      <span
        className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
        style={{
          background:
            "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
        }}
      ></span>
      <h1 className="2xl:text-[20px] md:text-sm text-[#F1C6FE] font-medium max-sm:text-sm">
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


  return (
    <div
      className="h-screen max-sm:h-[35vh] p-5 text-white flex justify-center items-center w-full font-montserrat bg-[#1A0C25] relative">
      <div className="w-auto flex justify-center items-center flex-col">
        <div className="bg-[#1A0C254D] relative shadow-2xl rounded-xl md:px-[5rem] md:py-[3rem] 2xl:p-10">
          <div className="flex-col  justify-center flex items-center">
          <Divider title="Development stages" />

            <div className="mt-[1rem] flex justify-center items-center flex-col w-full">
              <h1 className="text-center max-sm:text-lg md:text-xl 2xl:text-2xl  text-[#EDD0E7] tracking-tight font-semibold">
                90% of your baby’s brain develops before the age of 5
              </h1>
              <img src={belongs} className='w-[200px] max-sm:hidden absolute right-[80px]' alt="" loading="lazy" />
              <div className="m-[1rem] max-sm:mt-7  flex justify-center items-center w-[40vw] max-sm:w-[300px]  h-full">
                <img src={graph_img} alt="" loading="lazy" />
              </div>
              <div className=" mb-4">
                <p className="absolute md:text-xs 2xl:text-lg left-[20%]  ">Birth</p>
                <p className="absolute md:text-xs 2xl:text-lg left-[55%] ">5 Years</p>
                <p className="absolute md:text-xs 2xl:text-lg left-[76%] ">18 Years</p>
              </div>

          
    


            </div>
            
          </div>
          
          <div className="justify- relative -left-[12%] -top-[80%] max-sm:hidden">
                
                {/* <p className="font-manrope md:text-xs 2xl:text-lg text-[#F6E8FB] text-md"></p> */}
                 {/* <p className=" mt-2 font-manrope md:text-xs 2xl:text-lg text-[#F6E8FB] text-md max-sm:text-sm">Brain development With First 5 Yearsdddd</p> */}
              </div>
              <p className="flex justify-center align-center mt-2 font-manrope md:text-xs 2xl:text-lg text-[#F6E8FB] text-md max-sm:text-sm">Brain development With First 5 Years</p>

              <p className='text-center text-[#F6E8FB] text-sm p-4'>Source: Harvard center for developing child</p>
        </div>

        <div className="absolute inset-0 bg-[#B740A1] w-[10vw] h-[30vw]   left-0   opacity-65 blur-[200px] rounded-xl "></div>
        <div className="absolute inset-0 bg-[#B740A1] w-auto h-[30vw]   left-[85%] top-[50%]  opacity-65 blur-[200px] rounded-xl "></div>

       
      </div>
    </div>
  );
};

export default Screen4;