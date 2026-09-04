export interface EmailDraft {
  subject: string;
  body: string;
}

export interface ChatMessage {
  id: string;
  sender: "ai" | "user";
  text: string;
  draft?: EmailDraft;
  timestamp: string;
}

export const QUICK_PROMPTS = [
  { label: "Hire for a Role", prompt: "I'd like to discuss an engineering job opportunity or hiring you for a role." },
  { label: "Mobile App Project", prompt: "I want to build a cross-platform mobile app using React Native." },
  { label: "Freelance Project", prompt: "I have a freelance or consulting project to collaborate on." },
  { label: "Quick Chat", prompt: "I'd like to set up a quick 15-minute intro chat or networking call." },
];

export function generateAIResponse(userInput: string): { reply: string; draft?: EmailDraft } {
  const query = userInput.toLowerCase().trim();

  // 1. Mobile App Project
  if (query.includes("app") || query.includes("mobile") || query.includes("react native") || query.includes("ios") || query.includes("android")) {
    return {
      reply: "Here is a tailored mobile app project inquiry. Click below to open directly in Gmail:",
      draft: {
        subject: "Mobile App Development Inquiry — React Native Project",
        body: `Hi Abhinav,

I'm reaching out regarding a mobile application project. We are looking for an experienced App Developer to architect a high-performance cross-platform solution using React Native and modern component architecture.

I'd like to share the project requirements and discuss your availability.

Best regards,
[Your Name]
[Your Organization / Contact Info]`,
      },
    };
  }

  // 2. Job / Hiring Inquiry
  if (query.includes("hire") || query.includes("job") || query.includes("role") || query.includes("position") || query.includes("recruiting") || query.includes("interview") || query.includes("full-time") || query.includes("career")) {
    return {
      reply: "Here is a recruitment and role discussion email draft. Click below to open in Gmail:",
      draft: {
        subject: "Engineering Opportunity / Role Discussion — Abhinav Dayal",
        body: `Hi Abhinav,

I came across your portfolio and was impressed by your work in cross-platform mobile and web application engineering with React Native, React.js, and TypeScript.

We have an engineering opportunity that aligns with your background, and I'd love to connect for an introductory discussion.

Looking forward to hearing from you.

Best regards,
[Your Name]
[Company / Team]
[LinkedIn / Email]`,
      },
    };
  }

  // 3. Freelance / Contract
  if (query.includes("freelance") || query.includes("contract") || query.includes("consult") || query.includes("gig") || query.includes("client")) {
    return {
      reply: "Here is a freelance collaboration draft ready for Abhinav:",
      draft: {
        subject: "Freelance Project Collaboration — Inquiring for Abhinav Dayal",
        body: `Hi Abhinav,

I have an upcoming project and would love to explore a freelance collaboration with you. Given your background with production React Native applications, component architecture, and REST API integrations, I believe your skills would be a great fit.

Could we schedule a brief sync to discuss scope, deliverables, and timelines?

Best regards,
[Your Name]
[Contact Details]`,
      },
    };
  }

  // 4. Quick Chat / Coffee Sync
  if (query.includes("coffee") || query.includes("chat") || query.includes("call") || query.includes("meet") || query.includes("sync") || query.includes("connect")) {
    return {
      reply: "Here is an intro meeting request email ready to send:",
      draft: {
        subject: "Quick Intro / Networking Call with Abhinav Dayal",
        body: `Hi Abhinav,

I'd love to set up a quick 15-minute call to connect and discuss potential synergies and development work.

Please let me know what days and times work best for you.

Best regards,
[Your Name]
[Contact Info]`,
      },
    };
  }

  // 5. Tech Stack & Skills Questions
  if (query.includes("skill") || query.includes("stack") || query.includes("tech") || query.includes("tools")) {
    return {
      reply: "Abhinav specializes in React Native, Expo, React.js, TypeScript, RESTful APIs, Axios, and modern state architecture. Here is an inquiry draft:",
      draft: {
        subject: "Engineering Inquiry & Collaboration — React Native / TypeScript",
        body: `Hi Abhinav,

I reviewed your tech stack (React Native, TypeScript, React.js) and would love to discuss an engineering collaboration.

Let's schedule a time to chat.

Best regards,
[Your Name]`,
      },
    };
  }

  // 6. Projects Inquiry
  if (query.includes("project") || query.includes("swastrix") || query.includes("portfolio") || query.includes("work")) {
    return {
      reply: "Abhinav has built production cross-platform apps like Swastrix Healthcare (React Native & Expo), web apps like Movie Watchlist, and Chef Claude. Here is a collaboration draft:",
      draft: {
        subject: "Inquiry Regarding Your Projects & Engineering Experience",
        body: `Hi Abhinav,

I explored your featured projects including Swastrix Healthcare and wanted to connect regarding your app engineering capabilities.

Let's discuss how we can work together.

Best regards,
[Your Name]`,
      },
    };
  }

  // Default: General custom prompt drafting
  const cleanSubject = userInput.length > 35 ? `${userInput.slice(0, 35)}...` : userInput;
  return {
    reply: "I've drafted a customized email based on your prompt. Click below to open in Gmail:",
    draft: {
      subject: `Inquiry for Abhinav Dayal: ${cleanSubject}`,
      body: `Hi Abhinav,

I'm reaching out regarding:
"${userInput}"

I'd appreciate the opportunity to connect with you to discuss this further.

Best regards,
[Your Name]
[Your Email / Contact Information]`,
    },
  };
}

export function getGmailUrl(draft: EmailDraft, toEmail = "abhinavxdayal@gmail.com"): string {
  const su = encodeURIComponent(draft.subject);
  const body = encodeURIComponent(draft.body);
  return `https://mail.google.com/mail/?view=cm&fs=1&to=${toEmail}&su=${su}&body=${body}`;
}
