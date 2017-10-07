import { Individual } from './individual';

fdescribe('Individual', () => {
  it('test', () => {
    const individual = new Individual().bind({
      overview: "あいうえお",
      schedule: "かきくけこ",
      technicalKeywords: "さしすせそ",
      description: "たちつてと",
      workingDetails: "なにぬねの"
    });
    console.log(individual.toTextile());
  });
});
