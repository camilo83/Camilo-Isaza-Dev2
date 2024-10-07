import { Link } from 'react-router-dom';
import { MenuOption } from '../../types/menuOptions';
import './menu.scss';
import { ReactNode } from 'react';

type Props = {
  readonly options: MenuOption[];
  children?: ReactNode;
};
export function Menu({ options }: Props) {
  return (
    <nav>
      <ul>
        {options.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
