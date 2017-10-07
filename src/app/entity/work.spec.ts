import { Work } from './work';

fdescribe('Work', () => {
  it('test', () => {
    const work = new Work().bind({
      overview: "あいうえお",
      schedule: "かきくけこ",
      technicalKeywords: "さしすせそ",
      featurePlan: "たちつてと",
      customers: "なにぬねの",
      workingDetails: "はひふへほ"
    });
    console.log(work.toTextile());
  });
});
