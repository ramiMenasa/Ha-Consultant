import { Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
import Home from "../pages/Home";

function Hero({nameHero}) {
  return (
    <>
      <div className="bg-transparent">
        <div className="d-flex flex-column align-items-center text-light p-5">
          <h1 className="">{nameHero}</h1>
          <Breadcrumb className=" fs-5 fw-semibold ">
            <Link  className=" text-decoration-none link-opacity-50-hover link-light" to={'/'}>Home </Link>
            <Breadcrumb.Item className="text-light text-decoration-none" active> &nbsp; / &nbsp;{nameHero}</Breadcrumb.Item>
          </Breadcrumb>
        </div>
      </div>
    </>
  );
}

export default Hero;
