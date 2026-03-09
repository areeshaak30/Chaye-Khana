const MenuCard = ({ item }) => {
  return (
    <div className="bg-[#5E250F] rounded-2xl overflow-hidden transform transition-all duration-300 h-full flex flex-col">
      <div className="h-[250px] sm:h-[300px] md:h-[350px] lg:h-[340px] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover object-center"
          onError={(e) => {
            console.log("Image failed to load:", item.image);
            e.target.src =
              "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzY2NiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNoYWkgSW1hZ2U8L3RleHQ+PC9zdmc+";
          }}
        />
      </div>
      <div className="flex-1 p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3
            className="text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[30px] text-white mb-2 sm:mb-3 md:mb-4 leading-tight font-bold"
            style={{ fontFamily: "'Britannic', sans-serif" }}
          >
            {item.title}
          </h3>
          <p
            className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-white/90 mb-3 sm:mb-4 md:mb-6 leading-relaxed font-normal"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {item.description}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-0 sm:items-center sm:justify-between">
          <span
            className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-white font-bold"
            style={{ fontFamily: "'Lato', sans-serif" }}
          >
            {item.price}
          </span>
          <button
            className="bg-[#FFDDB0] text-[#5E250F] text-[11px] sm:text-[12px] md:text-[14px] lg:text-[16px] px-4 sm:px-6 md:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105 font-bold w-full md:w-[140px]"
            style={{ fontFamily: "'Britannic', sans-serif" }}
          >
            ORDER NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;
