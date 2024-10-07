import { useSelector } from 'react-redux';
import { MenuOption } from '../../types/menuOptions';
import { Footer } from '..//footer/footer';
import { Header } from '..//header/header';

import { Menu } from '../menu/menu';
import { Router } from '../router/router';
import { RootState } from '../../store/store';
import LanguageSwitcher from '../languageSwitcher/languageSwitcher';

export function App() {
  const { language } = useSelector((state: RootState) => state.languageState);

  const menuOptions: MenuOption[] = [
    { label: language === 'spanish' ? 'Inicio' : 'Home', path: '/' },
    {
      label: language === 'spanish' ? 'Mis Proyectos' : 'My Projects',
      path: '/projects',
    },
  ];

  return (
    <>
      <LanguageSwitcher></LanguageSwitcher>
      <Header>
        <Menu options={menuOptions}></Menu>
      </Header>
      <Router></Router>
      <Footer></Footer>
    </>
  );
}
