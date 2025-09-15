import React from "react";

const MessageSections = ({ tooggleSidebar, message, setMessage }) => {
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
        <div className="user_message self-end max-w-[72%] md:max-w-[60vw] lg:max-w-[30vw] ">
          <span className="role">you</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            odit laboriosam tempore est maiores ipsam facere? Assumenda commodi
            minus modi numquam officiis quis accusantium aut dolorem vero.
            Accusantium, dignissimos minima?asddddddd asdffffff Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Autem ad officiis
            repudiandae eaque quibusdam eligendi veritatis facere. Sed, corporis
            nihil?
          </p>
        </div>
        <div className="box">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum,
          iste at iusto atque quaerat ad quia corrupti corporis exercitationem,
          cumque inventore sit dolor repellat aliquam aperiam animi modi fuga
          dolore architecto a asperiores recusandae. Deserunt rem, accusantium
          at veritatis officiis id? Sed voluptate facere similique ipsum!
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
    </div>
  );
};

export default MessageSections;
