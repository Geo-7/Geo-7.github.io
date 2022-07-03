export default function PHolder(props) {
  var randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
  const width = !props.width
    ? Math.floor(Math.random() * 100) + 50
    : props.width;
  const height = !props.height
    ? Math.floor(Math.random() * 100) + 50
    : props.height;
  return (
    <>
      <svg className="m-0 p-0">
        <rect fill={randomColor} width={width} height={height} />
      </svg>
    </>
  );
}
