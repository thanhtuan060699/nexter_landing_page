import { jsx, Container, Flex, Button, Grid } from 'theme-ui';
import menuItems from '../components/term-service-data';
import { keyframes } from '@emotion/core';
import { Link } from 'react-scroll';


export default function TermsOfService() {
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
        <h3 id="termConditions">
           Terms and Conditions
        </h3>
        <p>
        Welcome to Nexter!
        </p>
        <p>
        These terms and conditions outline the rules and regulations for the use of Nexter.
        </p>
        <p>
        By using this app we assume you accept these terms and conditions. Do not continue to use Nexter if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <p>
        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same. 
        </p>
        <h3 id="mdifying">
          Modifying the Service and Termination.
        </h3>
        <p>Nexter is always striving to improve the Service and bring you additional functionality that you will find engaging and useful. This means we may add new product features or enhancements from time to time as well as remove some features, and if these actions do not materially affect your rights or obligations, we may not provide you with notice before taking them. We may even suspend the Service entirely, in which event we will notify you in advance unless extenuating circumstances, such as safety or security concerns, prevent us from doing so.</p>
        <p>
          Nexter may terminate your account at any time without notice if it believes that you have violated this Agreement. Upon such termination, you will not be entitled to any refund for purchases.
        </p>
        <h3 id="community">
        Community Rules.
        </h3>
        <p>
          By using the Service, you agree that you will not:
        </p>
        <ul>
          <li>
          use the Service for any purpose that is illegal or prohibited by this Agreement.
          </li>
          <li>
          use the Service for any harmful or nefarious purpose
          </li>
          <li>
          use the Service in order to damage Nexter
          </li>
          <li>
          spam, solicit money from or defraud any members.
          </li>
          <li>
          impersonate any person or entity or post any images of another person without his or her permission.
          </li>
          <li>
          bully, "stalk", intimidate, assault, harass, mistreat or defame any person.
          </li>
          <li>
          post any Content that violates or infringes anyone's rights, including rights of publicity, privacy, copyright, trademark or other intellectual property or contract right.
          </li>
          <li>
          post any Content that is hate speech, threatening, sexually explicit or pornographic.
          </li>
          <li>
          post any Content that incites violence; or contains nudity or graphic or gratuitous violence.
          </li>
          <li>
          post any Content that promotes racism, bigotry, hatred or physical harm of any kind against any group or individual.
          </li>
          <li>
          solicit passwords for any purpose, or personal identifying information for commercial or unlawful purposes from other members or disseminate another person's personal information without his or her permission.
          </li>
          <li>
          use another member's account, share an account with another member, or maintain more than one account.
          </li>
          <li>
          create another account if we have already terminated your account, unless you have our permission.
          </li>
        </ul>
        <p>
        Nexter reserves the right to investigate and/or terminate your account without a refund of any purchases if you have violated this Agreement, misused the Service or behaved in a way that Nexter regards as inappropriate or unlawful, including actions or communications that occur on or off the Service. In the event that you violate these rules your authorization to use the Service will be automatically revoked.
        </p>
        <h3 id='other'>
        Other Members' Content.
        </h3>
        <p>
        Although Nexter reserves the right to review and remove Content that violates this Agreement, such Content is the sole responsibility of the member who posts it, and Nexter cannot guarantee that all Content will comply with this Agreement. If you see Content on the Service that violates this Agreement, please report it within the Service or via our email at: admin@gonexter.com
        </p>
        <h3 id="license">
          License
        </h3>
        <p>
        Unless otherwise stated, Nexter and/or its licensors own the intellectual property rights for all material on Nexter. All intellectual property rights are reserved. You may access this from Nexter for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <p>
          You must not:
        </p>
        <ul>
          <li>Republish material from Nexter</li>
          <li>Sell, rent or sub-license material from Nexter</li>
          <li>Reproduce, duplicate or copy material from Nexter</li>
          <li>Redistribute content from Nexter</li>
        </ul>
        <p>This Agreement shall begin on the date hereof.</p>
        <p>Parts of this app offer an opportunity for users to post and exchange opinions and information in certain areas of the website. Nexter does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of Nexter, its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, Nexter shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.</p>
        <p>
        Nexter reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
        </p>
        <p>
        You warrant and represent that:
        </p>
        <ul>
          <li>You are entitled to post the Comments on our App and have all necessary licenses and consents to do so;</li>
          <li>The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;</li>
          <li>The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy</li>
          <li>The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.</li>
        </ul>
        <p>You hereby grant Nexter a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.</p>
        <h2 id="hyperlinkingToOurApp">
          Hyperlinking to our App
        </h2>
        <p>The following organizations may link to our App without prior written approval:</p>
        <ul>
          <li>Government agencies;</li>
          <li>Search engines;</li>
          <li>News organizations;</li>
          <li>Online directory distributors may link to our App in the same manner as they hyperlink to the Websites of other listed businesses;</li>
          <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
        </ul>
        <p>
        These organizations may link to our home page, to publications or to other App information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party’s site.
        </p>
        <p>We may consider and approve other link requests from the following types of organizations:</p>
        <ul>
          <li>commonly-known consumer and/or business information sources;</li>
          <li>dot.com community sites;</li>
          <li>associations or other groups representing charities;</li>
          <li>online directory distributors;</li>
          <li>internet portals;</li>
          <li>accounting, law and consulting firms;</li>
          <li>educational institutions and trade associations.</li>
        </ul>
        <p>We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of Nexter; and (d) the link is in the context of general resource information.</p>
        <p>These organizations may link to our App so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.</p>
        <p>If you are one of the organizations listed in paragraph 2 above and are interested in linking to our App, you must inform us by sending an e-mail to Nexter. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our App, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.</p>
        <p>Approved organizations may hyperlink to our App as follows:</p>
        <ul>
          <li>By use of our corporate name; or</li>
          <li>By use of the uniform resource locator being linked to; or</li>
          <li>By use of any other description of our App being linked to that makes sense within the context and format of content on the linking party’s site.</li>
        </ul>
        <p>
        No use of Nexter's logo or other artwork will be allowed for linking absent a trademark license agreement.
        </p>
        <h2 id="iFrames">
        iFrames
        </h2>
        <p>Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our App.</p>
        
        <h2 id="contentLiability">
          Content Liability
        </h2>

        <p>We shall not be hold responsible for any content that appears on your App. You agree to protect and defend us against all claims that is rising on our App. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.</p>
        
        <h2 id="yourPrivacy">
          Your Privacy
        </h2>

        <p>Please read Privacy Policy.</p>
        <h2 id="reservationOfRights">
          Reervation of Rights
        </h2>
        <p>We reserve the right to request that you remove all links or any particular link to our App. You approve to immediately remove all links to our App upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our App, you agree to be bound to and follow these linking terms and conditions.</p>

        <h2 id="removalOfLinksFromOurApp">
          Removal of links from our App
        </h2>

        <p>
        If you find any link on our App that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
        </p>
        <p>
        We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
        </p>
        <h2 id="disclaimer">
          Disclaimer
        </h2>

        <p>To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our App and the use of this website. Nothing in this disclaimer will:</p>
        <ul>
          <li>limit or exclude our or your liability for death or personal injury;</li>
          <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
          <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
          <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
        </ul>
        <p>The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.</p>
        <p>As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.</p>
        <h2 id="Facebook's data deletion">
        Facebook's data deletion
        </h2>
        <p>
        To delete your Facebook's data on our server. Simple contact us through our <a href="https://www.facebook.com/nexterenglish" style={{color: "red"}}>fanpage</a> and give us your email. We will delete your data and account within 24h
        </p>
     </Container>
    </section>
   );
}
