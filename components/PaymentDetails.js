export default function PaymentDetails() {
  return (
    <div id="payment" className="authorsContainer">
      <h1 className="text-center">
        <b>PAYMENT DETAILS</b>
      </h1>
      <div className="row my-4">
        <a href="https://rzp.io/l/ICCCSP23" target="_blank" rel="noopener noreferrer" className="btn btn-primary col-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 col-xl-4 offset-xl-0 text-decoration-none text-white">
          Pay Now
        </a>
      </div>
      <h4 style={{ textAlign: 'left', margin: '40px 0px 20px 0px' }}>
        INSTRUCTIONS TO PARTICIPANT:
      </h4>
      <p>
        ICCCSP 2023 conference will be held in the hybrid mode (both physical
        and on-line). The authors of accepted papers from Tamil Nadu will have
        to present their papers in physical mode in SSN Campus.
      </p>

      <ul style={{ fontSize: '20px', marginTop: '20px' }}>
        <li>
          Registration is mandatory for at least one author per paper. If a
          participant presents more than one paper, each paper must be
          registered.
        </li>
        <li>
          Each registration entitles only one person to attend the conference.
        </li>
        <li>
          Registration fee includes admission to all the technical sessions,
          conference kit, certificate of presentation, lunch, dinner and high
          tea during the conference.
        </li>
        <li>
          The publication charges cover the editorial administration and
          publisher charge. If a participant has more than one paper accepted
          for publication, the publication fee of each paper must be paid.
        </li>
        <li>
          The participant is required to make payment before filling up the
          registration form.
        </li>
        <li>
          Upload transaction proof in registration form. Fees once paid can not
          be refunded.
        </li>
      </ul>
    </div>
  );
}
