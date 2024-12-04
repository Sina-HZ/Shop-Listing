interface HeaderProps {
  title: string;
  left?: JSX.Element;
  right?: JSX.Element;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header>
      <div className="flex justify-between items-center">
        {left}
        <h1>{title}</h1>
        {right}
      </div>
    </header>
  );
};

export default Header;
