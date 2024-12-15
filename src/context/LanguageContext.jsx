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
      description: "I’m Ahmet Tarık. I’m a full-stack developer. I can craft solid and scalable frontend products. Let’s meet!",
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
        "I am a professional advancing my career in software development. I have successfully completed the frontend module of the Workintech program and am progressing towards becoming a full-stack developer. Currently, I am working on a TÜBİTAK project, honing my problem-solving skills and actively contributing to teamwork. Continuous learning and self-improvement are my top priorities in my career journey.",
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
      description: "Ben Ahmet Tarık. Ben tam kapsamlı bir geliştiriciyim. Sağlam ve ölçeklenebilir frontend ürünler üretebilirim. Hadi tanışalım!",
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
        "Kariyerimi yazılım geliştirme alanında ilerleten bir profesyonelim. Workintech programının frontend modülünü başarıyla tamamladım ve full-stack geliştirici olma yolunda ilerliyorum. Şu anda bir TÜBİTAK projesi üzerinde çalışıyorum, problem çözme becerilerimi geliştiriyorum ve ekip çalışmasına aktif olarak katkıda bulunuyorum. Kariyer yolculuğumda sürekli öğrenme ve kendimi geliştirme en önemli önceliklerimdir.",
        randomJokes: "Rastgele Şakalar",
        randomJokesDescription:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam aut, odit laborum aliquam voluptatum nisi mollitia.",
          areYouBored: "Sıkıldın mı ???",
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
