import { useLoaderData } from "react-router-dom";
import CoffeeCurds from "../CoffeeCurds/CoffeeCurds";
import { useState } from "react";


const Home = () => {
    const loadedCoffees = useLoaderData()
    const [coffees,setCoffees] = useState(loadedCoffees)

    return (
        <div>
            <h1 className="font-bold text-center text-emerald-600 text-2xl my-10">hot hot cold coffee:{coffees.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 px-8">
                {coffees?.map(coffee =><CoffeeCurds
                key={coffee._id}
                coffee = {coffee}
                coffees={coffees}
                setCoffees={setCoffees}
                ></CoffeeCurds>)}
            </div>
        </div>
    );
};

export default Home;