import emailjs from '@emailjs/browser';

export const handleSubmit = (e, form, setLoading, setForm) => {
    e.preventDefault();
    setLoading(true);

    return emailjs
      .send(
        'service_8uv1p6l',
        'template_lt68v8y',
        {
          from_name: form.name,
          to_name: "Ammaar",
          from_email: form.email,
          to_email: "ammaarkhan03@gmail.com",
          message: form.message,
        },
        'xY6XZCeqxsKRQbkiI'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. We will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Sorry, something went wrong. Please try again.");
        }
      );
}
