interface HeaderProps {
  title: string;
  left?: JSX.Element;
  right?: JSX.Element;
}

const Header = ({ title, left, right }: HeaderProps) => {
  return (
    <header className="h-24 bg-orange-500 px-4 sticky top-0">
      <div className="flex justify-between items-center h-full">
        {left}
        <div className="flex-1 flex justify-center">
          <h1>{title}</h1>
        </div>
        {right}
      </div>
    </header>
  );
};

export default Header;
