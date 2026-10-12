import React, { useState } from 'react';

const countries = [
  ['+971', 'UAE (+971)'],
  ['+966', 'Saudi Arabia (+966)'],
  ['+974', 'Qatar (+974)'],
  ['+968', 'Oman (+968)'],
  ['+973', 'Bahrain (+973)'],
  ['+965', 'Kuwait (+965)'],
  ['+91', 'India (+91)'],
  ['+92', 'Pakistan (+92)'],
  ['+880', 'Bangladesh (+880)'],
  ['+94', 'Sri Lanka (+94)'],
  ['+977', 'Nepal (+977)'],
  ['+63', 'Philippines (+63)'],
  ['+20', 'Egypt (+20)'],
  ['+44', 'United Kingdom (+44)'],
  ['+353', 'Ireland (+353)'],
  ['+1', 'United States / Canada (+1)'],
  ['+61', 'Australia (+61)'],
  ['+64', 'New Zealand (+64)'],
  ['+49', 'Germany (+49)'],
  ['+33', 'France (+33)'],
  ['+31', 'Netherlands (+31)'],
  ['+39', 'Italy (+39)'],
  ['+34', 'Spain (+34)'],
  ['+90', 'Türkiye (+90)'],
  ['+27', 'South Africa (+27)'],
  ['+234', 'Nigeria (+234)'],
  ['+254', 'Kenya (+254)'],
  ['+65', 'Singapore (+65)'],
  ['+60', 'Malaysia (+60)'],
  ['+62', 'Indonesia (+62)'],
  ['+81', 'Japan (+81)'],
  ['+86', 'China (+86)'],
];

const getErrors = (values, touched, attempted) => {
  const errors = {};
  const showNameRequired = touched.name || attempted;
  const showPhoneRequired = touched.phone || attempted;
  const showEmailRequired = touched.email || attempted;
  const showMessageRequired = touched.message || attempted;

  if (!values.name.trim()) {
    if (showNameRequired) errors.name = 'Please enter your name.';
  } else if (!/^[\p{L}\p{M} ]+$/u.test(values.name)) {
    errors.name = 'Use letters and spaces only.';
  }

  if (!values.phone.trim()) {
    if (showPhoneRequired) errors.phone = 'Please enter your phone number.';
  } else if (!/^[0-9\s().-]+$/.test(values.phone)) {
    errors.phone = 'Use digits, spaces, parentheses, or hyphens only.';
  } else {
    const digitCount = values.phone.replace(/\D/g, '').length;
    if (digitCount > 15) {
      errors.phone = 'Phone number must be 15 digits or fewer.';
    } else if (digitCount < 7 && showPhoneRequired) {
      errors.phone = 'Enter at least 7 digits.';
    }
  }

  if (!values.email.trim()) {
    if (showEmailRequired) errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email)) {
    errors.email = 'Enter a valid email, such as name@example.com.';
  }

  if (!values.message.trim() && showMessageRequired) {
    errors.message = 'Please enter a message.';
  }

  return errors;
};

const Footer = () => {
  const [values, setValues] = useState({
    name: '',
    country_code: '+971',
    phone: '',
    email: '',
    message: '',
  });
  const [touched, setTouched] = useState({});
  const [attempted, setAttempted] = useState(false);
  const messageSent =
    new URLSearchParams(window.location.search).get('contact') === 'success';
  const errors = getErrors(values, touched, attempted);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };

  const handleBlur = (event) => {
    setTouched((current) => ({ ...current, [event.target.name]: true }));
  };

  const handleSubmit = (event) => {
    setAttempted(true);
    setTouched({ name: true, phone: true, email: true, message: true });

    if (Object.keys(getErrors(values, touched, true)).length > 0) {
      event.preventDefault();
    }
  };

  return (
    <>
      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Open to the next opportunity</p>
          <h2 className="section-title">
            Let’s build
            <br />
            with confidence.
          </h2>
          <p className="section-intro">
            Have a role or project that could be a good fit? I’d be glad to hear
            from you.
          </p>
        </div>

        <div className="contact-card">
          <p className="contact-card-label">Send a message</p>

          <form
            className="contact-form"
            action="https://formsubmit.co/adhilaismail.sh@gmail.com"
            method="POST"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              type="hidden"
              name="_subject"
              value="New message from your portfolio"
            />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for contacting Adhila. Your message has been received."
            />
            <input
              type="hidden"
              name="_next"
              value={`${window.location.origin}/?contact=success#contact`}
            />
            <input
              type="text"
              name="_honey"
              tabIndex="-1"
              autoComplete="off"
              aria-hidden="true"
              className="contact-honeypot"
            />

            <label htmlFor="contact-name">Your name</label>
            <input
              id="contact-name"
              type="text"
              name="name"
              value={values.name}
              autoComplete="name"
              placeholder="Your name"
              required
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'contact-name-error' : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.name && (
              <span className="field-error" id="contact-name-error" role="alert">
                {errors.name}
              </span>
            )}

            <div className="phone-fields">
              <div className="phone-country">
                <label htmlFor="contact-country-code">Country code</label>
                <select
                  id="contact-country-code"
                  name="country_code"
                  value={values.country_code}
                  onChange={handleChange}
                  aria-label="Select country calling code"
                >
                  {countries.map(([code, label]) => (
                    <option key={`${label}-${code}`} value={code}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="phone-number">
                <label htmlFor="contact-phone">Phone number</label>
                <input
                  id="contact-phone"
                  type="tel"
                  name="phone"
                  value={values.phone}
                  autoComplete="tel-national"
                  inputMode="tel"
                  placeholder="Phone number"
                  required
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? 'contact-phone-error' : undefined}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
            </div>
            {errors.phone && (
              <span className="field-error" id="contact-phone-error" role="alert">
                {errors.phone}
              </span>
            )}

            <label htmlFor="contact-email">Email address</label>
            <input
              id="contact-email"
              type="email"
              name="email"
              value={values.email}
              autoComplete="email"
              inputMode="email"
              placeholder="you@example.com"
              required
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'contact-email-error' : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.email && (
              <span className="field-error" id="contact-email-error" role="alert">
                {errors.email}
              </span>
            )}

            <label htmlFor="contact-message">Message</label>
            <textarea
              id="contact-message"
              name="message"
              value={values.message}
              rows="4"
              placeholder="Write your message…"
              required
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'contact-message-error' : undefined}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            {errors.message && (
              <span className="field-error" id="contact-message-error" role="alert">
                {errors.message}
              </span>
            )}

            <button className="button contact-button" type="submit">
              Send message <span aria-hidden="true">↗</span>
            </button>

            {messageSent && (
              <p className="form-status success" role="status">
                Thanks! Your message has been sent. I’ll be in touch soon.
              </p>
            )}
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} ADHILA ISMAIL</span>
        <span>SOFTWARE TESTER · DEVELOPER</span>
        <a href="#home">BACK TO TOP ↑</a>
      </footer>
    </>
  );
};

export default Footer;
