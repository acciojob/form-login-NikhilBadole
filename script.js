function getFormvalue() {
    //Write your code here
	let name = document.getElementsByTagName("input")[0];
	let surname = document.getElementsByTagName("input")[1];
	alert(`${name.value} ${surname.value}`);
}
