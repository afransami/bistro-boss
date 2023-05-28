import FoodCard from "../../FoodCard/FoodCard";


// TODO: implement pagination here on this page
const OrderTab = ({items}) => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mb-10'>
        {
            items.map(item =><FoodCard
            key={item._id}
            item={item}
            ></FoodCard>
        )}
        </div>
    );
};

export default OrderTab;