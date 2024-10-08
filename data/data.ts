const currentYear = new Date().getFullYear();
const data = {
    sitename: "Innovation Hongtai Technology",
    sitetagline: "Something great is on the way! ✨ 🔥",
    siteurl: "https://hongtai.co.id",
    sitelogo: "",
    title: "Coming Soon!",
    description: "We&apos;re currently working 👨‍💻 hard to bring you something great, and we can&apos;t wait to share it with you 📅.",
    newsletterheading: "Stay tuned for our live updates!",
    copyrightText: `Copyright © ${currentYear} | PT. Innovation Hongtai Technology`,
    socialIconsHeading: "Follow Us 📣",
    hideSubscribeForm: false, // make true to disable subscription form 
    socialIcons: [
        {
            icon: "facebook",
            link: "",
        },
        {
            icon: "instagram",
            link: "",
        },
        {
            icon: "linkedIn",
            link: "",
        },
    ],
    hide :{
        subscribeForm: false, // make true to disable subscription form         
        header: false,
        content: false,
        footer: false,
    }
}

export default data;
