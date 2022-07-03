import PHolder from './PHolder';
export default function MainContent(props) {
  const interests = [
    {
      id: 1,
      title: 'Rust programing',
      story: 'Rust is a safe programing language',
      width: 100,
      height: 100,
    },
    {
      id: 2,
      title: 'Javascript programing',
      story: 'Javascript is a dynamic programing language',
      width: 100,
      height: 100,
    },
    {
      id: 3,
      title: 'Erlang programing',
      story: 'Erlang is a process orinted programing language',
      width: 100,
      height: 100,
    },
  ];
  return (
    <div className="m-auto w-11/12 md:w-3/4">
      <h1 className="my-2 font-extrabold">My Interests</h1>
      <div className="grid grid-cols-1 md:grid-cols-4">
        {interests.map((item) => (
          <Interests
            key={item.id}
            width={item.width}
            height={item.height}
            title={item.title}
            story={item.story}
          />
        ))}
      </div>
    </div>
  );
}

function Interests(props) {
  return (
    <div className="ml-2 mt-0 mb-10 border-b">
      <PHolder className="mb-0" width={props.width} height={props.height} />
      <h3 className="mt-0 font-bold">{props.title}</h3>
      <p className="p-1">{props.story}</p>
    </div>
  );
}
