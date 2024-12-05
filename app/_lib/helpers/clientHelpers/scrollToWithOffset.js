const scrollToWithOffset = (targetId, offset = 0, callback) => {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const topPosition =
      targetElement.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({
      top: topPosition,
      behavior: 'smooth',
    });
  }
  if (callback && typeof callback === 'function') {
    callback();
  }
};

export default scrollToWithOffset;
