	function submitSelectedValue() {
		var selectedValue = document.getElementById("dropdownSelect").value;
		WEIGHT_FOR_T3_0 = selectedValue;
		console.log("提交的权值是: " + selectedValue);
	}

	function submitNumber() {
		var inputValue = document.getElementById('numberInput').value;
		turns = inputValue;
		console.log("用户输入的值为：" + turns); 
	}

	function tablenameSelectValue() {
		var selectedValue = document.getElementById("tablenameSelect").value;
		thefirsttable = selectedValue;
		console.log(thefirsttable); 
		let printt = thefirsttable === '1' ? '感受盘' : '事实盘';
		console.log("用户选择：" + printt); 
	}
	
	function tablenameSelectValue2() {
		var selectedValue = document.getElementById("tablenameSelect2").value;
		thefirsttable2 = selectedValue;
		console.log(thefirsttable2); 		
		let printt = thefirsttable2 === '1' ? '感受盘' : '事实盘';
		console.log("用户选择：" + printt); 
	}
		
	function onDateTimeInputChange() {
		var selectedDateTime = document.getElementById('dateTimeInput').value;
		if (selectedDateTime) {
			console.log("表一日期时间已更改为: " + selectedDateTime);			
		}
	}	
	
	function onDateTimeInputChange2() {
		var selectedDateTime = document.getElementById('dateTimeInput2').value;
		if (selectedDateTime) {
			console.log("表二日期时间已更改为: " + selectedDateTime);			
		}
	}	
	
	function restrictInputToNumbersOnly(inputElement) {
		inputElement.addEventListener('input', function(e) {
		this.textContent = this.textContent.replace(/\D/g, '').slice(0, 2);
		});
	}
	
	function addEventListenersAD(degreeSpans, minuteSpans, dropdowns) {
		for (let i = 0; i < 6; i++) { // 明确处理前六行
			degreeSpans[i].addEventListener('input', function(e) {
				var correspondingDegreeSpan = degreeSpans[i + 6];
				correspondingDegreeSpan.innerText = e.target.innerText; // 直接同步
			});

			minuteSpans[i].addEventListener('input', function(e) {
				var correspondingMinuteSpan = minuteSpans[i + 6];
				correspondingMinuteSpan.innerText = e.target.innerText; // 直接同步
			});
			
			dropdowns[i].addEventListener('change', function(e) {
				var correspondingDropdown = dropdowns[i + 6];
				const mapIndex = (index) => {
					if (index === 6) return 12; // 特殊处理索引5的情况
					else return (index + 6) % 12;
				};
				const correspondingIndex = mapIndex(e.target.selectedIndex);
	console.log("Selected Index:", e.target.selectedIndex, "Mapped Index:", correspondingIndex);
    console.log("Target Dropdown Options:", Array.from(correspondingDropdown.options, option => option.value));
				correspondingDropdown.selectedIndex = correspondingIndex; 
			});
			
		}
	}

	function addInitialRows() {
		var initialCharsTable1 = ["第一宫", "第二宫", "第三宫", "第四宫", "第五宫", "第六宫", "第七宫", "第八宫", "第九宫", "第十宫", "第十一宫", "第十二宫"];        
		var initialCharsTable5 = ["☉ 太阳", "☽ 月亮", "♀ 金星", "☿ 水星", "♂ 火星", "♃ 木星", "♄ 土星", "♅ 天王星", "♆ 海王星", "♇ 冥王星", "К 凯龙星", "Ω 北交点"];
		var tableBody = document.getElementById('tableBody');
		var dropdownTemplate = document.querySelector('#dropdownTemplate select');		
		var degreeSpansAD1 = []; // 用于存储所有度数span元素的数组
		var minuteSpansAD1 = []; // 用于存储所有分钟span元素的数组
		var dropdownsAD1 = []; 
		for (var i = 0; i < initialCharsTable1.length; i++) {
			var newRow = tableBody.insertRow(-1);            
			newRow.insertCell(0).innerText = initialCharsTable1[i];            
			var dropdownCell1 = newRow.insertCell(1);
			var clonedDropdown1 = dropdownTemplate.cloneNode(true); 
			dropdownCell1.appendChild(clonedDropdown1);
        
			var degreeCell1 = newRow.insertCell(2);
			var degreeSpan1 = document.createElement('span');
			degreeSpan1.contentEditable = "true";
			restrictInputToNumbersOnly(degreeSpan1);
			degreeCell1.appendChild(degreeSpan1);

			var minuteCell1 = newRow.insertCell(3);
			var minuteSpan1 = document.createElement('span');
			minuteSpan1.contentEditable = "true";
			restrictInputToNumbersOnly(minuteSpan1);				
			minuteCell1.appendChild(minuteSpan1);

			if (i < 12) { // 或者根据实际需要调整收集范围
				dropdownsAD1.push(dropdownCell1.firstChild);
				degreeSpansAD1.push(newRow.cells[2].querySelector('span'));
				minuteSpansAD1.push(newRow.cells[3].querySelector('span'));
			}
		
			newRow.insertCell(4).innerText = initialCharsTable5[i];            
				
			var dropdownCell2 = newRow.insertCell(5);
			var clonedDropdown2 = dropdownTemplate.cloneNode(true); 
			dropdownCell2.appendChild(clonedDropdown2);
        
			var degreeCell2 = newRow.insertCell(6);
			var degreeSpan2 = document.createElement('span');
			degreeSpan2.contentEditable = "true";
			restrictInputToNumbersOnly(degreeSpan2);
			degreeCell2.appendChild(degreeSpan2);
			
			var minuteCell2 = newRow.insertCell(7);
			var minuteSpan2 = document.createElement('span');
			minuteSpan2.contentEditable = "true";
			restrictInputToNumbersOnly(minuteSpan2);
			minuteCell2.appendChild(minuteSpan2);

		}	
		addEventListenersAD(degreeSpansAD1, minuteSpansAD1, dropdownsAD1);
	}
	
	function addInitialRows2() {
		var initialCharsTable1 = ["第一宫", "第二宫", "第三宫", "第四宫", "第五宫", "第六宫", "第七宫", "第八宫", "第九宫", "第十宫", "第十一宫", "第十二宫"];        
		var initialCharsTable5 = ["☉ 太阳", "☽ 月亮", "♀ 金星", "☿ 水星", "♂ 火星", "♃ 木星", "♄ 土星", "♅ 天王星", "♆ 海王星", "♇ 冥王星", "К 凯龙星", "Ω 北交点"];
		var tableBody = document.getElementById('tableBody3');
		var dropdownTemplate = document.querySelector('#dropdownTemplate select');	
		var degreeSpansAD2 = []; // 用于存储所有度数span元素的数组
		var minuteSpansAD2 = []; // 用于存储所有分钟span元素的数组
		var dropdownsAD2 = []; 	
		for (var i = 0; i < initialCharsTable1.length; i++) {
			var newRow = tableBody.insertRow(-1);            
			newRow.insertCell(0).innerText = initialCharsTable1[i];            
			var dropdownCell1 = newRow.insertCell(1);
			var clonedDropdown1 = dropdownTemplate.cloneNode(true); 
			dropdownCell1.appendChild(clonedDropdown1);
        
			var degreeCell1 = newRow.insertCell(2);
			var degreeSpan1 = document.createElement('span');
			degreeSpan1.contentEditable = "true";
			restrictInputToNumbersOnly(degreeSpan1);
			degreeCell1.appendChild(degreeSpan1);
        
			var minuteCell1 = newRow.insertCell(3);
			var minuteSpan1 = document.createElement('span');
			minuteSpan1.contentEditable = "true";
			restrictInputToNumbersOnly(minuteSpan1);
			minuteCell1.appendChild(minuteSpan1);

			if (i < 12) { // 或者根据实际需要调整收集范围		
				dropdownsAD2.push(dropdownCell1.firstChild);
				degreeSpansAD2.push(newRow.cells[2].querySelector('span'));
				minuteSpansAD2.push(newRow.cells[3].querySelector('span'));
			}
        
			newRow.insertCell(4).innerText = initialCharsTable5[i];            
				
			var dropdownCell2 = newRow.insertCell(5);
			var clonedDropdown2 = dropdownTemplate.cloneNode(true); 
			dropdownCell2.appendChild(clonedDropdown2);
        
			var degreeCell2 = newRow.insertCell(6);
			var degreeSpan2 = document.createElement('span');
			degreeSpan2.contentEditable = "true";
			restrictInputToNumbersOnly(degreeSpan2);
			degreeCell2.appendChild(degreeSpan2);
			
			var minuteCell2 = newRow.insertCell(7);
			var minuteSpan2 = document.createElement('span');
			minuteSpan2.contentEditable = "true";
			restrictInputToNumbersOnly(minuteSpan2);
			minuteCell2.appendChild(minuteSpan2);
		}
		addEventListenersAD(degreeSpansAD2, minuteSpansAD2, dropdownsAD2);
	}
	
	function downloadCSV(downloadData) {
		let csvContent = "data:text/csv;charset=utf-8,"; 
		const table = document.getElementById('dataTable');
		const rows = Array.from(table.rows);
		for (let i = 1; i < rows.length; i++) { 
			if (rows[i] && rows[i].cells && rows[i].cells.length > 0) {
				const rowData = Array.from(rows[i].cells).map((cell, index) => {
					let cellValue;
					if (index === 0 || index === 4) {
						cellValue = cell.textContent.trim();
					} else if (index === 1 || index === 5) {
						cellValue = cell.querySelector('select')?.value || ''; 
						} else {
						cellValue = cell.querySelector('span')?.textContent.trim() || '';
						}
					return cellValue;
				}).join(",");
            csvContent += rowData + "\n";
			}
		}
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "data.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	
	function downloadCSV2(downloadData) {
		let csvContent = "data:text/csv;charset=utf-8,"; 
		const table = document.getElementById('dataTable3');
		const rows = Array.from(table.rows);
		for (let i = 1; i < rows.length; i++) { 
			if (rows[i] && rows[i].cells && rows[i].cells.length > 0) {
				const rowData = Array.from(rows[i].cells).map((cell, index) => {
					let cellValue;
					if (index === 0 || index === 4) {
						cellValue = cell.textContent.trim();
					} else if (index === 1 || index === 5) {
						cellValue = cell.querySelector('select')?.value || ''; 
						} else {
						cellValue = cell.querySelector('span')?.textContent.trim() || '';
						}
					return cellValue;
				}).join(",");
            csvContent += rowData + "\n";
			}
		}
		const encodedUri = encodeURI(csvContent);
		const link = document.createElement("a");
		link.setAttribute("href", encodedUri);
		link.setAttribute("download", "data.csv");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	}
	
	function uploadCSV(event) {
		let file = event.target.files[0];
		if (!file) return;

		let reader = new FileReader();
		reader.onload = function(e) {
			let csvData = e.target.result;
			let inputData = parseCSV(csvData);
			inputData.forEach((row, rowIndex) => {
				let tableBody = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
				let rowElement = tableBody.rows[rowIndex]; 
				try {
					rowElement.cells[1].querySelector('select').value = row[1];
					rowElement.cells[2].querySelector('span').textContent = row[2];
					rowElement.cells[3].querySelector('span').textContent = row[3];
					rowElement.cells[5].querySelector('select').value = row[5];
					rowElement.cells[6].querySelector('span').textContent = row[6];
					rowElement.cells[7].querySelector('span').textContent = row[7];
				} catch (error) {
					console.error(`Error setting value at row ${rowIndex}: `, error);
				}
			});
			let uploadStatus = document.createElement('p');
			uploadStatus.textContent = "文件上传并处理成功!";
			console.log(uploadStatus);
		};
		reader.readAsText(file);
	}
	
	function uploadCSV2(event) {
		let file = event.target.files[0];
		if (!file) return;

		let reader = new FileReader();
		reader.onload = function(e) {
			let csvData = e.target.result;
			let inputData = parseCSV(csvData);
			inputData.forEach((row, rowIndex) => {
				let tableBody = document.getElementById('dataTable3').getElementsByTagName('tbody')[0];
				let rowElement = tableBody.rows[rowIndex]; 
				try {
					rowElement.cells[1].querySelector('select').value = row[1];
					rowElement.cells[2].querySelector('span').textContent = row[2];
					rowElement.cells[3].querySelector('span').textContent = row[3];
					rowElement.cells[5].querySelector('select').value = row[5];
					rowElement.cells[6].querySelector('span').textContent = row[6];
					rowElement.cells[7].querySelector('span').textContent = row[7];
				} catch (error) {
					console.error(`Error setting value at row ${rowIndex}: `, error);
				}
			});
			let uploadStatus = document.createElement('p');
			uploadStatus.textContent = "文件上传并处理成功!";
			console.log(uploadStatus);
		};
		reader.readAsText(file);
	}
	
	function parseCSV(csvString) {    
		if (!csvString || typeof csvString !== 'string') {
        console.error('Invalid CSV string provided.');
        return [];
		}
		return csvString.trim().split("\n").map(line => line.split(",").map(item => item.trim()));
	}
	
	function Fxna(x, y, z) {
		const degreesToMinutes = 60; 
		const zodiacBaseDegrees = 30; 
		function calculateDegreeOffset(sign) {
			const index = zodiacOrder.indexOf(sign);
			return zodiacBaseDegrees * index;
		}
		const degree = y + z / degreesToMinutes; 
		const totalDegree = calculateDegreeOffset(x) + degree;
		return { totalDegree: totalDegree };
	}

	function parseDegree(degreeStr) {
		const [degrees, minutes] = degreeStr.split('°').map(s => s.split('′')[0]);
		return parseInt(degrees) + parseInt(minutes) / 60;
	}
	
	function calculateDegreeOffset(sign) {
		const index = zodiacOrder.indexOf(sign);
		return 30 * index;
	}
	
	function calculateTotalDegree(signDegreePair) {
		signDegreePair = signDegreePair.replace(/^(第一宫|第二宫|第三宫|第四宫|第五宫|第六宫|第七宫|第八宫|第九宫|第十宫|第十一宫|第十二宫|☉ 太阳|☽ 月亮|♀ 金星|☿ 水星|♂ 火星|♃ 木星|♄ 土星|♅ 天王星|♆ 海王星|♇ 冥王星|Κ 凯龙星|К 凯龙星|Ω 北交点)\s*/, '');	
		const [sign, degreeStr] = signDegreePair.split(/(\d+(\.\d+)?°\d+(\.\d+)?′)/);
	return calculateDegreeOffset(sign) + parseDegree(degreeStr);
	}
	
	function sub(X, Y) {//Y追X
		const houses = ["第一宫", "第二宫", "第三宫", "第四宫", "第五宫", "第六宫", "第七宫", "第八宫", "第九宫", "第十宫", "第十一宫", "第十二宫"];
		const celestialBodies = ["☉ 太阳", "☽ 月亮", "♀ 金星", "☿ 水星", "♂ 火星", "♃ 木星", "♄ 土星", "♅ 天王星", "♆ 海王星", "♇ 冥王星", "Κ 凯龙星", "Ω 北交点", "К 凯龙星"];
		const degreesToMinutes = 60; // 1度等于60分钟
		const zodiacBaseDegrees = 30; // 每个星座间隔30度
		const totalDegreeX = calculateTotalDegree(X);
		const totalDegreeY = calculateTotalDegree(Y);
		let degreeDifferenceDirect = calculateTotalDegree(Y) - totalDegreeX;
		let degreeDifference = Math.abs(totalDegreeX - totalDegreeY);
		degreeDifference = Math.min(degreeDifference, 360 - degreeDifference);	
		let degrees = Math.floor(degreeDifference); 
		let minutes = (degreeDifference - degrees) * 60;
		let direction;
		if (degreeDifference === degreeDifferenceDirect) { 
			direction = totalDegreeY < totalDegreeX ? "由大到小" : "由小到大";
		} else {
			if ((degreeDifference + degreeDifferenceDirect) === 0) { 
				direction = totalDegreeY < totalDegreeX ? "由大到小" : "由大到小";
			} else {
				direction = totalDegreeY < totalDegreeX ? "由小到大" : "由大到小";
			}
		}
		return { direction: direction, degreeDifference: degreeDifference };
	}

	function convertPalaceNameToCode(palaceName) {
		const digitMap = {
			'第一宫': '1', '第二宫': '2', '第三宫': '3', '第四宫': '4', '第五宫': '5',
			'第六宫': '6', '第七宫': '7', '第八宫': '8', '第九宫': '9', '第十宫': '10', '第十一': '11', '第十二': '12'
		};
		for (const key in digitMap) {
			if (palaceName.startsWith(key)) {
				const code = digitMap[key];
				return code;
			}
		}
		console.warn('未找到匹配的宫位名称:', palaceName);
		return 'xxa'; 
	}
	
	function getGuardian(sign) {
		const guardian = {
        '太阳':['♌'], '月亮':['♋'], '金星':['♉','♎'], '水星':['♊','♍'], '火星':['♈','♏'], '木星':['♐','♓'], '土星':['♑','♒'], '天王星':'♒', '海王星':'♓', '冥王星':'♏', '凯龙星':'♍'
		};
		return guardian[sign] || '';
	}
	
	function findPalaceNumberBySign(targetSigns, tableRows) {
		if (!Array.isArray(targetSigns)) targetSigns = [targetSigns];
		let result = [];	
		let rows = realhouse(tableRows);
		rows.forEach(item => {
			targetSigns.forEach(targetSign => {			
				if (item.includes(targetSign)) {
					let firstThreeChars = item.trim().substring(0, 3);
					let convertedCode = convertPalaceNameToCode(firstThreeChars);
					if (item.includes("吞")) {
						result.push(`(${convertedCode})`); 
					} else {
						result.push(convertedCode); 
					}			
				}
			});
		});
		return result;
	}
	
	function getNextZodiacSign(currentSign) {
		const currentIndex = zodiacOrder.indexOf(currentSign);
		return zodiacOrder[(currentIndex + 1) % zodiacOrder.length];
	} 
	
	function realhouse(tableRows) {
		const regex = new RegExp('[' + zodiacOrder.map(symbol => symbol.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')).join('') + ']');
		function getHouse(tableRow) {
			return tableRow.split(regex)[0].trim();
		}		
   
			tableRows.push(tableRows[0]);
			let i = 0;
			const t = [];
			while (i < tableRows.length) {
				if (tableRows[i].includes('h')) {
			tableRows.splice(i, 1);
				} else {
					t.push(tableRows[i]);
					i++;
				}
			}	
		for (let j = 0; j < tableRows.length - 1; j++) {
			const degreeDifference = sub(tableRows[j], tableRows[j + 1]).degreeDifference;        
			if (degreeDifference >= 30) {
				const sign = tableRows[j].match(/[♈-♓]/)[0];
				const signNext = tableRows[j + 1].match(/[♈-♓]/)[0];
				let currentSign = getNextZodiacSign(sign);			
				if (currentSign !== signNext) {
				    const house = getHouse(tableRows[j]); 
					const degreeStr = tableRows[j].match(/\d+(\.\d+)?°\d+(\.\d+)?′/)[0];
					let newItem = `${house}吞${currentSign}${degreeStr}`;
					t.push(newItem);
					currentSign = getNextZodiacSign(currentSign);
					if (currentSign !== signNext) {
						let newItem = `${house}吞${currentSign}${degreeStr}`;
						t.push(newItem);
					}
				}
			}
		}		
		return t;
	} 
	
	function calculateDegree(withoutsign) {
		withoutsign = withoutsign.replace(/^(第一宫|第二宫|第三宫|第四宫|第五宫|第六宫|第七宫|第八宫|第九宫|第十宫|第十一宫|第十二宫|☉ 太阳|☽ 月亮|♀ 金星|☿ 水星|♂ 火星|♃ 木星|♄ 土星|♅ 天王星|♆ 海王星|♇ 冥王星|Κ 凯龙星|К 凯龙星|Ω 北交点)\s*/, '');	
		const [sign, degreeStr] = withoutsign.split(/(\d+(\.\d+)?°\d+(\.\d+)?′)/);
		const [parsedDegree,parsedD,parsedminutes] = parseD(degreeStr);
		const totalDegree = calculateDegreeOffset(sign) + parsedDegree;
		return { sign, degree: parsedDegree ,totalDegree: totalDegree,parsedminutes: parsedminutes,parsedD: parsedD};
	}
	
	function parseD(degreeStr) {
		const [degrees, minutes] = degreeStr.split('°').map(s => s.split('′')[0]);
		const parsedDegree = parseInt(degrees) + parseInt(minutes) / 60;
		const parsedD = parseInt(degrees);
		const parsedminutes = parseInt(minutes);
		return [parsedDegree,parsedD,parsedminutes];
	}
	
	function subfx(X, Y, Z, prem) {//X在后，Y含宫位在前，Z递增
		let { sign: simplesignX, degree: simpleX ,totalDegree:totalDegreeX,parsedminutes:parsedminutesX,parsedD:parsedX} = calculateDegree(X);
		let { sign: simplesignY, degree: simpleY ,totalDegree:totalDegreeY,parsedminutes:parsedminutesY,parsedD:parsedY} = calculateDegree(Y);
		let temple = Y;
		let delta = -1;
		let realz = Z;
		let cdab = prem;
		if ((simpleY+Z)>=30) {
			temple = Y + getNextZodiacSign(simplesignY);			
			realz = realz;
//		console.log(temple);		
		}

		let alpha;
		if (parsedminutesY<=parsedminutesX){
			parsedY = parsedY+Z;
			totalDegreeY = totalDegreeY + Z;
			alpha = parsedminutesX-parsedminutesY;
		}
		if (parsedminutesY>parsedminutesX){
			parsedY = parsedY+1+Z;
			totalDegreeY = totalDegreeY + Z + 1;			
			alpha = 60-parsedminutesY+parsedminutesX;
		}

		let degreeDifferenceDirect = totalDegreeY - totalDegreeX;
		degreeDifferenceDirect = Math.abs(degreeDifferenceDirect);
		degreeDifferenceDirect = Math.min(degreeDifferenceDirect, 360 - degreeDifferenceDirect);
		degreeDifferenceDirect = Math.round(degreeDifferenceDirect/10)*10; 
		let degreeDifference = Math.abs(parsedX - parsedY);
		degreeDifference = Math.min(degreeDifference, 360 - degreeDifference);	
		let degrees = Math.floor(degreeDifference); 
		let minutes = (degreeDifference - degrees) * 60;			

		let direction;
		direction = temple;
		if (cdab === 1) {
			if (alpha - 23 < 0) {
				alpha = alpha + 60 - 23;
				realz = realz - 1;
			} else {
				alpha = alpha - 23;
			}
		}	
		if (degrees % 30 === 0){
			delta = alpha;
		}
//		if (delta != -1){console.log(realz);console.log(direction);console.log(degrees);console.log(X);console.log(delta);}
		return { direction: direction, degreeDifferenceDirect: degreeDifferenceDirect,delta: delta,realz: realz,cdef:direction,cdgh:X,cdab:cdab};
	}

	function isDuplicate(arr, item) {
		return arr.some(existingItem => JSON.stringify(existingItem) === JSON.stringify(item));
	}

	function removeDuplicates(array) {
		const uniqueArray = [];
		array.forEach(item => {
			if (!isDuplicate(uniqueArray, item)) {
				uniqueArray.push(item);
			}
		});
		return uniqueArray;
	}

	function sortAllMatchingPairs(allMatchingPairs) {
		allMatchingPairs.sort((a, b) => a[0] - b[0]);
	}

	function findMatchingPairs(D, C, E) {	
		let allMatchingPairs = [];
		for (let prem = 0; prem <= 1; prem++) {
			let matchingPairs = []; 
				for (let t = 0; t <= E; t++) { 
					for (let bElement of C) { 
						for (let aElement of D) { 
							const result = subfx(aElement, bElement, t, prem);
							let k = Math.floor(result.degreeDifferenceDirect);
							let ey = result.delta;
							let rz = result.realz;
							let ab = result.cdab;
							if (ey != -1 && aElement != bElement) {
								if (ab === 1){
									let ef = result.cdef;
									let gh = result.cdgh;
									if (!isDuplicate(matchingPairs, [rz, ef, k, gh, ey, prem])) {
										matchingPairs.push([rz, ef, k, gh, ey, prem]);
									}
								}else{
									let cd = result.direction;
									if (!isDuplicate(matchingPairs, [rz, cd, k, aElement, ey, prem])) {
										matchingPairs.push([rz, cd, k, aElement, ey, prem]);
								}											
								}
							}
						}
//					}

				}
			}
			allMatchingPairs = allMatchingPairs.concat(matchingPairs);
		}		
		sortAllMatchingPairs(allMatchingPairs);
		allMatchingPairs = removeDuplicates(allMatchingPairs);
//		console.log(allMatchingPairs);		
		return allMatchingPairs; 
	}
	
	function collectDegreeDifferences(starBaseDataArray, HousedeltaArray) {
		for (const starData of starBaseDataArray) {
			const starName = starData[1].split(' ')[0];
			const row = [starName];
			for (const houseData of HousedeltaArray) {
				const angleResult = sub(starData[1], houseData.combined);
				row.push(angleResult.degreeDifference.toFixed(2)); 
			}
			degreeDifferencesArray.push(row);
		}
		return degreeDifferencesArray;
	}	

	function extractSymbolOrConstellation(text) {
		const constellationMatch = text.match(/\u2648\ufe0f?\u2648\ufe0f?|♈|♉|♊|♋|♌|♍|♎|♏|♐|♑|♒|♓/);
		if (!constellationMatch) {
			const specialPointMatch = text.match(/北交点|南交点|月亮|太阳|水星|金星|火星|木星|土星|天王星|海王星|冥王星|凯龙星/i);
			return specialPointMatch ? specialPointMatch[0] : ''; 
		}
		return constellationMatch[0];
	}
	
	function convertDegreeMinuteToDecimal(text) {
        const match = text.match(/\d+(\.\d*)°(\d+)′/);
        if (match) {
            const degrees = parseInt(match[1], 10);
            const minutes = parseInt(match[2], 10);
            return degrees + minutes / 60;
        }
        return null;
    }
	
	function processTables(T1, T2, T3) {
		const result = [];
		T3.forEach(rowInT3 => {
			const newRow = {
				T3_0: rowInT3[0],
				x: rowInT3[1][0],
				zmatch: convertDegreeMinuteToDecimal(rowInT3[1]),
				x_T1_0: '', x_T1_2: '',
				y: rowInT3[3][0],
				z: extractSymbolOrConstellation(rowInT3[3]),
				y_T1_0: '', y_T1_2: '',				
				T3_2: ` ${rowInT3[2]} `, 
				T3_4: rowInT3[4],
				diff: null,
				prem: rowInT3[5]
			};
			const xMatchInT1 = T1.find(item => item[1].startsWith(newRow.x));
			if (xMatchInT1) {
				newRow.x_T1_0 = `[${xMatchInT1[0]}]`;//在这里添加方括号
				newRow.x_T1_2 = xMatchInT1[2];
			}
			const yMatchInT1 = T1.find(item => item[1].startsWith(newRow.y));
			if (yMatchInT1) {
				newRow.y_T1_0 = yMatchInT1[0];
				newRow.y_T1_2 = yMatchInT1[2];
			}
			const t2RowIndex = T2.findIndex(item => item[0] === newRow.x);
			if (t2RowIndex !== -1) {
				const timeIndex = parseInt(newRow.x_T1_0.replace('h', ''), 10) - 1;
				if (timeIndex >= 0 && timeIndex < T2[t2RowIndex].length - 1) {
					const valueFromT2 = T2[t2RowIndex][timeIndex + 2]; 
					newRow.diff = valueFromT2 - newRow.T3_0;
					newRow.diff += `, ${newRow.prem}`;
					if (newRow.diff > newRow.zmatch) {
						let currentHour = parseInt(newRow.x_T1_0.replace('[', '').replace(']', '').replace('h', ''), 10);// 移除方括号后再处理
						if (currentHour === 12) {
							newRow.x_T1_0 = '01h';
						} else {
							newRow.x_T1_0 = `${(currentHour % 12 === 0 ? 1 : currentHour % 12)}h`;
						}
					}
				}
			}
			result.push(newRow);
		});
		return result;
	}
	
	function assignTextColor(value) {
		switch (value) {
			case ' 0 ':
				return '#ff0000'; // 举例，根据需要调整
			case ' 30 ':
				return '#a6a6a6';
			case ' 60 ':
				return '#7f7f7f';
			case ' 90 ':
				return '#f79646';
			case ' 120 ':
				return '#000000';	
			case ' 150 ':
				return '#bfbfbf';		
			case ' 180 ':
				return '#e36c0a';				
			default:
				console.warn(`Unrecognized value for text coloring: ${value}`);
				return 'lightred'; //感受'#00b0f0';事实'#f79646';
		}
	}
	
	function displayResultsInTable(results) {
		let resultsTable = document.getElementById('resultsTable') || createTable();
		resultsTable.classList.add('initial-view'); 		
		while (resultsTable.firstChild) {
			resultsTable.removeChild(resultsTable.firstChild);
		}
		let displayOrder = ['日期', 'x', 'x_T1_2', 'x_T1_0', 'T3_2', 'y_T1_0', 'y', 'z', 'y_T1_2', 'T3_4'];
		let thead = document.createElement('thead');
		let headerRow = document.createElement('tr');
		headerRow.appendChild(document.createElement('th'));
		headerRow.appendChild(document.createElement('th'));	
		headerRow.appendChild(document.createElement('th')); 
		thead.appendChild(headerRow);
		resultsTable.appendChild(thead);
		let tbody = document.createElement('tbody');
		let rows = results.map(rowObj => {
			if (rowObj['y_T1_2'] === "null" || rowObj['x_T1_2'] === "null") return;
			let row = document.createElement('tr');
			let textColor = assignTextColor(rowObj['T3_2']);
			row.style.color = textColor;  
			let baseDateTime = new Date(document.getElementById('dateTimeInput').value);
			
			let adjustedDateTime = new Date(baseDateTime);
			let T3_0_minutes = parseInt(rowObj['T3_0'], 10) * WEIGHT_FOR_T3_0 * 60; 
			let T3_4_minutes = parseFloat(rowObj['T3_4']) * 0.4 * 60 || 0;
			let totalMinutes = adjustedDateTime.getMinutes() + T3_0_minutes + T3_4_minutes; 
			let addedHours = Math.floor(totalMinutes / 60);
			totalMinutes %= 60;

			if (totalMinutes < 0) {
				totalMinutes += 60;
				addedHours--;
			}
			let totalHours = adjustedDateTime.getHours() + addedHours;
			let addedDaysDueToTime = Math.floor(totalHours / 24);
			totalHours %= 24;
			if (totalHours < 0) {
				totalHours += 24;
				addedDaysDueToTime--;
			}
			adjustedDateTime.setHours(totalHours, totalMinutes);
			adjustedDateTime.setDate(adjustedDateTime.getDate() + addedDaysDueToTime);
			if (rowObj['prem'] === 1) {
				row.style.fontWeight = 'bold'; 
			}

//			row.appendChild(createTableCell(rowObj['T3_4']));				
			let timeClass = thefirsttable2 === '1' ? 'time-prem-1' : 'time-prem-others';
			let timePart = `<span class="time-data ${timeClass}">`;
			timePart += adjustedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			timePart += '</span>';	
			let hours = parseInt(adjustedDateTime.getHours(), 10);
			if (hours <= 2) {
				timePart = ` +1 ${timePart}`;
				adjustedDateTime.setDate(adjustedDateTime.getDate() - 1); 
			} else {
				timePart = ` ${timePart}`;
			}
		
			row.appendChild(createTableCell(adjustedDateTime.toLocaleDateString().split('/').slice(1).join('/'), '5px')); 
			row.appendChild(createTableCell(rowObj['T3_0'], '5px'));
			let combinedDataWithTime = displayOrder
				.map(key => {
					let value = rowObj[key];
					if (key === 'x_T1_0') {
						value = value.replace(/h/g, ''); 
					} else if (key === 'x_T1_2') {
						value = value.replace(/^\</, '').replace(/>$/, '').replace(/\//g, '+'); 
					} else if (key === 'y_T1_0') { 
						value = `${('0' + rowObj[key].replace('h', '')).slice(-2)}h`; 
					}                
					if (key === 'T3_4') return '';
					return value === 0 ? '0' : value || '';
				})
				.concat([`<div class="${timeClass}">${timePart}</div>`])
				.join('');
			let combinedCell = createCombinedDataCell(combinedDataWithTime);
			row.appendChild(combinedCell);
			if (hours <= 2) {
				adjustedDateTime.setDate(adjustedDateTime.getDate() + 1); 
			}				
			row.dataset.adjustedDateTime = adjustedDateTime.toISOString();
			tbody.appendChild(row);
			return row;
		}).filter(Boolean);
		rows.sort((rowA, rowB) => {
			let adjustedDateA = new Date(rowA.dataset.adjustedDateTime);
			let adjustedDateB = new Date(rowB.dataset.adjustedDateTime);
			return adjustedDateA - adjustedDateB;
		});
		console.log("排序后的数组:", rows);
		rows.forEach(row => tbody.appendChild(row));		
		resultsTable.appendChild(tbody);
	}
	
	function displayResultsInTable2(results) {
		let resultsTable2 = document.getElementById('resultsTable2') || createTable2();
		resultsTable2.classList.add('initial-view'); 
		while (resultsTable2.firstChild) {
			resultsTable2.removeChild(resultsTable2.firstChild);
		}
		let displayOrder = ['日期', 'x', 'x_T1_2', 'x_T1_0', 'T3_2', 'y_T1_0', 'y', 'z', 'y_T1_2', 'T3_4'];
		let thead = document.createElement('thead');
		let headerRow = document.createElement('tr');
		headerRow.appendChild(document.createElement('th'));
		headerRow.appendChild(document.createElement('th'));		
		headerRow.appendChild(document.createElement('th')); 
		thead.appendChild(headerRow);
		resultsTable2.appendChild(thead);
		let tbody = document.createElement('tbody');
		let rows = results.map(rowObj => {
			if (rowObj['y_T1_2'] === "null" || rowObj['x_T1_2'] === "null") return;
			let row = document.createElement('tr');
			let textColor = assignTextColor(rowObj['T3_2']);
			row.style.color = textColor;  
			let baseDateTime = new Date(document.getElementById('dateTimeInput2').value);
			
			let adjustedDateTime = new Date(baseDateTime);
			let T3_0_minutes = parseInt(rowObj['T3_0'], 10) * WEIGHT_FOR_T3_0 * 60; 
			let T3_4_minutes = parseFloat(rowObj['T3_4']) * 0.4 * 60 || 0;
			let totalMinutes = adjustedDateTime.getMinutes() + T3_0_minutes + T3_4_minutes; 
			let addedHours = Math.floor(totalMinutes / 60);
			totalMinutes %= 60;

			if (totalMinutes < 0) {
				totalMinutes += 60;
				addedHours--;
			}
			let totalHours = adjustedDateTime.getHours() + addedHours;
			let addedDaysDueToTime = Math.floor(totalHours / 24);
			totalHours %= 24;
			if (totalHours < 0) {
				totalHours += 24;
				addedDaysDueToTime--;
			}
			adjustedDateTime.setHours(totalHours, totalMinutes);
			adjustedDateTime.setDate(adjustedDateTime.getDate() + addedDaysDueToTime);
			if (rowObj['prem'] === 1) {
				row.style.fontWeight = 'bold'; 
			}

//			row.appendChild(createTableCell(rowObj['T3_4']));				
			let timeClass = thefirsttable === '1' ? 'time-prem-1' : 'time-prem-others';
			let timePart = `<span class="time-data ${timeClass}">`;
			timePart += adjustedDateTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
			timePart += '</span>';	
			let hours = parseInt(adjustedDateTime.getHours(), 10);
			if (hours <= 2) {
				timePart = ` +1 ${timePart}`;
				adjustedDateTime.setDate(adjustedDateTime.getDate() - 1); 
			} else {
				timePart = ` ${timePart}`;
			}
		
			row.appendChild(createTableCell(adjustedDateTime.toLocaleDateString().split('/').slice(1).join('/'), '5px')); 
			row.appendChild(createTableCell(rowObj['T3_0'], '5px'));
			let combinedDataWithTime = displayOrder
				.map(key => {
					let value = rowObj[key];
					if (key === 'x_T1_0') {
						value = value.replace(/h/g, ''); 
					} else if (key === 'x_T1_2') {
						value = value.replace(/^\</, '').replace(/>$/, '').replace(/\//g, '+'); 
					} else if (key === 'y_T1_0') { 
						value = `${('0' + rowObj[key].replace('h', '')).slice(-2)}h`; 
					}                
					if (key === 'T3_4') return '';
					return value === 0 ? '0' : value || '';
				})
				.concat([`<div class="${timeClass}">${timePart}</div>`])
				.join('');
			let combinedCell = createCombinedDataCell(combinedDataWithTime);
			row.appendChild(combinedCell);
			if (hours <= 2) {
				adjustedDateTime.setDate(adjustedDateTime.getDate() + 1); 
			}		
			row.dataset.adjustedDateTime = adjustedDateTime.toISOString();		
			tbody.appendChild(row);
			return row;
		}).filter(Boolean);
		rows.sort((rowA, rowB) => {
			let adjustedDateA = new Date(rowA.dataset.adjustedDateTime);
			let adjustedDateB = new Date(rowB.dataset.adjustedDateTime);
			return adjustedDateA - adjustedDateB;
		});
		rows.forEach(row => tbody.appendChild(row));		
		resultsTable2.appendChild(tbody);
	}

	function createCombinedDataCell(content) {
		let cell = document.createElement('td');
		cell.innerHTML = content;
		cell.style.fontSize = '10pt'; 
		cell.style.fontfamily = '一只喵的碎碎念'; 
		cell.classList.add('visually-larger'); 
		return cell;
	}
	
	function createTableCell(content, fixedWidth = '5px') {
		let cell = document.createElement('td');
		cell.textContent = content;
		cell.style.fontSize = '10pt'; 
		cell.style.fontFamily = '一只喵的碎碎念';
		cell.style.width = fixedWidth;
		cell.classList.add('visually-larger');
		return cell;
	}	


	function createTable() {
		let table = document.createElement('table');
		table.id = 'resultsTable';
		table.className = 'styled-table';
		document.body.appendChild(table);
		return table;
	}
	
	function createTable2() {
		let table = document.createElement('table');
		table.id = 'resultsTable2';
		table.className = 'styled-table';
		document.body.appendChild(table);
		return table;
	}	
	
	function submit1Data() {
		var tableBody = document.getElementById('tableBody');
		var summaryTable = document.createElement('table');
		var summaryThead = document.createElement('thead');
		var summaryTbody = document.createElement('tbody');
		summaryTable.appendChild(summaryThead);
		summaryTable.appendChild(summaryTbody);
		var newArrayTSorted = [];
		let SortedArray = [];

		var headerRow = document.createElement('tr');
		['宫首星座与角度', '行星星座与角度','行星守护宫位'].forEach(function(headerText) {
			var header = document.createElement('th');
			header.textContent = headerText;
			headerRow.appendChild(header);
		});
		summaryThead.appendChild(headerRow);
		
		var dataToProcess;
		if (typeof uploadedData !== 'undefined' && uploadedData.length > 0) {
			dataToProcess = uploadedData;
		} else{
			dataToProcess = Array.from(tableBody.rows).map(row => [
            row.cells[0].innerText,
            row.cells[1].querySelector('select').value,
            row.cells[2].querySelector('span').textContent,
            row.cells[3].querySelector('span').textContent,
            row.cells[4].innerText,
            row.cells[5].querySelector('select').value,
            row.cells[6].querySelector('span').textContent,
            row.cells[7].querySelector('span').textContent
			]);
		}
		var rowDataArray = [];
		for (var i = 0; i < tableBody.rows.length; i++) {
			var row1 = tableBody.rows[i];
			var house = row1.cells[0].innerText;
			var sign1 = row1.cells[1].querySelector('select').value;
			var degree1Str = row1.cells[2].querySelector('span').textContent;
			var minute1Str = row1.cells[3].querySelector('span').textContent;
			var planet = row1.cells[4].innerText;
			var sign2 = row1.cells[5].querySelector('select').value;
			var degree2Str = row1.cells[6].querySelector('span').textContent;
			var minute2Str = row1.cells[7].querySelector('span').textContent;
    
			rowDataArray.push({
				house: house,
				sign1: sign1,
				degree1Str: degree1Str,
				minute1Str: minute1Str,
				planet: planet,
				sign2: sign2,
				degree2Str: degree2Str,
				minute2Str: minute2Str
			});
		}

		if (rowDataArray.length > 0) {
			var X = rowDataArray[0].house + rowDataArray[0].sign1 + rowDataArray[0].degree1Str + '°' + rowDataArray[0].minute1Str + '′';
			var newArrayT = [];
			for (let i = 0; i < tableBody.rows.length; i++) {
				newArrayT.push({
					combined: rowDataArray[i].house + rowDataArray[i].sign1 + rowDataArray[i].degree1Str + '°' + rowDataArray[i].minute1Str + '′',
					originalIndex: i
				});
				HousedeltaArray.push({
					combined: rowDataArray[i].house + rowDataArray[i].sign1 + rowDataArray[i].degree1Str + '°' + rowDataArray[i].minute1Str + '′',
				});
				newArrayT.push({
					combined: rowDataArray[i].planet + rowDataArray[i].sign2 + rowDataArray[i].degree2Str + '°' + rowDataArray[i].minute2Str + '′',
					originalIndex: i + tableBody.rows.length 
				});
			}
//			console.log("新数组建立");console.log(newArrayT);
			newArrayTSorted = newArrayT.slice();
			newArrayTSorted.sort((a, b) => {
				const aResult = sub(X, a.combined);
				const bResult = sub(X, b.combined);
				if (aResult.direction !== bResult.direction) {      
					return aResult.direction === "由小到大" ? -1 : 1;
				}
				const order = aResult.direction === "由小到大"
					? aResult.degreeDifference - bResult.degreeDifference 
					: bResult.degreeDifference - aResult.degreeDifference;
				return order;
			});
//			console.log("数组排序");console.log(newArrayTSorted);
			SortedArray = newArrayTSorted;
			let previousCombined = "";
			for (let i = 0; i < newArrayTSorted.length; i++) {
				let originalIndex = newArrayTSorted[i].originalIndex;
				let newRow = document.createElement('tr');    
				if (originalIndex < tableBody.rows.length) {
					const currentCombined = newArrayTSorted[i].combined;
					newRow.innerHTML = '<td>' + currentCombined + '</td><td></td>';
					previousCombined = currentCombined; 
					} else {
						let prefix = previousCombined ? convertPalaceNameToCode(previousCombined.substring(0, 3)) : "";
						newRow.innerHTML = '<td>' + prefix + 'h' + '</td><td>' + newArrayTSorted[i].combined + '</td>';
					}
				summaryTbody.appendChild(newRow);
			}
		} else {
			console.error("rowDataArray is empty, no data to extract.");
		}

		function fillThirdColumn() {
			let rows = summaryTbody.querySelectorAll('tr'); 
			let firstColumnData = Array.from(rows).map(row => row.cells[0].textContent.trim());		
			rows.forEach((row, index) => {
				let secondColumnData = row.children[1].innerText; 		
				let planetSign = ''; 
				['太阳', '月亮', '金星', '水星', '火星', '木星', '土星', '天王星', '海王星', '冥王星', '凯龙星', '北交点'].forEach(planet => {
					if (secondColumnData.includes(planet)) {
						planetSign = planet;
					}
				});
        
				if (planetSign) {
					if (planetSign === "北交点") {
					row.insertCell(-1).innerText = 'null'; 
					}else{
					const guardians = getGuardian(planetSign);
					let guardianPlaces = Array.isArray(guardians) ? guardians : [guardians];
					guardianPlaces = findPalaceNumberBySign(guardians, firstColumnData)
					const uniqueGuardianPlaces = [...new Set(guardianPlaces.filter(gp => gp))];
					row.insertCell(-1).innerText = '<' + uniqueGuardianPlaces.join('/') + '>'; 
					}
				}	
			});
		}
        fillThirdColumn();

		function removeNumbersAndChineseFromColumn(data) {
			return data.replace(/[\u4e00-\u9fa5]/g, '');
		}
		
		function createAndAppendNewTableWithFullData(turns) {
			var newSummaryTable = document.createElement('table');
			var newSummaryTbody = document.createElement('tbody');
			newSummaryTable.appendChild(newSummaryTbody);
			var rows = summaryTbody.querySelectorAll('tr');
			var cleanedDataArray = [];
			rows.forEach(row => {
				if (row.cells.length >= 3 && row.cells[0].innerText.trim() && row.cells[1].innerText.trim() && row.cells[2].innerText.trim()) {
					var newRow = document.createElement('tr');
					var secondColumnCleaned = row.cells[1].innerText.trim();
					cleanedDataArray.push(secondColumnCleaned);
					var rowData = [
					row.cells[0].innerText.trim(), 
					row.cells[1].innerText.trim(),
					row.cells[2].innerText.trim()
					];
					starBaseDataArray.push(rowData);
					newRow.innerHTML = '<td>' + row.cells[0].innerText + removeNumbersAndChineseFromColumn(row.cells[1].innerText) + row.cells[2].innerText + '</td>';
					newSummaryTbody.appendChild(newRow);
				}
			});
			let stringArray = SortedArray.map(item => item.combined);
//			console.log("行星在左宫位+行星在右");console.log(cleanedDataArray);console.log(stringArray);	
			ContrastResult = findMatchingPairs(cleanedDataArray, cleanedDataArray, turns);
		}
		createAndAppendNewTableWithFullData(turns);	
//		console.log(starBaseDataArray);//T1
//		console.log(collectDegreeDifferences(starBaseDataArray, HousedeltaArray));//T2
//		console.log(ContrastResult);//T3
		let processedData = processTables(starBaseDataArray, collectDegreeDifferences(starBaseDataArray, HousedeltaArray), ContrastResult);
//		console.log(processedData);		
		displayResultsInTable(processedData);

	}
	
	function submit2Data() {
		var tableBody = document.getElementById('tableBody3');
		var summaryTable = document.createElement('table');
		var summaryThead = document.createElement('thead');
		var summaryTbody = document.createElement('tbody');
		summaryTable.appendChild(summaryThead);
		summaryTable.appendChild(summaryTbody);
		var newArrayTSorted = [];
		let SortedArray = [];

		var headerRow = document.createElement('tr');
		['宫首星座与角度', '行星星座与角度','行星守护宫位'].forEach(function(headerText) {
			var header = document.createElement('th');
			header.textContent = headerText;
			headerRow.appendChild(header);
		});
		summaryThead.appendChild(headerRow);
		
		var dataToProcess;
		if (typeof uploadedData !== 'undefined' && uploadedData.length > 0) {
			dataToProcess = uploadedData;
		} else{
			dataToProcess = Array.from(tableBody.rows).map(row => [
            row.cells[0].innerText,
            row.cells[1].querySelector('select').value,
            row.cells[2].querySelector('span').textContent,
            row.cells[3].querySelector('span').textContent,
            row.cells[4].innerText,
            row.cells[5].querySelector('select').value,
            row.cells[6].querySelector('span').textContent,
            row.cells[7].querySelector('span').textContent
			]);
		}
		var rowDataArray = [];
		for (var i = 0; i < tableBody.rows.length; i++) {
			var row1 = tableBody.rows[i];
			var house = row1.cells[0].innerText;
			var sign1 = row1.cells[1].querySelector('select').value;
			var degree1Str = row1.cells[2].querySelector('span').textContent;
			var minute1Str = row1.cells[3].querySelector('span').textContent;
			var planet = row1.cells[4].innerText;
			var sign2 = row1.cells[5].querySelector('select').value;
			var degree2Str = row1.cells[6].querySelector('span').textContent;
			var minute2Str = row1.cells[7].querySelector('span').textContent;
    
			rowDataArray.push({
				house: house,
				sign1: sign1,
				degree1Str: degree1Str,
				minute1Str: minute1Str,
				planet: planet,
				sign2: sign2,
				degree2Str: degree2Str,
				minute2Str: minute2Str
			});
		}

		if (rowDataArray.length > 0) {
			var X = rowDataArray[0].house + rowDataArray[0].sign1 + rowDataArray[0].degree1Str + '°' + rowDataArray[0].minute1Str + '′';
			var newArrayT = [];
			for (let i = 0; i < tableBody.rows.length; i++) {
				newArrayT.push({
					combined: rowDataArray[i].house + rowDataArray[i].sign1 + rowDataArray[i].degree1Str + '°' + rowDataArray[i].minute1Str + '′',
					originalIndex: i
				});
				HousedeltaArray.push({
					combined: rowDataArray[i].house + rowDataArray[i].sign1 + rowDataArray[i].degree1Str + '°' + rowDataArray[i].minute1Str + '′',
				});
				newArrayT.push({
					combined: rowDataArray[i].planet + rowDataArray[i].sign2 + rowDataArray[i].degree2Str + '°' + rowDataArray[i].minute2Str + '′',
					originalIndex: i + tableBody.rows.length 
				});
			}
			newArrayTSorted = newArrayT.slice();
			newArrayTSorted.sort((a, b) => {
				const aResult = sub(X, a.combined);
				const bResult = sub(X, b.combined);
				if (aResult.direction !== bResult.direction) {      
					return aResult.direction === "由小到大" ? -1 : 1;
				}
				const order = aResult.direction === "由小到大"
					? aResult.degreeDifference - bResult.degreeDifference 
					: bResult.degreeDifference - aResult.degreeDifference;
				return order;
			});
			SortedArray = newArrayTSorted;
			let previousCombined = "";
			for (let i = 0; i < newArrayTSorted.length; i++) {
				let originalIndex = newArrayTSorted[i].originalIndex;
				let newRow = document.createElement('tr');    
				if (originalIndex < tableBody.rows.length) {
					const currentCombined = newArrayTSorted[i].combined;
					newRow.innerHTML = '<td>' + currentCombined + '</td><td></td>';
					previousCombined = currentCombined; 
					} else {
						let prefix = previousCombined ? convertPalaceNameToCode(previousCombined.substring(0, 3)) : "";
						newRow.innerHTML = '<td>' + prefix + 'h' + '</td><td>' + newArrayTSorted[i].combined + '</td>';
					}
				summaryTbody.appendChild(newRow);
			}
		} else {
			console.error("rowDataArray is empty, no data to extract.");
		}

		function fillThirdColumn() {
			let rows = summaryTbody.querySelectorAll('tr'); 
			let firstColumnData = Array.from(rows).map(row => row.cells[0].textContent.trim());		
			rows.forEach((row, index) => {
				let secondColumnData = row.children[1].innerText; 		
				let planetSign = ''; 
				['太阳', '月亮', '金星', '水星', '火星', '木星', '土星', '天王星', '海王星', '冥王星', '凯龙星', '北交点'].forEach(planet => {
					if (secondColumnData.includes(planet)) {
						planetSign = planet;
					}
				});
        
				if (planetSign) {
					if (planetSign === "北交点") {
					row.insertCell(-1).innerText = 'null'; 
					}else{
					const guardians = getGuardian(planetSign);
					let guardianPlaces = Array.isArray(guardians) ? guardians : [guardians];
					guardianPlaces = findPalaceNumberBySign(guardians, firstColumnData)
					const uniqueGuardianPlaces = [...new Set(guardianPlaces.filter(gp => gp))];
					row.insertCell(-1).innerText = '<' + uniqueGuardianPlaces.join('/') + '>'; 
					}
				}	
			});
		}
        fillThirdColumn();

		function removeNumbersAndChineseFromColumn(data) {
			return data.replace(/[\u4e00-\u9fa5]/g, '');
		}
		
		function createAndAppendNewTableWithFullData(turns) {
			var newSummaryTable = document.createElement('table');
			var newSummaryTbody = document.createElement('tbody');
			newSummaryTable.appendChild(newSummaryTbody);
			var rows = summaryTbody.querySelectorAll('tr');
			var cleanedDataArray = [];
			rows.forEach(row => {
				if (row.cells.length >= 3 && row.cells[0].innerText.trim() && row.cells[1].innerText.trim() && row.cells[2].innerText.trim()) {
					var newRow = document.createElement('tr');
					var secondColumnCleaned = row.cells[1].innerText.trim();
					cleanedDataArray.push(secondColumnCleaned);
					var rowData = [
					row.cells[0].innerText.trim(), 
					row.cells[1].innerText.trim(),
					row.cells[2].innerText.trim()
					];
					starBaseDataArray.push(rowData);
					newRow.innerHTML = '<td>' + row.cells[0].innerText + removeNumbersAndChineseFromColumn(row.cells[1].innerText) + row.cells[2].innerText + '</td>';
					newSummaryTbody.appendChild(newRow);
				}
			});
			let stringArray = SortedArray.map(item => item.combined);
			ContrastResult = findMatchingPairs(cleanedDataArray, cleanedDataArray, turns);
		}
		createAndAppendNewTableWithFullData(turns);	
		let processedData = processTables(starBaseDataArray, collectDegreeDifferences(starBaseDataArray, HousedeltaArray), ContrastResult);
		displayResultsInTable2(processedData);

	}

	function submitData(){
		submit1Data();
		starBaseDataArray = [] ;
		HousedeltaArray = [];
		degreeDifferencesArray = [];
		ContrastResult;
		submit2Data();
		
		var button1 = document.createElement("button");
		button1.textContent = "生成并下载表格";
		button1.onclick = function() {
		    window.print();
			console.log("按钮1被点击了");
		};

		var button2 = document.createElement("button");
		button2.textContent = "合并处理";		
	
		let style = document.createElement('style');
		style.innerHTML = `
			#mergedResultsTable {
				border-collapse: collapse;
			}
			#mergedResultsTable td {
				border: 1px solid black; 
				padding: 5px;
			}
			#mergedResultsTable .empty-cell {
				border-top: none;
				border-left: none;
				border-bottom: none;
				border-right: none;
				background-color: transparent;
			}
			#mergedResultsTable .apply-initial-view {
				font-size: 6.5pt !important; 
			}
		`;
		document.head.appendChild(style);
		
		button2.onclick = function() {
			console.log("按钮2被点击了");
			let table1Rows = Array.from(document.querySelectorAll('#resultsTable tbody tr'));
			let table2Rows = Array.from(document.querySelectorAll('#resultsTable2 tbody tr'));
			let combinedRows = table1Rows.concat(table2Rows);
			combinedRows.sort((rowA, rowB) => {
				let adjustedDateA = new Date(rowA.dataset.adjustedDateTime);
				let adjustedDateB = new Date(rowB.dataset.adjustedDateTime);
				return adjustedDateA - adjustedDateB;
			});

			let mergedRows = [];
			let prevValue = null;
			combinedRows.forEach(row => {
				let currentValue = row.cells[0].textContent; 
				console.log(currentValue);
				if (currentValue !== prevValue) { 
					mergedRows.push(row);
					prevValue = currentValue;
				} else { 
					let newRow = row.cloneNode(true);
					newRow.cells[0].textContent = ''; 
					newRow.cells[0].classList.add('empty-cell'); 
					newRow.cells[1].textContent = ''; 
					newRow.cells[1].classList.add('empty-cell');					
					mergedRows.push(newRow);
				}
			});

			let mergedTable = document.createElement('table');
			mergedTable.id = 'mergedResultsTable';
			let mergedTbody = document.createElement('tbody');
			mergedRows.forEach(row => {
				let newRow = row.cloneNode(true);
   			 	newRow.cells[2].classList.add('apply-initial-view');
				mergedTbody.appendChild(newRow);
			});

			mergedTable.appendChild(mergedTbody);                    
			document.body.appendChild(mergedTable);			
		};

		var container = document.body;
		container.appendChild(button1);
		container.appendChild(button2);
	}