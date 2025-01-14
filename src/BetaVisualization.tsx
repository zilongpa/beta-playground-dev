import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { motion } from "framer-motion";

const getItem = (key: string, defaultValue: any = null): any => {
  const value = localStorage.getItem(key);
  if (value === null && defaultValue !== null) {
    return defaultValue;
  }
  return value !== null ? value : defaultValue;
};

const setItem = (key: string, value: string): void => {
  if (value === "") {
    localStorage.removeItem(key);
  } else {
    localStorage.setItem(key, value);
  }
};

interface BetaVisualizationProps {
  frame: any;
}

const BetaVisualization = ({ frame }: BetaVisualizationProps) => {
  return (
    <TransformWrapper
      limitToBounds={true}
      initialPositionX={parseInt(getItem("positionX", 2.5))}
      initialPositionY={parseInt(getItem("positionY", 17.5))}
      initialScale={parseInt(getItem("scale", 2))}
      minScale={2}
      maxScale={10}
      wheel={{ smoothStep: 0.005 }}
      onTransformed={(ref) => {
        setItem("scale", ref.state.scale.toString());
        setItem("positionX", ref.state.positionX.toString());
        setItem("positionY", ref.state.positionY.toString());
      }}
    >
      <TransformComponent wrapperStyle={{ width: "100%", height: "100%" }}>
        <svg
          height="100%"
          style={{
            fillRule: "evenodd",
            clipRule: "evenodd",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "1.5",
          }}
          version="1.1"
          viewBox="0 0 4267 3200"
          width="100%"
        >
          <g id="top">
            <g>
              <path
                d="M2495.83,2208.33l57.583,-62.5l371.548,0l-212.464,241.667l-433.333,-0l-212.464,-241.667l371.548,0l57.582,62.5Z"
                id="alu"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
              />
              <g transform="matrix(83.3333,0,0,83.3333,2584.78,2295.98)" />
              <text
                style={{
                  fontFamily: "'Arial-BoldMT', 'Arial'",
                  fontWeight: "700",
                  fontSize: "83.333px",
                }}
                x="2413.52px"
                y="2295.98px"
              >
                ALU
              </text>
            </g>
            <path
              d="M2637.5,1791.67l250,-0l-37.5,62.5l-175,-0l-37.5,-62.5Z"
              id="mux-bsel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2700,1129.17l250,-0l-37.5,62.5l-175,-0l-37.5,-62.5Z"
              id="mux-ra2sel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2100,1791.67l250,-0l-37.5,62.5l-175,-0l-37.5,-62.5Z"
              id="mux-asel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2025,1454.17l0,-166.667l62.5,25l0,116.667l-62.5,25Z"
              id="mux-wasel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M614.583,433.333l333.334,0l-50,62.5l-233.334,0l-50,-62.5Z"
              id="mux-reset"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2995.83,2466.67l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 0,-25Z"
              id="path-alu-to-data-memory"
            />
            <path
              d="M2495.83,2387.5l0,91.667l505,-0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M3287.5,2216.67l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-register-file-to-data-memory"
            />
            <path
              d="M2825,1491.67l-0,179.166l450,0l0,550.834"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M500,270.833l562.5,0l-56.25,62.5l-450,0l-56.25,-62.5Z"
              id="mux-pcsel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2350,2887.5l291.667,-0l-43.75,62.5l-204.167,-0l-43.75,-62.5Z"
              id="mux-wdsel"
              style={{ fill: "#ebebeb", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g>
              <rect
                height="87.5"
                id="plus-four"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="120.833"
                x="720.833"
                y="875"
              />
              <g transform="matrix(83.3333,0,0,83.3333,828.451,948.576)" />
              <text
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "83.333px",
                }}
                x="733.439px"
                y="948.576px"
              >
                +4
              </text>
            </g>
            <g>
              <rect
                height="75"
                id="pc"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="479.167"
                x="541.667"
                y="591.667"
              />
              <g transform="matrix(46.5349,0,0,46.5349,812.697,645.822)" />
              <text
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "46.535px",
                }}
                x="748.053px"
                y="645.822px"
              >
                PC
              </text>
            </g>
            <g>
              <rect
                height="241.667"
                id="instruction-memory"
                style={{
                  fill: "#e5f20d",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="487.5"
                x="1437.5"
                y="691.667"
              />
              <g transform="matrix(4.16667,0,0,4.16667,318.656,-1171.74)">
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                  x="285.683px"
                  y="472px"
                >
                  Instruction
                </text>
                <g transform="matrix(16,0,0,16,357.69,488.523)" />
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                  x="296.339px"
                  y="488.523px"
                >
                  Memory
                </text>
              </g>
            </g>
            <g>
              <rect
                height="300"
                id="data-memory"
                style={{
                  fill: "#e5f20d",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="508.333"
                x="3020.83"
                y="2241.67"
              />
              <g transform="matrix(4.16667,0,0,4.16667,1910.62,407.422)">
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                  x="309.675px"
                  y="472px"
                >
                  Data
                </text>
                <g transform="matrix(16,0,0,16,357.69,488.523)" />
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "16px",
                  }}
                  x="296.339px"
                  y="488.523px"
                >
                  Memory
                </text>
              </g>
            </g>
            <g>
              <rect
                height="241.667"
                id="register-file"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="904.167"
                x="2191.67"
                y="1250"
              />
              <g transform="matrix(4.16667,0,0,4.16667,1277.61,-609.526)">
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                  x="287px"
                  y="472px"
                >
                  Register
                </text>
                <g transform="matrix(20,0,0,20,344.241,492.654)" />
                <text
                  style={{
                    fontFamily: "'Arial-BoldMT', 'Arial'",
                    fontWeight: "700",
                    fontSize: "20px",
                  }}
                  x="309.788px"
                  y="492.654px"
                >
                  File
                </text>
              </g>
            </g>
            <g>
              <rect
                height="125"
                id="plus"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="120.833"
                x="1283.33"
                y="1154.17"
              />
              <g transform="matrix(125,0,0,125,1380.25,1260.7)" />
              <text
                style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "125px" }}
                x="1307.25px"
                y="1260.7px"
              >
                +
              </text>
            </g>
            <g id="gate-nor">
              <path
                d="M2145.83,1487.5c-5.864,9.444 -10.625,21.129 -10.625,33.333c0,12.204 4.761,23.889 10.625,33.334c-39.094,-0 -70.833,-14.936 -70.833,-33.334c0,-18.397 31.739,-33.333 70.833,-33.333Z"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
              />
              <circle
                cx="2064.58"
                cy="1520.83"
                r="8.333"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
              />
            </g>
            <g>
              <rect
                height="150"
                id="control-logic"
                style={{
                  fill: "#ebebeb",
                  stroke: "#000",
                  strokeWidth: "4.17px",
                }}
                width="679.167"
                x="1095.83"
                y="1833.33"
              />
              <g transform="matrix(83.3333,0,0,83.3333,1705.29,1929.9)" />
              <text
                style={{
                  fontFamily: "'Arial-BoldMT', 'Arial'",
                  fontWeight: "700",
                  fontSize: "83.333px",
                }}
                x="1163.71px"
                y="1929.9px"
              >
                Control Logic
              </text>
            </g>
            <path
              d="M3120.83,1383.33l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
              id="path-wdsel-to-register-file"
            />
            <path
              d="M2495.83,2950l0,100l1258.33,-0l-0,-1679.17l-638.334,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M793.75,850l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-pc-to-plus-four"
            />
            <path
              d="M781.25,666.667l0,188.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M1412.5,741.667l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
              id="path-pc-to-instruction-memory"
            />
            <path
              d="M781.25,666.667l0,87.5l636.25,-0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2237.5,2120.83l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-asel-to-alu"
            />
            <path
              d="M2225,1854.17l0,271.666"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2775,2120.83l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-bsel-to-alu"
            />
            <path
              d="M2762.5,1854.17l0,271.666"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2508.33,2862.5l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-alu-to-wdsel"
            />
            <path
              d="M2495.83,2387.5l0,480"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2587.5,2862.5l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-data-memory-to-wdsel"
            />
            <path
              d="M3275,2541.67l0,133.333l-700,-0l-0,192.5"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2429.17,2862.5l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-plus-four-to-wdsel"
            />
            <path
              d="M781.25,962.5l0,1833.33l1635.42,0l-0,71.667"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M793.75,566.667l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-reset-to-pc"
            />
            <path
              d="M781.25,495.833l0,75.834"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2837.5,1766.67l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-register-file-to-bsel"
            />
            <path
              d="M2825,1491.67l-0,280"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2837.5,1225l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-ra2sel-to-register-file"
            />
            <path
              d="M2825,1191.67l0,38.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2166.67,1358.33l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
              id="path-wasel-to-register-file"
            />
            <path
              d="M2087.5,1370.83l84.167,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2300,1766.67l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-register-file-to-asel"
            />
            <path
              d="M2287.5,1491.67l0,280"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M1693.75,1808.33l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-instruction-memory-to-control-logic"
            />
            <path
              d="M1681.25,933.333l0,880"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2000,1400l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 0,-25Z"
              id="path-instruction-memory-to-wasel"
            />
            <path
              d="M1681.25,933.333l0,450l29.167,29.167l294.583,-0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2712.5,1766.67l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-instruction-memory-to-bsel"
            />
            <path
              d="M1681.25,933.333l0,662.917l29.167,29.167l989.583,0l-0,146.25"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2287.5,1520.83l-150,0"
              id="path-register-file-to-nor"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M1983.33,1533.33l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
              id="in-z"
            />
            <path
              d="M2056.25,1520.83l-77.917,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g>
              <g>
                <motion.path
                  custom={frame.cl.werf}
                  d="M1425,2729.17l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                  id="in-werf"
                  initial="visible"
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                />
                <motion.path
                  custom={frame.cl.werf}
                  d="M1337.5,1983.33l-0,733.334l25,25l67.5,-0"
                  initial="visible"
                  style={{ fill: "none", strokeWidth: "4.17px" }}
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                />
                <motion.path
                  custom={frame.cl.werf}
                  d="M3120.83,1462.5l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
                  id="out-werf"
                  initial="visible"
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                />
                <motion.path
                  custom={frame.cl.werf}
                  d="M3179.17,1450l-63.334,-0"
                  initial="visible"
                  style={{ fill: "none", strokeWidth: "4.17px" }}
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                />
                <g transform="matrix(45.8333,0,0,45.8333,1592.7,2758.07)" />
                <motion.text
                  custom={frame.cl.werf}
                  initial="visible"
                  style={{
                    fontFamily: "'ArialMT', 'Arial'",
                    fontSize: "45.833px",
                  }}
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                  x="1457.77px"
                  y="2758.07px"
                >
                  WERF
                </motion.text>
                <g transform="matrix(45.8333,0,0,45.8333,3321.87,1466.4)" />
                <motion.text
                  custom={frame.cl.werf}
                  initial="visible"
                  style={{
                    fontFamily: "'ArialMT', 'Arial'",
                    fontSize: "45.833px",
                  }}
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                  x="3186.94px"
                  y="1466.4px"
                >
                  WERF
                </motion.text>
                <g transform="matrix(45.8333,0,0,45.8333,3081.63,1466.4)" />
                <motion.text
                  custom={frame.cl.werf}
                  initial="visible"
                  style={{
                    fontFamily: "'ArialMT', 'Arial'",
                    fontSize: "45.833px",
                  }}
                  variants={{
                    visible: (v: any) => ({
                      fill: v.value ? "red" : "black",
                      stroke: v.value ? "red" : "black",
                      opacity: v.dirty ? 0.4 : 1,
                      transition: { duration: 1 },
                    }),
                  }}
                  x="3007.8px"
                  y="1466.4px"
                >
                  WE
                </motion.text>
              </g>
            </g>
            <g>
              <motion.path
                custom={frame.cl.wdsel}
                d="M1425,2652.78l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-wdsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.wdsel}
                d="M1337.5,1983.33l-0,656.945l25,25l67.5,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,1620.76,2681.68)" />
              <motion.text
                custom={frame.cl.wdsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1457.77px"
                y="2681.68px"
              >
                WDSEL
              </motion.text>
              <motion.path
                custom={frame.cl.wdsel}
                d="M2643.33,2933.33l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
                id="out-wdsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.wdsel}
                d="M2701.67,2920.83l-63.334,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,2872.43,2937.24)" />
              <motion.text
                custom={frame.cl.wdsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="2709.44px"
                y="2937.24px"
              >
                WDSEL
              </motion.text>
            </g>
            <g>
              <motion.path
                custom={frame.cl.wasel}
                d="M1425,2576.39l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-wasel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.wasel}
                d="M1337.5,1983.33l-0,580.556l25,25l67.5,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,1616.53,2605.29)" />
              <motion.text
                custom={frame.cl.wasel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1457.77px"
                y="2605.29px"
              >
                W
                <tspan x="1499.33px 1529.9px " y="2605.29px 2605.29px ">
                  AS
                </tspan>
                EL
              </motion.text>
              <motion.path
                custom={frame.cl.wasel}
                d="M2068.75,1275l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
                id="out-wasel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.wasel}
                d="M2056.25,1216.67l-0,63.333"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,2136.17,1207.77)" />
              <motion.text
                custom={frame.cl.wasel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1977.41px"
                y="1207.77px"
              >
                W
                <tspan x="2018.97px 2049.54px " y="1207.77px 1207.77px ">
                  AS
                </tspan>
                EL
              </motion.text>
            </g>
            <g>
              <motion.path
                custom={frame.cl.ra2sel}
                d="M1425,2500l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-ra2sel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.ra2sel}
                d="M1337.5,1983.33l-0,504.167l25,25l67.5,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,1630.52,2528.9)" />
              <motion.text
                custom={frame.cl.ra2sel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1454.73px"
                y="2528.9px"
              >
                RA2SEL
              </motion.text>
              <motion.path
                custom={frame.cl.ra2sel}
                d="M2956.25,1174.7l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
                id="out-ra2sel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.ra2sel}
                d="M3014.58,1162.2l-63.333,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,3195.1,1178.61)" />
              <motion.text
                custom={frame.cl.ra2sel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="3019.31px"
                y="1178.61px"
              >
                RA2SEL
              </motion.text>
            </g>
            <g>
              <motion.path
                custom={frame.cl.pcsel}
                d="M1425,2423.61l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-pcsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.pcsel}
                d="M1337.5,1983.33l-0,427.778l25,25l67.5,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,1605.1,2452.52)" />
              <motion.text
                custom={frame.cl.pcsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1454.8px"
                y="2452.51px"
              >
                PCSEL
              </motion.text>
              <motion.path
                custom={frame.cl.pcsel}
                d="M502.917,289.583l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="out-pcsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.pcsel}
                d="M444.583,302.083l63.334,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,437.884,318.488)" />
              <motion.text
                custom={frame.cl.pcsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="287.583px"
                y="318.488px"
              >
                PCSEL
              </motion.text>
            </g>
            <path
              d="M1003.46,245.833l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-plus-four-to-pcsel"
            />
            <path
              d="M781.25,962.5l0,37.5l302.083,0l0,-820.833l-92.372,-0l-0,71.666"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M902.92,245.833l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-plus-to-pcsel"
            />
            <path
              d="M1283.33,1216.67l-133.333,-0l-0,-1125l-259.58,-0l-0,159.166"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2898.85,1104.17l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-instruction-memory-to-ra2sel-as-rc"
            />
            <path
              d="M1681.25,1037.5l1171.77,-0l33.334,33.333l-0,38.334"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2777.41,1104.17l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-instruction-memory-to-ra2sel-as-rb"
            />
            <path
              d="M1681.25,1037.5l1050.33,-0l33.333,33.333l-0,38.334"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2300,1225l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-instruction-memory-to-register-file"
            />
            <path
              d="M1681.25,1037.5l572.917,-0l33.333,33.333l-0,159.167"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M1429.17,1254.17l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 -0,25Z"
              id="path-instruction-memory-to-plus"
            />
            <path
              d="M1681.25,933.333l0,275l-33.333,33.334l-223.75,-0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M1429.17,1204.17l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 -0,25Z"
              id="path-plus-four-to-plus"
            />
            <path
              d="M781.25,962.5l0,154.167l714.583,-0l0,75l-71.666,-0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <path
              d="M2175,1766.67l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,-0Z"
              id="path-plus-to-asel"
            />
            <path
              d="M1283.33,1216.67l-133.333,-0l-0,450l1012.5,-0l-0,105"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(62.5,0,0,62.5,2302.1,2775)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "62.5px" }}
              x="2144.02px"
              y="2775px"
            >
              PC+4
            </text>
            <g transform="matrix(50,0,0,50,1901.09,1781.73)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1698.18px"
              y="1781.73px"
            >
              ID[31:26]
            </text>
            <g>
              <g transform="matrix(45.8333,0,0,45.8333,1569.47,2376.13)" />
              <motion.text
                custom={frame.cl.mwr}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1454.93px"
                y="2376.13px"
              >
                MWR
              </motion.text>
              <motion.path
                custom={frame.cl.mwr}
                d="M1425,2347.22l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-mwr"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.mwr}
                d="M1337.5,1983.33l-0,351.389l25,25l67.5,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.mwr}
                d="M3554.17,2287.24l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 -0,25Z"
                id="out-mwr"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.mwr}
                d="M3612.5,2274.74l-63.333,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,3731.97,2291.14)" />
              <motion.text
                custom={frame.cl.mwr}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="3617.43px"
                y="2291.14px"
              >
                MWR
              </motion.text>
              <g transform="matrix(45.8333,0,0,45.8333,3514.96,2291.14)" />
              <motion.text
                custom={frame.cl.mwr}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="3441.13px"
                y="2291.14px"
              >
                WE
              </motion.text>
            </g>
            <g>
              <g transform="matrix(45.8333,0,0,45.8333,1559.33,2299.74)" />
              <motion.text
                custom={frame.cl.moe}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1454.93px"
                y="2299.74px"
              >
                MOE
              </motion.text>
              <motion.path
                custom={frame.cl.moe}
                d="M1425,2270.83l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-moe"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.moe}
                d="M1337.5,1983.33l-0,275l25,25l67.5,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.moe}
                d="M3554.17,2370.57l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 -0,25Z"
                id="out-moe"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.moe}
                d="M3612.5,2358.07l-63.333,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,3721.83,2374.49)" />
              <motion.text
                custom={frame.cl.moe}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="3617.43px"
                y="2374.49px"
              >
                MOE
              </motion.text>
              <g transform="matrix(45.8333,0,0,45.8333,3514.96,2374.49)" />
              <motion.text
                custom={frame.cl.moe}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="3448.74px"
                y="2374.49px"
              >
                OE
              </motion.text>
            </g>
            <g>
              <g transform="matrix(45.8333,0,0,45.8333,1572.18,2223.35)" />
              <motion.text
                custom={frame.cl.bsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1454.98px"
                y="2223.35px"
              >
                BSEL
              </motion.text>
              <motion.path
                custom={frame.cl.bsel}
                d="M1425,2194.44l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-bsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.bsel}
                d="M1337.5,1983.33l-0,198.611l25,25l67.5,0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.bsel}
                d="M2893.75,1835.42l-25,-12.5l25,-12.5c-6.25,6.25 -6.25,18.75 0,25Z"
                id="out-bsel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.bsel}
                d="M2952.08,1822.92l-63.333,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,3077.06,1839.32)" />
              <motion.text
                custom={frame.cl.bsel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="2959.86px"
                y="1839.32px"
              >
                BSEL
              </motion.text>
            </g>
            <g>
              <g transform="matrix(45.8333,0,0,45.8333,1575.6,2146.96)" />
              <motion.text
                custom={frame.cl.asel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1458.4px"
                y="2146.96px"
              >
                ASEL
              </motion.text>
              <motion.path
                custom={frame.cl.asel}
                d="M1425,2118.06l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-asel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.asel}
                d="M1337.5,1983.33l-0,122.223l25,25l67.5,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.asel}
                d="M2093.75,1810.14l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="out-asel"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.asel}
                d="M2035.42,1822.64l63.333,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,2028.72,1839.04)" />
              <motion.text
                custom={frame.cl.asel}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1911.52px"
                y="1839.04px"
              >
                ASEL
              </motion.text>
            </g>
            <g>
              <g transform="matrix(45.8333,0,0,45.8333,1608.66,2070.57)" />
              <motion.text
                custom={frame.cl.alufn}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1458.4px"
                y="2070.57px"
              >
                ALUFN
              </motion.text>
              <motion.path
                custom={frame.cl.alufn}
                d="M1425,2041.67l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="in-alufn"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.alufn}
                d="M1337.5,1983.33l-0,45.834l25,25l67.5,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.alufn}
                d="M2147.92,2254.17l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
                id="out-alufn"
                initial="visible"
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <motion.path
                custom={frame.cl.alufn}
                d="M2089.58,2266.67l63.334,-0"
                initial="visible"
                style={{ fill: "none", strokeWidth: "4.17px" }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
              />
              <g transform="matrix(45.8333,0,0,45.8333,2085.01,2282.79)" />
              <motion.text
                custom={frame.cl.alufn}
                initial="visible"
                style={{
                  fontFamily: "'ArialMT', 'Arial'",
                  fontSize: "45.833px",
                }}
                variants={{
                  visible: (v: any) => ({
                    fill: v.value ? "red" : "black",
                    stroke: v.value ? "red" : "black",
                    opacity: v.dirty ? 0.4 : 1,
                    transition: { duration: 1 },
                  }),
                }}
                x="1934.75px"
                y="2282.79px"
              >
                ALUFN
              </motion.text>
            </g>
            <g transform="matrix(41.6667,0,0,41.6667,584.458,306.708)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="561.285px"
              y="306.708px"
            >
              4
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,688.495,306.504)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="665.322px"
              y="306.504px"
            >
              3
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,793.601,306.769)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="770.428px"
              y="306.769px"
            >
              2
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,899.396,306.769)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="876.223px"
              y="306.769px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,1002.68,306.514)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="979.506px"
              y="306.514px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2587.06,2925.39)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2563.88px"
              y="2925.39px"
            >
              2
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2508.84,2925.39)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2485.67px"
              y="2925.39px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2428.25,2925.14)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2405.08px"
              y="2925.14px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,731.885,471.224)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="708.712px"
              y="471.224px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,851.835,470.97)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="828.662px"
              y="470.97px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2172.56,1829.69)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2149.39px"
              y="1829.69px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2298.07,1829.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2274.9px"
              y="1829.44px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2710.06,1829.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2686.89px"
              y="1829.44px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2835.57,1829.18)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2812.4px"
              y="1829.18px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2772.56,1164.33)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2749.39px"
              y="1164.33px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2898.07,1164.07)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2874.9px"
              y="1164.08px"
            >
              0
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2056.89,1343.89)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2033.72px"
              y="1343.89px"
            >
              1
            </text>
            <g transform="matrix(41.6667,0,0,41.6667,2055.47,1427.22)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "41.667px" }}
              x="2032.3px"
              y="1427.22px"
            >
              0
            </text>
            <path
              d="M852.616,408.333l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="path-pcsel-to-reset"
            />
            <path
              d="M840.116,333.333l0,80"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(50,0,0,50,1580.23,1648.9)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1177.35px"
              y="1648.9px"
            >
              (PC+4)+4*SXT(C)
            </text>
            <g transform="matrix(50,0,0,50,2079.7,1608.77)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1710.17px"
              y="1608.77px"
            >
              C: SXT(ID[15:0])
            </text>
            <g transform="matrix(50,0,0,50,2000.53,1398.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1708.73px"
              y="1398.44px"
            >
              Rc: ID[25:21]
            </text>
            <g transform="matrix(50,0,0,50,1665.27,985.937)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1490.17px"
              y="985.937px"
            >
              ID[31:0]
            </text>
            <g transform="matrix(50,0,0,50,2261.51,1098.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="1966.9px"
              y="1098.44px"
            >
              Ra: ID[20:16]
            </text>
            <g transform="matrix(50,0,0,50,2741.13,1098.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="2450.24px"
              y="1098.44px"
            >
              Rb: ID[15:1
              <tspan x="2699.43px 2727.24px " y="1098.44px 1098.44px ">
                1]
              </tspan>
            </text>
            <g transform="matrix(50,0,0,50,3200.37,1098.44)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "50px" }}
              x="2908.57px"
              y="1098.44px"
            >
              Rc: ID[25:21]
            </text>
            <path
              d="M2000,1316.41l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
              id="out-xp"
            />
            <path
              d="M1941.67,1328.91l63.333,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,1935.33,1345.32)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="1874.18px"
              y="1345.32px"
            >
              XP
            </text>
            <path
              d="M2347.92,1538.44l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 -0,-25Z"
              id="out-jt"
            />
            <path
              d="M2289.58,1550.94l63.334,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,2430.85,1567.07)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2379.93px"
              y="1567.07px"
            >
              JT
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,1484.8,770.571)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="1454.23px"
              y="770.571px"
            >
              A
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,1699.06,916.667)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="1665.97px"
              y="916.667px"
            >
              D
            </text>
            <path
              d="M614.583,452.083l25,12.5l-25,12.5c6.25,-6.25 6.25,-18.75 0,-25Z"
              id="out-reset"
            />
            <path
              d="M556.25,464.583l63.333,0"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,548.834,480.988)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="396.027px"
              y="480.988px"
            >
              RESET
            </text>
            <path
              d="M731.517,408.549l-12.921,24.784l-12.075,-25.208c6.143,6.355 18.641,6.567 24.996,0.424Z"
              id="out-reset-bend"
            />
            <path
              d="M635.262,375l84.321,-0c0,-0 -0.363,21.45 -0.649,38.336"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,627.265,391.136)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="507.534px"
              y="391.136px"
            >
              Reset
            </text>
            <path
              d="M1516.67,1808.33l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="out-wasel1"
            />
            <path
              d="M1504.17,1750l-0,63.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,1518.28,1741.67)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="1490.28px"
              y="1741.67px"
            >
              Z
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,1951.14,1537.24)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="1923.14px"
              y="1537.24px"
            >
              Z
            </text>
            <path
              d="M794.045,245.833l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="out-jt1"
            />
            <path
              d="M781.545,187.5l0,63.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,806.802,178.607)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="755.889px"
              y="178.607px"
            >
              JT
            </text>
            <path
              d="M584.629,245.833l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="out-jt2"
            />
            <path
              d="M572.129,187.5l0,63.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(45.8333,0,0,45.8333,622.662,178.63)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="520.768px"
              y="178.63px"
            >
              XAdr
            </text>
            <path
              d="M689.337,245.833l-12.5,25l-12.5,-25c6.25,6.25 18.75,6.25 25,0Z"
              id="out-illop"
            />
            <path
              d="M676.837,187.5l0,63.333"
              style={{ fill: "none", stroke: "#000", strokeWidth: "4.17px" }}
            />
            <g transform="matrix(4.16667,0,0,4.16667,-1489.72,-2635.39)">
              <text
                style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "11px" }}
                x="512px"
                y="664px"
              >
                ILL
              </text>
              <g transform="matrix(11,0,0,11,527.893,675.36)" />
              <text
                style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "11px" }}
                x="512px"
                y="675.36px"
              >
                OP
              </text>
            </g>
            <g transform="matrix(45.8333,0,0,45.8333,2240.29,2195.31)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2209.72px"
              y="2195.31px"
            >
              A
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2777.33,2195.57)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2746.76px"
              y="2195.57px"
            >
              B
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,3108.89,2495.3)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="3037.57px"
              y="2495.3px"
            >
              Adr
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,3314.12,2291.14)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="3237.76px"
              y="2291.14px"
            >
              WD
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,3307.52,2525)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="3241.32px"
              y="2525px"
            >
              RD
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2334.49,1299.61)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2245.33px"
              y="1299.61px"
            >
              RA1
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2335.75,1475)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2244.06px"
              y="1475px"
            >
              RD1
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2868.99,1299.61)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2779.83px"
              y="1299.61px"
            >
              RA2
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2870.25,1475)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2778.56px"
              y="1475px"
            >
              RD2
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,2279.9,1387.24)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="2207.77px"
              y="1387.24px"
            >
              W
              <tspan x="2249.33px " y="1387.24px ">
                A
              </tspan>
            </text>
            <g transform="matrix(45.8333,0,0,45.8333,3081.61,1387.24)" />
            <text
              style={{ fontFamily: "'ArialMT', 'Arial'", fontSize: "45.833px" }}
              x="3005.25px"
              y="1387.24px"
            >
              WD
            </text>
          </g>
        </svg>
      </TransformComponent>
    </TransformWrapper>
  );
};

export default BetaVisualization;
