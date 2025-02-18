const showBtn = document.querySelector('#show');
const square = document.querySelector('.square');

let isShow = false;

showBtn.onclick = () => {
	isShow = !isShow;
	if (isShow) {
		square.style.display = 'block';
	} else {
		square.style.display = 'none';
	}
};
