import zerotraceTextureLarge from '~/assets/zerotrace-app-large.jpg';
import zerotraceTexturePlaceholder from '~/assets/zerotrace-app-placeholder.jpg';
import zerotraceTexture from '~/assets/zerotrace-app.jpg';
import healconnectTextureLarge from '~/assets/healconnect-app-large.jpg';
import healconnectTexturePlaceholder from '~/assets/healconnect-app-placeholder.jpg';
import healconnectTexture from '~/assets/healconnect-app.jpg';
import healconnectTexture2Large from '~/assets/healconnect-app-2-large.jpg';
import healconnectTexture2Placeholder from '~/assets/healconnect-app-2-placeholder.jpg';
import healconnectTexture2 from '~/assets/healconnect-app-2.jpg';
import { Footer } from '~/components/footer';
import { baseMeta } from '~/utils/meta';
import { Intro } from './intro';
import { Profile } from './profile';
import { ProjectSummary } from './project-summary';
import { TechStack } from './tech-stack';
import { useEffect, useRef, useState } from 'react';
import config from '~/config.json';
import styles from './home.module.css';

export const links = () => {
  return [
    {
      rel: 'prefetch',
      href: '/draco/draco_wasm_wrapper.js',
      as: 'script',
      type: 'text/javascript',
      importance: 'low',
    },
    {
      rel: 'prefetch',
      href: '/draco/draco_decoder.wasm',
      as: 'fetch',
      type: 'application/wasm',
      importance: 'low',
    },
  ];
};

export const meta = () => {
  return baseMeta({
    title: 'Cybersecurity Student & Developer',
    description: `Portfolio of ${config.name} — a student working on cybersecurity, penetration testing, and development.`,
  });
};

export const Home = () => {
  const [visibleSections, setVisibleSections] = useState([]);
  const [scrollIndicatorHidden, setScrollIndicatorHidden] = useState(false);
  const intro = useRef();
  const details = useRef();
  const projectOne = useRef();
  const projectTwo = useRef();
  const techStack = useRef();

  useEffect(() => {
    const sections = [intro, details, projectOne, projectTwo, techStack];

    const sectionObserver = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const section = entry.target;
            observer.unobserve(section);
            if (visibleSections.includes(section)) return;
            setVisibleSections(prevSections => [...prevSections, section]);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.1 }
    );

    const indicatorObserver = new IntersectionObserver(
      ([entry]) => {
        setScrollIndicatorHidden(!entry.isIntersecting);
      },
      { rootMargin: '-100% 0px 0px 0px' }
    );

    sections.forEach(section => {
      sectionObserver.observe(section.current);
    });

    indicatorObserver.observe(intro.current);

    return () => {
      sectionObserver.disconnect();
      indicatorObserver.disconnect();
    };
  }, [visibleSections]);

  return (
    <div className={styles.home}>
      <Intro
        id="intro"
        sectionRef={intro}
        scrollIndicatorHidden={scrollIndicatorHidden}
      />
      <Profile
        sectionRef={details}
        visible={visibleSections.includes(details.current)}
        id="details"
      />
      <ProjectSummary
        id="project-1"
        sectionRef={projectOne}
        visible={visibleSections.includes(projectOne.current)}
        index={1}
        title="ZeroTrace"
        projectName="ZeroTrace"
        description="A robust, enterprise-grade data wiping tool that ensures permanent data destruction on Windows systems. Built with a hybrid C++/Python core for maximum performance."
        buttonText="View project"
        buttonLink="/projects/zerotrace"
        model={{
          type: 'laptop',
          alt: 'ZeroTrace Windows data wiping tool screen',
          textures: [
            {
              srcSet: `${zerotraceTexture} 1280w, ${zerotraceTextureLarge} 2560w`,
              placeholder: zerotraceTexturePlaceholder,
            },
          ],
        }}
      />
      <ProjectSummary
        id="project-2"
        alternate
        sectionRef={projectTwo}
        visible={visibleSections.includes(projectTwo.current)}
        index={2}
        title="Heal Connect"
        projectName="Heal Connect"
        description="Bridging healthcare gaps in rural and underserved areas with secure AI diagnostics, real-time vitals tracking, and role-based teleconsultation dashboards."
        buttonText="View project"
        buttonLink="/projects/healconnect"
        liveLink="https://healconnect-iota.vercel.app/"
        model={{
          type: 'phone',
          alt: 'Heal Connect app screen',
          textures: [
            {
              srcSet: `${healconnectTexture} 375w, ${healconnectTextureLarge} 750w`,
              placeholder: healconnectTexturePlaceholder,
            },
            {
              srcSet: `${healconnectTexture2} 375w, ${healconnectTexture2Large} 750w`,
              placeholder: healconnectTexture2Placeholder,
            },
          ],
        }}
      />
      <TechStack
        sectionRef={techStack}
        visible={visibleSections.includes(techStack.current)}
        id="tech-stack"
      />
      <Footer />
    </div>
  );
};
