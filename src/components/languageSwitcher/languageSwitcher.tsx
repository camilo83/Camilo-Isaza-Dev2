import { useDispatch } from 'react-redux';
import './languageSwitcher.scss';
import { AppDispatch } from '../../store/store';
import { changeLanguage } from '../../slice/languageSlice';

export default function LanguageSwitcher() {
  const dispatch = useDispatch<AppDispatch>();

  function handleLanguageChange(language: 'english' | 'spanish') {
    dispatch(changeLanguage(language));
  }

  return (
    <div className="language">
      <button onClick={() => handleLanguageChange('english')}>
        <img src="/usa.png" alt="English Language" />
      </button>
      <button onClick={() => handleLanguageChange('spanish')}>
        <img src="/spain_flag.png" alt="Spanish Language" />
      </button>
    </div>
  );
}
