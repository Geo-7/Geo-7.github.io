import PHolder from './PHolder';
export default function MainPhoto(props) {
  return (
    <div className="h-96 mx-auto w-11/12 md:w-3/4 border-solid border border-black">
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3">
        <PHolder className="" width="50" />
        <PHolder className="" />
        <PHolder className="" />
        <PHolder className="" />
        <PHolder className="" />
        <PHolder className="" />
      </div>
    </div>
  );
}
