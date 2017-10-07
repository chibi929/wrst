import { Free } from './free';

fdescribe('Free', () => {
  it('test', () => {
    const free = new Free().bind({
      freeWords: "あいうえお"
    });
    console.log(free.toTextile());
  });
});
