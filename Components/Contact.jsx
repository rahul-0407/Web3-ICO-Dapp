import React from "react";
import toast from "react-hot-toast";
import { useForm } from "@formspree/react";

const Contact = () => {
  const notifySuccess = (msg) => toast.success(msg, { duration: 2000 });
  const notifyError = (msg) => toast.error(msg, { duration: 2000 });

  const [state, handleSubmit] = useForm()

  if(state.succeeded){
    notifySuccess("successfully submitted");
    window.location.reload()
  }

  return <section id="contact" className="ico-contact pos-rel">
    
  </section>;
};

export default Contact;
