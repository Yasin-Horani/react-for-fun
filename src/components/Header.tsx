
import './styles/Header.css';

type HeaderParams = {
  title: string;
};

function Header({ title }: HeaderParams) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
