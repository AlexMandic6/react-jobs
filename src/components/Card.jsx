/* eslint-disable react/prop-types */
const Card = ({ children, bg = "bg-gray-100" }) => {
	return <div className={`p-6 ${bg} rounded-lg shadow-md`}>{children}</div>;
};
export default Card;
