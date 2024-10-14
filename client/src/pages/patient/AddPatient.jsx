import React from "react";
import { Link } from "react-router-dom";


export const AddPatient =() =>{

    return (
        <>
         <h4 className="py-3 mb-4"><span className="text-muted fw-light">Forms /</span>Add Patient</h4>
         <div className="row">
            <div className="col-md-12">
              <div className="card mb-4">
                     <h5 className="card-header">Add Patient</h5>
                     <div className="card-body">
                        <div className="row">
                            <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Select Location</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            </div>
                            <div className="col-md-2">
                                 <div className="mb-3">
                                 <label htmlFor="defaultFormControlInput" className="form-label">Reg No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
                                </div>
                            </div>
                            <div className="col-md-2">
                              <div className="mb-3">
                              <label htmlFor="defaultFormControlInput" className="form-label">Time</label>
                                <input
                                    type="time"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
                                </div>
                            </div>
                            <div className="col-md-3">
                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">User Created</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
                            </div>
                            <div className="col-md-2">
                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
                            </div>
                        </div>
                        <div className="row">
                        <h5 className="card-header">Patient Details</h5>
                            <div className="col-md-3">
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Title</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Gender</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Patient Class</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Marital Status</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Religion</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Ethinic Group</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Pref Language</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">Male</option>
                                    <option value="2">Female</option>
                                   
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Date of Birth</label>
                               <input type="date" className="form-control" />
                            </div>
                            </div>
                            <div className="col-md-3">
                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Father Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Nationality</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Occupation</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Email Id</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Address</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Country</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Landline</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
                            </div>
                            <div className="col-md-3">
                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Middle Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>

<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">M.R.No</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>

<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Passport Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Education</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Region</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">City</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Primary</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Secondary</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
                            </div>
                            
                            <div className="col-md-3">
                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>

                            <div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Last Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Last Name</label>
                            <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>VIP</option>
                                    <option value="1">Demo Patient</option>
                                    <option value="2">Family Member</option>
                                   
                                </select>          
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Mobile Number</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Income</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Resident Id</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Status</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>
<div className="mb-3">
                            <label htmlFor="defaultFormControlInput" className="form-label">Date</label>
                                <input
                                    type="date"
                                    className="form-control"
                                    id="defaultFormControlInput"
                                    placeholder="John Doe"
                                    aria-describedby="defaultFormControlHelp" />
</div>

                            </div>

                        </div>

                        <div className="row">
                        <h5 className="card-header">Other Details</h5>
                        <div className="col-md-7">
                        <div className="nav-align-top mb-4">
                        <ul className="nav nav-pills mb-3" role="tablist">
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link active"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-home"
                                    aria-controls="navs-pills-top-home"
                                    aria-selected="true">
                                    Appointment
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-profile"
                                    aria-controls="navs-pills-top-profile"
                                    aria-selected="false">
                                    Guardian
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-messages"
                                    aria-controls="navs-pills-top-messages"
                                    aria-selected="false">
                                    Refferal
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-messages"
                                    aria-controls="navs-pills-top-messages"
                                    aria-selected="false">
                                    Others
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-messages"
                                    aria-controls="navs-pills-top-messages"
                                    aria-selected="false">
                                    Resident Id
                                </button>
                            </li>
                            <li className="nav-item">
                                <button aria-label='Click me'
                                    type="button"
                                    className="nav-link"
                                    role="tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#navs-pills-top-messages"
                                    aria-controls="navs-pills-top-messages"
                                    aria-selected="false">
                                    Next of Kin
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content">
                            <div className="tab-pane fade show active" id="navs-pills-top-home" role="tabpanel">
                                <p>
                                    Icing pastry pudding oat cake. Lemon drops cotton candy caramels cake caramels sesame snaps
                                    powder. Bear claw candy topping.
                                </p>
                                <p className="mb-0">
                                    Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer carrot cake jelly. Bonbon
                                    jelly-o jelly-o ice cream jelly beans candy canes cake bonbon. Cookie jelly beans marshmallow
                                    jujubes sweet.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-top-profile" role="tabpanel">
                                <p>
                                    Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie wafer candy oat cake ice
                                    cream. Gummies halvah tootsie roll muffin biscuit icing dessert gingerbread. Pastry ice cream
                                    cheesecake fruitcake.
                                </p>
                                <p className="mb-0">
                                    Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin muffin pie tiramisu halvah
                                    cotton candy liquorice caramels.
                                </p>
                            </div>
                            <div className="tab-pane fade" id="navs-pills-top-messages" role="tabpanel">
                                <p>
                                    Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly beans macaroon gummies
                                    cupcake gummi bears cake chocolate.
                                </p>
                                <p className="mb-0">
                                    Cake chocolate bar cotton candy apple pie tootsie roll ice cream apple pie brownie cake. Sweet
                                    roll icing sesame snaps caramels danish toffee. Brownie biscuit dessert dessert. Pudding jelly
                                    jelly-o tart brownie jelly.
                                </p>
                            </div>
                        </div>
                    </div>
                        </div>
                        <div className="col-md-5">
                        <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Payment Mode</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Self Pay</option>
                                    <option value="1">Insurance</option>
                                    <option value="2">Company</option>
                                   
                                </select>
                            </div>

                            <div className="mb-3">
                                <label htmlFor="exampleFormControlSelect1"  className="form-label">Medical Tourisum Type</label>
                                <select className="form-select" id="exampleFormControlSelect1" defaultValue="" aria-label="Default select example">
                                    <option selected>Resident</option>
                                    <option value="1">Visitor</option>
                                   
                                   
                                </select>
                            </div>
                        </div>
                        </div>
                        <div className="row">
                        <button aria-label='Click me' type="submit" className="btn btn-primary btn-md">Submit </button>
                        </div>
                     </div>
                </div>
            </div>
         </div>
        </>
    )
}