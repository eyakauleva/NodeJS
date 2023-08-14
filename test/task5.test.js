import { throttle } from "../src/task5.js";

const onScroll = (event) => alert("Scroll event");
const throttledScrollHandler = throttle(onScroll, 2000);  
window.addEventListener("scroll", event => {
    throttledScrollHandler(event);
});