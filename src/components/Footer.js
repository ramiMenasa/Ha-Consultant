

function Footer() {
    return ( <>
<footer className="bg-dark text-white py-4">
      <div className="container">
        <div className="d-flex   justify-content-between">
          <div className="col-4">
            <h5>Company Name</h5>
            <p>
              About the company: Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </p>
          </div>
          <div className="">
            <h5>Contact Information</h5>
            <p>Email: example@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
          <div className="">
            <h5>Address</h5>
            <p>123 Street Name</p>
            <p>City, State, ZIP</p>
          </div>
        </div>
      </div>
    </footer>
    </> );
}

export default Footer;