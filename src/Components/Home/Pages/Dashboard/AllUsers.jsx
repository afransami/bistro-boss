import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import { Helmet } from "react-helmet";
import { FaTrashAlt } from "react-icons/fa";
import { MdAdminPanelSettings } from "react-icons/md";
import { AuthContext } from "../../../../Provider/AuthProvider";

const AllUsers = () => {
    const {user}= useContext(AuthContext)
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await fetch("https://localhost:5000/users");
    return res.json();
  });

  const handleDelete =()=>{

  }

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro Boss | All users</title>
      </Helmet>
      

      <div class="overflow-x-auto mx-10 w-full">
      <p>Total User:{users.length}</p> 
  <table class="table table-zebra w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
        {
            users.map((user, index)=><tr key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.role === 'admin' ? "admin" : <MdAdminPanelSettings></MdAdminPanelSettings>}</td>
            <td><button onClick={()=>handleDelete(user)} className="btn btn-ghost bg-yellow-600 text-white btn-xs w-12 h-12 text-2xl">
                    <FaTrashAlt></FaTrashAlt>
                  </button> </td>
          </tr>)
        }
      {/* <!-- row 1 --> */}
      
    </tbody>
  </table>
</div>
    </div>
  );
};

export default AllUsers;
