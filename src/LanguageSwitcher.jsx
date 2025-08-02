import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => i18n.changeLanguage(lng);

  return (
    <div className="mt-4 space-x-2">
      <button onClick={() => changeLanguage('en')}>🇬🇧 English</button>
      <button onClick={() => changeLanguage('fr')}>🇫🇷 Français</button>
      <button onClick={() => changeLanguage('vi')}>🇻🇳 Tiếng Việt</button>
    </div>
  );
};

export default LanguageSwitcher;


