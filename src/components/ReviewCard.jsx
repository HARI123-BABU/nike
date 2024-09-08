import star from "../assets/icons/star.svg";
const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <img
        src={imgURL}
        className="rounded-full object-cover w-[120px] h-[120px]"
        alt="customer"
      />
      <p className="mt-6  max-w-sm text-center info-text">{feedback}</p>
      <div className="mt-6 flex justify-center items-center">
        <img
          src={star}
          alt=""
          width={24}
          height={24}
          className="object-contain m-0"
        />
        <p className="text-xl text-montserrat text-slate-gray">({rating})</p>
      </div>
      <h3 className="mt-1 text-palanquin font-bold text-3xl text-center">
        {customerName}
      </h3>
    </div>
  );
};

export default ReviewCard;
