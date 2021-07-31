export const isInViewport = (element: Element  ): boolean => {
  const rect = element.getBoundingClientRect();
  
  return (
    // Here we only need to test visibility vertically,
    // so we comment out test for the horizontal visibility.
    rect.top >= 0 &&
    // rect.left >= 0 &&  
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight)
    //    &&
    // rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};
