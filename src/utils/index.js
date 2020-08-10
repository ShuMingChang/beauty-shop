export function pxToVWToPx (pxNumber) {
  return pxNumber * (window.innerWidth / 414)
}

export default {
  pxToVWToPx
}
