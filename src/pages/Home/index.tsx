import { Header } from '../../components/Header';
import { HeroTitle } from '../../components/HeroTitle';
import { Button } from '../../components/Button';
import { SectionHeader } from '../../components/SectionHeader';

import nextJsSVG from '../../assets/frameworks/next.svg';
import reactJsSVG from '../../assets/frameworks/react.svg';
import nuxtJsSVG from '../../assets/frameworks/nuxt.svg';
import vueJsSVG from '../../assets/frameworks/vue.svg';
import emberJsSVG from '../../assets/frameworks/ember.svg';
import svelteSVG from '../../assets/frameworks/svelte.svg';
import angularSVG from '../../assets/frameworks/angular.svg';
import hugoSVG from '../../assets/frameworks/hugo.svg';
import gatsbySVG from '../../assets/frameworks/gatsby.svg';

import { 
  Container,
  Content,
  ButtonsContainer,
  SectionDescription
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
      </Content>

    </Container>
  );
}
