import React, { useEffect, useState } from "react";
import { technologiesData } from "./data";
import { Image } from "@nextui-org/react";
import css from "./SelectService.module.scss";
import { useTrail, animated as a } from "@react-spring/web";

const config = { mass: 15, tension: 5100, friction: 260 };

const Technologies = () => {
  const [toggle, set] = useState(true);
  const [selected, setSelected] = useState(null);

  const trail = useTrail(technologiesData ? technologiesData.length : 0, {
    config,
    opacity: toggle ? 1 : 0,
    y: toggle ? 0 : 50,
    height: toggle ? 10 : 0,
    from: { opacity: 0, y: 50, height: 0 },
  });

  return (
    <div
      className={`${css.technologies} grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-8`}
    >
      {technologiesData?.map((item, index) => {
        const x = trail[index]?.y;
        return (
          <a.div
            style={{
              transform: x ? x.to((x) => `translate3d(0,${x}px,0)`) : "none",
            }}
            className={
              selected === item.id
                ? `${css.card} ${css.activeCard}`
                : `${css.card}`
            }
            key={item.id}
            onClick={() => setSelected(item.id)}
          >
            <div className={`${css.image} dark`}>
              <Image
                src={item.image}
                width={"100%"}
                height={"100%"}
                alt={item.title}
                loading="lazy"
                className="dark"
              />
            </div>
            <h3>{item.title}</h3>
          </a.div>
        );
      })}
    
    </div>
  );
};

export default Technologies;
