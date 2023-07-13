import React, {useState} from "react";





const ReactContact = () => {
    const [user , setUser] = useState({
        name: '',
        email: '',
        message: ''
    });

    let name, value;
    const getData = (e) =>{
        name = e.target.name;
        value = e.target.value;

        setUser({...user, [name]:value});

}
    const postData = async (e) =>{
      e.preventDefault();

      const res = await fetch('https://myreactfirebase-1dd6e-default-rtdb.firebaseio.com/myform.json',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: user.name,
            email: user.email,
            message: user.message
            })
      });

      if(res){
        setUser({
          name: '',
          email: '',
          message: ''
        });
        alert('Data Stored');
      
      }else{
        alert('Data Not Stored');
      }
      

    };


  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
          <form method="POST">
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                value={user.name}
                placeholder="Your Name"
                onChange={getData}
                name="name"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={user.email}
                placeholder="Your Email"
                name="email"
                onChange={getData}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="5"
                value={user.message}
                placeholder="Your Message"
                name="message"
                onChange={getData}
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={postData}
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ReactContact;
