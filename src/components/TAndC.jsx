import React from 'react';
import Footer from './Footer';
import Header from './Header';

const TAndC = () => {
  return (
    <div className='bg-[#1A0C25]'>
      <Header />
      <div className="min-h-screen text-white px-6 max-sm:py-[20vw] py-[10vw] sm:px-16 font-montserrat">
        <div className="md:max-w-4xl mx-auto">
          {/* Privacy Policy Header */}
          <div className="flex flex-wrap justify-center items-center space-x-4 mb-8">
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(270deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
            <span className="text-[24px] text-[#F1C6FE] font-medium max-sm:text-base">
            Terms & Conditions
            </span>
            <span
              className="h-[10px] w-[118px] rounded-full max-sm:w-[60px]"
              style={{
                background:
                  "linear-gradient(90deg, #FB7CE4 0%, rgba(255, 202, 223, 0.13) 100%)",
              }}
            ></span>
          </div>

          {/* Section Headings with Blank Paragraphs */}
          <h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Terms & Conditions</h2>
          <p>This website is operated by <b>Aignosis Artificial Intelligence Private Limited</b> (“Aignosis”). Throughout the site, the terms “we,” “us,” and “our” refer to Aignosis. Aignosis offers this website, including all information, tools, and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies, and notices stated here.</p>

<p><b>Terms of Service</b></p>
<ul>
    <li>By visiting our site and/or purchasing our services, you engage in our “Service” and agree to be bound by the following terms and conditions (“Terms of Service” or “Terms”), including any additional terms, conditions, and policies referenced herein and/or available by hyperlink.</li>
    <li>These Terms of Service apply to all users of the site, including but not limited to browsers, customers, and contributors of content.</li>
</ul>

<p><b>General Information</b></p>
<ul>
    <li><b>About Aignosis:</b> Aignosis is an innovative platform that uses artificial intelligence to provide autism screening and diagnostic solutions, connecting individuals with tailored services for early diagnosis and effective interventions.</li>
    <li><b>Disclaimer:</b> Although we strive to provide accurate and reliable information, Aignosis cannot guarantee the accuracy, reliability, or completeness of the information on our website or services. Users should seek independent verification of any information provided.</li>
    <li><b>Third-Party Links and Advertising:</b> Aignosis may contain links to third-party websites, applications, or advertisements. We are not responsible for the content, security, or privacy practices of these third parties.</li>
    <li><b>Privacy:</b> Your use of the services is subject to our Privacy Policy. Please review it carefully.</li>
    <li><b>Changes to Terms:</b> We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting.</li>
</ul>

<p><b>How to Use Aignosis’s Website</b></p>
<ul>
    <li>To use the website (<a href="https://www.aignosis.in">www.aignosis.in</a>), users must provide accurate and complete information.</li>
    <li>By using the website, you confirm that you are at least the age of majority or have consent to allow a minor dependent to use the site.</li>
</ul>

<p><b>Your Use of the Services</b></p>
<ul>
    <li>Use the services only for lawful and personal purposes.</li>
    <li>Do not impersonate another person or provide false information.</li>
    <li>Do not post unlawful, defamatory, obscene, or abusive content.</li>
    <li>Comply with all applicable local, state, federal, or international laws.</li>
</ul>

<p><b>Terms of Use</b></p>
<ul>
    <li>Aignosis provides autism screening and related services for informational purposes. Always consult a healthcare provider before altering any course of treatment.</li>
</ul>

<p><b>Fees and Payments</b></p>
<ul>
    <li><b>Session Fees:</b> Payments must be completed at least 4 hours prior to the scheduled session.</li>
    <li><b>Payment Methods:</b> Payments can be made via credit card, online banking, or wallet payment. All payments are processed by third-party gateways and subject to their terms.</li>
    <li><b>Refunds:</b> Refund requests must be submitted to <a href="mailto:support@aignosis.in">support@aignosis.in</a> and will be processed within 24 hours.</li>
</ul>

<p><b>Cancellation and Rescheduling</b></p>
<ul>
    <li><b>By the User:</b> Sessions canceled at least 30 minutes prior may be rescheduled or refunded. Cancellations within 30 minutes will not be refunded.</li>
    <li><b>By Aignosis:</b> If Aignosis cancels a session, users will be offered a reschedule or a complimentary session, depending on the timing.</li>
</ul>

<p><b>Copyrights and Trademarks</b></p>
<ul>
    <li>All content on this website, including text, graphics, and trademarks, is owned or licensed by Aignosis. Unauthorized use is prohibited.</li>
</ul>

<p><b>Indemnification</b></p>
<ul>
    <li>You agree to indemnify and hold Aignosis harmless from any claims or damages resulting from your use of the website or violation of these Terms.</li>
</ul>

<p><b>Governing Law</b></p>
<ul>
    <li>These Terms shall be governed by and construed in accordance with the laws of India.</li>
</ul>

<p><b>Contacting Us</b></p>
<ul>
    <li><b>Email:</b> <a href="mailto:support@aignosis.in">support@aignosis.in</a></li>
    <li><b>Phone:</b> +91 9414047644</li>
</ul>



















{/* 
<h2 className="text-lg font-semibold mt-6 mb-4 sm:text-2xl">Refund and Rescheduling Policy</h2>
<p>At<strong> Aignosis Artificial Intelligence Private Limited.</strong>("Aignosis" or "We"), we strive to provide exceptional service through our autism screening and related solutions. This policy outlines the terms for cancellations, rescheduling, and refunds.</p>

<p><strong>Cancellation of an Appointment</strong></p>

<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
    <li><p><strong>Cancellation by the User:</strong></p></li>
  <p>If you would like to cancel your appointment, you must do so by emailing us at <a href="mailto:support@aignosis.in" className="text-blue-600 underline">support@aignosis.in</a> or contacting us at <span className='font-bold'>+91 9414047644</span>  no later than <span className='font-bold'>30 minutes before the scheduled time.</span> </p>
  <li>For appointments canceled more than 30 minutes before the scheduled time, you can reschedule the appointment at no additional charge. Please coordinate with our team to find a mutually convenient time.</li>
  <li>If you cancel within 30 minutes of the scheduled time, no refund will be provided.</li>
  <li>For "No-Show" appointments (when you fail to attend without prior notice), the full session charges will be deducted.</li>
</ul>

<p><strong>Cancellation by Aignosis:</strong></p>
<p>If your appointment is canceled by our team</p>
<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
  <li> <span className='font-bold'>More than 30 minutes prior</span>  to the scheduled time, we will reschedule your session at your convenience.</li>
  <li><span className='font-bold'>Less than 30 minutes prior</span> to the scheduled time due to an emergency, we will reschedule the session and provide an additional 20 minutes of service at your next appointment.</li>
  <li>If our team fails to attend the appointment within 10 minutes of the scheduled time, we will provide a full refund or offer an extra complimentary session to be scheduled within two weeks.</li>
</ul>

<p><strong>Rescheduling an Appointment</strong></p>

<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
    <li><p><strong>Rescheduling by the User:</strong></p></li>
  <li>You may request to reschedule an appointment <span className='font-bold'>at least 30 minutes before</span>  the scheduled time without penalty.</li>
  <li>Requests to reschedule within 30 minutes of the scheduled time will incur a <span className='font-bold'> 50% service fee deduction.</span></li>
  <li>For genuine emergencies, we will accommodate rescheduling requests upon consultation with our team.</li>
  <li><p><strong>No-Show:</strong></p></li>

  <p>If you fail to join the session or notify us of delays within 15 minutes of the scheduled time, it will be considered a "No-Show," and you will be charged the full session fee without refund.</p>

</ul>



<p><strong>Vacation or Extended Breaks:</strong></p>
<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
  <li>If you need to pause your sessions due to a vacation or personal circumstances, you may freeze your package for up to two weeks.</li>
  <li>For breaks longer than two weeks, you may cancel the package, but we cannot guarantee the availability of your previously assigned time slot or therapist.</li>
</ul>

<p><strong>Payment</strong></p>

<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
    <li><p><strong>Payment Terms:</strong></p></li>
  <li>Aignosis services are paid offerings, and all payments must be made in advance according to the chosen plan. Payments are valid for <span className='font-bold'>two months</span>  from the date of purchase and apply to single sessions, monthly packages, or customized plans.</li>
  <li>Payments must be completed at least <span className='font-bold'> 4 hours before</span> the scheduled session.</li>
</ul>

<p><strong>Payment Methods:</strong></p>
<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
  <li>Payments can be made through various mechanisms, including credit/debit cards, online banking, and digital wallets. These transactions are governed by the terms of third-party payment gateway providers. Aignosis is not responsible for unauthorized use, payment failures, or related issues.</li>
</ul>

<p><strong>Refund Policy</strong></p>

<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
    <li><p><strong>Refund Requests:</strong></p></li>
  <li>To request a refund, email us at <a href="mailto:support@aignosis.in" className="text-blue-600 underline">support@aignosis.in</a> or contact us at <span className='font-bold'>+91 9414047644.</span>  Refund requests must include a detailed reason for the cancellation. Banking transaction fees may be deducted as part of the refund processing.</li>
  <li><p><strong>Processing Time:</strong></p></li>
  <p>Refund requests will be processed within <span className='font-bold'>24 hours</span>  of receipt. In the event of delays, please notify us at <a href="mailto:support@aignosis.in" className="text-blue-600 underline">support@aignosis.in</a> for prompt resolution.</p>
</ul>




<p><strong>Changes to Fees:</strong></p>
<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
  <li>Aignosis reserves the right to update or modify service fees at any time. Changes will be communicated via email and reflected on our website.</li>
</ul>

<p><strong>For any concerns, contact us at:</strong></p>
<ul className="mb-4 text-sm leading-relaxed sm:text-base list-disc pl-6">
  <li>Email: <a href="mailto:support@aignosis.in" className="text-blue-600 underline">support@aignosis.in</a></li>
  <li>Phone: +91 9414047644</li>
</ul>

<p>We are committed to ensuring a smooth and satisfactory experience for all our users.</p>

 */}





          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TAndC;
