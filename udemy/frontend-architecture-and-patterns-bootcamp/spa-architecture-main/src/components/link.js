export const HOST = window.location.origin;

export const mountLink = (label, href) => {
  const link = document.createElement("a");
  link.href = "javascript:void(0)"; //void(0) is undefined. so by this statement we make the link non-functional, as javascript:void(0) is JavaScript code that does nothing.
  link.innerHTML = label;
  link.href = href;

  return link;
};
