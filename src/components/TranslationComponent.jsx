import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext'; // useLanguage hook'unu import et

// Dil dosyasını yüklemek için bir fonksiyon
const loadTranslation = (lang) => {
  return fetch(`/translations/${lang}.json`)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Çeviri dosyası yüklenemedi.');
      }
      return res.json();
    })
    .catch((err) => {
      console.error('Dil dosyası yüklenemedi:', err);
      return {}; // Hata durumunda boş bir obje döner
    });
};

const TranslationComponent = () => {
  const { language, changeLanguage } = useLanguage(); // Dil bilgisini ve değişim fonksiyonunu alıyoruz
  const [translation, setTranslation] = useState({});

  useEffect(() => {
    loadTranslation(language).then((data) => {
      setTranslation(data); // Yüklenen çeviriyi state'e set ediyoruz
    });
  }, [language]); // Dil değiştikçe çeviriyi tekrar yükle

  // Dil değişim fonksiyonu
  const toggleLanguage = () => {
    // Eğer dil İngilizce ise, Türkçeye geçsin, Türkçeyse İngilizceye geçsin
    changeLanguage(language === 'en' ? 'tr' : 'en');
  };

  return (
    <div className="translation-container">
      <div className="text">
        <h1>{translation.greeting || 'Loading...'}</h1>
        <button className="language-button" onClick={toggleLanguage}>
          {language === 'en' ? 'Türkçeye Geç' : 'English'}
        </button>
      </div>

      <div className="image">
        <img src="https://via.placeholder.com/150" alt="Profile" />
      </div>

      {/* Ekstra bilgi ve linkler kısmı */}
      
      <div className="extra-info">
        <p>
          {language === 'en' 
            ? <>
                I am currently freelancing in <a href="https://example.com/ux" target="_blank" rel="noopener noreferrer">UX</a>, 
                <a href="https://example.com/ui" target="_blank" rel="noopener noreferrer">UI</a>, and 
                <a href="https://example.com/web-design" target="_blank" rel="noopener noreferrer">Web Design</a> projects. 
                Feel free to invite me to join your team - <a href="mailto:pratamaiosi@gmail.com">pratamaiosi@gmail.com</a>
              </>
            : <>
                Şu anda <a href="https://example.com/ux" target="_blank" rel="noopener noreferrer">UX</a>, 
                <a href="https://example.com/ui" target="_blank" rel="noopener noreferrer">UI</a>, ve 
                <a href="https://example.com/web-design" target="_blank" rel="noopener noreferrer">Web Tasarım</a> projelerinde serbest çalışıyorum. 
                Beni ekibinize katılmaya davet edin - <a href="mailto:pratamaiosi@gmail.com">pratamaiosi@gmail.com</a>
              </>
          }
        </p>
      </div>
    </div>
  );
};

export default TranslationComponent;

