import React from "react";

const MessageSections = ({
  tooggleSidebar,
  input,
  setInput,
  messages,
  message,
  setMessage,
}) => {
  return (
    <div className="message_section content flex flex-col justify-center  w-full relative h-[100vh]  ">
      <div className="top  flex gap-4 justify-center items-center text-xl z-20 relative mt-3 ml-3 w-fit">
        <i
          className="ri-menu-unfold-fill lg:hidden"
          onClick={tooggleSidebar}
        ></i>

        <h1 className="back_hover  ">chatVerse</h1>
      </div>

      <div className="message_section  p-4 mx-auto mt-[3rem] flex flex-col w-full md:w-[80%] lg:w-1/2  h-[100vh] gap-4   ">
        {message && message.length > 0 ? (
          message.map((msg, index) => (
            <div
              className={`${
                msg.role === "user"
                  ? "user_message_section relative  self-end max-w-[72%] md:max-w-[60vw] lg:max-w-[30vw]"
                  : "model_message_section"
              }`}
              key={msg.id || index}
            >
              {msg.role === "user" && (
                <span className="role  text-end inline-block opacity-80 w-full mb-1 pr-3">
                  you
                </span>
              )}

              <p
                className={`${
                  msg.role === "user" ? "user_message p-2 md:p-3 rounded-xl " : "model_message_section p-1 rounded-xl "
                }`}
              >
                {msg.content}
              </p>
            </div>
          ))
        ) : (
          <div className="text-3xl font-semibold absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">No messages available.</div>
        )}

        <div className="search_bar  flex justify-center items-center gap-2">
          <span className="absolute cursor-pointer right-10 md:right-15 sm:right-13  lg:right-16 flex justify-center items-center h-[20px] w-[20px] bg-amber-500 p-5 rounded-full">
            <i className="ri-arrow-right-line text-2xl"></i>
          </span>
          <input
            type="text"
            placeholder="Ask anything..."
            className=" w-[90%] md:[100%] py-5 px-4 rounded-full  focus:outline-none"
            // onKeyDown={submitHandler}
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </div>
    </div>
  );
};

export default MessageSections;
