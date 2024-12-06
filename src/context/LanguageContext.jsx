import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext();

export const useLanguage = () => useContext(LanguageContext);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("en");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "tr" : "en"));
  };

  const texts = {
    en: {
      greeting: "Hi! 👋",
      description: "I’m Almila. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
      freelance: "Currently Freelancing for UX, UI, & Web Design Projects.",
      invite: "Invite me to join your team ->",
      skillsTitle: "My Skills",
      basicInfo: "Basic Information",
      birthdate: "Birthdate",
      city: "City of Residence",
      education: "Education",
      preferredRole: "Preferred Role",
      aboutMe: "About Me",
      aboutMeDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        areYouBored: "Are you bored?",
    areYouBoredDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
    react: "React",
    redux: "Redux",
    vercel: "Vercel",
    axios: "Axios",
    router: "Router",
    randomJokes: "Random Jokes",
    github:"View on Github",
    goToApp:"Go to app",
    randomJokesDescription:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",

      },
    tr: {
      greeting: "Merhaba 👋",
      description: "Ben Almila. Ben tam kapsamlı bir geliştiriciyim. Sağlam ve ölçeklenebilir ön uç ürünler üretebilirim. Hadi tanışalım!",
      freelance: "Şu anda UX, UI ve Web Tasarım Projeleri için çalışıyorum.",
      invite: "Beni ekibinize katılmaya davet edin ->",
      skillsTitle: "Yeteneklerim",
      basicInfo: "Temel Bilgiler",
      birthdate: "Doğum Tarihi",
      city: "İkamet Şehri",
      education: "Eğitim Durumu",
      preferredRole: "Tercih Ettiği Rol",
      aboutMe: "Hakkımda",
      aboutMeDescription:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia. Mnima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
        randomJokes: "Rastgele Şakalar",
        randomJokesDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          areYouBored: "Sıkıldın mı?",
          areYouBoredDescription:
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia minima accusamus ratione soluta aperiam sit voluptate? Dicta quod deserunt quam temporibus cumque magnam!",
          react: "React",
          goToApp:"app'e git",
          redux: "Redux",
          vercel: "Vercel",
          axios: "Axios",
          router: "Router",
          github:"Github'da görüntüle",
      },
  };
  

  return (
    <LanguageContext.Provider value={{ language, texts, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
