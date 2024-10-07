import './header.scss';

type Props = {
  readonly children: JSX.Element;
};

export function Header({ children }: Props) {
  return (
    <>
      <header>
        <h1>Curriculum Camilo Isaza Gómez</h1>
        {children}
      </header>
    </>
  );
}
