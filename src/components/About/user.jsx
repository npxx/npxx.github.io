const INFO = {
  main: {
    title: 'Reactfolio by truethari',
    name: 'Tharindu N.',
    email: 'mail@tharindu.dev',
    logo: '../logo.png',
  },

  socials: {
    twitter: 'https://twitter.com/',
    github: 'https://github.com/',
    linkedin: 'https://linkedin.com/',
    instagram: 'https://instagram.com/',
    stackoverflow: 'https://stackoverflow.com/',
    facebook: 'https://facebook.com/',
  },

  homepage: {
    title: 'Full-stack web and mobile app developer, and amateur astronaut.',
    description:
      'I am a backend developer with expertise in Node.js. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.',
  },

  about: {
    title: 'I’m Tharindu N. I live in Sri Lanka, where I design the future.',
    description:
      "I've worked on a variety of projects over the years and I'm proud of the progress I've made. Many of these projects are open-source and available for others to explore and contribute to. If you're interested in any of the projects I've worked on, please feel free to check out the code and suggest any improvements or enhancements you might have in mind. Collaborating with others is a great way to learn and grow, and I'm always open to new ideas and feedback.",
  },

  articles: {
    title:
      "I'm passionate about pushing the boundaries of what's possible and inspiring the next generation of innovators.",
    description:
      'Chronological collection of my long-form thoughts on programming, leadership, product design, and more.',
  },

  projects: [
    {
      title: 'John Lemon but Juicy!',
      description:
        'Completed the John Lemon (Unity) Task and added novel features like stealth, kill counter (quite ironic!), lives counter and a minimap too!',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/jlhjv2',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-unity tag-lg">Unity</span>
          <span className="tag tag-cs tag-lg">C#</span>
        </div>
      ),
    },

    {
      title: 'Mini Student Search App',
      description:
        'Created an IITK-themed Mini Student Search App with Flask and SQLite',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/itss',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-flask tag-lg">Flask</span>
          <span className="tag tag-sqlite tag-lg">SQLite</span>
        </div>
      ),
    },
    {
      title: 'Clirdle',
      description: 'Created a novel command-line version of WORDLE! in Python',

      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/clirdle',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-py tag-lg">Python</span>
        </div>
      ),
    },

    {
      title: 'Newspaper Scraper',
      description:
        'Written a script for scraping and downloading the latest newspaper in PDF format.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/html/html.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/nws',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-py tag-lg">Python</span>
          <span className="tag tag-selenium tag-lg">Selenium</span>
        </div>
      ),
    },

    {
      title: 'Automated Login',
      description:
        'Written a script for automated login to HelloIITK Portal and further automated actions.',
      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/mook',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-py tag-lg">Python</span>
          <span className="tag tag-selenium tag-lg">Selenium</span>
        </div>
      ),
    },

    {
      title: 'GH Usernames',
      description:
        'Script for finding short github usernames with given constraints',

      logo: 'https://cdn.jsdelivr.net/npm/programming-languages-logos/src/javascript/javascript.png',
      linkText: 'View Project',
      link: 'https://github.com/npxx/uscra',
      tagg: (
        <div>
          <p></p>
          <span className="tag tag-py tag-lg">Python</span>
          <span className="tag tag-discord tag-lg">Discord</span>
        </div>
      ),
    },
  ],
}

export default INFO
