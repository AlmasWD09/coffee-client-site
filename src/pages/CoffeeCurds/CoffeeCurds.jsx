import Swal from "sweetalert2";
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";





const CoffeeCurds = ({ coffee,coffees,setCoffees }) => {

    const { _id, name, quantity, supplier, taste, photo } = coffee;

    const handleDelete = D => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://coffee-server-site-ruby.vercel.app/coffees/${D}`,{
                    method:'DELETE',
                   })
                   .then(res=>res.json())
                   .then(data=>{
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                          });
                    }
                    const remainging = coffees.filter(cof => cof._id !== D)
                    setCoffees(remainging)
                   })
            }
          });

     
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} alt="Movie" /></figure>
            <div className="flex justify-between w-full pr-4">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>{quantity}</p>
                    <p>{supplier}</p>
                    <p>{taste}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn">View</button>
                        <Link to={`/updateCoffee/${_id}`}>
                    <button className="btn">Update</button>
                    </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-orange-500">X</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// props validation
CoffeeCurds.propTypes = {
    coffee: PropTypes.object,
    coffees: PropTypes.object,
    setCoffees: PropTypes.func.isRequired
 }
export default CoffeeCurds;