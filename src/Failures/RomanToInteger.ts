const RomanTable = new Map([
	['I', 1],
	['V', 5],
	['X', 10],
	['L', 50],
	['C', 100],
	['D', 500],
	['M', 1000],
	['IV', 4],
	['IX', 9],
	['XL', 40],
	['XC', 90],
	['CD', 400],
	['CM', 900],
]);

export default {
	transcribeRoman(roman: string) {
		let sum = 0;
		let isIrreg = false;

		for (let index = 0; index < roman.length; index++) {
			let firstChar = RomanTable.get(roman.charAt(index)) || 0;
			let nextChar = RomanTable.get(roman.charAt(index + 1)) || 0;

			if (isIrreg) {
				isIrreg = false;
				continue;
			} else {
				if (firstChar < nextChar) {
					sum +=
						RomanTable.get(roman.charAt(index) + roman.charAt(index + 1)) || 0;

					isIrreg = true;
				} else {
					sum += firstChar;
				}
			}
		}
		return sum;
	},
};
