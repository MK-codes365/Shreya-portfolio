import { Heading } from '~/components/heading';
import { Section } from '~/components/section';
import { Transition } from '~/components/transition';
import { Divider } from '~/components/divider';
import { useState } from 'react';
import styles from './tech-stack.module.css';

// Tech stack logo SVG definitions
const PythonIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#3776AB' }}>
    <path d="M14.25.18c-.9 0-1.66.12-2.28.36L7.13 2.1c-.8.3-.8 1-.8 1.48v1.75h6.05v.9H6.33c-1.34 0-2.3 1-2.3 2.3v3.7c0 1.2.9 2.3 2.3 2.3h1.34V13c0 .8.6 1.48 1.48 1.48H12v-.9h-2.85c-.56 0-.9-.34-.9-.9v-3.7c0-.56.34-.9.9-.9h6.05c1.34 0 2.3-1 2.3-2.3V4.28c0-1.3-.9-2.3-2.3-2.3h-1.34V.62c0-.2-.1-.4-.36-.44zm-2.85 2.1c.37 0 .67.3.67.68a.67.67 0 1 1-1.34 0c0-.38.3-.68.67-.68z" fill="#3776AB" />
    <path d="M9.75 23.82c.9 0 1.66-.12 2.28-.36l4.84-1.56c.8-.3.8-1 .8-1.48V18.66h-6.05v-.9h6.05c1.34 0 2.3-1 2.3-2.3v-3.7c0-1.2-.9-2.3-2.3-2.3H16.33V8c0-.8-.6-1.48-1.48-1.48H12v.9h2.85c.56 0 .9.34.9.9v3.7c0 .56-.34.9-.9.9H8.8c-1.34 0-2.3 1-2.3 2.3v3.7c0 1.3.9 2.3 2.3 2.3h1.34v1.36c0 .2.1.4.36.44zm2.85-2.1c-.37 0-.67-.3-.67-.68a.67.67 0 1 1 1.34 0c0 .38-.3.68-.67.68z" fill="#FFE873" />
  </svg>
);

const LinuxIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#FCC624' }}>
    <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18c-3.15 0-5.83-2-6.68-4.81h13.36A7 7 0 0 1 12 20zm-1-8a1.5 1.5 0 1 1 1.5-1.5A1.5 1.5 0 0 1 11 12zm3.5.5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5zm-5 4c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5z"/>
  </svg>
);

const ShellIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#4EAA25' }}>
    <path fill="currentColor" d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 18V6h16v12H4zm8-2h6v2h-6v-2zm-6.5-1.5L9 12 5.5 8.5 7 7l5 5-5 5-1.5-1.5z" />
  </svg>
);

const CppIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#00599C' }}>
    <path fill="currentColor" d="M22 10h-2V8h-2v2h-2v2h2v2h2v-2h2v-2zm-6 2c0-3.31-2.69-6-6-6S4 8.69 4 12s2.69 6 6 6c2.59 0 4.8-1.64 5.6-4h-2.24c-.72 1.19-2.02 2-3.36 2-2.21 0-4-1.79-4-4s1.79-4 4-4c1.34 0 2.64.81 3.36 2H16c-.8-2.36-3.01-4-5.6-4z" />
  </svg>
);

const HtmlIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#E34F26' }}>
    <path fill="currentColor" d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.5 6H7.6l.3 3h9.6l-.6 6.8-4.8 1.3-4.8-1.3-.3-3.2h3l.2 1.6 1.9.5 1.9-.5.2-2H6.9L6.1 3h12.2l-.3 3z" />
  </svg>
);

const CssIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#1572B6' }}>
    <path fill="currentColor" d="M1.5 0h21l-1.9 21.2L12 24 3.4 21.2 1.5 0zm16.4 6h-11l.3 3h10.4l-.6 6.8-4.7 1.3-4.7-1.3-.3-3.2H11l.1 1.6 1.9.5 1.9-.5.2-2H4.9l-.3-3h13.5l-.3-3z" />
  </svg>
);

const JsIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#F7DF1E' }}>
    <path fill="currentColor" d="M24 0v24H0V0h24z" />
    <path fill="#000" d="M1.08 18.06c.26.54.74.9 1.48.9.72 0 1.2-.38 1.2-1.28v-6.9h1.74v7c0 1.8-1.12 2.32-2.92 2.32-1.68 0-2.6-.82-2.92-2.04h1.42zm7.1 2.22c-.32-.58-.46-1.12-.46-2.04h1.58c0 .64.28 1.08.94 1.08.56 0 .9-.28.9-.78 0-.54-.36-.72-1.04-1l-.54-.24c-1.3-.56-1.94-1.2-1.94-2.52 0-1.46 1.14-2.4 2.86-2.4 1.5 0 2.46.74 2.78 1.8h-1.46c-.22-.48-.6-.82-1.28-.82-.54 0-.82.26-.82.68 0 .44.28.62.88.88l.54.24c1.54.66 2.14 1.28 2.14 2.68 0 1.68-1.24 2.56-3.1 2.56-1.78 0-2.76-.98-3.08-2.22z" />
  </svg>
);

const ReactIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#61DAFB' }}>
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(30 12 12)" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(90 12 12)" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <ellipse cx="12" cy="12" rx="8" ry="3" transform="rotate(150 12 12)" stroke="currentColor" strokeWidth="1.2" fill="none" />
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
  </svg>
);

const NodeIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#339933' }}>
    <path fill="currentColor" d="M12 2L2 7.7v11L12 22l10-5.3V7.7L12 2zm8 13.5l-8 4.2-8-4.2V8.8l8-4.2 8 4.2v6.7z" />
  </svg>
);

const ExpressIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#ffffff' }}>
    <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM8 7h8v2H8V7zm0 4h8v2H8v-2zm0 4h5v2H8v-2z" />
  </svg>
);

const MongoIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#47A248' }}>
    <path fill="currentColor" d="M12 2C7.5 7.5 7.5 12.5 7.5 15.5c0 2.5 2 4.5 4.5 4.5s4.5-2 4.5-4.5c0-3 0-8-4.5-13.5zm0 15.5c-1.4 0-2.5-1.1-2.5-2.5 0-1.8.8-4.5 2.5-7.5 1.7 3 2.5 5.7 2.5 7.5 0 1.4-1.1 2.5-2.5 2.5z" />
  </svg>
);

const SqlIcon = () => (
  <svg viewBox="0 0 24 24" className={styles.techIcon} style={{ '--hover-color': '#00758F' }}>
    <path fill="currentColor" d="M12 2C6.5 2 2 3.8 2 6v12c0 2.2 4.5 4 10 4s10-1.8 10-4V6c0-2.2-4.5-4-10-4zm0 2c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm0 6c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2zm0 6c4.4 0 8 1.3 8 2s-3.6 2-8 2-8-1.3-8-2 3.6-2 8-2z" />
  </svg>
);

