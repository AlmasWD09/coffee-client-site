import AddCoffeeFrom from "../../Form/AddCoffeeFrom/AddCoffeeFrom";


const AddCoffee = () => {
    return (
        <div className=" max-w-7xl mx-auto bg-emerald-200 py-5 px-8 rounded mt-10">
           <div className="w-3/4 mx-auto text-center space-y-2">
           <h1 className="text-2xl font-semibold">Add New Coffee</h1>
           <p className="lg:w-3/4 mx-auto">For a true adventure, delve into the world of single-origin coffees. Ethiopian Yirgacheffe offers bright citrus notes, while Sumatran Mandheling boasts an earthy, full-bodied flavor.</p>
           </div>
           <AddCoffeeFrom />
        </div>
    );
};

export default AddCoffee;