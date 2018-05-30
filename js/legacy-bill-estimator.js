//makes number look pretty
function Comma(number) {															
		number = '' + number;
		if (number.length > 3) {
			var mod = number.length % 3;
			var output = (mod > 0 ? (number.substring(0,mod)) : '');
			for (i=0 ; i < Math.floor(number.length / 3); i++) {
				if ((mod == 0) && (i == 0))
				output += number.substring(mod + 3 * i, mod + 3 * i + 3);
			else
			output+= ',' + number.substring(mod + 3 * i, mod + 3 * i + 3);
			}
		return (output);
		}
		else return number;
		}

//find out the total 
function doSelect() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}

function doSelect2() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}

function doSelect3() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}


 // SUMMER
 
 function doSelect5() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}

function doSelect6() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}

function doSelect7() {
	if (document.form_maj.newstuChoice) {
		newstu = parseInt(document.form_maj.newstuChoice.options[document.form_maj.newstuChoice.selectedIndex].value);
	} else {
		newstu = 0;
	}
	if (document.form_maj.subjectChoice) {
		subject = parseInt(document.form_maj.subjectChoice.options[document.form_maj.subjectChoice.selectedIndex].value);
	} else {
		subject=0;
	}
	if (document.form_maj.cofChoice) {
		cof = parseInt(document.form_maj.cofChoice.options[document.form_maj.cofChoice.selectedIndex].value);
	} else {
		cof=0;
	}
	if (document.form_maj.feesChoice) {
		fees = parseInt(document.form_maj.feesChoice.options[document.form_maj.feesChoice.selectedIndex].value);
	} else {
		fees=0;
	}
	if (document.form_maj.alienChoice) {
		alien = parseInt(document.form_maj.alienChoice.options[document.form_maj.alienChoice.selectedIndex].value);
	} else {
		alien = 0;
	}
	if (document.form_maj.housingChoice) {
		housing = parseInt(document.form_maj.housingChoice.options[document.form_maj.housingChoice.selectedIndex].value);
	} else {
		housing=0;
	}
	
	total = newstu + subject + fees + alien + housing - cof; 
	
	if (document.form_maj.newstuChoice) {
		document.form_maj.newstu.value = Comma(newstu); 
	}
	if (document.form_maj.subjectChoice) {
		document.form_maj.subject.value = Comma(subject);
	}
	if (document.form_maj.cofChoice) {
		document.form_maj.cof.value = Comma(cof); 
	}
	if (document.form_maj.feesChoice) {
		document.form_maj.fees.value = Comma(fees);
	}
	if (document.form_maj.alienChoice) {
		document.form_maj.alien.value = Comma(alien);
	}
	if (document.form_maj.housingChoice) {
		document.form_maj.housing.value = Comma(housing); 
	}
	
		
	
	
	document.form_maj.total.value = Comma(total);
	return;
}

