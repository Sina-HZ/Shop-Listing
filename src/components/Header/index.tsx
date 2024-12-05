interface HeaderProps {
  title: string;
  left?: JSX.Element;
  right?: JSX.Element;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className="sticky top-0 h-24 bg-orange-500 px-4">
      <div className="flex h-full items-center justify-between">
        {left}
        <div className="flex flex-1 justify-center">
          <h1>{title}</h1>
        </div>
        {right}
      </div>
    </header>
  );
};

export default Header;
