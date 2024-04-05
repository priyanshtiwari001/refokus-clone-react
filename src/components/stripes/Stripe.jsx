const stripes = [
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    num: 52,
    borderRight: "1px solid #71717A",
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    num: 2,
    borderRight: "1px solid #71717A",
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
    num: 15,
    borderRight: "1px solid #71717A",
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
    num: 52,
    borderRight: "1px solid #71717A",
  },
  {
    img: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
    num: 15,
  },
];

const Stripe = () => {
  return (
    <>
      {stripes.map((stripe, index) => {
        return (
          <div
            style={{ borderRight: stripe.borderRight }}
            key={index}
            className="  items-center flex w-1/2 py-3.5 justify-between px-4"
          >
            <img
              src={stripe.img}
              alt={stripe.num}
              className="object-fit w-[60%]"
            />
            <p className="text-md font-semibold">{stripe.num}</p>
          </div>
        );
      })}
    </>
  );
};
export default Stripe;
