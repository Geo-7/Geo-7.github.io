import george from '../images/George.svg';
export default function NavBar(props) {
  return (
    <nav className="flex justify-center align-middle border-b-2">
      <img src={george} width="200rem" alt="Me" />
      <p className="mt-auto">Hi, I'm Amir</p>
    </nav>
  );
}
