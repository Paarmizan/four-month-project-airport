let arrowHour = document.querySelector('.circle__arrow-hour');
let arrowMinute = document.querySelector('.circle__arrow-minute');
let arrowSecond = document.querySelector('.circle__arrow-second');
let spanDate = document.querySelector('.date__value-time');


window.onload = function() {
	window.setInterval(
		function() {
			let time = new Date();
			let timeSec = 6 * time.getSeconds();
			let timeMin = 6 * (time.getMinutes() + (1/60) * time.getSeconds());
			let timeHour = 30 * (time.getHours() + (1/60) * time.getMinutes());

			arrowSecond.style.transform = 'translate(-50%, -100%) rotate('+timeSec+'deg)';
			arrowMinute.style.transform = 'translate(-50%, -100%) rotate('+timeMin+'deg)';
			arrowHour.style.transform = 'translate(-50%, -100%) rotate('+timeHour+'deg)';
			spanDate.textContent = time.toLocaleDateString();

		}

	, 1000);
}

/* ======================================================== */

let topicFirst = document.querySelector('.topic-info__first');
let topicSecond = document.querySelector('.topic-info__second');
let topicThird = document.querySelector('.topic-info__third');
let topicInfo = document.querySelector('.topic-info');
let articleFirst = document.querySelector('.article-info__first');
let articleSecond = document.querySelector('.article-info__second');
let articleThird = document.querySelector('.article-info__third');

console.log(topicInfo);

document.addEventListener('click', event => {
	if (event.target.classList.contains('topic-info__first') || event.target.classList.contains('topic-info__second') || event.target.classList.contains('topic-info__third')) {
		// topicFirst.classList.remove('_selected');
		// topicSecond.classList.remove('_selected');
		// topicThird.classList.remove('_selected');

		let children = topicInfo.children;
		for (var i = 0; i < children.length; ++i) {
				children[i].classList.remove('_selected');
		}
		
		event.target.classList.add('_selected');
	}
	if (event.target.classList.contains('topic-info__first')) {
		articleSecond.style = 'display: none';
		articleThird.style = 'display: none';
		articleFirst.style = 'display: block';
	}
	if (event.target.classList.contains('topic-info__second')) {
		articleFirst.style = 'display: none';
		articleThird.style = 'display: none';
		articleSecond.style = 'display: block';
	}
	if (event.target.classList.contains('topic-info__third')) {
		articleFirst.style = 'display: none';
		articleSecond.style = 'display: none';
		articleThird.style = 'display: block';
	}
})
