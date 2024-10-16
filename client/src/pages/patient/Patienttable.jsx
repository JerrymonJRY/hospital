import React from "react";
import { Link } from "react-router-dom";

export const  Patienttable =() =>{

    return (
        <>
         <h4 className="py-3 mb-4"><span className="text-muted fw-light">Tables /</span> Patient Tables</h4>
         <div className="card">
              
         <div className="d-flex justify-content-between">
                    <div>
                    <h5 className="card-header">Table Basic</h5>
                    </div>
                    <div className="p-3 mb-4 ">
                    <Link to='/layout/add-patient'><button aria-label='Click me'
                                type="button"
                                className="btn btn-primary"
                              
                                data-bs-offset="0,4"
                                data-bs-placement="right"
                                data-bs-html="true"
                               >
                                Add Patient
                            </button></Link>
                    </div>
                </div>
               
                <div className="table-responsive text-nowrap">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Patient Regno</th>
                                <th>Patient Name</th>
                                <th>Mobile</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="table-border-bottom-0">
                            <tr>
                                <td>
                                    <i className="bx bxl-angular bx-sm text-danger me-3"></i>
                                    <span className="fw-medium">Angular Project</span>
                                </td>
                                <td>Albert Cook</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-primary me-1">Active</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-1"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-1"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-react bx-sm text-info me-3"></i> <span className="fw-medium">React Project</span>
                                </td>
                                <td>Barry Hunter</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-success me-1">Completed</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-vuejs bx-sm text-success me-3"></i>
                                    <span className="fw-medium">VueJs Project</span>
                                </td>
                                <td>Trevor Baker</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-info me-1">Scheduled</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <i className="bx bxl-bootstrap bx-sm text-primary me-3"></i>
                                    <span className="fw-medium">Bootstrap Project</span>
                                </td>
                                <td>Jerry Milton</td>
                                <td>
                                    <ul className="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Lilian Fuller">
                                            <img aria-label='table image' src="../assets/img/avatars/5.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Sophia Wilkerson">
                                            <img aria-label='table image' src="../assets/img/avatars/6.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                        <li
                                            data-bs-toggle="tooltip"
                                            data-popup="tooltip-custom"
                                            data-bs-placement="top"
                                            className="avatar avatar-xs pull-up"
                                            title="Christina Parker">
                                            <img aria-label='table image' src="../assets/img/avatars/7.png" alt="Avatar" className="rounded-circle" />
                                        </li>
                                    </ul>
                                </td>
                                <td><span className="badge bg-label-warning me-1">Pending</span></td>
                                <td>
                                    <div className="dropdown">
                                        <button aria-label='Click me' type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                            <i className="bx bx-dots-vertical-rounded"></i>
                                        </button>
                                        <div className="dropdown-menu">
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-edit-alt me-2"></i> Edit</a
                                            >
                                            <a aria-label="dropdown action option" className="dropdown-item" href="#"
                                            ><i className="bx bx-trash me-2"></i> Delete</a
                                            >
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )

}