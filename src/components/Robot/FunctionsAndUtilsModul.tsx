export const screenSize = {
  width: window.innerWidth,
  height: window.innerHeight,
}

export const dragConstraints = {
  left: 0,
  right: screenSize.width - 500,
  top: 0,
  bottom: screenSize.height - 333,
}
export const style = {
  mainDiv: `flex absolute  z-50`,
  section: ` w-[100%] h-[100%] `,
  iconWrapper: `absolute flex gap-2 left-[14rem] top-[-1.2rem] `,
  icon: `w-[40px] h-[40px] cursor-pointer z-50`,
}
