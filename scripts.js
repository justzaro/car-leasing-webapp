document.addEventListener('DOMContentLoaded', () => {
    const carType = document.getElementById('carType');
    const carValue = document.getElementById('carValue');
    const carValueRange = document.getElementById('carValueRange');
    const leasePeriod = document.getElementById('leasePeriod');
    const downPayment = document.getElementById('downPayment');
    const downPaymentRange = document.getElementById('downPaymentRange');
    
    const totalLeasingCost = document.getElementById('totalLeasingCost');
    const downPaymentAmount = document.getElementById('downPaymentAmount');
    const downPaymentPercentage = document.getElementById('downPaymentPercentage');
    const monthlyInstallment = document.getElementById('monthlyInstallment');
    const interestRate = document.getElementById('interestRate');

    const updateValues = () => {
        const carValueNum = parseFloat(carValue.value);
        const leasePeriodNum = parseInt(leasePeriod.value, 10);
        const downPaymentPercent = parseInt(downPayment.value, 10);

        const downPaymentAmountValue = carValueNum * (downPaymentPercent / 100);
        const principal = carValueNum - downPaymentAmountValue;
        const rate = carType.value === 'new' ? 0.0299 : 0.037;
        const monthlyRate = rate / 12;

        const monthlyPayment = (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -leasePeriodNum));
        const totalLeaseCost = downPaymentAmountValue + (monthlyPayment * leasePeriodNum);

        totalLeasingCost.textContent = `€${totalLeaseCost.toFixed(2)}`;
        downPaymentAmount.textContent = `€${downPaymentAmountValue.toFixed(2)}`;
        downPaymentPercentage.textContent = `${downPaymentPercent}%`;
        monthlyInstallment.textContent = `€${monthlyPayment.toFixed(2)}`;
        interestRate.textContent = `${(rate * 100).toFixed(2)}%`;
    };

    const syncInputs = (source, target) => {
        target.value = source.value;
        updateValues();
    };

    carValue.addEventListener('input', () => syncInputs(carValue, carValueRange));
    carValueRange.addEventListener('input', () => syncInputs(carValueRange, carValue));
    downPayment.addEventListener('input', () => syncInputs(downPayment, downPaymentRange));
    downPaymentRange.addEventListener('input', () => syncInputs(downPaymentRange, downPayment));
    carType.addEventListener('change', updateValues);
    leasePeriod.addEventListener('change', updateValues);

    updateValues();
});
