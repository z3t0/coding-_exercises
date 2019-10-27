function quick_sort(arr, left, right) {
	
	if (left < right) {
		const partitionIndex = partition(arr, left, right);

		// sort left and right
		quick_sort(arr, left, partitionIndex - 1);
		quick_sort(arr, partitionIndex + 1, right);
	}
}

function swap(indexA, indexB, arr) {
	const tempA = arr[indexA];
	arr[indexA] = arr[indexB];
	arr[indexB] = tempA;
}

function partition(arr, left, right) {
	let partitionIndex = left;
	const pivotValue = arr[right];

	for (let i = left; i < right; i++) {
		currentValue = arr[i];
		if (currentValue < pivotValue) {
			swap(i, partitionIndex, arr);
			partitionIndex++;
		}
	}

	swap(right, partitionIndex, arr);

	return partitionIndex;
}

const data = [2, 1, 4, 8, 3, 7, 1];

console.log(data);

quick_sort(data, 0, data.length - 1);

console.log(data);
