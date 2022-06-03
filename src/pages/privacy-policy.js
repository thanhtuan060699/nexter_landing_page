import { jsx, Container, Flex, Button, Grid } from 'theme-ui';
import menuItems from '../components/privacy-data';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';


export default function PrivacyPolicy() {
  return (
    <section style={{padding : "30px"}} className="term-service">
      <div className="tab-table term-table" style={{borderRight: "2px solid"}}>
      {
            menuItems.map((menuItems, i)=>(
              <div className="item-term" key={i}>
                <Link
                activeClass = "active"
                to= {menuItems.path}
                spy={true}
                smooth = {true}x
                offset={-70}
                duration={500}
                key={i}
                >
                {menuItems.label}
                </Link>
              </div>
            ))
          }
      </div>
     <Container className="term-content">
        <h1>
          Privacy Policy for Nexter
        </h1>
        <p>
        At Nexter, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Nexter and how we use it.
        </p>
        <p>
        If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
        <h2 id="LogFiles">
          Log Files
        </h2>
        <p>
        Nexter follows a standard procedure of using log files. These files log visitors when they use app. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the app, tracking users' movement on the app, and gathering demographic information.
        </p>
        <h2 id="OurAdvertisingPartners">
        Our Advertising Partners
        </h2>
        <p>
        Some of advertisers in our app may use cookies and web beacons. Our advertising partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
        </p>
        <ul>
          <li>Google https://policies.google.com/technologies/ads</li>
        </ul>
        <h2 id="PrivacyPolicies">
        Privacy Policies
        </h2>
        <p>
        You may consult this list to find the Privacy Policy for each of the advertising partners of Nexter.
        </p>
        <p>
        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Beacons that are used in their respective advertisements and links that appear on Nexter. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on this app or other apps or websites.
        </p>
        <p>
        Note that Nexter has no access to or control over these cookies that are used by third-party advertisers.
        </p>
        <h2 id="ThirdPartyPrivacyPolicies">
        Third Party Privacy Policies
        </h2>
        <p>
        Nexter's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
        </p>
        
        <h2 id="ChildrenInformation">
        Children's Information
        </h2>
        <p>Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.</p>
        <p>Nexter does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our App, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.</p>
        <h2 id="OnlinePrivacyPolicyOnly">
        Online Privacy Policy Only
        </h2>
        <p>
        This Privacy Policy applies only to our online activities and is valid for visitors to our App with regards to the information that they shared and/or collect in Nexter. This policy is not applicable to any information collected offline or via channels other than this app. Our Privacy Policy was created with the help of the App Privacy Policy Generator from App-Privacy-Policy.com
        </p>

        <h2 id="Consent">
          Consent
        </h2>
        <p>
        By using our app, you hereby consent to our Privacy Policy and agree to its Terms and Conditions.
        </p>
        <h2 id="Facebook's data deletion">
        Facebook's data deletion
        </h2>
        <p>
        To delete your Facebook's data on our server. Simple contact us through our <a style={{color: "red"}} href="https://www.facebook.com/nexterenglish">fanpage</a> and give us your email. We will delete your data and account within 24h
        </p>

     </Container>
    </section>
   );
}
