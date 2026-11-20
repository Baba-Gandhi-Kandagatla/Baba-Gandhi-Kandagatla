/** Card fields stay concise; optional detail sections support an expanded view. */
export interface ProjectImage {
    src: string;
    alt: string;
    caption?: string;
    kind?: "screenshot" | "illustration";
    fit?: "contain" | "cover";
}

export interface ProjectSection {
    title: string;
    text?: string;
    items?: string[];
}

export interface Project {
    id: string;
    title: string;
    description: string;
    techStack: string[];
    highlight?: string;
    coverImage: ProjectImage;
    details: {
        techStack: string[];
        sections: ProjectSection[];
        images: ProjectImage[];
    };
    links?: { github?: string };
    bgColor?: string;
    projectType?: string;
    placement?: "featured" | "supporting";
}

export const projects: Project[] = [
    {
        "id": "skillsage",
        "title": "SkillSage - AI Interview Platform",
        "description": "Colleges can run mock interviews for an entire batch, starting with shared questions and adapting follow-ups to each student’s resume and answers. Students revisit feedback on individual answers, while faculty review results across the batch.",
        "techStack": [
            "React",
            "TypeScript",
            "Express",
            "PostgreSQL"
        ],
        "highlight": "During internal college use, 200–300 interviews ran at the same time.",
        "coverImage": {
            "src": "./imgs/covers/skillsage-paper.jpg",
            "alt": "A paper question bubble branches into two replies above a feedback check mark.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "React",
                "TypeScript",
                "Node.js",
                "Express",
                "PostgreSQL",
                "Sequelize",
                "OpenAI o3-mini",
                "Docker Compose",
                "Kubernetes",
                "Playwright"
            ],
            "sections": [
                {
                    "title": "My contribution",
                    "text": "I co-developed the backend with one teammate over roughly a year. Two teammates focused on the frontend. I also reviewed frontend code and researched speech input for the interview experience."
                },
                {
                    "title": "College interview workflow",
                    "items": [
                        "College administrators import student rosters, assign batches and configure shared questions and technical and coding question counts. They control when an interview opens and pauses.",
                        "Mammoth extracts text from a Word resume. The service summarizes it and uses that context alongside the topic and previous exchanges when generating follow-up questions.",
                        "The React client accepts typed answers, dictation through react-speech-recognition and code through Ace. It monitors fullscreen and page visibility during an interview.",
                        "Students can revisit individual answers, marks and feedback. Administrators review performance at student and batch level."
                    ]
                },
                {
                    "title": "Backend design",
                    "text": "PostgreSQL stores interview definitions, individual attempts and question–answer exchanges. The current OpenAI helper uses o3-mini with structured JSON responses and records token usage and estimated cost by task."
                },
                {
                    "title": "Deployment and testing",
                    "items": [
                        "The repository includes Docker Compose configuration for prebuilt images, Kubernetes deployment and ingress manifests, and EC2 deployment guidance.",
                        "In a separate Playwright exercise, we simulated about 1,500 sessions and staggered real model requests across interview stages. The public repository contains the browser scenarios and a four-worker configuration. The larger run’s measurements are unavailable there."
                    ]
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/skillsage/0.png",
                    "alt": "Adaptive interview question and answer workspace",
                    "caption": "Adaptive interview question and answer workspace",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/1.png",
                    "alt": "Interview score, feedback, strengths and weaknesses",
                    "caption": "Interview score, feedback, strengths and weaknesses",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/4.png",
                    "alt": "Student skill distribution chart",
                    "caption": "Student skill distribution chart",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/5.png",
                    "alt": "Student progress over interviews",
                    "caption": "Student progress over interviews",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/6.png",
                    "alt": "Coding answer and per-question feedback",
                    "caption": "Coding answer and per-question feedback",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/7.png",
                    "alt": "Problem-solving, code quality and debugging attributes",
                    "caption": "Problem-solving, code quality and debugging attributes",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/9.png",
                    "alt": "Administrator interview lifecycle dashboard",
                    "caption": "Administrator interview lifecycle dashboard",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/15.png",
                    "alt": "Technical and coding question configuration",
                    "caption": "Technical and coding question configuration",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/17.png",
                    "alt": "Batch management",
                    "caption": "Batch management",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/19.png",
                    "alt": "College-level aggregate usage overview",
                    "caption": "College-level aggregate usage overview",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skillsage/20.png",
                    "alt": "Creating an interview and selecting topics",
                    "caption": "Creating an interview and selecting topics",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "projectType": "Team Project",
        "placement": "featured",
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/SkillSage"
        }
    },
    {
        "id": "orbit",
        "title": "Orbit",
        "description": "Orbit brings scheduled tasks and recurring habits into one daily view. A reader can set a weekly reading goal, log pages each day, and see that history on a chart. Plans stay in the browser, with optional sync across devices.",
        "techStack": [
            "JavaScript",
            "Progressive Web App",
            "Supabase"
        ],
        "highlight": "A habit check-in records today’s progress and keeps the next occurrence on the calendar.",
        "coverImage": {
            "src": "./imgs/covers/orbit-paper.jpg",
            "alt": "A paper planner pairs daily tasks with a recurring habit tracker.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "JavaScript",
                "Service workers",
                "Browser local storage",
                "Supabase",
                "Node.js test runner"
            ],
            "sections": [
                {
                    "title": "Why I built it",
                    "text": "I designed and built Orbit independently. The hardest part was deciding what a task and a habit should share. A task needs a point at which it is finished. A habit needs an easy way to check in again tomorrow. Orbit gives each its own workflow and brings both into the Today view."
                },
                {
                    "title": "Planning and reflection",
                    "text": "Tasks and habits can repeat on a calendar. An activity can also carry a daily quantity, such as pages read, with a history chart for the selected item."
                },
                {
                    "title": "Storage and sync",
                    "text": "Profiles persist in the browser. Optional Supabase integration syncs signed-in accounts across devices, and local profiles can be exported as backups."
                },
                {
                    "title": "Testing",
                    "text": "The test suite covers recurrence, including month-end and leap-year behavior, activity analytics and session restoration."
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/orbit/Screenshot 2026-11-20 at 9.02.28 PM.png",
                    "alt": "Orbit Today view with separate daily priorities and weekly habits",
                    "caption": "The daily view keeps scheduled work and habit check-ins within reach.",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/orbit/Screenshot 2026-11-20 at 9.04.45 PM.png",
                    "alt": "Orbit task editor with priority, schedule and an optional quantity target",
                    "caption": "A task can track an amount, such as pages read, alongside completion.",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/orbit/Screenshot 2026-11-20 at 9.02.47 PM.png",
                    "alt": "Orbit monthly calendar and selected-day agenda",
                    "caption": "A selected date opens its agenda beside the month.",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/orbit/Screenshot 2026-11-20 at 9.04.13 PM.png",
                    "alt": "Orbit yearly activity heatmap for a selected habit",
                    "caption": "The activity history shows how often a habit was recorded.",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "placement": "supporting",
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/Orbit"
        },
        "projectType": "Personal Project"
    },
    {
        "id": "skill-forge",
        "title": "Skill Forge",
        "description": "Students enter a learning goal and what they already know to get a visual roadmap of topics to study next. Teachers organize each topic into a lesson with readings, videos, and a quiz so students can check their understanding as they go.",
        "techStack": [
            "MongoDB",
            "Express",
            "React",
            "Node.js"
        ],
        "highlight": "Students can ask an AI tutor about a passage or challenge a classmate to a timed quiz.",
        "coverImage": {
            "src": "./imgs/covers/skill-forge-paper.jpg",
            "alt": "Folded steps mark a learning path to an open book.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "MongoDB",
                "Express",
                "React",
                "Node.js",
                "Vector Database"
            ],
            "sections": [
                {
                    "title": "Teaching and study workflow",
                    "items": [
                        "Provides administrator, teacher, and student roles.",
                        "Teachers organize subjects into chapters and topics, with PDFs, YouTube videos, and links for each topic.",
                        "Students read material, watch videos, and attempt topic-specific quizzes to check their understanding."
                    ]
                },
                {
                    "title": "Topic-specific AI assistance",
                    "text": "An AI assistant integrated into each topic answers questions and explains the subject matter to help students understand what they are studying."
                },
                {
                    "title": "Personalized learning roadmap",
                    "text": "Students specify what they want to learn and what they already know. The system generates a visual roadmap showing their current position and a suggested sequence of topics to learn next."
                },
                {
                    "title": "Student competitions",
                    "text": "Students can challenge one another in quiz competitions, competing to answer more questions correctly."
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/skill-forge/3.png",
                    "alt": "Personalized Java learning roadmap",
                    "caption": "Personalized Java learning roadmap",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skill-forge/5.png",
                    "alt": "Available learning paths",
                    "caption": "Available learning paths",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skill-forge/8.png",
                    "alt": "Head-to-head timed quiz competition",
                    "caption": "Head-to-head timed quiz competition",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skill-forge/9.png",
                    "alt": "Topic reading resources",
                    "caption": "Topic reading resources",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/skill-forge/10.png",
                    "alt": "Topic-specific AI tutor",
                    "caption": "Topic-specific AI tutor",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "projectType": "Team Project",
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/SkillForge"
        }
    },
    {
        "id": "breast-cancer-detection",
        "title": "Breast Cancer Detection Using AI & VR",
        "description": "This research compares two tasks on breast ultrasound imagery. ViT and EfficientNet classify masses, while U-Net and UNETR predict their boundaries. Viewing the scan, mask, and overlay together makes it easier to inspect where the model drew the outline.",
        "techStack": [
            "Deep Learning",
            "Vision Transformers",
            "Flask",
            "Unreal Engine"
        ],
        "highlight": "An Unreal Engine viewer brings the classification and segmentation outputs into a VR environment.",
        "coverImage": {
            "src": "./imgs/covers/breast-cancer-detection-paper.jpg",
            "alt": "Layered paper plates illustrate an ultrasound scan, its contour and the segmentation overlay.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "MERN Stack",
                "Flask",
                "Unreal Engine",
                "EfficientNet",
                "U-Net",
                "UNETR",
                "ViT-B/16"
            ],
            "sections": [
                {
                    "title": "Model architecture",
                    "text": "We used EfficientNet and ViT-B/16 for classification, and U-Net and UNETR for segmentation."
                },
                {
                    "title": "Analysis and visualization",
                    "items": [
                        "Processes ultrasound imagery to produce classification predictions and segmentation masks.",
                        "Presents model outputs in an interactive VR environment built with Unreal Engine."
                    ]
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/breast-cancer-detection/1.png",
                    "alt": "Ultrasound examples and segmentation masks",
                    "caption": "Ultrasound examples and segmentation masks",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/breast-cancer-detection/3.png",
                    "alt": "Ultrasound input, segmentation mask and overlay",
                    "caption": "Ultrasound input, segmentation mask and overlay",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/breast-cancer-detection/4.png",
                    "alt": "Historical classification and segmentation interface; UI uses LLM terminology for vision models",
                    "caption": "Historical classification and segmentation interface; UI uses LLM terminology for vision models",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/breast-cancer-detection/6.png",
                    "alt": "Unreal visualization of classification output; historical LLM label",
                    "caption": "Unreal visualization of classification output; historical LLM label",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/breast-cancer-detection/7.png",
                    "alt": "Unreal visualization of segmentation output; historical LLM label",
                    "caption": "Unreal visualization of segmentation output; historical LLM label",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/BreastTumorDetectionVR"
        }
    },
    {
        "id": "quiz-generator",
        "title": "Interactive Quiz Generator",
        "description": "QuizCraft retrieves passages from a Word document on a chosen topic and passes that context to Phi-3.5 Mini. The question form supports formats such as multiple choice and short answer. The prototype’s current output limit is documented in the project details.",
        "techStack": [
            "MERN Stack",
            "FastAPI",
            "Microsoft Phi 3.5 Mini",
            "RAG"
        ],
        "highlight": "The search can fall back to reference sites when the uploaded notes have too little on the topic.",
        "coverImage": {
            "src": "./imgs/covers/quiz-generator-paper.jpg",
            "alt": "A highlighted document passage connects to multiple-choice question cards.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "MERN Stack",
                "FastAPI",
                "Microsoft Phi 3.5 Mini",
                "RAG"
            ],
            "sections": [
                {
                    "title": "Retrieval workflow",
                    "items": [
                        "Accepts both an uploaded Word document (.docx) and the topics the user wants questions about.",
                        "Searches the document for material relevant to those topics.",
                        "If the document search misses its threshold, the service can retrieve material from a reference site.",
                        "The prototype sends the retrieved context to Phi-3.5 Mini. Its current one-token output limit must be raised to produce a full quiz."
                    ]
                },
                {
                    "title": "Who it helps",
                    "text": "Supports students preparing from their study material and teachers creating quizzes from existing documents."
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/quiz-generator/1.png",
                    "alt": "QuizCraft introduction",
                    "caption": "QuizCraft introduction",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/quiz-generator/2.png",
                    "alt": "Topic and Word document upload form",
                    "caption": "Topic and Word document upload form",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "placement": "supporting",
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/QuizCraft"
        }
    },
    {
        "id": "ou-grade-retrieval",
        "title": "OU Grade Retrieval Automation",
        "description": "College staff can enter a roll-number range or upload a CSV to collect Osmania University exam results for a batch. Parallel requests retrieve the individual results and compile them into one Excel workbook for review.",
        "techStack": [
            "Python",
            "Web Scraping",
            "Multithreading",
            "Excel Export"
        ],
        "highlight": "Multiple OU-affiliated colleges have used the tool.",
        "coverImage": {
            "src": "./imgs/covers/ou-grade-retrieval-paper.jpg",
            "alt": "Parallel paper tracks carry result slips into one spreadsheet.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "Python",
                "Web Scraping",
                "Multithreading",
                "Excel Export"
            ],
            "sections": [
                {
                    "title": "Retrieval workflow",
                    "items": [
                        "Scrapes student results from the university portal.",
                        "Uses multithreading to speed up retrieval.",
                        "Organizes collected results into Excel spreadsheets."
                    ]
                },
                {
                    "title": "Practical adoption",
                    "text": "I received a college letter of appreciation for my contribution."
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/ou-grade-retrieval/1.png",
                    "alt": "Result collection form with roll-number range and CSV upload",
                    "caption": "Result collection form with roll-number range and CSV upload",
                    "kind": "screenshot",
                    "fit": "contain"
                },
                {
                    "src": "./imgs/projects/ou-grade-retrieval/2.png",
                    "alt": "Usage instructions and project credits",
                    "caption": "Usage instructions and project credits",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/GradeRetrievalAutomation"
        }
    },
    {
        "id": "birthday-app",
        "title": "Birthday Wishing App",
        "description": "This astronomy-themed app opens with a personal greeting on the recipient’s birthday. On other days, it shows NASA’s astronomy picture of the day and a personal to-do list, giving the gift a use throughout the year.",
        "techStack": [
            "Flutter",
            "Dart",
            "NASA API"
        ],
        "highlight": "A skywatching view lists upcoming near-Earth asteroid approaches.",
        "coverImage": {
            "src": "./imgs/covers/birthday-app-paper.jpg",
            "alt": "A pop-up birthday card holds a cake, crescent moon and ringed planet.",
            "caption": "AI-generated concept illustration",
            "kind": "illustration",
            "fit": "cover"
        },
        "details": {
            "techStack": [
                "Flutter",
                "Dart",
                "NASA API"
            ],
            "sections": [
                {
                    "title": "Why I built it",
                    "text": "I wanted the gift to be worth opening the day after the birthday, too. That’s why I paired the greeting with a new astronomy image each day."
                },
                {
                    "title": "Everyday experience",
                    "items": [
                        "Shows birthday wishes each year on her birthday.",
                        "Displays NASA’s astronomy image of the day on other days.",
                        "Shows close-approach times and miss distances for near-Earth asteroids from NASA’s feed.",
                        "Includes a to-do list for everyday planning."
                    ]
                }
            ],
            "images": [
                {
                    "src": "./imgs/projects/birthday-app/1.png",
                    "alt": "Birthday greeting screen",
                    "caption": "Birthday greeting screen",
                    "kind": "screenshot",
                    "fit": "contain"
                }
            ]
        },
        "links": {
            "github": "https://github.com/Baba-Gandhi-Kandagatla/BirthdayWishingApp"
        }
    }
];
