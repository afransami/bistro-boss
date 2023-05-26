import FoodCard from "../../FoodCard/FoodCard";



const OrderTab = ({items}) => {
    return (
        <div className='grid lg:grid-cols-3 gap-8 mb-10'>
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