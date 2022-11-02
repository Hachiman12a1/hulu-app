export default function SimpleCard({ title, children }) {
  return (
    <div className="group">
      <h5 className="text-center p-2 text-xl hover:text-blue-500 font-bold cursor-pointer">{title}</h5>
      <div className="text-center">{children}</div>
    </div>
  );
}
