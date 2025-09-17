import { useState } from "react";
import { URL } from "./constants";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
// import About from "./pages/About";
import Contact from "./pages/Contact";
// Ensure the environment variable is loaded correctly

// AIzaSyA1Xr-03HEn1J7DUdB1VV25YEzeZFKpI8k

function App() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState(undefined);
  // const [sidebarOpen, setSidebarOpen] = useState(false);
  const [input, setInput] = useState("");
  // const [messages, setMessages] = useState(() => {
  //   const saved = localStorage.getItem("chatMessages");
  //   return saved ? JSON.parse(saved) : [];
  // });

  const payload = {
    "contents": [{
      "parts": [{ "text": question }]
    }]
  }
  const askQuestion = async () => {
    let response = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(payload)
    })

    response = await response.json();
    console.log(response.candidates[0].content.parts[0].text);
    setResult(response.candidates[0].content.parts[0].text)
  }

  // const handleSend = () => {
  //   if (input.trim() === "") return;
  //   const newMessages = [...messages, input];
  //   setMessages(newMessages);
  //   localStorage.setItem("chatMessages", JSON.stringify(newMessages));
  //   setInput("");
  // };


  return (
    <>
      <div className="w-screen h-screen flex justify-between items-center box-content">
        {/* <div className="w-1/4 h-screen bg-gray-100 text-white box-content flex-col p-4">
          <img className="h-9 mt-3 -ml-2" src="ChatGPT-Logo.png" alt="ChatGPT Logo" />
          <button className="text-black block">Newchat</button>
          <button className="text-black block">Save chats</button>
          <button className="text-black block">Library</button>
          <h1></h1>
        </div> */}
        <div className="w-1/5 h-screen bg-gray-100 text-white box-content flex-col p-4 gap-2 ml-0">
          <img className="h-9 mt-3 -ml-2 mb-6" src="ChatGPT-Logo.png" alt="ChatGPT Logo" />
          <div className="flex gap-3">
          <img className="h-7" src="chat.png" alt="nothing" />
          <button className="text-black block font-bold">Newchat</button>
          </div>
          <div className="flex gap-3">
          <img className="h-7" src="download.png" alt="nothing" />
          <button className="text-black block font-bold">Save chats</button>
          </div>
          <div className="flex gap-3">
          <img className="h-7" src="library.png" alt="nothing" />
          <button className="text-black block font-bold">Library</button>
          </div>

          <h1 className="text-xl text-black font-bold mt-4">Chat History</h1>

          <div className="bg-gray-300 text-black p-3 rounded-md mt-2">
            <h1>Why is Web Development Important in Today's generation?</h1>
          </div>
          <div className="bg-gray-300 text-black p-3 rounded-md mt-2">
            <h1>What is the equation for linear regression in machine learning</h1>
          </div>
          <div className="bg-gray-300 text-black p-3 rounded-md mt-2">
            <h1>What will be the result of exploading an Atomic Bomb in Mariana Trench</h1>
          </div>
          <div className="bg-gray-300 text-black p-3 rounded-md mt-2">
            <h1>Can you describe the Journey after death according to different mythologies</h1>
          </div>
        </div>
        <div className="w-3/4 h-screen text-gray-900 flex-row box-content justify-evenly">
          <div className="w-full h-max  p-4 box-border rounded-md bg-grey-300 flex justify-between items-center ">
            <h1 className="text-2xl font-bold">Chatgpt</h1>
            <div className="flex justify-center items-center space-x-2">
              <img className="h-7" src="upload-file-svgrepo-com.svg" alt="nothing" />
              <button className="bg-blue-500 h-3/4 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">share</button>
              <img className="h-5" src="more.png" alt="nothing" />
            </div>
          </div>
          <div className="w-full h-4/5 bg-white p-4 box-content rounded-md flex justify-center items-center">
            <div className="w-full h-full bg-gray-100 p-4 box-border rounded-md flex-col">
              
              <div className="w-full h-3/4 bg-red p-4 box-border rounded-md overflow-y-auto">
                {result ? (
                  <div className="text-black p-4 rounded shadow bg-gray-200">
                    <p>{result}</p>
                  </div>
                ) : (
                  <div className="text-gray-400 text-center">No response yet. Ask a question to get started.</div>
                )}
                {/* Show saved messages here
                {messages.length === 0 ? (
                  <div className="text-gray-400 text-center">No messages yet.</div>
                ) : (
                  <ul className="space-y-2">
                    {messages.map((msg, idx) => (
                      <li key={idx} className="bg-white text-black p-2 rounded shadow">{msg}</li>
                    ))}
                  </ul>
                )} */}
              </div>
              <div className="w-full h-1/4 bg-gray-200 p-4 box-border rounded-md flex justify-between items-center">
                <input
                  onChange={(e) => setQuestion(e.target.value)}
                  className="w-5/6 h-3/4 p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  type="text"
                  placeholder="Type your message..."
                  value={question}

                />
                <button
                  className="bg-blue-500 h-3/4 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                  onClick={askQuestion}
                >Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>

  );
}

export default App;





// <div className="min-h-screen flex flex-col bg-gray-100 text-gray-900 transition-colors duration-300">
//   <Router>
//     {/* Navbar */}
//     <Navbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

//     <div className="flex flex-1">
//       {/* Sidebar */}
//       {sidebarOpen && (
//         <aside className="w-64 p-4 bg-gray-200 transition-all">
//           <ul className="space-y-3">
//             <li>
//               <Link to="/" className="hover:text-blue-500">Home</Link>
//             </li>
//             <li>
//               <Link to="/about" className="hover:text-blue-500">About</Link>
//             </li>
//             <li>
//               <Link to="/contact" className="hover:text-blue-500">Contact</Link>
//             </li>
//           </ul>
//         </aside>
//       )}

//       {/* Main Content */}
//       <main className="flex-1 p-6">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//         </Routes>
//       </main>
//     </div>

//     {/* Footer */}
//     <Footer />
//   </Router>
// </div>









// const [sidebarOpen, setSidebarOpen] = useState(false);

// return (
//   // <div className={darkMode ? "dark" : ""}>
//   <div>

//     <div className="min-h-screen flex flex-col bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
//       <Router>
//         {/* Navbar */}
//         <Navbar
//           darkMode={darkMode}
//           setDarkMode={setDarkMode}
//           sidebarOpen={sidebarOpen}
//           setSidebarOpen={setSidebarOpen}
//         />