const MysqlIcon = () => (
  <svg viewBox="0 0 128 128" className={styles.techIcon} style={{ '--hover-color': '#00758F' }}>
    <path fill="#00758F" d="M117.688 98.242c-6.973-.191-12.297.461-16.852 2.379-1.293.547-3.355.559-3.566 2.18.711.746.82 1.859 1.387 2.777 1.086 1.754 2.922 4.113 4.559 5.352 1.789 1.348 3.633 2.793 5.551 3.961 3.414 2.082 7.223 3.27 10.504 5.352 1.938 1.23 3.859 2.777 5.75 4.164.934.684 1.563 1.75 2.773 2.18v-.195c-.637-.812-.801-1.93-1.387-2.777l-2.578-2.578c-2.52-3.344-5.719-6.281-9.117-8.719-2.711-1.949-8.781-4.578-9.91-7.73l-.199-.199c1.922-.219 4.172-.914 5.949-1.391 2.98-.797 5.645-.59 8.719-1.387l4.164-1.187v-.793c-1.555-1.594-2.664-3.707-4.359-5.152-4.441-3.781-9.285-7.555-14.273-10.703-2.766-1.746-6.184-2.883-9.117-4.363-.988-.496-2.719-.758-3.371-1.586-1.539-1.961-2.379-4.449-3.566-6.738-2.488-4.793-4.93-10.023-7.137-15.066-1.504-3.437-2.484-6.828-4.359-9.91-9-14.797-18.687-23.73-33.695-32.508-3.195-1.867-7.039-2.605-11.102-3.57l-6.543-.395c-1.332-.555-2.715-2.184-3.965-2.977C16.977 3.52 4.223-3.312.539 5.672-1.785 11.34 4.016 16.871 6.09 19.746c1.457 2.012 3.32 4.273 4.359 6.539.688 1.492.805 2.984 1.391 4.559 1.438 3.883 2.695 8.109 4.559 11.695.941 1.816 1.98 3.727 3.172 5.352.727.996 1.98 1.438 2.18 2.973-1.227 1.715-1.297 4.375-1.984 6.543-3.098 9.77-1.926 21.91 2.578 29.137 1.383 2.223 4.641 6.98 9.117 5.156 3.918-1.598 3.043-6.539 4.164-10.902.254-.988.098-1.715.594-2.379v.199l3.57 7.133c2.641 4.254 7.324 8.699 11.297 11.699 2.059 1.555 3.68 4.242 6.344 5.152v-.199h-.199c-.516-.805-1.324-1.137-1.98-1.781-1.551-1.523-3.277-3.414-4.559-5.156-3.613-4.902-6.805-10.27-9.711-15.855-1.391-2.668-2.598-5.609-3.77-8.324-.453-1.047-.445-2.633-1.387-3.172-1.281 1.988-3.172 3.598-4.164 5.945-1.582 3.754-1.789 8.336-2.375 13.082-.348.125-.195.039-.398.199-2.762-.668-3.73-3.508-4.758-5.949-2.594-6.164-3.078-16.09-.793-23.191.59-1.836 3.262-7.617 2.18-9.316-.516-1.691-2.219-2.672-3.172-3.965-1.18-1.598-2.355-3.703-3.172-5.551-2.125-4.805-3.113-10.203-5.352-15.062-1.07-2.324-2.875-4.676-4.359-6.738-1.645-2.289-3.484-3.977-4.758-6.742-.453-.984-1.066-2.559-.398-3.566.215-.684.516-.969 1.191-1.191 1.148-.887 4.352.297 5.547.793 3.18 1.32 5.832 2.578 8.527 4.363 1.289.855 2.598 2.512 4.16 2.973h1.785c2.789.641 5.914.195 8.523.988 4.609 1.402 8.738 3.582 12.488 5.949 11.422 7.215 20.766 17.48 27.156 29.734 1.027 1.973 1.473 3.852 2.379 5.945 1.824 4.219 4.125 8.559 5.941 12.688 1.816 4.113 3.582 8.27 6.148 11.695 1.348 1.801 6.551 2.766 8.918 3.766 1.66.699 4.379 1.43 5.949 2.379 3 1.809 5.906 3.965 8.723 5.945 1.402.992 5.73 3.168 5.945 4.957zm-88.605-75.52c-1.453-.027-2.48.156-3.566.395v.199h.195c.695 1.422 1.918 2.34 2.777 3.566l1.98 4.164.199-.195c1.227-.867 1.789-2.25 1.781-4.363-.492-.52-.562-1.164-.992-1.785-.562-.824-1.66-1.289-2.375-1.98zm0 0" />
  </svg>
);

export const TechStack = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  const stack = [
    { name: 'Python', icon: <PythonIcon /> },
    { name: 'Linux', icon: <LinuxIcon /> },
    { name: 'Shell Scripting', icon: <ShellIcon /> },
    { name: 'C++', icon: <CppIcon /> },
    { name: 'HTML5', icon: <HtmlIcon /> },
    { name: 'CSS3', icon: <CssIcon /> },
    { name: 'JS (ES6+)', icon: <JsIcon /> },
    { name: 'React', icon: <ReactIcon /> },
    { name: 'Node.js', icon: <NodeIcon /> },
    { name: 'Express.js', icon: <ExpressIcon /> },
    { name: 'MongoDB', icon: <MongoIcon /> },
    { name: 'SQL', icon: <SqlIcon /> },
    { name: 'MySQL', icon: <MysqlIcon /> },
  ];

  return (
    <Section
      className={styles.techStackSection}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  Skills
                </div>
              </div>
              <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
                My Tech Stack
              </Heading>
              <div className={styles.techGrid}>
                {stack.map((tech, index) => (
                  <div
                    key={tech.name}
                    className={styles.techItem}
                    data-visible={visible}
                    style={{ transitionDelay: `${index * 50}ms` }}
                  >
                    {tech.icon}
                    <span className={styles.techName}>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
