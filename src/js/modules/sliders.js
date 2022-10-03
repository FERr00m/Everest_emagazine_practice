const sliders = () => {
  const mainBanner = new Splide('.splide.jq-main-banner', {
    type: 'loop',
    autoplay: true,
    breakpoints: {
      991: {
        pagination: false,
      },
    },
  });
  mainBanner.mount();
};

export default sliders;
