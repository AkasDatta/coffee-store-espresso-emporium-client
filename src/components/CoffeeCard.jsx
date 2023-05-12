import Swal from "sweetalert2";

const CoffeeCard = ({coffee}) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = _id =>{
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire(
            //     'Deleted!',
            //     'Your file has been deleted.',
            //     'success'
            //   )

            console.log('delete confirm')
            }
          })
    }
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie"/></figure>
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
                            <button className="btn">Edit</button>
                            <button
                            onClick={() => handleDelete(_id)} className="btn bg-orange-600">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;