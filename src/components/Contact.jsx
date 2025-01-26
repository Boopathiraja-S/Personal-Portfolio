import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "225c2dc5-9dea-4ca1-97f2-7db0820009ac");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("");
            toast.success("Form Submitted Successfully")
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult("");
            toast.error(data.message)
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, x: -200 }}
            transition={{ duration: 1.5 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='container mx-auto py-10 lg:px-32 w-full overflow-hidden mt-3'>
            <h1
                className='text-2xl sm:text-4xl font-bold mb-2 text-center text-yellow-500'
            >Contact
            </h1>

            <form className='max-w-2xl mx-5 md:mx-auto pt-8 text-white' onSubmit={onSubmit}>
                <div className='flex flex-wrap '>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 placeholder:text-white text-sm'
                            type="text"
                            name="Name"
                            required
                            placeholder='Your Name' />
                    </div>

                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                        <input
                            className='w-full border border-gray-300 rounded py-3 px-4 mt-2 placeholder:text-white text-sm'
                            type="email"
                            name="Email"
                            required
                            placeholder='Your Email' />
                    </div>
                </div>

                <div className='my-6 text-left'>
                    Message
                    <textarea
                        className='w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none placeholder:text-white'
                        name="Message"
                        placeholder='Message...'></textarea>
                </div>
                <button
                    className='bg-blue-500 hover:bg-blue-600 hover:scale-105 transition-all font-medium text-white py-2 px-12 mb-10 rounded cursor-pointer'
                >{result ? result : "Send Message"}</button>
            </form>
        </motion.div>
    )
}

export default Contact