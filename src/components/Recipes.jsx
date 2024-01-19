import { Link } from "react-router-dom";

export default function Recipes({ item, ...props }) {
  const fromTop = () => {
    let page = window.scroll({
      top: 0,
      left: 0,
    });
    return page;
  };
  return (
    <>
      <li className="" {...props}>
        <Link onClick={() => fromTop()} to={`/recipe/${item.id}`}>
          <img
            className="w-[800px]  border-[1px] shadow-[5px_5px_0px_0px] hover:shadow-[0.5px_0.5px_0px_0px_#171796]   border-black "
            src={item.img}
            alt={item.name}
          />
          <p className="font-bold  text-2xl text-white">{item.name}</p>
        </Link>
      </li>
    </>
  );
}
