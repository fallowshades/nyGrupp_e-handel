import { useNavigate } from "react-router-dom";

const SearchItem = ({ imgSrc, imgAlt, title, id }) => {
  const navigate = useNavigate();

  function handleRedirect(id) {
    navigate(`/productid/${id}`);
  }

  return (
    <div
      className="bg-white flex items-center my-2 p-2 rounded-md hover:cursor-pointer"
      onClick={() => handleRedirect(id)}
    >
      <div className="flex items-center w-full justify-between">
        <p className="text-lg font-medium">{title}</p>
        <img
          src={imgSrc}
          alt={imgAlt}
          className="w-12 h-12 object-cover rounded-md ml-4"
        />
      </div>
    </div>
  );
};

export default SearchItem;
