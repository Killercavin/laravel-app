const year = () => {
	const year = new Date();
	fullYear = year.getFullYear();
	return document.writeln(fullYear);
}

year();