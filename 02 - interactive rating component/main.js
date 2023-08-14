const ratingBlock = document.querySelector('#rating-block');
const thanksBlock = document.querySelector('#thanks-block');

const submitBtn = document.querySelector('#submit-btn');
const scoreSpan = document.querySelector('#score');

let rating = 0;
let hoverValue = 0;

const notes = document.querySelectorAll('.note');

notes.forEach(note => {
	note.addEventListener('click', () => {
		rating = parseInt(note.innerHTML);

		notes.forEach((note, index) => {
			note.classList.remove('note-active');
			note.classList.remove('note-hovered');

			if (index < rating) {
				note.classList.add('note-active');
			}
		});
		
		note.classList.add('note-active');
	});

	note.addEventListener('mouseover', () => {
		hoverValue = parseInt(note.innerHTML);

		notes.forEach((note, index) => {
			note.classList.remove('note-hovered');

			if (index < hoverValue) {
				note.classList.add('note-hovered');
			}
		});
		
		note.classList.add('note-hovered');
	});

	note.addEventListener('mouseout', () => {
		notes.forEach(note => {
			note.classList.remove('note-hovered');
		});
	});
});

thanksBlock.classList.add('hidden');

submitBtn.addEventListener('click', () => {
	ratingBlock.classList.add('hidden');
	thanksBlock.classList.remove('hidden');

	scoreSpan.innerHTML = rating;
});