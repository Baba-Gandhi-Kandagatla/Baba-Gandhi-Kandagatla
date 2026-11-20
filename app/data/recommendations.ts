export interface Recommendation {
    id: string;
    author: string;
    organization: string;
    relationship?: string;
    date?: string;
    excerpt: string;
    highlight: string;
    fullText?: string;
    sourceUrl: string;
}

export const recommendationsUrl = "https://www.linkedin.com/in/baba-gandhi-kandagatla/details/recommendations/?detailScreenTabIndex=0";

// Organization identifies the context of working together, not current employment.
// Display short verbatim excerpts; fullText is retained where supplied by the user.
export const recommendations: Recommendation[] = [
    {
        id: "pravesh-mehta",
        author: "Pravesh Mehta",
        organization: "Eventbrite",
        excerpt: "he was someone I could confidently give a challenging problem to",
        highlight: "confidently give a challenging problem to",
        sourceUrl: "https://in.linkedin.com/in/baba-gandhi-kandagatla"
    },
    {
        id: "nishant-prakash",
        author: "Nishant Prakash",
        organization: "Eventbrite",
        excerpt: "He definitely went beyond what we usually expect from an intern",
        highlight: "went beyond what we usually expect",
        sourceUrl: "https://in.linkedin.com/in/baba-gandhi-kandagatla"
    },
    {
        id: "twinkle-rastogi",
        author: "Twinkle Rastogi",
        organization: "Eventbrite",
        relationship: "Senior colleague; not a direct manager",
        date: "2026-04-15",
        excerpt: "He consistently took initiative and handled responsibilities with the same level of maturity and accountability as full-time engineers.",
        highlight: "maturity and accountability",
        fullText: "I had the opportunity to work closely with Baba during his internship on a Tier 1 service and he truly stood out from day one.\n\nHis problem-solving ability, approach to challenges and ownership of work were well beyond what you would typically expect from an intern. He consistently took initiative and handled responsibilities with the same level of maturity and accountability as full-time engineers.\n\nWhat impressed me the most was his ability to contribute to large, impactful initiatives and deliver them with confidence and quality. He approached problems thoughtfully and executed them gracefully, often working at a level comparable to his senior peers.",
        sourceUrl: recommendationsUrl
    },
    {
        id: "pooja-salot",
        author: "Pooja Salot",
        organization: "Eventbrite",
        relationship: "Direct manager",
        date: "2025-12-19",
        excerpt: "He showed professionalism, reliability, ownership and maturity well beyond his experience.",
        highlight: "reliability, ownership and maturity",
        fullText: "It was a pleasure working with Baba as a Technical Intern on my team. From the very beginning, he demonstrated strong problem-solving skills, technical curiosity, and eagerness to learn.\n\nHe quickly ramped up on our tech stack, contributed very well on a tier-1 service like Identity, asked thoughtful questions, and delivered well-structured, high-quality code while ensuring to follow best practices.What stood out most was his ability to take ownership of tasks, incorporate feedback effectively, and drive solutions to completion—something rare at an intern level.He made some meaningful contributions on the team which clearly showcased his strong technical knowledge.\n\nBeyond technical contributions, Baba collaborated well with senior engineers, participated actively in discussions, and approached challenges with a positive and growth-oriented mindset and seeked timely feedback from seniors to continuosly do better each day. He showed professionalism, reliability, ownership and maturity well beyond his experience.\n\nI have no doubt that Baba's will excel as a software engineer and be a strong asset to any engineering team. I highly recommend him and would gladly work with him again.",
        sourceUrl: recommendationsUrl
    }
];
