import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const loadedCoffees = useLoaderData()
    const {_id,name,quantity,support,teast,category,details,photo}  = loadedCoffees || {};
    const handleAddCoffee = (e) =>{
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const quantity = form.quantity.value;
        const support = form.support.value;
        const teast = form.teast.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const updateCoffee = {name,quantity,support,teast,category,details,photo}
        
        fetch(`http://localhost:5000/coffees/${_id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(updateCoffee)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.matchedCount > 0){
                Swal.fire({
                    title: 'Successfully!',
                    text: 'Added coffee success',
                    icon: 'success',
                    confirmButtonText: 'Go'
                  })
            }
            // e.target.reset()
        })

    }

    return (
       <div className="bg-sky-300 max-w-7xl mx-auto py-10">
         <div className="max-w-5xl mx-auto mt-10 ">
            <form onSubmit={handleAddCoffee}>
                <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-6">
                    <div className="w-full">
                        <p>Name</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="name" id="" defaultValue={name} placeholder="Enter coffee name" />
                    </div>
                    <div className="w-full">
                        <p>Quantity</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="number" name="quantity" id="" defaultValue={quantity} placeholder="Enter coffee quantity" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-6">
                    <div className="w-full">
                        <p>Support</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="support" id="" defaultValue={support} placeholder="Enter coffee support" />
                    </div>
                    <div className="w-full">
                        <p>Teast</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="teast" id="" defaultValue={teast} placeholder="Enter coffee teast" />
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-center md:justify-between md:gap-6">
                    <div className="w-full">
                        <p>Category</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="category" id="" defaultValue={category} placeholder="Enter coffee category" />
                    </div>
                    <div className="w-full">
                        <p>Details</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="text" name="details" id="" defaultValue={details} placeholder="Enter coffee details" />
                    </div>
                </div>
                {/* photo */}
                <div className="w-full">
                        <p>Photo</p>
                        <input className="w-full mb-3 p-4 border border-gray-300 rounded-lg outline-0" type="photo URL" name="photo" id="" defaultValue={photo} placeholder="Enter coffee photo" />
                    </div>

                {/* button add  */}
                <div>
                    <button type="submit" href="#_" className="w-full rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer  border-l-2 active:border-emerald-900 active:shadow-none shadow-lg bg-gradient-to-tr from-emerald-900 to-emerald-900 border-emerald-900 text-white">
                        <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
                        <span className="relative">Update Coffee</span>
                    </button>
                </div>
            </form>
        </div>
       </div>
    );
};

export default UpdateCoffee;