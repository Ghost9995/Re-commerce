import { useNavigate } from "react-router-dom";

export default function Card({image,description,title,price,category,id}) {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/products/'+id);
    };
  return (
    <div className="border-[2px] rounded-xl p-4 items-start border-black cursor-pointer flex flex-col gap-2">
        <div className="h-[200px] w-full">
            <img className="object-contain w-full h-full" src={image}/>
        </div>
        <h1 className="text-xl font-semibold text-slate-900 capitalize">
            {title}
        </h1>
        <h1 className="text-xl font-regular text-slate-900">
            {category}
        </h1>
        <p className="line-clamp-3 opacity-65">
            {description}
        </p>
        <p className="font-semibold text-2xl mt-auto">
            {price}$
        </p>
        <button onClick={handleClick} className="bg-black mt-auto text-white py-3 px-6 rounded-3xl border-[2px] border-black hover:bg-white hover:text-black">View Product</button>
    </div>
  );
};