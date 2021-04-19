import { Header } from '../../components/Header';
import { HeroTitle } from '../../components/HeroTitle';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';
import { Footer } from '../../components/Footer';

import nextJsSVG from '../../assets/frameworks/next.svg';
import reactJsSVG from '../../assets/frameworks/react.svg';
import nuxtJsSVG from '../../assets/frameworks/nuxt.svg';
import vueJsSVG from '../../assets/frameworks/vue.svg';
import emberJsSVG from '../../assets/frameworks/ember.svg';
import svelteSVG from '../../assets/frameworks/svelte.svg';
import angularSVG from '../../assets/frameworks/angular.svg';
import hugoSVG from '../../assets/frameworks/hugo.svg';
import gatsbySVG from '../../assets/frameworks/gatsby.svg';

import hashicorpSVG from '../../assets/front/hashicorp.svg';
import mcdonaldsSVG from '../../assets/front/mcdonalds.svg';
import airbnbSVG from '../../assets/front/airbnb.svg';
import washingtonpostSVG from '../../assets/front/washingtonpost.svg';
import auth0SVG from '../../assets/front/auth0.svg';
import twilioSVG from '../../assets/front/twilio.svg';
import uberSVG from '../../assets/front/uber.svg';
import tripadvisorSVG from '../../assets/front/tripadvisor.svg';

import { 
  Container,
  Content,
  ButtonsContainer,
  SectionDescription,
  ShipSection,
  TestimonialsSection
} from './styles';

export function Home() {
  return (
    <Container>
      <Header />

      <Content>
        <section>
          <HeroTitle />

          <ButtonsContainer>
            <Button>Start Deploying</Button>
            <Button isOutlined>Get a Demo</Button>
          </ButtonsContainer>

          <h2>
            Vercel combines the best developer experience with an obsessive focus on end-user performance.
            Our platform enables frontend teams to do their best work.
          </h2>

          <small>Explore the Vercel way</small>
        </section>

        <section>
          <SectionHeader
            color="blue"
            labelNumber={1}
            labelTitle="Develop"
            title="Start with the developer"
          />

          <SectionDescription>
            <p>
              Developers love Next.js, the open source React framework Vercel built 
              together with Google and Facebook. Next.js powers the biggest websites 
              like Airbnb and Twilio, for use cases in e-commerce, travel, news, and marketing.
            </p>

            <p>
              Vercel is the best place to deploy any frontend app. Start by deploying 
              with zero configuration to our global edge network. Scale dynamically 
              to millions of pages without breaking a sweat.
            </p>
          </SectionDescription>

          <div className="frameworks">
            <small>WORKS WITH 30+ JAMSTACK FRAMEWORKS</small>

            <div>
              <img src={nextJsSVG} alt="Next.js"/>
              <img src={reactJsSVG} alt="Create React App"/>
              <img src={nuxtJsSVG} alt="Nuxt.js"/>
              <img src={vueJsSVG} alt="Vue.js"/>
              <img src={emberJsSVG} alt="Ember.js"/>
              <img src={svelteSVG} alt="Svelte"/>
              <img src={angularSVG} alt="Angular"/>
              <img src={hugoSVG} alt="Hugo"/>
              <img src={gatsbySVG} alt="Gatsby"/>
            </div>
          </div>
        </section>

        <section>
          <SectionHeader
            color="pink"
            labelNumber={2}
            labelTitle="Preview"
            title="Accelerate with your team"
          />

          <SectionDescription>
            <p className="description_one-col">
              Frontend development is not meant to be a solo activity. The Vercel 
              platform makes it a collaborative experience with deploy previews for 
              every code change, by seamlessly integrating with GitHub, GitLab, and Bitbucket.
            </p>
          </SectionDescription>
        </section>

        <ShipSection>
          <div>
            <h2>70</h2>
            <span>Cities</span>
          </div>

          <div>
            <h2>10B+</h2>
            <span>Requests per week</span>
          </div>

          <div>
            <h2>9PB</h2>
            <span>Data served</span>
          </div>

          <div>
            <h2>99.99%</h2>
            <span>Guaranteed Uptime</span>
          </div>
        </ShipSection>

        <TestimonialsSection>
          <small>TRUSTED BY THE BEST FRONTEND TEAMS</small>

          <div className="testimonials">
            <img src={hashicorpSVG} alt="HashiCorp" />
            <img src={mcdonaldsSVG} alt="McDonalds" />
            <img src={airbnbSVG} alt="Airbnb" />
            <img src={washingtonpostSVG} alt="The Washington Post" />
            <img src={auth0SVG} alt="Auth0" />
            <img src={twilioSVG} alt="Twilio" />
            <img src={uberSVG} alt="Uber" />
            <img src={tripadvisorSVG} alt="Tripadvisor" />
          </div>
        </TestimonialsSection>
      </Content>

      <Footer />
    </Container>
  );
}
