export default class StepTwo extends Component {
  constructor() {
    super();
    this.state = {
      img: ""
    };
  }

  createListing() {
    const {
      name,
      address,
      city,
      state,
      zipcode,
      img,
      mortgage,
      rent
    } = this.state;
    axios
      .post("/api/house", {
        name,
        address,
        city,
        state,
        zipcode,
        img,
        mortgage,
        rent
      })
      .then(() => <Link to="/" />);
  }

  render() {
    return (
      <div>
        <h1>Wizard</h1>
        <input type="text" placeholder="Enter Your Name" />
        <input type="text" placeholder="Address" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="number" placeholder="Zipcode" />
        <button>Cancel</button>
      </div>
    );
  }
}
