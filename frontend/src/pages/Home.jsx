import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageSections from "../components/MessageSections";
import axios from "../api/axiosConfig";
import {
  asyncLoadChats,
  asyncLoadMessages,
} from "../store/actions/chatActions";
import "../styles/Home.scss";
import SidebarSection from "../components/SidebarSection";

const Home = () => {
  const [isSodebar, setIsSodebar] = useState(false);
  const [input, setInput] = useState("");
  const [message, setMessage] = useState([]);
  const chats = useSelector(state => state.chat.chats);
  const messages = useSelector(state => state.chat.messages);

  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncLoadChats());
    dispatch(asyncLoadMessages("68a067eac0514656d28d7b78"));
  }, [dispatch]);


  console.log(messages);


  const tooggleSidebar = () => {
    setIsSodebar(!isSodebar);
  };

  // const submitHandler = async e => {
  //   try {
  //     if (e.key === "Enter" && !e.shiftKey) {
  //       e.preventDefault();
  //       const value = e.target.value.trim();
  //       if (value) {
  //         console.log("Enter key pressed:", value);
  //       }
  //       setMessage("");
  //     }
  //     const response = await axios.post("/api/chat", { title: message });
  //     console.log("Chat created:", response.data.chat);
  //   } catch (error) {
  //     console.error("Error creating chat:", error);
  //   }
  // };

  return (
    <div className="home-container flex  w-full  bg-[#212121] text-white ">
      <SidebarSection
        isSodebar={isSodebar}
        tooggleSidebar={tooggleSidebar}
        chats={chats}
      />

      <MessageSections
        tooggleSidebar={tooggleSidebar}
        input={input}
        setInput={setInput}
        messages={messages}
        message={message}
        setMessage={setMessage}
      
      />
      {/* <div className="message_section content flex flex-col justify-center  w-full relative h-[100vh]  ">
        <div className="top  flex gap-4 justify-center items-center text-xl z-20 relative mt-3 ml-3 w-fit">
          <i
            className="ri-menu-unfold-fill lg:hidden"
            onClick={tooggleSidebar}
          ></i>

          <h1 className="back_hover  ">chatVerse</h1>
        </div>

        <div className="message_section  p-4 mx-auto mt-[3rem] flex flex-col w-full md:w-[80%] lg:w-1/2  h-[100vh] gap-4   ">
          <div className="user_message self-end max-w-[72%] md:max-w-[60vw] lg:max-w-[30vw] ">
            <span className="role">you</span>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit laboriosam tempore est maiores ipsam facere? Assumenda
              commodi minus modi numquam officiis quis accusantium aut dolorem
              vero. Accusantium, dignissimos minima?asddddddd asdffffff Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Autem ad
              officiis repudiandae eaque quibusdam eligendi veritatis facere.
              Sed, corporis nihil?
            </p>
          </div>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum,
            iste at iusto atque quaerat ad quia corrupti corporis
            exercitationem, cumque inventore sit dolor repellat aliquam aperiam
            animi modi fuga dolore architecto a asperiores recusandae. Deserunt
            rem, accusantium at veritatis officiis id? Sed voluptate facere
            similique ipsum!
          </div>

          <div className="search_bar   flex justify-center items-center gap-2">
            <span className="absolute cursor-pointer right-10 md:right-15 sm:right-13  lg:right-16 flex justify-center items-center h-[20px] w-[20px] bg-amber-500 p-5 rounded-full">
              <i className="ri-arrow-right-line text-2xl"></i>
            </span>
            <input
              type="text"
              placeholder="Ask anything..."
              className=" w-[90%] md:[100%] py-5 px-4 rounded-full  focus:outline-none"
              // onKeyDown={submitHandler}
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Home;
