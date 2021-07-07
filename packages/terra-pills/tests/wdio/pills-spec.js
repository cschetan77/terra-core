Terra.describeViewports('Pills', ['tiny'], () => {
  it('should display a basic pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/basic-pill');
    Terra.validates.element('basic pill');
  });

  it('should display a basic removable pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/basic-removable-pill');
    Terra.validates.element('basic removable pill');
  });

  it('should display a disclosure pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/disclosure-pill');
    Terra.validates.element('disclosure pill');
  });

  it('should display a disclosure and removable pill', () => {
    browser.url('/raw/tests/terra-core-docs/pills/pill/disclosure-and-removable-pill');
    Terra.validates.element('disclosure and removable pill');
  });
});
