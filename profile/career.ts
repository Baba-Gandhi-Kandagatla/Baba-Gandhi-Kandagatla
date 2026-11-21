export interface Achievement {
  id: string;
  title: string;
  description: string;
  date: string;
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  duration: string;
  startDate?: string;
  description: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  concept: string;
  technologies: string[];
  impact: string;
}

export interface Course {
  name: string;
}

export interface Patent {
  id: string;
  title: string;
  applicationNumber: string;
  publicationNumber?: string;
  filingDate: string;
  publicationDate?: string;
  applicationAuthority: string;
  inventors: string[];
  applicant: string;
  abstract: string;
  status: string;
  grantStatus?: string;
}

export interface Publication {
  id: string;
  title: string;
  paperId: string;
  conference: string;
  date: string;
  authors: string[];
  authorCount?: number;
  authorListComplete?: boolean;
  contribution?: string;
  abstract: string;
  certificateImage?: string;
  status: string;
  publicationUrl?: string;
  presentation?: string;
}

export const personalInfo = {
  name: "Baba Gandhi Kandagatla",
  title: "Software Engineer",
  intro: "I build backend services and cloud infrastructure at Nasuni. My projects explore applied AI, from adaptive interviews to learning tools.",
  summary: "I’m an Associate Software Engineer at Nasuni, where I build backend services and cloud infrastructure. Before that, I worked on sign-in, authorization and monitoring at Eventbrite. My own projects range from college interview software to tools I use to plan my day.",
  email: "babagandhikandagatla@gmail.com",
  location: "Hyderabad, India",
  links: {
    github: "https://github.com/Baba-Gandhi-Kandagatla",
    linkedin: "https://www.linkedin.com/in/baba-gandhi-kandagatla",
  },
  education: [
    {
      institution: "Keshav Memorial Institute of Technology",
      degree: "B.Tech in Computer Science Engineering (AI/ML)",
      duration: "November 2022 - June 2026",
      gpa: "8.07/10.0",
      status: "Graduated",
      // June reflects results; confirm the official award month from the degree record.
      graduationTimeline: { exams: "May 2026", results: "June 2026", ceremony: "July 2026" },
      courses: [
        "Natural Language Processing",
        "Database Management",
        "Software Engineering",
        "Computer Networks"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College Prathiba branch",
      degree: "Intermediate (12th)",
      duration: "2020-2022",
      gpa: "885/1000"
    },
    {
      institution: "Sri Chaitanya School",
      degree: "Secondary School Certificate (10th)",
      duration: "2019-2020",
      gpa: "10/10"
    }
  ]
};

export const skills: Skill[] = [
  {
    "category": "Programming Languages",
    "items": [
      "Python",
      "Java",
      "JavaScript",
      "TypeScript"
    ]
  },
  {
    "category": "Backend & Web Development",
    "items": [
      "Node.js",
      "Express.js",
      "React",
      "FastAPI",
      "REST APIs"
    ]
  },
  {
    "category": "AI & Machine Learning",
    "items": [
      "Deep Learning",
      "Machine Learning",
      "NLP",
      "RNNs",
      "LSTMs",
      "Transformers",
      "Transfer Learning",
      "RAG"
    ]
  },
  {
    "category": "Cloud & Infrastructure",
    "items": [
      "AWS Lambda",
      "Amazon SNS",
      "Amazon S3",
      "Amazon EC2",
      "AWS CloudWatch",
      "AWS IAM",
      "AWS CDK",
      "Terraform",
      "Docker",
      "Docker Compose",
      "CI/CD"
    ]
  },
  {
    "category": "Databases & Data",
    "items": [
      "SQL",
      "MongoDB",
      "PostgreSQL",
      "Snowflake"
    ]
  },
  {
    "category": "Identity & Authentication",
    "items": [
      "Authentication",
      "Authorization",
      "MFA",
      "Auth0",
      "Clerk"
    ]
  },
  {
    "category": "Tools Used",
    "items": [
      "Git",
      "VS Code",
      "Postman",
      "Swagger",
      "Playwright",
      "Heap",
      "Datadog",
      "Split.io",
      "Statsig",
      "Spacelift"
    ]
  },
  {
    "category": "Additional Web Experience",
    "items": [
      "Next.js"
    ]
  },
  {
    "category": "Conceptual Familiarity",
    "items": [
      "Spring Boot",
      "Kubernetes"
    ]
  }
];

export const experiences: Experience[] = [
  {
    id: "nasuni-associate-software-engineer",
    title: "Associate Software Engineer",
    organization: "Nasuni",
    duration: "Jul 2026 - Present",
    startDate: "2026-07-13",
    description: "• I develop backend services, APIs, and supporting infrastructure using Python, AWS, and Terraform. • I built a production failure-notification Lambda in Python and provisioned its infrastructure with Terraform. It processes failure details and publishes notifications to Amazon SNS for delivery to the relevant Slack channels. • I created additional AWS Lambda functions, IAM rules, and alarms. • I’m developing data ingestion collectors and an end-to-end technical spike for migrating dashboards from Azure to Grafana, covering dashboard identity verification, data collection, storage, and visualization."
  },
  {
    id: "eventbrite-intern",
    title: "Software Engineer Intern - Identity Team (Privacy & Attendee Mobile App)",
    organization: "Eventbrite",
    duration: "Jul 2025 - Apr 2026",
    description: "• I resolved 90+ authentication and authorization issues across identity flows, including 30+ high-priority/critical bugs and mitigation work during a large-scale abuse/spam incident, strengthening platform security and user trust. • I reduced weekly URL failures in core identity flows by 98% (150K to 3K) by identifying and fixing a double-encoding defect, significantly improving reliability of login and account-management experiences. • I built AWS CloudWatch dashboards as code using AWS CDK and integrated CI/CD approval workflows. I added alarms, logs, and analytics for key auth/MFA events, improving observability, incident detection, and RCA speed. • I led backend work for the ACUL initiative, migrating web login from EB-UI to Auth0-hosted flows to improve authentication modularity, security, and maintainability. • I extended consumer web sessions to 365 days and centralized validation and error handling to make authentication journeys clearer and more reliable."
  }
];

export const achievements: Achievement[] = [
  {
    id: "hackathon-tworks",
    title: "Top 15 in Hackathon (t-works, MGIT)",
    description: "My team placed in the top 15.",
    date: "May 2025"
  },
  {
    id: "utkrishti-puraskar",
    title: "KMIT's Utkrishti Puraskar",
    description: "I received this award at KMIT Awards Day for my academic performance among 700+ peers.",
    date: "Mar 2025"
  },
  {
    id: "hackathon-bvrit",
    title: "Top 10 in Hackathon (BVRIT)",
    description: "My team placed in the top 10.",
    date: "Apr 2025"
  },
  {
    id: "hackathon-hackxcelerate",
    title: "Finalist in HackXcelerate Hackathon (Microsoft & Bytexl at CBIT)",
    description: "I received a certificate of participation as a finalist.",
    date: "Apr 2024"
  },
  {
    id: "hackathon-enginerd-kmit",
    title: "1st Prize in Enginerd Hackathon (KMIT)",
    description: "We won first prize in both the Software and Physics categories at KMIT's Enginerd Hackathon.",
    date: "Aug 2023"
  },
  {
    id: "hackathon-Mjcet",
    title: "1st Prize - IEEE WIE MJCET Hackathon",
    description: "We won first prize in a hackathon organized by IEEE Women in Engineering at MJCET.",
    date: "Aug 2023"
  },
  {
    id: "olympiad-chat",
    title: "Winner in CHAT Olympiad (Chemistry Exam)",
    description: "I placed first in the national chemistry exam.",
    date: "Jan 2020"
  },
  {
    id: "recognition-result-automation",
    title: "IQAC Recognition: Result Automation System",
    description: "I received a letter of appreciation for contributing to the OU Grade Retrieval Automation project for college use.",
    date: "Aug 2023"
  },
  {
    id: "recognition-virtual-lab",
    title: "IQAC Recognition: Physics Virtual Lab",
    description: "I received a letter of appreciation for contributing to the Physics Virtual Lab project for college use.",
    date: "Aug 2023"
  },
  {
    id: "media-the-hindu",
    title: "Media Recognition: Featured in The Hindu",
    description: "I appeared in The Hindu as part of StreetCause's village adoption and community development work near Bhadrachalam.",
    date: "Jan 2024"
  },
  {
    id: "community-saksham",
    title: "NSS & Community Service: Saksham Telangana",
    description: "I received a certificate of appreciation from Saksham Telangana for my contributions at the 'Divyang Sammelana' event.",
    date: "Apr 2024"
  },
  {
    id: "community-streetcause",
    title: "NSS & Community Service: Streetcause Hyderabad",
    description: "I received a certificate of service for my 2023–2024 tenure.",
    date: "Jul 2024"
  }
];


export const leadership = [
  {
    id: "streetcause",
    title: "Community Outreach Volunteer",
    organization: "StreetCause KMIT",
    duration: "2023 - 2025",
    description: "I contributed to StreetCause initiatives supporting three villages near Bhadrachalam, including school and road improvements, borewells, solar-powered lighting and fans, mosquito nets, learning materials, and sports equipment. I participated in food donation and plantation drives, fundraising, and student sessions on ethics and career guidance. I mentored 70 students."
  },
  {
    id: "public-speaking",
    title: "Speaker & Event Volunteer",
    organization: "Vachan Speakers Club",
    duration: "2022 - approximately 2025",
    description: "I gave two orientation speeches for junior students, addressing an audience of approximately 1,000. I helped coordinate debates, icebreaker sessions, and other club events, supporting communication between members and club leadership."
  },
  {
    id: "nss-awareness-rally",
    title: "Event Volunteer",
    organization: "National Service Scheme (NSS)",
    duration: "January 2024 (one-day event)",
    description: "I supported crowd management and event coordination at a disability awareness rally with over 1,000 participants, helping the event run smoothly."
  }
];

export const publications: Publication[] = [
  {
    id: "ieee-etcom-2025",
    title: "A Comparative Evaluation of Contextual and Statistical Text Representations in Deep Sequential Architectures for Multiclass Sentiment Classification",
    paperId: "350",
    conference: "IEEE ETCOM 2025",
    date: "March 27, 2026",
    publicationUrl: "https://ieeexplore.ieee.org/document/11436537",
    presentation: "ETCOM, November 28–29, 2025",
    authors: ["Sri Tulasi Aeloori", "Baba Gandhi Kandagatla", "Kummari SaiTeja", "Kodipyaka Rakshitha", "M. Asha Jyothi"],
    authorCount: 5,
    authorListComplete: true,
    contribution: "I co-authored the paper with four collaborators. I implemented a subset of the models with one teammate and wrote the research documentation and manuscript. Another student co-author also contributed to the model work.",
    abstract: "In today's digital age, customer reviews significantly influence consumer behavior and business strategies, making their sentiment analysis crucial for informed decision making. Sentiment classification of user generated reviews is essential for businesses and researchers to gauge public opinion. In this study, we perform a comparative evaluation of multiple deep learning based Natural Language Processing models such as Traditional Recurrent Neural Networks (RNN) and Neural Networks (NN), Long Short Term Memory (LSTM), Gated Recurrent Unit (GRU), and Bidirectional Encoder Representations from Transformers (BERT) each paired with contextual and statistical vectorizers as well i.e., Word2Vec, Term Frequency Inverse Document Frequency (TF-IDF) and BERT encoder. Experiments were conducted on a concatenated corpus comprising 120,000 Yelp reviews, 60,000 Amazon product reviews, and 7,000 Rotten Tomatoes movie critiques. Model performance was assessed using accuracy, F1-score, area under the ROC curve (AUC), processing power and time taken for each epoch.",
    certificateImage: "./img/IEEE_ETCOM_certificate.png",
    status: "Presented & Published"
  }
];

export const patents: Patent[] = [
  {
    id: "breast-cancer-classification",
    title: "Classification & segmentation of breast cancer mass in ultrasound Imagery/Video with 3D visualization",
    applicationNumber: "202541059395",
    filingDate: "27/06/2025",
    applicationAuthority: "India",
    inventors: [
      "Mr. BABA GANDHI KANDAGATLA",
      "Ms. KODIPYAKA RAKSHITHA",
      "Mr. KUMMARI SAI TEJA",
      "Mr. SUSHANTH REDDY PEDDIREDDY",
      "Mr. BHARADWAJ REDDY VANCHA",
      "Mr. PRADYUMNA JONNALAGADDA",
      "Mr. CHANDRAHAAS JASTI"
    ],
    applicant: "Keshav Memorial Institute of Technology",
    abstract: "A computer-implemented system and method are provided for the classification and segmentation of breast cancer in ultrasound images, integrated with virtual reality (VR) visualization for diagnostic support and medical training. The system employs deep learning models, including a Vision Transformer (ViT-B/16) and pre-trained EfficientNet B0 for image classification, and UNETR and UNet-based architectures for tumor segmentation. Input ultrasound images are processed to generate diagnostic predictions and corresponding segmentation masks, which are combined and displayed in an interactive VR environment developed using Unreal Engine. The system enables real-time visualization and user interaction, allowing clinicians and trainees to explore tumor characteristics and adjust outputs as needed. The system is designed to support interactive exploration, medical training, and further research.",
    status: "Published application",
    grantStatus: "Unconfirmed"
  }
];
