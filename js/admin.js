// title sort
let title1 = document.querySelector(".kakrasniy");
let title2 = document.querySelector(".naduvniy");

title1.addEventListener("click", () => {
  title1.className =
    " text-[28px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398]";
  title2.className =
    " text-[28px] text-[#B4B4C6] pb-[8px] border-b-[2px] border-[#B4B4C6]";
});
title2.addEventListener("click", () => {
  title1.className =
    " text-[28px] text-[#B4B4C6] pb-[8px] border-b-[2px] border-[#B4B4C6]";
  title2.className =
    " text-[28px] text-[#009398] pb-[8px] border-b-[2px] border-[#009398]";
});
