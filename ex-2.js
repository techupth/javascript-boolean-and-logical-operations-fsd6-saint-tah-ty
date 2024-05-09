// Exercise #2: Promotion Conditions

// Start coding here
let lastMonthPaidMoreThan4000 = true;
let isWeekday = true;
let hasBoughtProductFromITCategory = false;
let hasAttendedDiscountEvent = true;
let isPlatinum = false;

let hasPromotion1 =
  lastMonthPaidMoreThan4000 &&
  isWeekday &&
  !hasBoughtProductFromITCategory &&
  !hasAttendedDiscountEvent;

console.log(hasPromotion1);

let hasPromotion2 = isPlatinum;
console.log(hasPromotion2);
