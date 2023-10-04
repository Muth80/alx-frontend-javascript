// task_5/js/main.ts

// Create two interfaces MajorCredits and MinorCredits
interface MajorCredits {
  credits: number;
  brand: 'Major';
}

interface MinorCredits {
  credits: number;
  brand: 'Minor';
}

// Create two functions named sumMajorCredits and sumMinorCredits
function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Major',
  };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    brand: 'Minor',
  };
}

// Example usage:
const majorSubject1: MajorCredits = { credits: 40, brand: 'Major' };
const majorSubject2: MajorCredits = { credits: 30, brand: 'Major' };
const minorSubject1: MinorCredits = { credits: 20, brand: 'Minor' };
const minorSubject2: MinorCredits = { credits: 15, brand: 'Minor' };

const majorResult = sumMajorCredits(majorSubject1, majorSubject2);
const minorResult = sumMinorCredits(minorSubject1, minorSubject2);

console.log('Major Credits:', majorResult.credits);
console.log('Minor Credits:', minorResult.credits);

