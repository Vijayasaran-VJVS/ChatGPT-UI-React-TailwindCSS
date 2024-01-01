import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import chatgpt_logo from "./assets/chatgpt_logo.jpg";
import vi from "./assets/vi.webp";
function App() {
  return (
    <>
      <div className="flex flex-row w-100 h-screen text-mono">
        <div className="flex flex-col w-1/5 h-screen bg-black p-5 justify-between">
          <div>
            <div className="w-full hover:bg-gray-900 p-2 rounded-lg">
              <a href="#">
                <div className="flex flex-row  text-white justify-between">
                  <div className="flex flex-row gap-2">
                    <div className="w-7">
                      <img className="rounded-full" src={chatgpt_logo} alt="" />
                    </div>
                    <a href="#" className="hover:text">
                      <div className="font-bold">New Chat</div>
                    </a>
                  </div>
                  <div className=" w-7">
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </div>
                </div>
              </a>
            </div>
            <div className="flex flex-col gap-2 mt-7">
              <div className="text-white text-xs font-bold text-opacity-25">
                Previous 5 Days
              </div>
              <div>
                <div className="w-full hover:bg-gray-900 p-2 rounded-lg">
                  <a href="#">
                    <div className="text-white font-semibold text-base">
                      Tell me about React js
                    </div>
                  </a>
                </div>
                <div className="w-full hover:bg-gray-900 p-2 rounded-lg">
                  <a href="#">
                    <div className="text-white font-semibold text-base">
                      What is Tailwind CSS
                    </div>
                  </a>
                </div>
                <div className="w-full hover:bg-gray-900 p-2 rounded-lg">
                  <a href="#">
                    <div className="text-white font-semibold text-base">
                      Who is Vijayasaran
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#">
              <div className="flex flex-row gap-3 items-center rounded-lg p-2 hover:bg-gray-900 ">
                <div className="w-9">
                  <img className="rounded-full" src={vi} alt="" />
                </div>
                <div className="text-white text-sm font-semibold">
                  Vijayasaran V
                </div>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:bg-gray-700 w-full h-screen flex flex-col justify-between gap-10">
          <div className="p-3 hover:bg-gray-600 h-fit w-fit m-2 rounded-lg">
            <a href="#">
              <div className="text-white font-bold text-lg">
                ChatGPT <span className="text-slate-400">3.5</span>
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className="text-slate-400"
                />
              </div>
            </a>
          </div>
          <div className="flex flex-col justify-center items-center gap-3 w-full h-full">
            <div className="w-[72px] h-[72px]">
              <img src={chatgpt_logo} className="rounded-full" alt="" />
            </div>
            <div className="text-white text-2xl font-bold">
              How can I help you today?
            </div>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center gap-2 pt-5">
            <div>
              <div className="w-full flex flex-row gap-2">
                <div className="">
                  <a href="#">
                    <div className="px-4 py-3 border-2 rounded-xl border-slate-600 w-[372px] h-[65.6px] flex flex-col justify-center hover:bg-gray-600">
                      <div className="font-bold text-white">
                        Come up with concepts
                      </div>
                      <div className="text-slate-400 font-semibold">
                        for a retro style arcade game
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <div className="px-4 py-3 border-2 rounded-xl border-slate-600 w-[372px] h-[65.6px] flex flex-col justify-center hover:bg-gray-600">
                      <div className="font-bold text-white">
                        Come up with concepts
                      </div>
                      <div className="text-slate-400 font-semibold">
                        for a retro style arcade game
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="w-full flex flex-row gap-2">
                <div>
                  <a href="#">
                    <div className="px-4 py-3 border-2 rounded-xl border-slate-600 w-[372px] h-[65.6px] flex flex-col justify-center hover:bg-gray-600">
                      <div className="font-bold text-white">
                        Come up with concepts
                      </div>
                      <div className="text-slate-400 font-semibold">
                        for a retro style arcade game
                      </div>
                    </div>
                  </a>
                </div>
                <div>
                  <a href="#">
                    <div className="px-4 py-3 border-2 rounded-xl border-slate-600 w-[372px] h-[65.6px] flex flex-col justify-center hover:bg-gray-600">
                      <div className="font-bold text-white">
                        Come up with concepts
                      </div>
                      <div className="text-slate-400 font-semibold">
                        for a retro style arcade game
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-[768px] h-[53.6px] bg-transparent border-2 border-slate-600 p-2 rounded-xl mt-1">
              <div className="flex flex-row w-full h-full justify-between items-center">
                <div>
                  <input
                    type="text"
                    placeholder="Message ChatGPT..."
                    className="text-slate-400 w-full h-full bg-transparent focus:outline-none"
                  />
                </div>
                <div className="w-[30px] h-[30px] bg-slate-400 grid justify-center items-center rounded-lg text-slate-600 hover:bg-slate-200">
                  <a href="#">
                    <FontAwesomeIcon icon={faArrowUp} />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center items-baseline text-slate-200 text-xs w-full ">
              <div>
                ChatGPT can make mistakes. Consider checking important
                information.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
