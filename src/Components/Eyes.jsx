import { transform } from "framer-motion";
import React, { useEffect, useState } from "react";

function Eyes() {
  const [rotate, setRotate] = useState(0);

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      let mouseX = e.clientX;
      let mouseY = e.clientY;

      let deltaX = mouseX - window.innerWidth / 2;      //distance between center and mouse arrow => deltax &&  window.innerWidth => center point with x-axis respective
      let deltaY = mouseY - window.innerHeight / 2;   //distance between center and mouse arrow => deltay &&  window.innerHeight => center point with y-axis respective

      var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);  //  Math.atan2(deltaY, deltaX) => gives vsalue in radian but we need in degree. 1 radian(57.2958).   radian to degree conversion =>  radian * 180/math.pi
      setRotate(angle-180);
    });
  });
  return (
    <div className="eyes w-full h-screen overflow-hidden">
      <div
        data-scroll
        data-scroll-speed="-.7"
        className="relative w-ful h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')]"
      >
        <div className=" absolute flex gap-10 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>

          <div className=" flex  items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100 ">
            <div className=" relative  w-2/3 h-2/3 rounded-full bg-zinc-900 ">
              <div
                style={{
                  transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
                }}
                className="line line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-[2.8vw]"
              >
                <div className="w-[2vw] h-[2vw] rounded-full bg-zinc-100"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Eyes;
