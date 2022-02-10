/** @jsx jsx */
import FooterLogo from 'assets/logo.svg';
import { jsx, Container, Flex, Button, Grid } from 'theme-ui';
import Logo from 'components/logo';

const solutions = [
  {
    key: "1",
    value: "Marketing"
  },
  {
    key: "2",
    value: "Analytics"
  },
  {
    key: "3",
    value: "Commerce"
  },
  {
    key: "4",
    value: "Insights"
  },
  {
    key: "5",
    value: "Promotion"
  }
]

const support = [
  {
    key: "1",
    value: "Pricing"
  },
  {
    key: "2",
    value: "Documentation"
  },
  {
    key: "3",
    value: "Guides"
  },
  {
    key: "4",
    value: "API Status"
  },
  {
    key: "5",
    value: "Live Support"
  }
]

const company = [
  {
    key: "1",
    value: "About Us"
  },
  {
    key: "2",
    value: "Our Blog"
  },
  {
    key: "3",
    value: "Jobs"
  },
  {
    key: "4",
    value: "Press"
  },
  {
    key: "5",
    value: "Contact Us"
  }
]

const legal = [
  {
    key: "1",
    value: "Terms & Conditions",
    url : "/terms-of-service"
  },
  {
    key: "2",
    value: "Privacy Policy",
    url: "/privacy-policy"
  },
]
export default function Footer() {
  return (
    <section className="footer-section" id="contact">
    <Container>
      <div>
        <div className="footer">
          <div className="logo-footer">
            <div className="logo-footer-d">
             <Logo src={FooterLogo}/>
            </div>
            <p>Cong Ty Co Phan Giao Duc Truc Tuyen Future</p>
            <p>Address: 888/55 Lac Long Quan, Tan Binh, Ho Chi Minh City</p>
            <p>Phone number: +84964101824</p>
            <div className="item-footer" >
              {
                legal.map((i)=>{
                  if(i.url){
                    return <div key={i.key}><a href={i.url} style={{ textDecoration: "none",color: "#fff"}}>
                      {i.value}</a></div>
                  }else{
                    return <div key={i.key}>{i.value}</div>
                  }
                })
              }
            </div>
          </div>
        </div>
      </div>
    </Container>
  </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
