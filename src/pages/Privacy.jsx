import React from 'react';
import '../styles/Privacy.css';

const Privacy = () => {
  const today = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="privacy">
      <div className="privacy-container">
        <header className="privacy-header">
          <h1>Privacy Policy</h1>
          <p className="privacy-date">Last updated: {today}</p>
        </header>
        
        <div className="privacy-content">
            <p>
            At Capicú Technologies LLC, we are committed to protecting your privacy and safeguarding any personal information that you share with us. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to ensure it remains secure. By visiting our website or engaging with our services, you consent to the practices described in this policy.
            </p>
            <p>
            We collect personal information when you voluntarily provide it to us, such as when you fill out a contact form, subscribe to our mailing list, inquire about research collaboration, or express interest in our technology or services. This information may include your name, email address, affiliation, and any additional details you choose to provide. In addition to information you submit directly, our website may also collect certain technical data automatically through the use of cookies, analytics tools, or server logs. This may include your IP address, browser type, pages visited, and referral sources. Such data helps us understand how users interact with our content and improve the performance and relevance of our website.
            </p>
            <p>
            We use the information we collect for legitimate business purposes. Specifically, your data may be used to respond to your inquiries, provide updates on our services and research activities, share newsletters or announcements you have opted into, improve the functionality and user experience of our website, or comply with applicable legal obligations. Where required by law, we rely on your consent, the performance of a contract, or our legitimate interest as the legal basis for processing personal data. You may opt out of marketing communications at any time using the unsubscribe link provided in our emails.
            </p>
            <p>
            Capicú Technologies does not sell or rent your personal information. We may share data with trusted third-party vendors who assist us in hosting our website, managing communications, analyzing usage data, or maintaining our infrastructure. These service providers are contractually obligated to maintain the confidentiality of your data and are prohibited from using it for any other purpose. We may also disclose your information if required to do so by law, in response to legal process, or to protect our rights and the safety of our users or the public.
            </p>
            <p>
            We implement appropriate administrative, technical, and physical security measures to protect the personal information we collect against unauthorized access, disclosure, alteration, or destruction. While we strive to use commercially acceptable means to protect your information, no method of transmission over the internet or method of electronic storage is entirely secure. As such, we cannot guarantee absolute security, but we continually review and enhance our security protocols.
            </p>
            <p>
            Our website may use cookies and related technologies to improve your browsing experience and monitor site performance. Cookies are small text files stored on your device that help us analyze traffic patterns and personalize content. You may disable cookies through your browser settings, although doing so may affect your ability to access certain features on our website. In addition, we may use third-party analytics providers that set their own cookies and tracking technologies to collect and analyze usage statistics.
            </p>
            <p>
            Our website may contain links to third-party websites or platforms, including those of research collaborators, funding programs, or external tools. We are not responsible for the privacy practices, policies, or content of those external sites. We encourage you to review the privacy statements of any website you visit through links on our site.
            </p>
            <p>
            Capicú Technologies does not knowingly collect personal data from children under the age of 13. If we become aware that we have inadvertently received information from a child without parental consent, we will take appropriate steps to delete that data as soon as possible. Our website and services are not intended for use by individuals under the age of 13.
            </p>
            <p>
            We may update this Privacy Policy periodically to reflect changes in our practices, technologies, or legal requirements. Any changes will be posted to this page and will take effect upon posting. We encourage you to review this policy regularly to stay informed about how we are protecting your information.
            </p>
        </div>
      </div>
    </div>
  );
};

export default Privacy; 