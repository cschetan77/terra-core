Terra.describeViewports('Pills', ['tiny'], () => {
  it('should display a basic pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/basic-pill');
    Terra.validates.element('basic pill');
  });

  it('should display a basic removable pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/basic-removable-pill');
    Terra.validates.element('basic removable pill');
  });
});
