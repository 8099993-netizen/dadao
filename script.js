const translations = {
  en: {
    skip: "Skip to main content",
    navServices: "Services",
    navProcess: "Process",
    navFaq: "FAQ",
    navContact: "Contact",
    eyebrow: "Software guidance · Account security · Workflow consulting",
    heroLine1: "Make software easier to use,",
    heroLine2: "and account management more secure.",
    heroCopy: "Software guidance, account setup and security advice, and day-to-day workflow consulting for individuals, small teams and studios. We first understand your needs, then confirm the service scope, fee and estimated time.",
    tgContact: "Chat on Telegram",
    viewServices: "View services",
    trust1Title: "Who we help",
    trust1Text: "Individuals and small teams",
    trust2Title: "How we help",
    trust2Text: "Written or remote guidance",
    trust3Title: "Before we begin",
    trust3Text: "Scope, fee and timing confirmed",
    introKicker: "Our focus",
    introTitle: "Clear steps make software and account management easier.",
    introCopy: "Whether you are new to the software or want to improve your current account management, we provide clear guidance based on your situation. From basic setup and feature use to everyday workflow organization, each step is easier to understand and follow.",
    servicesKicker: "Services",
    servicesTitle: "Practical guidance for real-world needs",
    servicesLead: "For individuals, small teams and studios seeking clear explanations, practical steps and follow-up support in Chinese.",
    service1Title: "Software use and setup guidance",
    service1Text: "Guidance on installation, basic setup, common features and troubleshooting based on your device, system and goals.",
    service1A: "Installation and basic setup",
    service1B: "Common error troubleshooting",
    service1C: "Feature and operation walkthroughs",
    service2Title: "Account setup and security consulting",
    service2Text: "Help understanding official registration, profile settings, security options, verification methods and appeal entry points.",
    service2A: "Official process walkthroughs",
    service2B: "Password and 2FA advice",
    service2C: "Approaches to unusual account issues",
    service3Title: "Workflow improvement for individuals and studios",
    service3Text: "Help organizing tool roles, records, account permissions and daily processes around your actual work scenario.",
    service3A: "Daily operating steps",
    service3B: "Team access and handover advice",
    service3C: "Data management and security reminders",
    processKicker: "How it works",
    processTitle: "Clarify the service before we begin",
    processLead: "The service scope, fee and estimated time are confirmed in advance. For third-party platforms, outcomes remain subject to platform rules and review.",
    step1Title: "Describe your needs",
    step1Text: "Tell us the platform, device, goal and issue you are experiencing.",
    step2Title: "Confirm the approach",
    step2Text: "We explain how we can help, the service scope and important considerations.",
    step3Title: "Confirm the fee",
    step3Text: "We begin after both sides confirm the price, estimated time and delivery method.",
    step4Title: "Delivery and follow-up",
    step4Text: "We provide the agreed guidance and answer related questions within the service scope.",
    faqKicker: "FAQ",
    faqTitle: "Questions before contacting",
    faq1Q: "Can you guarantee registration, review or appeal success?",
    faq1A: "No. Third-party platforms make their own decisions. We can explain official processes, check common issues and help organize required information, but we cannot guarantee an outcome.",
    faq2Q: "How are the price and timeframe determined?",
    faq2A: "They depend on the issue type, complexity and service method. Before we begin, we explain the scope, fee, estimated time and refund terms in writing. Work starts after your confirmation.",
    faq3Q: "Do I need to provide my password or verification code?",
    faq3A: "Usually not. Do not send passwords, verification codes, private keys or complete payment information. We prefer screenshots, redacted information or remote guidance where you remain in control.",
    faq4Q: "How do follow-up support and refunds work?",
    faq4A: "We explain the service scope before work and provide follow-up support as agreed. Services that have not started may be cancelled. Started or delivered digital services are assessed based on unfinished work and actual effort. See the Refund Policy for details.",
    contactKicker: "Start a conversation",
    contactTitle: "Describe your issue, then confirm the service plan.",
    contactLead: "Tell us the platform, device, goal and message you see. Do not send passwords, verification codes or unredacted identity documents.",
    tgService: "Telegram support",
    channel: "Official channel",
    waService: "WhatsApp support",
    messageUs: "Send a message",
    footerTagline: "Software guidance, account security and workflow consulting studio",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
    refund: "Refund Policy",
    rights: "All rights reserved."
  }
};

const translatable = document.querySelectorAll("[data-i18n]");
const languageButton = document.querySelector(".language-button");
const languageLabel = document.querySelector(".lang-current");
let language = "zh";
const original = {};

translatable.forEach((node, index) => {
  original[index] = node.textContent;
});

function setLanguage(next) {
  language = next;
  document.documentElement.lang = next === "en" ? "en" : "zh-CN";
  translatable.forEach((node, index) => {
    const key = node.dataset.i18n;
    node.textContent = next === "en" && translations.en[key] ? translations.en[key] : original[index];
  });
  if (languageLabel) languageLabel.textContent = next === "en" ? "EN" : "中文";
  if (languageButton) languageButton.setAttribute("aria-label", next === "en" ? "切换为中文" : "Switch to English");
}

languageButton?.addEventListener("click", () => setLanguage(language === "zh" ? "en" : "zh"));

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");

menuButton?.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav?.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton?.setAttribute("aria-expanded", "false");
}));

window.addEventListener("scroll", () => {
  document.querySelector(".site-header")?.classList.toggle("scrolled", window.scrollY > 18);
}, { passive: true });

document.getElementById("year").textContent = new Date().getFullYear();
