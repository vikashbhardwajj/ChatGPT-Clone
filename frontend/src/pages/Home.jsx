import { useState } from "react";
import "../styles/Home.scss";

const Home = () => {
  const [isSodebar, setIsSodebar] = useState(false);

  const tooggleSidebar = () => {
    setIsSodebar(!isSodebar);
  };

  console.log(isSodebar);

  return (
    <div className="home-container flex  w-full  bg-[#212121] text-white ">
      <div
        className="sidebar  p-2 py-2 w-[55px] hover:w-[320px] transition-all duration-175 bg-[#181818] h-full  overflow-hidden"
        onMouseEnter={tooggleSidebar}
        onMouseLeave={tooggleSidebar}
      >
        <div className="fixed_top   w-full flex flex-col gap-2  ">
          <div className="top_section   flex gap-4 justify-between items-center">
            <div
              className={`svg back_hover   flex justify-center items-center ${
                isSodebar ? "translate-x-0 " : "-translate-x-2"
              }  `}
            >
              <svg
                width="32"
                height="45"
                viewBox="-15 -3 222.5 171.20636739949816"
                className={` transition-transform duration-300 ${
                  isSodebar ? " rotate-45 " : "rotate-0 "
                }`}
              >
                <defs id="SvgjsDefs2215">
                  <linearGradient id="SvgjsLinearGradient2220">
                    <stop
                      id="SvgjsStop2221"
                      stopColor="#905e26"
                      offset="0"
                    ></stop>
                    <stop
                      id="SvgjsStop2222"
                      stopColor="#f5ec9b"
                      offset="0.5"
                    ></stop>
                    <stop
                      id="SvgjsStop2223"
                      stopColor="#905e26"
                      offset="1"
                    ></stop>
                  </linearGradient>
                </defs>
                <g
                  id="SvgjsG2216"
                  featurekey="symbolFeature-0"
                  transform="matrix(0.19486844833539957,0,0,0.19486844833539957,-7.327047413152273,-16.32617886649458)"
                  fill="white"
                >
                  <g xmlns="http://www.w3.org/2000/svg">
                    <g>
                      <path d="M633.7,181.2c1.2,12.1-1.4,22.3-11.4,27.9c-7.4,4.2-14.7,0.7-21.5-4.1c-4.9-3.4-9.8-6.8-15-9.8    c-47.5-27.5-95.2-57.3-142.6-84.8c-22.8-13.2-21.4-12.6-1.5-27.7c27.2-20.8,48.5-17.2,78.7-0.3c29.6,16.6,51.7,29.1,78.3,45.1    C620.9,138.7,632.5,151.4,633.7,181.2z"></path>
                    </g>
                    <g>
                      <path d="M842.8,457.4c-9.9,7.1-20.1,9.9-29.9,4c-7.3-4.4-7.9-12.5-7.2-20.7c0.5-6,1-11.9,1-17.9    c0.2-54.9,2.3-111.1,2.6-165.8c0.1-26.3,0.3-24.8,23.3-15.1c31.6,13.3,39.1,33.5,39.4,68.1c0.4,33.9,0.6,59.3-0.2,90.3    C873.3,425.2,868.1,441.5,842.8,457.4z"></path>
                    </g>
                    <g>
                      <path d="M707.4,776.3c-11-5.1-18.5-12.5-18.3-23.9c0.2-8.5,6.9-13.1,14.3-16.5c5.4-2.5,10.8-5.1,16-8    c47.7-27.2,97.5-53.3,145.1-80.3c22.9-13,21.7-12.1,24.7,12.6c4.2,34-9.6,50.5-39.4,68.1c-29.2,17.2-51.2,30-78.4,44.8    C750.5,786.7,733.7,790.3,707.4,776.3z"></path>
                    </g>
                    <g>
                      <path d="M363.4,817.6c-1.1-12.1,1.6-22.3,11.6-27.8c7.5-4.1,14.7-0.6,21.5,4.2c4.9,3.5,9.8,6.8,14.9,9.9    c47.3,27.8,94.8,58,141.9,85.9c22.7,13.4,21.3,12.8,1.3,27.7c-27.4,20.6-48.6,16.9-78.7-0.3c-29.5-16.8-51.5-29.4-77.9-45.7    C375.9,860.2,364.4,847.4,363.4,817.6z"></path>
                    </g>
                    <g>
                      <path d="M156.3,539.8c9.9-7,20.1-9.7,29.9-3.8c7.3,4.4,7.8,12.5,7,20.7c-0.6,6-1.1,11.9-1.1,17.9    c-0.6,54.9-3.1,111.1-3.8,165.8c-0.3,26.3-0.5,24.8-23.4,15c-31.5-13.5-38.8-33.8-38.9-68.4c-0.1-33.9-0.1-59.3,0.8-90.3    C125.6,571.9,131,555.5,156.3,539.8z"></path>
                    </g>
                    <g>
                      <path d="M294.2,222c11,5.1,18.4,12.6,18.1,24.1c-0.2,8.5-7,13-14.5,16.4c-5.4,2.5-10.8,5-16,7.9    c-47.9,26.8-97.9,52.6-145.7,79.2c-23,12.8-21.7,11.9-24.6-12.8c-3.9-34,10-50.5,39.9-67.8c29.4-17,51.4-29.6,78.8-44.2    C251.1,211.3,268,207.8,294.2,222z"></path>
                    </g>
                    <g>
                      <path d="M729.8,111.2c-40,0-72.5,32.5-72.5,72.5c0,27.2,15.1,51,37.3,63.4c-0.4,64-0.6,127.9-0.3,191.9    c0.1,17.5-7.1,25.5-21.2,36.7c-8.2,6.6-14.8,12.4-20,18c-4.7,5-11.8,7.1-18.5,5.5l-46.7-10.8c5.9,20.4,0.8,42.7-13.3,58.6l60,13.9    c2.2,0.5,4.3,0.5,6.4,0.2c2.8,1.1,6.7-0.4,11.5-3.1c14.7-8.5,62.9-35.4,72.5-41.3c21.3-13,30.8-24.9,30.2-50.3    c-1.5-71.5-1.8-143.2,0.3-214.7c27.4-10.4,46.8-36.9,46.8-67.8C802.4,143.7,769.8,111.2,729.8,111.2z M755.7,223.6    c-7.4,4.8-16.3,7.7-25.9,7.7c-13.9,0-26.3-5.9-35-15.4c-7.8-8.5-12.5-19.8-12.5-32.1c0-26.3,21.3-47.5,47.5-47.5    c26.3,0,47.5,21.3,47.5,47.5C777.4,200.4,768.8,215.1,755.7,223.6z"></path>
                    </g>
                    <g>
                      <path d="M552.6,528.3l-8.1,8.6l-1.9,2.1l-10.1,10.7c-8.1,8.7-20.3,12.4-31.8,9.7l-11.8-2.7l-2-0.5l-15.2-3.5    c-11.7-2.7-21-11.5-24.4-23l-3.2-10.8l-0.6-2.2l-4.5-15.3c-3.2-11.3-0.4-23.5,7.6-32.1l8.1-8.6l1.9-2l10.2-10.9    c6.3-6.8,15.2-10.5,24.3-10.5c2.5,0,5,0.2,7.4,0.8l11.7,2.7l2.2,0.5l15,3.5c11.7,2.7,21.1,11.5,24.4,23l3.2,11l0.6,2.2l4.5,15.3    C563.5,507.5,560.6,519.8,552.6,528.3z"></path>
                    </g>
                  </g>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M888.8,473.5c-38.9,0-70.8,30.8-72.5,69.4c-55.8,31.6-111.5,63.3-167,95.5c-15.1,8.8-25.6,6.5-42.3-0.2  c-10.5-4.2-19.3-7.1-27.1-8.8c-7.1-1.5-12.7-6.7-14.7-13.6L552,570.9c-11.7,11.8-27.6,18.2-43.9,18.2c-4.6,0-9.4-0.5-13.9-1.6  l17.4,59.4c1.1,3.7,3.5,6.7,6.5,8.6c1.4,2,4,3.8,7.4,5.8c14.7,8.6,62,36.9,71.9,42.3c21.9,12,36.9,14.3,58.7,1.2  c60.4-36.5,121.6-71.9,183.8-105.3c12.9,11.8,30.1,19,48.9,19c40,0,72.5-32.5,72.5-72.5S928.8,473.5,888.8,473.5z M888.8,593.6  c-9.2,0-17.8-2.6-25.1-7.2c-13.5-8.4-22.5-23.3-22.5-40.4c0-7,1.5-13.7,4.3-19.7c7.5-16.4,24.1-27.9,43.3-27.9  c26.3,0,47.5,21.3,47.5,47.5C936.4,572.3,915.1,593.6,888.8,593.6z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M657.7,785c-13.9,0-26.9,3.9-38,10.8c-55-32.6-110.2-65-165.6-97c-15.1-8.7-18.3-19-20.9-36.9  c-1.6-11-3.5-20-5.8-27.5c-2.1-6.8-0.5-14.2,4.3-19.4l32.4-34.5c-20.7-5.2-37.4-20.7-43.9-41l-42,44.9c-2.4,2.5-3.8,5.6-4,8.8v0.1  c-1.1,2.2-1.4,5.4-1.4,9.3c-0.1,17-1.2,72.2-0.9,83.5c0.6,25,6,39.2,28.2,51.5c62.8,35,125.1,71,186.1,109.1  c-0.5,3.6-0.8,7.2-0.8,10.9c0,40,32.6,72.5,72.5,72.5c40,0,72.5-32.5,72.5-72.5S697.7,785,657.7,785z M657.7,905  c-25.1,0-45.7-19.5-47.4-44.2c-0.1-1.1-0.1-2.2-0.1-3.3c0-22.3,15.3-41,36-46.1c3.7-0.9,7.5-1.4,11.5-1.4  c26.3,0,47.5,21.3,47.5,47.5C705.3,883.8,684,905,657.7,905z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M424.7,450.5l-60.1-14c-3.7-0.8-7.4-0.3-10.5,1.3c-1.9,0.5-4.2,1.6-6.7,3c-14.8,8.4-63.2,34.9-72.9,40.8  c-21.3,12.9-30.9,24.7-30.6,50.1c1,73,0.7,146.1-2.1,219.1c-24.8,11.5-42,36.7-42,65.8c0,40,32.5,72.5,72.5,72.5  s72.5-32.5,72.5-72.5c0-29.1-17.3-54.3-42.1-65.8c0.9-63.8,1.6-127.6,1.7-191.4c0.1-17.5,7.4-25.4,21.5-36.5  c8.7-6.8,15.7-12.9,21-18.8c4.7-5,11.8-7.1,18.5-5.6l45.5,10.5C405.4,488.6,410.5,466.3,424.7,450.5z M320,816.5  c0,26.3-21.3,47.5-47.5,47.5c-26.3,0-47.5-21.3-47.5-47.5c0-14.8,6.8-28.1,17.4-36.8c8.2-6.7,18.7-10.8,30.1-10.8  c11.4,0,21.9,4,30.1,10.7C313.2,788.4,320,801.7,320,816.5z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M487.5,350.6c-1.3-4.5-4.6-8-8.5-9.8h-0.1c-1.1-0.8-2.3-1.6-3.7-2.4c-14.6-8.7-61.7-37.4-71.6-42.9  c-21.9-12.1-36.8-14.6-58.7-1.6c-64.1,38-129.1,74.9-195.2,109.4c-11.4-7.5-25-11.8-39.6-11.8c-40,0-72.5,32.5-72.5,72.5  s32.5,72.5,72.5,72.5s72.5-32.5,72.5-72.5c0-3-0.2-5.9-0.5-8.8c56.5-31.4,112.8-62.9,169-94.9c15.2-8.7,25.7-6.3,42.3,0.5  c10.4,4.2,19.1,7.1,26.8,8.9c6.9,1.6,12.2,6.8,14.2,13.5l12.6,43.3c15.1-15.1,36.9-21.4,57.8-16.7L487.5,350.6z M110.2,511.6  c-26.3,0-47.5-21.3-47.5-47.5s21.3-47.5,47.5-47.5c5.3,0,10.5,0.9,15.3,2.5h0c18.8,6.4,32.3,24.1,32.3,45c0,1.7-0.1,3.3-0.3,5  C155,493,134.7,511.6,110.2,511.6z"
                  ></path>
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M626.4,312.9c-0.7-25-6.3-39.1-28.6-51.3c-65.4-35.7-130.4-72.7-193.8-111.9c0.1-1.2,0.1-2.4,0.1-3.6  c0-40-32.6-72.5-72.5-72.5c-40,0-72.5,32.5-72.5,72.5s32.5,72.5,72.5,72.5c16.5,0,31.7-5.5,43.8-14.8c56,32.6,112.1,65.1,168.5,97.1  c15.2,8.6,18.5,18.9,21.3,36.7c1.7,10.8,3.5,19.5,5.8,27c2.1,6.7,0.4,13.9-4.5,19l-31.3,33.4c20.7,5.2,37.4,20.8,43.8,41.1  l42.1-44.9c2.3-2.5,3.6-5.3,4-8.4v-0.1c0.7-2.2,1-5,1-8.3C626,379.4,626.7,324.2,626.4,312.9z M350.8,189.5  c-5.9,2.6-12.4,4.1-19.3,4.1c-26.3,0-47.5-21.3-47.5-47.5c0-26.3,21.3-47.5,47.5-47.5c23.1,0,42.4,16.5,46.6,38.3  c0.6,3,0.9,6.1,0.9,9.2C379,165.4,367.4,182.1,350.8,189.5z"
                  ></path>
                </g>
              </svg>
            </div>

            <div className="close back_hover">
              <i className="ri-close-fill text-3xl"></i>
            </div>
          </div>

          <div className="new_chat back_hover flex items-center cursor-pointer ">
            <i
              className={`ri-edit-box-line text-xl ${
                isSodebar ? "translate-x-0" : "-translate-x-0.5"
              }   `}
            ></i>
            <span
              className={`create_chat pl-2 ${
                isSodebar ? "opacity-100" : "opacity-0"
              }  `}
            >
              New Chat
            </span>
          </div>
        </div>

        <div
          className={`chats_section pt-[1rem] ${
            isSodebar ? "opacity-100" : "opacity-0"
          } transition-opacity duration-150`}
        >
          <h2 className="opacity-70 pl-3 mb-4">Chats</h2>
          <div className="chat my-1 back_hover">
            <h3>chat1 Lorem ipsum dolor sit amet.</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
          <div className="chat my-1 back_hover">
            <h3>chat1</h3>
          </div>
        </div>
      </div>

      <div className="content flex flex-col justify-center  w-full relative h-[100vh]  ">
        <div className="top  flex gap-4 justify-center items-center text-xl z-20 relative mt-3 ml-3 w-fit">
          <i className="ri-menu-unfold-fill lg:hidden"></i>

          <h1 className="back_hover  ">chatVerse</h1>
        </div>

        <div className="message_section  p-4 mx-auto mt-[3rem] flex flex-col w-full md:w-[80%] lg:w-1/2  h-[100vh] gap-4   ">
          <div className="user_message self-end max-w-[72%] md:max-w-[60vw] lg:max-w-[30vw] ">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              odit laboriosam tempore est maiores ipsam facere? Assumenda
              commodi minus modi numquam officiis quis accusantium aut dolorem
              vero. Accusantium, dignissimos minima?asddddddd asdffffff Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Autem ad
              officiis repudiandae eaque quibusdam eligendi veritatis facere.
              Sed, corporis nihil? Quos eligendi temporibus, delectus, sapiente
              id vero deserunt modi ad quae odio reprehenderit, dolores tenetur
              fuga hic molestiae suscipit eaque! Atque magni maiores id
              reiciendis voluptatibus voluptas facere quos illum obcaecati ad
              cumque necessitatibus aliquid, minima aspernatur sint ullam
              explicabo. Enim rerum commodi qui fugiat, suscipit mollitia nobis
              eligendi blanditiis eaque laborum unde iure dignissimos nisi
              dolorum ipsa vitae illo ad eveniet numquam aperiam rem? Aliquid
              molestiae incidunt, vero consectetur vel ad nostrum labore
              aspernatur inventore, natus molestias laboriosam magnam quod?
              Ipsa, optio unde, sunt eaque blanditiis praesentium debitis fugit
              nulla, voluptatem enim iusto cupiditate. Repudiandae reprehenderit
              cupiditate quasi, debitis quidem quos ipsum iusto porro ipsam iure
              recusandae, tempore vitae suscipit aliquid iste dolore quo magnam
              et? Incidunt vitae nobis voluptatum quae recusandae. Voluptatum
              maxime atque ad, quisquam assumenda saepe ducimus dolore expedita
              nostrum id. Quia pariatur, nihil nisi architecto consequuntur
              eveniet enim mollitia voluptas nemo quibusdam nostrum voluptatem
              eos suscipit veniam sint accusamus harum. Quo inventore labore
              voluptates. Ab quia, nostrum quo in eveniet iste illo ut molestiae
              explicabo dolorum quasi a esse veniam quae mollitia asperiores
              commodi facilis.
            </p>
          </div>
          <div className="box">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta cum,
            iste at iusto atque quaerat ad quia corrupti corporis
            exercitationem, cumque inventore sit dolor repellat aliquam aperiam
            animi modi fuga dolore architecto a asperiores recusandae. Deserunt
            rem, accusantium at veritatis officiis id? Sed voluptate facere
            similique ipsum! Architecto pariatur deserunt libero id vitae,
            minima at dolor, dolores voluptas sit recusandae rerum inventore
            veritatis atque aperiam aliquam quod repellendus ut dignissimos
            fuga. Officiis aspernatur provident, debitis pariatur expedita
            accusantium porro voluptatum, ipsam quia alias culpa sit cupiditate
            consectetur placeat totam ratione beatae laborum. Veniam, omnis
            corporis, impedit commodi ea veritatis quia reiciendis aspernatur
            magnam ipsum laborum sed facere esse quidem maxime sequi ab id
            dolor, illum voluptates? Necessitatibus velit nisi iste sequi
            numquam laboriosam omnis, eligendi sed voluptates vel recusandae
            quos cumque, aliquid vero quo quisquam fugit quae tempore dolorem.
            Non vel id saepe facere laboriosam quo earum perspiciatis
            repudiandae tempora, quibusdam neque ipsum alias amet, nulla
            corporis soluta. Similique aliquid facere est nemo, vitae eligendi
            eum rerum, illo itaque iure asperiores suscipit perferendis hic unde
            dolorem tempore fuga repellat odio numquam deleniti magni eaque quam
            libero eius. Libero atque expedita fugit dicta quaerat quia cum
            incidunt? Nam placeat et repellendus exercitationem delectus
            assumenda accusamus! Excepturi ex, minus aliquam a illum sunt amet
            beatae aut, tenetur blanditiis ullam pariatur fugit voluptatibus.
            Officiis perspiciatis, nisi similique molestiae architecto, earum
            necessitatibus voluptatum obcaecati consectetur a consequuntur?
            Exercitationem blanditiis rem provident expedita suscipit culpa est
            corporis illo ea. Non ipsam eos, magnam quaerat officiis cumque
            necessitatibus sunt, omnis aut, minus adipisci repellendus dolores
            obcaecati mollitia illo dignissimos consectetur nulla cupiditate a!
            Distinctio sit repudiandae nisi tempore, eveniet quia nulla, quod
            rem, eum temporibus perspiciatis. Consectetur harum vitae officiis
            nihil fugit saepe sunt aut blanditiis impedit laborum, quas labore
            nobis et. Vero, illum asperiores! Voluptatibus corrupti cumque
            eligendi qui beatae fugiat deserunt illo perferendis aliquid,
            mollitia corporis labore ab unde non velit nam illum est vitae quis
            libero nisi aperiam accusamus similique! Cupiditate et architecto,
            beatae error ipsa eaque, voluptatibus exercitationem quasi labore
            similique doloremque non dicta, omnis nobis. Reprehenderit dolorum
            officia nesciunt fugit at totam. Neque laborum reprehenderit minus
            in incidunt commodi excepturi. Ab magnam nihil voluptatibus, odit
            soluta, in quis eos ut minus pariatur officiis, et rem ex quaerat
            quia eum non similique perferendis optio nam porro repellat minima
            deserunt atque. Rem in aliquam, soluta quam placeat porro.
            Distinctio voluptatibus adipisci in vero?
          </div>

          <div className="search_bar   flex justify-center items-center gap-2">
            <span className="absolute cursor-pointer right-10 md:right-15 sm:right-13  lg:right-16 flex justify-center items-center h-[20px] w-[20px] bg-amber-500 p-5 rounded-full">
              <i className="ri-arrow-right-line text-2xl"></i>
            </span>
            <input
              type="text"
              placeholder="Ask anything..."
              className=" w-[90%] md:[100%] py-5 px-4 rounded-full  focus:outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
