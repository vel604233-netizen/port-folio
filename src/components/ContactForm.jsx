import { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value

    });

  };

  const validate = () => {

    const newErrors = {};

    if (!formData.name.trim()) {

      newErrors.name = "Name is required";

    }

    if (!formData.email.trim()) {

      newErrors.email = "Email is required";

    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {

      newErrors.email = "Invalid email";

    }

    if (!formData.message.trim()) {

      newErrors.message = "Message is required";

    }

    return newErrors;

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {

      setErrors(validationErrors);

      setSuccess(false);

      return;

    }

    setErrors({});

    setSuccess(true);

    setFormData({

      name: "",

      email: "",

      message: ""

    });

  };

  return (

    <form
      className="contact-form"
      onSubmit={handleSubmit}
    >

      <input

        type="text"

        name="name"

        placeholder="Your Name"

        value={formData.name}

        onChange={handleChange}

      />

      {errors.name && <small>{errors.name}</small>}

      <input

        type="email"

        name="email"

        placeholder="Your Email"

        value={formData.email}

        onChange={handleChange}

      />

      {errors.email && <small>{errors.email}</small>}

      <textarea

        rows="6"

        name="message"

        placeholder="Your Message"

        value={formData.message}

        onChange={handleChange}

      ></textarea>

      {errors.message && <small>{errors.message}</small>}

      <button type="submit">

        Send Message

      </button>

      {

        success &&

        <p className="success">

          Message Sent Successfully ✅

        </p>

      }

    </form>

  );

}

export default ContactForm;