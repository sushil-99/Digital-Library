import { signOut } from "firebase/auth";
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { auth } from "../../firebase-config/firebaseConfig";

export const Header = () => {
    const { user } = useSelector((state) => state.user);

    const handleOnLogout = () => {
        signOut(auth)
            .then(() => {
                toast.success("logout successfully");
            })
            .catch((error) => toast.error(error.message));
    };
    return (
        <Navbar bg="none" expand="md border">
            <Container>
                <Navbar.Brand>
                    <Link to="/">DL</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto gap-4 fs-4">
                        <div className="nav-link">
                            Welcome {user.name}
                        </div>
                        <Link to="/" title="Home">
                            <i className="fa-solid fa-house"></i>
                        </Link>

                        {user?.uid ? (
                            <>
                                {user?.role === "admin" && (
                                     <Link to="/dashboard" title="dashboard">
                                <i class="fa-solid fa-book"></i>
                            </Link>
                                )}

                        <Link to="#" onClick={handleOnLogout}>
                            <i className="fa-solid fa-person-walking-arrow-right"></i>
                        </Link>
                    </>

                    ) : (
                    <>
                        {" "}
                        <Link to="/signup" title="Sign Up">
                            <i className="fa-solid fa-user-pen"></i>
                        </Link>
                        <Link to="/signin">
                            <i className="fa-solid fa-right-to-bracket"></i>
                        </Link>
                    </>
                        )}
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar >
    );
};
